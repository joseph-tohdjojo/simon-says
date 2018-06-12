import React from 'react'

import s from './SimonButton.scss'

class SimonButton extends React.Component {
  render() {
    const { activeButton, disabled, onClick, position } = this.props
    const colors = ['green', 'red', 'yellow', 'blue']
    return (
      <button
        className={`${s.wrapper} ${s[colors[position - 1]]} ${
          activeButton === position ? s.active : ''
        }`}
        disabled={disabled}
        onClick={onClick}
      />
    )
  }
}

export default SimonButton
