import React, { Component } from 'react'
import { battle } from '../utils/api'
import { FaCompass, FaBriefcase, FaCode, FaUsers, FaUser,FaUserFriends} from 'react-icons/fa'
import Cards from './Cards'

export default class Result extends Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    const { playerOne, playerTwo } = this.props

    battle([ playerOne, playerTwo ])
      .then((players) => {
      this.setState({
        winner: players[0],
        loser: players[1],
        error: null,
        loading: false
      })
    }).catch(({ message }) => {
      this.setState({
        error: message,
        loading: false
      })
    })
  }
  render() {

    const {winner, loser, error, loading} = this.state

    if(loading === true) {
      return <p>LOADING...</p>
    }

    if(error) {
      return  (
        <p className='center-text error'>❗{error}</p> 
      )
    }

    return (
      <div className='grid space-around container-sm'>
        <Cards 
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login} >

            <ul className="card-list">
              <li>
                <FaUser color='rgb(239, 115, 115)' size={22} />{winner.profile.name}
              </li>
              {winner.profile.location && (
                <li>
                  <FaCompass color='#795548' size={22}/> {winner.profile.location}
                </li>
              )}
              {winner.profile.company && (
                <li>
                  <FaBriefcase color='rgb(144, 116, 255)' size={22}/> {winner.profile.company}
                </li>
              )}
              <li>
                <FaUsers color='rgb(129, 195, 245)' size={22} />{winner.profile.followers.toLocaleString()} followers
              </li>
              <li>
                <FaUserFriends color='rgb(64, 183, 95)' size={22} />{winner.profile.following.toLocaleString()} following
              </li>
            </ul>

        </Cards>

        <Cards
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          href={loser.profile.html_url}
          name={loser.profile.login}>

          <ul className="card-list">
            <li>
              <FaUser color='rgb(239, 115, 115)' size={22} />{loser.profile.name}
            </li>
            {loser.profile.location && (
              <li>
                <FaCompass color='#795548' size={22}/> {loser.profile.location}
              </li>
            )}
            {loser.profile.company && (
              <li>
                <FaBriefcase color='rgb(144, 116, 255)' size={22}/> {loser.profile.company}
              </li>
            )}
            <li>
              <FaUsers color='rgb(129, 195, 245)' size={22} />{loser.profile.followers.toLocaleString()} followers
            </li>
            <li>
              <FaUserFriends color='rgb(64, 183, 95)' size={22} />{loser.profile.following.toLocaleString()} following
            </li>
          </ul>

        </Cards>
      </div>
    )
  }
}