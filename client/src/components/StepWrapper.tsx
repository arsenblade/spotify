import { setgroups } from 'process';
import React, { FC } from 'react'
import { Container, Stepper, Step, StepLabel, Grid, Card } from '../../node_modules/@mui/material/index';

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']

const StepWrapper:FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, idx) => 
          <Step
            key={idx}
            completed={activeStep > idx}
          >
            <StepLabel>{step}</StepLabel>
          </Step>)}
      </Stepper>
      <Grid container justifyContent="center" style={{margin: '70px 0', height: 270}}>
          <Card style={{width: 600}}>
            {children}
          </Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper