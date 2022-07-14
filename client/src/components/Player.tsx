import React, { FC, useEffect } from 'react'
import { Grid, IconButton } from '../../node_modules/@mui/material/index'
import { PlayArrow, Pause, VolumeUp } from '../../node_modules/@mui/icons-material/index'

import styles from './Player.module.scss'
import { ITrack } from '../../types/track'
import TrackProgress from './TrackProgress'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

let audio;

const Player:FC = () => {
  const  {active, currentTime, duration, pause, volume} = useTypedSelector(state => state.player)
  const {pauseTrack, playTrack,setActiveTrack, setCurrentTime, setVolume, setDuration} = useActions()

  useEffect(() => {
    if(!audio) {
      audio = new Audio()
    } else {
      setAudio()
      play()
    }
  }, [active])

  const setAudio = () => {
    if(active) {
      audio.src = active.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
    }
  } 

  const play = () => {
    if(pause) {
      playTrack()
      audio.play()
    } else {
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  if(!active) {
    return null
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause /> }
      </IconButton>
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <div>{active?.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} audio={true} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  )
}

export default Player