import React, { /* Component */ } from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'
// import withHover from './withHover'

const styles = {
    container: {
      position: 'relative',
      display: 'flex'
    },
    tooltip: {
      boxSizing: 'border-box',
      position: 'absolute',
      width: '8.5rem',
      bottom: '1005',
      left: '50%',
      marginLeft: '-3.5rem',
      borderRadius: '.2rem',
      backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
      padding: '.5rem',
      marginBottom: '.4rem',
      color: '#fff',
      textAlign: 'center',
      fontSize: '.9rem',
      textTransform: 'capitalize'
    }
  }
  

// class ToolTip extends Component {
    
//   render() {
//     const { hovering } = this.state
//     const { text, children } = this.props

//     return (
//         <div 
//             onMouseOver={this.mouseOver}
//             onMouseOut={this.mouseOut} 
//             style={styles.container}
//         >
//             {hovering === true && <div style={styles.tooltip}>{text}</div>}
//             {children}
//         </div>
//     )
//   }
// }

// Solving the problem we had with withHover component which was name inclusion
function ToolTip({ text, children }) {
  return (
    <Hover>
    {( hovering ) => (
      <div style={styles.container} >
        {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
      </div>
    )}
    </Hover>
    
  )
}


ToolTip.propTypes = {
    text: PropTypes.string.isRequired,
}

ToolTip.defaultProp = {
    text: 'User\'s '
}

// export default withHover(ToolTip, 'hovering');
export default ToolTip
