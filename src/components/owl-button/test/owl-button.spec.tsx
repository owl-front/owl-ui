import { newSpecPage } from '@stencil/core/testing';
import { OwlButton } from '../owl-button';

describe('owl-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OwlButton],
      html: `<owl-button></owl-button>`,
    });
    expect(page.root).toEqualHtml(`
      <owl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </owl-button>
    `);
  });
});
