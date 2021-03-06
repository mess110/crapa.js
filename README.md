# crapa.js

Simple JS error reporting for https://json.northpole.ro

## Features

* Webpack 2 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Getting started

To create an API_KEY and SECRET:

```
crapa.register('apiKey', 'secret');
```

If you already have one:

```
crapa.init('apiKey', 'secret')
```

Both these commands will start a listener which catches all the errors
and sends them to https://json.northpole.ro

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
