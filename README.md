# jeasx-website

This repository provides the website for [jeasx](https://github.com/jeasx/jeasx).

It provides an example how to integrate `Tailwind` (same approach works for SASS/SCSS) into your jeasx project:

- `npm i tailwindcss`

- Add npm-task to your package.json: `"build:css": "tailwindcss -i ./src/browser/css/tailwind.css -o ./src/browser/index.css"`

- Create `ecosystem.config.cjs` which inherits the defaults and add a custom task for building css.

```js
module.exports = {
  apps: [
    ...require("jeasx/ecosystem.config.cjs").apps,
    {
      name: "build:css",
      script: "npm",
      args: "run build:css -- --watch",
      autorestart: false,
    },
  ],
};
```
