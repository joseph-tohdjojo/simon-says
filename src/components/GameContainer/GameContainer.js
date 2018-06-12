import React from 'react'

import s from './GameContainer.scss'
import SimonButton from '../SimonButton/SimonButton'
import SimonControl from '../SimonControl/SimonControl'

class GameContainer extends React.Component {
  state = {
    activeButton: 0,
    playing: false,
    strict: false,
    turn: null,
    computersMoves: [],
    playersMoves: [],
  }

  startPlaying = e => {
    e.preventDefault()
    if (!this.state.playing) {
      this.setState({ playing: true, turn: 'Computer' })
      setTimeout(this.setComputersNextMove, 500)
    }
  }

  setComputersNextMove = () =>
    this.setState(
      ({ computersMoves }) => ({
        computersMoves: [...computersMoves, Math.floor(Math.random() * 4) + 1],
      }),
      () => this.playComputersMoves(),
    )

  setPlayersMove = position => e =>
    this.setState(({ playersMoves }) => ({
      playersMoves: [...playersMoves, position],
    }))

  playComputersMoves = () => {
    const promises = this.state.computersMoves.map(
      (move, i) =>
        new Promise((resolve, reject) =>
          this.setState({ activeButton: move }, () =>
            setTimeout(resolve, (i + 1) * 500),
          ),
        ),
    )

    Promise.all(promises).then(r => this.setTurn('Player'))
  }

  setTurn = turn =>
    this.setState({ activeButton: 0, turn }, () => {
      if (turn === 'Computer') {
        console.log(turn)
        this.setComputersNextMove()
      }
    })

  handleSimonButtonClick = position => e => {
    const { computersMoves, playersMoves, playing, turn } = this.state
    if (playing && turn === 'Player') {
      this.setState({ playersMoves: [...playersMoves, position] }, () =>
        this.something(),
      )
    }
  }

  something = () => {
    const { computersMoves, playersMoves } = this.state
    if (
      computersMoves[computersMoves.length - 1] !==
      playersMoves[playersMoves.length - 1]
    ) {
      console.log('Incorrect')
    } else {
      console.log('Correct')
    }
    if (computersMoves.length === playersMoves.length) {
      this.setTurn('Computer')
    }
  }

  render() {
    const { activeButton, computersMoves, playing, strict } = this.state

    return (
      <div className={s.wrapper}>
        <SimonControl
          count={computersMoves.length}
          startPlaying={this.startPlaying}
          isPlaying={playing}
          isStrict={strict}
        />
        <SimonButton
          activeButton={activeButton}
          disabled={this.state.turn !== 'Player'}
          onClick={this.handleSimonButtonClick(1)}
          position={1}
        />
        <SimonButton
          activeButton={activeButton}
          disabled={this.state.turn !== 'Player'}
          onClick={this.handleSimonButtonClick(2)}
          position={2}
        />
        <SimonButton
          activeButton={activeButton}
          disabled={this.state.turn !== 'Player'}
          onClick={this.handleSimonButtonClick(3)}
          position={3}
        />
        <SimonButton
          activeButton={activeButton}
          disabled={this.state.turn !== 'Player'}
          onClick={this.handleSimonButtonClick(4)}
          position={4}
        />
      </div>
    )
  }
}

export default GameContainer
