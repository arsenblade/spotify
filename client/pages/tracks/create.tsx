import React, { FC, useState } from 'react'
import { Button, Grid, TextField } from '../../node_modules/@mui/material/index'
import FileUpload from '../../src/components/FileUpload'
import StepWrapper from '../../src/components/StepWrapper'
import MainLayout from '../../src/layout/MainLayout'

const Create:FC = () => {

  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    if(activeStep < 2) {
      setActiveStep(prev => prev + 1)
    }
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
        <Grid container direction={'column'} style={{padding: 20, rowGap: '10px'}}>
          <TextField 
            label={'Название трека'}
          />
          <TextField 
            label={'Имя исполнителя'}
          />
          <TextField 
            label={'Слова к треку'}
            multiline
            rows={3}
          />
        </Grid>
        }

        {activeStep === 1 && 
        <FileUpload  setFile={() =>(setPicture)} accept='image/*'>
          <Button>Загрузить изображение</Button>
        </FileUpload>
        }

        {activeStep === 2 && 
        <FileUpload  setFile={() =>(setAudio)} accept='audio/*'>
          <Button>Загрузить аудио</Button>
        </FileUpload>
        }

      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep < 1} onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  )
}

export default Create