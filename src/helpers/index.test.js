import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'
  test('should return correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('boo', secretWord)
    expect(letterMatchCount).toBe(0)
  })
  test('should return the correct count when there are three matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })
  test('should return the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})
