# **Trymore**

**`Trymore` is a flexible and customizable function for handling errors It allows you to retry operations by passing a new callback to the trymore() method. The function is simple yet powerful, and can be easily integrated into your projects.**

<div align="center">
  <p>
 <a href="https://www.npmjs.com/package/trymore"><img src="https://img.shields.io/npm/v/trymore.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/trymore"><img src="https://img.shields.io/npm/dt/trymore.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
 <a href="https://github.com/4i8/trymore.git">
    <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white" alt="github"/>
  </a>
  </p>
</div>

## Table of Contents

- [type](#type)
- [Installation](#installation)
- [Example](#example)
  - [CommonJS](#commonjs)
  - [ES6](#es6)
- [License](#license)

## Type

- **ECMAScript Modules (ESM)**
- **CommonJS (CJS)**

# **Installation**

```sh-session
npm install trymore
yarn add trymore
```

# **Example**

### CommonJS

```js
const trymore = require("trymore").default;
trymore(() => {
  //just to throw an error
  console.log(focus());
  [].toErrorTestTest();
  throw new Error("Test");
})
  .trymore(() => {
    console.log("success"); //stop here because no error, game over
  })
  .trymore(() => {
    throw new Error("Any Error"); //disregard this because the second trymore is already success
  });
```

### ES6

```js
import trymore from "trymore";
trymore(() => {
  //just to throw an error
  console.log(focus());
  [].toErrorTestTest();
  throw new Error("Test");
})
  .trymore(() => {
    console.log("success"); //stop here because no error, game over
  })
  .trymore(() => {
    throw new Error("Any Error"); //disregard this because the second trymore is already success
  });
```

# License

trymore is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)

</p>
