import React, { FC } from 'react'

import styles from './MainPage.module.scss'

const MainPage:FC = () => {
  return (
    <div className={styles.center}>
      <h1>Добро пожаловать</h1>
      <h3>Здесь собраны лучшие треки</h3>
    </div>
  )
}

export default MainPage