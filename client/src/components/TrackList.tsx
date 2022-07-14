import { FC, useEffect } from 'react'
import { ITrack } from '../../types/track'
import {Grid, Button, Card, Box} from '../../node_modules/@mui/material/index'
import TrackItem from './TrackItem'
import axios from 'axios'

interface TrackListProps {
  tracks: ITrack[]
}

const TrackList:FC<TrackListProps> = ({tracks}) => {
  return (
    <Grid container direction='column'>
      <Box p={2}>
        {tracks.map(track => <TrackItem key={track._id} track={track} />)}
      </Box>
    </Grid>
  )
}

export default TrackList