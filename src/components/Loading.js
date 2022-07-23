import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
    content: {
        fontSize: '100%',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '1rem',
        textAlign: 'center',
        textTransform: ' capitalize'/* uppercase */
    }
}

export default class Loading extends Component {
    constructor(props) {
        super(props)      
        
        // Loading
        // Loading.
        // Loading..
        // Loading...
        // Loading
        // Loading.
        // Loading..
        // Loading...

        this.state = {
            content: props.text
        }
    }
    componentDidMount () {
        const { speed, text } = this.props
        this.interval = window.setInterval(() => {
            console.log('LOADING');
            this.state.content === text + '...' 
            ? this.setState({ content: text }) 
            : this.setState(({ content }) => ({content: content + '.' }))
        }, speed)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval)
    }
  render() {
    return (
      <p style={styles.content}>{this.state.content}</p>
    )
  }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}
