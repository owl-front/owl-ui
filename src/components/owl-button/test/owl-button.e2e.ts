import { newE2EPage } from '@stencil/core/testing';

describe('owl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<owl-button></owl-button>');

    const element = await page.find('owl-button');
    expect(element).toHaveClass('hydrated');
  });
});
