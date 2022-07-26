import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { fetchPopularRepos } from '../utils/api'
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa'
import Cards from './Cards';
import Loading from './Loading';
import ToolTip from './ToolTip';


/******__________________________________******/
function LanguagesNav({selected, onUpdateLanguage}) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='flex-center'>
        {languages.map( (language) => (
          
            <li key={language}>
                <button 
                onClick={ () => onUpdateLanguage(language)}   className='btn btn-clear nav-link'
                style={language === selected ? {color: 'rgb(187, 46, 31'} : null }>
                    {language}
                </button>
            </li>
        ))}
      </ul>
    )
}



LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
}



function ReposGrid({repos}) {
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index) => {
        const { /* name, */ owner, html_url, stargazers_count, forks, open_issues } = repo
        const { login, avatar_url} = owner

    return (
      <li key={html_url} >
        <Cards
          header={`#${index + 1}`}
          avatar={avatar_url}
          href={html_url}
          name={login} >

            <ul className='card-list'>
                <li>
                  <ToolTip text="Github Username">
                    <FaUser color='rgb(255, 191, 116)' size={22}/> 
                    <a href={`https://github.com/${login}`}>
                      {login}
                    </a>
                  </ToolTip>
                </li>
                <li>
                  <FaStar color='rgb(255, 215, 0)' size={22} />
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color='rgb(241, 136, 147)' size={22} />
                  {open_issues.toLocaleString()} open
                </li>
              </ul>            
        </Cards>

      

          </li>
        )
      })}

    </ul>
  )
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
}




export default class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: {},
      error: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }


  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }


  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
    })


    if(!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage) 
        .then(( data ) => {
          this.setState(({ repos }) => ({
            repos: {
                repos,
                [selectedLanguage]:data
            }
          }))
        })
        .catch(() => {
          console.warn('❗ Error fetching repos ', this.error);

          this.setState({
            error: '❗ There was an error fetching the repositories.'
          })
        })
        
      }
    }
    


  isLoading() {
    const { selectedLanguage, repos, error} = this.state

    return !repos[selectedLanguage] && error === null
  }

  render() {
    const { selectedLanguage, repos, error } = this.state
    return (
      <Fragment>
        <LanguagesNav 
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        
        
        {this.isLoading() && <Loading text='fetching repos' speed={500} />}

        {error && <p className='center-text error'>{error}</p>}

        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
      </Fragment>
    )
  }
}


// *************** NEW ***************************
/* function LanguagesNav ({selected, onUpdateLanguage}) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];


  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <li key={language}>
          <button 
            className='btn btn-clear nav-link'
            style={language === selected ? {color: 'rgb(187, 46, 31)'} : null}
            onClick={() => onUpdateLanguage(language)}>
              {language}
          </button>
        </li>
      ))}
    </ul>
  )
}
// *************** NEW ***************************
 */
// *************** NEW ***************************
/* export default class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }
    console.log('here', this)
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }
    render () {
      const { selectedLanguage } = this.state

      return (
        <React.Fragment>
          <LanguagesNav 
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
        </React.Fragment>
      )
    }
} */
// *************** NEW ***************************
