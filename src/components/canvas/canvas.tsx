import { Component, h , JSX, Prop, Host, Element } from '@stencil/core';

@Component({
  tag: 'my-canvas'
})
export class MyCanvas {
    @Prop() src!: string;
    @Element() host!: HTMLElement;

    private canvasEl: HTMLCanvasElement | undefined;   

    onMouse(ev: any) {
      console.log('ev is: ', ev);
    }

    async initCanvas(): Promise<any> {
      const image = new Image();
      image.src = this.src;
      return new Promise<boolean>((resolve, reject) => {
        image.onload = () => {
          const { width, height } = this.host.getBoundingClientRect();
          const context = this.canvasEl?.getContext('2d');
          context?.drawImage(image, 0, 0, width, height); 
          resolve(true);
        };
        image.onerror = () => reject();
      });
    }

    async componentDidRender() {
      console.log('Rendered');
      await this.initCanvas();
    }

    render(): JSX.Element {
      return <Host>
        <canvas ref={(el) => (this.canvasEl = el as HTMLCanvasElement)}
          onTouchStart={(ev) => this.onMouse(ev)}
          onTouchEnd={(ev) => this.onMouse(ev)}
        ></canvas>
      </Host>;
    }
}