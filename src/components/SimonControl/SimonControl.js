import React from 'react'

import s from './SimonControl.scss'
import ControlButton from '../ControlButton/ControlButton'
import ControlCount from '../ControlCount/ControlCount'

class SimonControl extends React.Component {
  render() {
    const { count, startPlaying, isPlaying, isStrict } = this.props

    return (
      <div className={s.wrapper}>
        <ControlCount count={count} text="COUNT" />
        <ControlButton text="START" action={startPlaying} active={isPlaying} />
        <ControlButton text="STRICT" active={isStrict} />
      </div>
    )
  }
}

export default SimonControl
