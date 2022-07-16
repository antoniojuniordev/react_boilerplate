import { Notification, notify } from 'core/services/notification';
import { render } from '@testing-library/react';
import App from 'App';

describe('notification', () => {
  test('render component notification', () => {
    const { container } = render(Notification());
    expect(container.firstChild).toHaveClass('notification');
  });

  test('render notify', () => {
    render(Notification());
    notify.success('test');
    expect(true);
  });
});
