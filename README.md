# babel-plugin-class-display-name

Add displayName to ES6 classes

## Installation

```sh
$ npm install babel-plugin-class-display-name
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["class-display-name"]
}
```

### Via CLI

```sh
$ babel --plugins class-display-name script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["class-display-name"]
});
```
