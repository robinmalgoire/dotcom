import { render, screen } from 'utils/testing-library'
import Box from './Box'

describe('<Box />', () => {
  it('whatever', () => {
    render(<Box>hello</Box>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })
})
