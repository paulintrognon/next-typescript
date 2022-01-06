# Next.js with TypeScript and ESLint

Starter code for a clean Next.js + TypeScript + ESLint project.

More info here: https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js

## Get started

```sh
# Install dependencies
yarn install

# Enable husky
yarn husky install

# Start dev server
yarn dev
```

## Features

- ESLint and Prettier are integrated with VSCode to fix and format code on save (you need eslint and prettier VSCode plugins)
- lint-staged: linting will only happen on staged files, not all file
- Latest Husky
- TypeScript types are checked before each commit
- You can build it yourself by [reading the blog post](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js) :-)
