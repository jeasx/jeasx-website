# Jeasx website repository

This repository provides the website for [Jeasx](https://github.com/jeasx/jeasx).

- It provides an example how to integrate `Tailwind` (similar approach works for SASS/SCSS) into your Jeasx project:

- `npm i --save-dev @tailwindcss/cli tailwindcss concurrently`

- Add a new npm-task to your package.json: `"css": "npx @tailwindcss/cli -i ./src/browser/tailwind/tailwind.css -o ./src/browser/tailwind/output.css"`

- Change the existing npm-task for "dev" to: `"dev": "concurrently -c auto -n dev,css 'jeasx dev' 'npm:css -- --watch'"`
