import gamesData from './gamesData'

let defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

export default function(state=defaultState, action) {
  switch(action.type) {
    case('SELECT_PLAYER'):
      return {
        ...state,
        selectedPlayer: action.payload
      }
    default:
      return state
  }
}
