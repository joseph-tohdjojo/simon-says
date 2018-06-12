import React from 'react'

import s from './ControlButton.scss'

const ControlButton = ({ action, active, text }) => (
  <div className={s.wrapper}>
    <div className={`${s.light} ${active && s.active}`} />
    <button
      className={`${s.button} ${active && s.active}`}
      type="button"
      onClick={action}
    />
    <p className={s.text}>{text}</p>
  </div>
)

export default ControlButton
