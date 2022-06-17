import { render } from '@testing-library/react';
import Card from 'core/components/card';

test('renders card title and children', () => {
  const { getByText, getByRole } = render(
    <Card title='test' id='teste'>
      <h3>teste h3</h3>
    </Card>
  );

  expect(getByText('test')).toBeTruthy();
  expect(getByRole('heading', { name: /teste h3/i })).toBeTruthy();
});
