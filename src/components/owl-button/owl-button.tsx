import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ShapeType, Size, Type } from "../../enums/button";

@Component({
  tag: "owl-button",
  styleUrl: "owl-button.less",
})
export class OwlButton {
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  @Prop() block: boolean = false;

  /**
   * 根部样式
   */
  @Prop() classNames: string = "";

  /**
   * 危险按钮
   */
  @Prop() danger: boolean = false;

  /**
   * 设置按钮失效状态
   */
  @Prop() disabled: boolean = false;

  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  @Prop() href: string = "";

  /**
   * 设置 button 原生的 type 值
   */
  @Prop() htmlType: string = "";

  /**
   * 设置按钮载入状态
   */
  @Prop() loading: boolean = false;

  /**
   * 设置按钮形状
   */
  @Prop() shape: ShapeType = ShapeType.Default;

  /**
   * 设置按钮大小
   */
  @Prop() size: Size = Size.Middle;

  /**
   * 设置按钮style
   */
  @Prop() styles: object | null = null;

  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  @Prop() target: string = "";

  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  @Prop() type: Type = Type.Default;

  /**
   * 点击事件
   */
  @Event() handleClick: EventEmitter<void>;

  render() {
    const handleClick = () => {
      if (this.disabled) return;
      this.handleClick.emit(...arguments);
    };

    return (
      <Host>
        <button
          class={{
            "owl-button": true,
            "is-block": this.block,
            [this.classNames]: true,
            "is-danger": this.danger,
            "is-primary": this.type === Type.Primary,
            "is-disabled": this.disabled,
          }}
          onClick={handleClick}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
