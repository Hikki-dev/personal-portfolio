/// <reference types="astro/client" />

declare global {
  namespace JSX {
    type Element = astroHTML.JSX.Element;
    type IntrinsicElements = astroHTML.JSX.IntrinsicElements;
    
    interface IntrinsicElements {
      [name: string]: any;
    }
  }
}

declare namespace astroHTML.JSX {
  type Element = any;
  interface IntrinsicElements {
    [name: string]: any;
  }
}