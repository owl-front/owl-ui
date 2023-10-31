import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'owl-icon',
  styleUrl: 'owl-icon.css',
  shadow: true,
})
export class OwlIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
