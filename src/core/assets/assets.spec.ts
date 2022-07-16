import { images } from './';

describe('assets', () => {
  test('images', () => {
    expect(images.logo === 'logo.svg').toBeTruthy();
  });
});
