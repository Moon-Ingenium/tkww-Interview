# Notes
Things I've noticed about the repo/codebase that needs to be changed, improved or questioned.

## Issues
* Dependencies on @testing-library/* but not used in the repo?
  NOTE: *Could this be part of react-scripts I just not know it? *

```json
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
  }
```

* `Image` component is not used in the `App` component or any other source code file.

* Removed reference to the `reportWebVitals` module/function that is included in `create-react-app` by default?

* If app is not a progressive web app (PWA), then removal of the `manifest.json` file is suggested 

* App.css was removed as it was not used in the repo at all and was part of the default `create-react-app` scaffolding

* added dependency for `dotenv` for configuration files to store "magic strings" like the URL to the endpoint to get products
```sh
$ npm i dotenv
```

```js
import { config } from 'dotenv
config()
const { ... } = process.env
```