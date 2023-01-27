import { Notification } from 'core/services/notification'
import { render } from '@testing-library/react'

describe('notification', () => {
  test('render component notification', () => {
    const { container } = render(Notification())
    expect(container.firstChild).toHaveClass('notification')
  })
})
