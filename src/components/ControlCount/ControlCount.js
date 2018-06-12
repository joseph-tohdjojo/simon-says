import React from 'react'

import s from './ControlCount.scss'

const ControlButton = ({ count, text }) => (
  <div className={s.wrapper}>
    <code className={s.count}>
      {count < 10 ? '00' + count : count < 100 ? '0' + count : count}
    </code>
    <p className={s.text}>{text}</p>
  </div>
)

export default ControlButton
