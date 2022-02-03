import React from 'react'
import PropTypes from 'prop-types'
/**
 * Functional React component for congratulating user
 * @function Congrats
 * @param {object} props - React props
 *
 * @returns {JSX.Element} - Rendered component (or null if the 'success' prop is false)
 */

const Congrats = ({ success }) => {
  return (
    <div data-test='component-congrats' className='alert alert-success'>
      {success && (
        <span data-test='congrats-message'>
          Congrats! You guessed the word!
        </span>
      )}
      <button onClick={() => {}}>Trigger Error</button>
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
