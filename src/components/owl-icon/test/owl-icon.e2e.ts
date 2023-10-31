import { newE2EPage } from '@stencil/core/testing';

describe('owl-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<owl-icon></owl-icon>');

    const element = await page.find('owl-icon');
    expect(element).toHaveClass('hydrated');
  });
});
