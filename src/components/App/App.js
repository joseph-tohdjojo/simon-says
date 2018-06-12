import React from 'react'
import jsonp from 'jsonp'

import s from './App.scss'
import GameContainer from '../GameContainer/GameContainer'

class App extends React.Component {
  render() {
    return (
      <div className={s.wrapper}>
        <GameContainer />
      </div>
    )
  }
}

export default App
