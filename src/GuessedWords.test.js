import { shallow } from 'enzyme'
import GuessedWords from './GuessedWords'
import { checkProps, findByTestAttr } from '../test/testUtils'

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
  ],
}

/**
 * Factory function to create a shallowWrapper for the GuessedWord component.
 * @param {object} props - Component props specific to this component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('renders without any error', () => {
  const wrapper = setup()
})

test('does not throw warning with default props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => (wrapper = setup({ guessedWords: [] })))

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text()).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  let wrapper
  const guessedWords = [
    { guessedWord: 'agile', letterMatchCount: 3 },
    { guessedWord: 'jest', letterMatchCount: 2 },
    { guessedWord: 'enzyme', letterMatchCount: 1 },
  ]
  beforeAll(() => (wrapper = setup({ guessedWords })))

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.exists()).toBe(true)
  })

  test('renders "guessed words" section', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordNode.length).toBe(1)
  })

  test('correct number of guessed words', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordNode.length).toBe(guessedWords.length)
  })
})
