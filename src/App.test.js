import { mount } from 'enzyme'
import App from './App'
import { findByTestAttr } from '../test/testUtils'

// activate global mock to make getSecretWord doesn't make network call
jest.mock('./actions')
import { getSecretWord as mockGetSecretWord } from './actions'

/**
 * Setup function for App component
 * @param {object} props Props for controlling the component
 * @returns {ShallowWrapper}
 */
const setup = (props) => mount(<App />) //using mount because shallow doesn't trigger useEffect

test('renders without error', () => {
  const wrapper = setup()
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app.length).toBe(1)
})

describe('get secret word', () => {
  beforeEach(() => {
    //clear the mock calls from previous tests
    mockGetSecretWord.mockClear()
  })
  test('getSecretWord on app mount', () => {
    const wrapper = setup()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear()

    //using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254

    wrapper.setProps()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
})
