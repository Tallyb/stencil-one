import { Component, h, JSX,  Prop, Watch } from '@stencil/core';

@Component({
    tag: 'my-fetch',
    styleUrl: 'fetch.css'
})
export class MyFetchComponent {

    // tslint:disable-next-line:component-member-order
    @Prop() language: string;

    protected backbuttonListener;

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
        this.backbuttonListener = (e) => {
            e.preventDefault();
        };
        document.addEventListener('backbutton', this.backbuttonListener, false);

        if (this.language) {
            this.onLanguageChange();
        }
    }

    componentDidLoad() {
    }

    componentDidUnload() {
        document.removeEventListener('backbutton', this.backbuttonListener, false);
    }

    render(): JSX.Element {
        return <slot></slot>;
    }
}
