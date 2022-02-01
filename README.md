<p align="center">
  <a href="http://github.com/grubbeIO/gbb-ui">
    <img alt="grubbe-ui" height="75" src="https://firebasestorage.googleapis.com/v0/b/grubbeio.appspot.com/o/img%2Fgbbui_icon.svg?alt=media&token=4b94c5f3-bece-428f-9009-2aff60af4f3d">
  </a>
</p>

<h1 align="center">grubbe UI</h1>

<div align="center">

[![React version](https://img.shields.io/badge/React-^17.0.0-blue.svg?style=flat&logo=react)](https://github.com/grubbeIO/ui)
[![Current Version gbb](https://img.shields.io/badge/Current_Version-v0.1.X-success?style=flat&logo=html)](https://grubbe.io/ui)
[![Next Version gbb](https://img.shields.io/badge/Next_Version-v0.2.0-inactive?style=flat&logo=jira)](https://grubbe.io/ui)

</div>

<!-- BASE EJEMPLO: https://antd-admin.zuiidea.com/dashboard -->

- Preview - [https://grubbe.io/ui](https://grubbe.io)
- Documentation - [https://doc.grubbe.io/ui](https://grubbe.io)
- FAQ - [https://grubbe.io/ui/#/faq](https://grubbe.io)
- ChangeLog - [https://grubbe.io/ui/#/change-log](https://grubbe.io)

# Get Started

GbbUI is a reusable component library that helps grubbe developers build UIs faster.
The goal is to make building durable UIs more productive and satisfying.

## Install

Add gbbUI to your project.

```sh
npm install --save @grubbe/ui
# or
yarn add @grubbe/ui
```

## Usage

Import global styles into the index (.js | .ts)

```js
import { global as gbbUI } from "@grubbe/ui";
const { GlobalStyle } = gbbUI

...
// Inside of ReactDOM

<GlobalStyle />
```
adding <code>@grubbe/ui</code> you can import a gbb component to any file
```js
// App.js
import "./App.css";
import { H1, Button } from "@grubbe/ui";

function App() {
  return (
    <div className="App">
        <H1>Hello grubbe!</H1>
        <Button>Press here...</Button>
    </div>
  );
}

export default App;
```

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | 
|IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions