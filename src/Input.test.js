import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import Input from './Input'

// const mockSetCurrentGuess = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }))

const defaultProps = {
  secretWord: '',
  success: false,
}
/**
 * Setup function for app component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Input {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'component-input')
  expect(inputComponent.length).toBe(1)
})

test('renders without error with default props', () => {
  checkProps(Input, defaultProps)
})

describe('renders', () => {
  describe('success is true', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({ success: true })
    })
    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1)
    })
    test('input box show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)
    })
    test('submit button show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
    })
  })

  describe('success if false', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({ success: false })
    })
    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1)
    })
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(true)
    })
    test('submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(true)
    })
  })
})

describe('state controlled input field', () => {
  const mockSetCurrentGuess = jest.fn()
  let wrapper
  let originalUseState
  beforeAll(() => {
    mockSetCurrentGuess.mockClear()
    originalUseState = React.useState
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup()
  })

  afterEach(() => {
    React.useState = originalUseState
  })

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('field is cleared when submit button is clicked', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    const mockEvent = { preventDefault: () => {} }
    submitButton.simulate('click', mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})
