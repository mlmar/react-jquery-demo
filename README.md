# Description

This is a proof of concept for implementing React components in a non-react application.


Demo here: https://mlmar.github.io/react-jquery-demo/


## Prerequisites
- [Node Package Manager (NPM)](https://www.npmjs.com/) is needed for [Babel](https://babeljs.io/) to transpile JSX files to JS files.

## Steps
- Run `init.bat` in `/bat_scripts` to install Babel from NPM
  - This only needs to be ran the first time the project is opened.
- Run `transpile.bat` in `/bat_scripts` to transpile all JSX files in `/jsx_raw` to JS files in `/jsx_transpiled`
  - This needs to be ran every time `jsx` files change.
- Open `index.html` to view the page
  - `TestComponent` and `TestComponent2` are already included in `/index.html`

## Key Info
- The JS files in `/jsx_transpiled` should be included through `script` tags
  - Ideally this should be automated in some build process
  - `<script src="TestComponent.jx"></script>`
- [React CDN](https://reactjs.org/docs/cdn-links.html) is used to render our components included from `/jsx_transpiled`
  - ``` 
    let el2 = $('#test-component-wrapper2')[0];
    const testComponentReact2 = React.createElement(TestComponent2, {
      list: [rand(), rand(), rand(), rand(), rand()]
    });
    ReactDOM.render(testComponentReact2, el2);
    ```

## Differences from the norm
- React apps are typically served from a [webpack](https://webpack.js.org/) server for ease development
  - Hot reloading, transpiling, etc.