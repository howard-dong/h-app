import React from 'react'
import PropTypes from 'prop-types'
import './Body.css'

const Body = props => {
  return (
    <div className='body'>
      {props.content}
    </div>
  )
}

Body.propTypes = {
  content: PropTypes.element
}

export default Body
