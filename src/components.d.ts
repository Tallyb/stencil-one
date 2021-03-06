/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyBasic {
        "first": string;
        "last": string;
    }
    interface MyComplexProp {
        "values": Array<string>;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        "updateFace": (value: string) => Promise<string>;
    }
    interface MyEvent {
        "updateFace": (value: string) => Promise<string>;
    }
    interface MyFetch {
        "language": string;
    }
    interface MyHost {
        "values": Array<string>;
    }
    interface MyInput {
        "header": string;
    }
    interface MyInstance {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MySlot {
        "values": Array<string>;
    }
}
declare global {
    interface HTMLMyBasicElement extends Components.MyBasic, HTMLStencilElement {
    }
    var HTMLMyBasicElement: {
        prototype: HTMLMyBasicElement;
        new (): HTMLMyBasicElement;
    };
    interface HTMLMyComplexPropElement extends Components.MyComplexProp, HTMLStencilElement {
    }
    var HTMLMyComplexPropElement: {
        prototype: HTMLMyComplexPropElement;
        new (): HTMLMyComplexPropElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyEventElement extends Components.MyEvent, HTMLStencilElement {
    }
    var HTMLMyEventElement: {
        prototype: HTMLMyEventElement;
        new (): HTMLMyEventElement;
    };
    interface HTMLMyFetchElement extends Components.MyFetch, HTMLStencilElement {
    }
    var HTMLMyFetchElement: {
        prototype: HTMLMyFetchElement;
        new (): HTMLMyFetchElement;
    };
    interface HTMLMyHostElement extends Components.MyHost, HTMLStencilElement {
    }
    var HTMLMyHostElement: {
        prototype: HTMLMyHostElement;
        new (): HTMLMyHostElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyInstanceElement extends Components.MyInstance, HTMLStencilElement {
    }
    var HTMLMyInstanceElement: {
        prototype: HTMLMyInstanceElement;
        new (): HTMLMyInstanceElement;
    };
    interface HTMLMySlotElement extends Components.MySlot, HTMLStencilElement {
    }
    var HTMLMySlotElement: {
        prototype: HTMLMySlotElement;
        new (): HTMLMySlotElement;
    };
    interface HTMLElementTagNameMap {
        "my-basic": HTMLMyBasicElement;
        "my-complex-prop": HTMLMyComplexPropElement;
        "my-component": HTMLMyComponentElement;
        "my-event": HTMLMyEventElement;
        "my-fetch": HTMLMyFetchElement;
        "my-host": HTMLMyHostElement;
        "my-input": HTMLMyInputElement;
        "my-instance": HTMLMyInstanceElement;
        "my-slot": HTMLMySlotElement;
    }
}
declare namespace LocalJSX {
    interface MyBasic {
        "first"?: string;
        "last"?: string;
    }
    interface MyComplexProp {
        "values"?: Array<string>;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        "onButtonClicked"?: (event: CustomEvent<string>) => void;
    }
    interface MyEvent {
        "onButtonClicked"?: (event: CustomEvent<string>) => void;
    }
    interface MyFetch {
        "language"?: string;
    }
    interface MyHost {
        "values"?: Array<string>;
    }
    interface MyInput {
        "header"?: string;
        "onThisHappened"?: (event: CustomEvent<any>) => void;
    }
    interface MyInstance {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MySlot {
        "values"?: Array<string>;
    }
    interface IntrinsicElements {
        "my-basic": MyBasic;
        "my-complex-prop": MyComplexProp;
        "my-component": MyComponent;
        "my-event": MyEvent;
        "my-fetch": MyFetch;
        "my-host": MyHost;
        "my-input": MyInput;
        "my-instance": MyInstance;
        "my-slot": MySlot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-basic": LocalJSX.MyBasic & JSXBase.HTMLAttributes<HTMLMyBasicElement>;
            "my-complex-prop": LocalJSX.MyComplexProp & JSXBase.HTMLAttributes<HTMLMyComplexPropElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-event": LocalJSX.MyEvent & JSXBase.HTMLAttributes<HTMLMyEventElement>;
            "my-fetch": LocalJSX.MyFetch & JSXBase.HTMLAttributes<HTMLMyFetchElement>;
            "my-host": LocalJSX.MyHost & JSXBase.HTMLAttributes<HTMLMyHostElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-instance": LocalJSX.MyInstance & JSXBase.HTMLAttributes<HTMLMyInstanceElement>;
            "my-slot": LocalJSX.MySlot & JSXBase.HTMLAttributes<HTMLMySlotElement>;
        }
    }
}
