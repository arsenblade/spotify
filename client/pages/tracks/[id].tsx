import React from 'react'
import { Button, Grid, TextField } from '../../node_modules/@mui/material/index'
import { useRouter } from '../../node_modules/next/router'
import MainLayout from '../../src/layout/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: "Исполнитель 1", text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/b5a2623f-d407-472a-8826-eb17d6a58fa8.mp3', picture: 'http://localhost:5000/image/81b198b9-9571-41c6-ab52-edd97ce72b03.jpg', comments: []}
  const router = useRouter()
  return (
    <MainLayout>
      <Button 
        variant={'outlined'}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks')}
      >
        К трекам
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} alt="" width={200} height={200} />
        <div style={{marginLeft: '30px'}}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField 
          label="Ваше имя"
          fullWidth
        />
        <TextField 
          label="Комментарий"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Отправить</Button>
      </Grid>
      <div style={{paddingBottom: '80px'}}>
        {track.comments.map(comment => 
          <div key={comment._id}>
            <div>Автор {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>)}
      </div>
    </MainLayout>
  )
}

export default TrackPage