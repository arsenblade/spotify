import React, { FC } from 'react'
import { Container } from '../../node_modules/@mui/material/index'
import Player from '../components/Player'
import NavBar from '../ui/NavBar/NavBar'

interface MainLayoutProps {
  children: React.ReactNode
}
 
const MainLayout:FC<MainLayoutProps> = ({children}) => {
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '90px'}}>
        {children}
      </Container>
      <Player />
    </>
  )
}

export default MainLayout