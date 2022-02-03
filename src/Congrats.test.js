import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Congrats from './Congrats'
import { checkProps, findByTestAttr } from '../test/testUtils'

Enzyme.configure({ adapter: new Adapter() })

const defaultProps = { success: true }

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @param {object} props - Component props specific to setup
 * @returns wrapper - Enzyme shallow wrapper
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({ success: false })
  const congratsMessage = findByTestAttr(wrapper, 'congrats-message')
  expect(congratsMessage.exists()).toBe(false)
})

test('renders non-empty congrats message when "success" prop is true', () => {
  const wrapper = setup()
  const congratsMessage = findByTestAttr(wrapper, 'congrats-message')
  expect(congratsMessage.exists()).toBe(true)
})

test('does not throw any error with expected props', () => {
  checkProps(Congrats, { success: true })
})
