import moxios from 'moxios'
import { getSecretWord } from './index'

describe('getSecreWord', () => {
  beforeEach(() => {
    moxios.install() //this will route all axios to moxios instead of http
    //if you are using an axios instance, then pass it as a parameter
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party',
      })
    })
    //update to test app in Redux / context sections
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party')
    })
  })
})
