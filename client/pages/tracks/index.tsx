import React, { FC, useEffect } from 'react'
import MainLayout from '../../src/layout/MainLayout'
import {Grid, Button, Card, Box} from '../../node_modules/@mui/material/index'
import { useRouter } from '../../node_modules/next/router'
import TrackList from '../../src/components/TrackList'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../../store'
import { fetchTracks } from '../../store/action-creators/track'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const Index:FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const {error, tracks} = useTypedSelector(state => state.tracks)

  if(error) {
    return <MainLayout>
      <h1>{error}</h1>
    </MainLayout>
  }

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: 900}}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Треки</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index;