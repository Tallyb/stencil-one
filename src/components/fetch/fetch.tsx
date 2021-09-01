import { Component, h, JSX,  Prop, Watch } from '@stencil/core';

@Component({
  tag: 'my-fetch',
  styleUrl: 'fetch.css'
})
export class MyFetchComponent {

    @Prop() language!: string;

    @Watch('language')
    async onLanguageChange() {
      if (this.language) {
        return fetch('./assets/i18n/' + this.language + '.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('HTTP error ' + response.status);
            }
            return response.json();
          })
          .then(json => {
            console.log('JSON', json);
          });
      }
    }
    componentWillLoad() {
      if (this.language) {
        this.onLanguageChange();
      }
    }

    render(): JSX.Element {
      return <slot></slot>;
    }
}
