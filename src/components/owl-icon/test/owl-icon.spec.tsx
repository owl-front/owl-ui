import { newSpecPage } from '@stencil/core/testing';
import { OwlIcon } from '../owl-icon';

describe('owl-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OwlIcon],
      html: `<owl-icon></owl-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <owl-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </owl-icon>
    `);
  });
});
