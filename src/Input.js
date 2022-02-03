import PropTypes from 'prop-types'
import { useState } from 'react'
const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('')

  if (success) {
    return <div data-test='component-input'></div>
  }

  return (
    <div data-test='component-input'>
      <form action='' className='from-inline'>
        <input
          type='text'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          data-test='input-box'
          value={currentGuess}
          onChange={(event) => {
            setCurrentGuess(event.target.value)
          }}
        />
        <button
          className='btn btn-primary mb2'
          data-test='submit-button'
          onClick={(event) => {
            event.preventDefault()
            //TODO: update guessedWords
            //TODO: check against secretWord and update success if needed
            setCurrentGuess('')
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool,
}

Input.defaultProps = {
  secretWord: '',
  success: false,
}

export default Input
