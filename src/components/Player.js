import React from 'react'
import { selectPlayer } from '../action'
import { connect } from 'react-redux'

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

let mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => {dispatch(selectPlayer(player))}
  }
}

export default connect(null, mapDispatchToProps)(Player)
