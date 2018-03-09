import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'

class App extends Component {

  handleSelectPlayer = (player) => {
    this.setState({
      selectedPlayer: player
    })
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList teams={this.props.teams} selectPlayer={this.handleSelectPlayer}/>
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails selectedPlayer={this.props.selectedPlayer}/>}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    teams: state.teams,
    selectedPlayer: state.selectedPlayer
  }
}

export default connect(mapStateToProps)(App);
