import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  //TODO: get props from shrared state
  const success = false
  const secretWord = 'party'
  const guessedWords = []
  return (
    <div data-test='component-app' className='container'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  )
}

export default App
