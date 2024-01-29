# jeasx-website

This repository provides the website for [jeasx](https://github.com/jeasx/jeasx).

It provides an example how to integrate `SASS/SCSS` into your jeasx project:

- `npm i sass`

- Add npm-task to your package.json: `"scss": "sass src/browser/scss/main.scss:src/browser/scss/main.css --no-source-map"`

- Create `ecosystem.config.cjs` which inherits the defaults and add watcher for npm-task.

```js
module.exports = {
  apps: [
    ...require("jeasx/ecosystem.config.cjs").apps,
    {
      name: "build:scss",
      script: "npm run scss -- --update --watch",
      autorestart: false,
    },
  ],
};
```
