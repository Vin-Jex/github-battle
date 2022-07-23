import React, { Component, Fragment } from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle } from 'react-icons/fa'
import PropTypes from 'prop-types'  
import Result from './Result'

function Instructions () {
    return (
        <div className='instructions-container'>
            <h1 className="center-text header-lg">Instructions</h1>
            <ul className="container-sm grid center-text battle-instructions">
                <li>
                    <h3 className="header-sm">
                        Enter two github users
                    </h3>
                    <FaUserFriends className="bg-light" color='#ffbf74' size={140}/>                   
                </li>
                <li>
                    <h3 className="header-sm">
                        Battle
                    </h3>
                    <FaFighterJet className="bg-light" color='#727272' size={140} />
                </li>
                <li>
                    <h3 className="header-sm">
                        See Winners
                    </h3>
                    <FaTrophy className="bg-light" color='#ffd700' size={140} />
                </li>
            </ul>
        </div>
    )
}

class PlayerInput extends Component {
    constructor( props ) {
        super(props)

        this.state = {
            username: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange =  this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()

        this.props.onSubmit(this.state.username)
    }

    render() {
        return (
            <form className="column player" onSubmit={this.handleSubmit}>

                <label htmlFor="username" className="player-label">
                    {this.props.label}
                </label>
                <div className="row player-inputs sy">
                    <input 
                        type="text"
                        id='username'
                        className='input-light'
                        placeholder='github-username'
                        autoComplete='off'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button
                        className='btn btn-dark'
                        type='🇸ubmit'
                        disabled={!this.state.username}>
                        Submit
                    </button>
                </div>
            </form>
        )
        
    }
}

PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

function PlayerPreview ({ username, onReset, label }) {
    return (
        <div className="column player width">
            <h3 className="player-label">{label}</h3>
            <div className="row bg-light flex width-1">
                <div className="player-info">
                    <img 
                        src={`https://github.com/${username}.png?size=180`} 
                        alt={`Avatar for ${username}`} 
                        className="avatar-small" 
                    />
                    <a 
                        href={`https://github.com/${username}`}
                        className='link' >
                            {username}
                    </a>
                    
                </div>
                <button 
                    type='button'
                    className='btn btn-clear flex-center'
                    onClick={onReset}
                    >
                    <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
                </button>    
            </div>
        </div>
    )
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default class Battle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOne: null,
            playerTwo: null,
            battle: false
        }
        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(id, player) {
        this.setState({
            [id]: player
        })
    }

    handleReset( id ) {
        this.setState({
            [id]: null
        })
    }
    
    
    render () {

        const { playerOne, playerTwo, battle } = this.state

        if (battle === true) {
            return (
                <Result 
                    playerOne={playerOne} 
                    playerTwo={playerTwo}
                    onReset={() => this.setState({
                        playerOne: null,
                        playerTwo: null,
                        battle: false
                    })}
                />
            )
        }   
        
    return (
      <Fragment>
        <Instructions />

        <div className="player-container">
            <h1 className="center-text header-lg">Players</h1>
            <div className="row space-around">
                {playerOne === null ?
                    <PlayerInput label='Player One'
                    onSubmit={( player ) => this.handleSubmit('playerOne', player)}
                    />
                :   <PlayerPreview 
                        username={playerOne} 
                        label='Player One' 
                        onReset={() => this.handleReset('playerOne')}
                    />
                }

                {playerTwo === null ?
                    <PlayerInput label='Player Two'
                    onSubmit={( player ) => this.handleSubmit('playerTwo', player)}
                    />
            :   <PlayerPreview 
                    username={playerTwo} 
                    label='Player Two' 
                    onReset={() => this.handleReset('playerTwo')}
                />
            }
            </div>



            {playerOne && playerTwo && (
                <button
                    className='btn btn-dark btn-space'
                    onClick={() => this.setState({battle: true})}>
                    Battle
                </button>
            )}
        </div>
        {/* <PlayerInput 
            label='Label!'
            onSubmit={(value) => console.log(value)}
        /> */}
      </Fragment>
    )
  }
}
