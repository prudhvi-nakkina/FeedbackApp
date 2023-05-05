import React from 'react';
import propTypes from 'prop-types';

function Header(props) {
  return (
    <header>
        <div className='container'>
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

// if props not passed
Header.defaultProps = {
    text: 'Feedback'
}

Header.propTypes = {
    text: propTypes.string
}

export default Header