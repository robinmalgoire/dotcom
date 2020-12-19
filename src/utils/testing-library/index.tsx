import type { ComponentChild } from 'preact'
import { render } from '@testing-library/preact'

const Providers = ({ children }) => children

const customRender = (ui: ComponentChild, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/preact'
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
