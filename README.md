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

## Differences with official with-typescript-eslint-jest

Vercel made an official similar example template: https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest

Main differences are:

- ESLint and Prettier are integrated with VSCode to fix and format code on save (you need eslint and prettier VSCode plugins)
- Improved lint-staged configuration: linting will only happen on staged files, not all file
- TypeScript types are checked before each commit, not just on `git push`.
- Uses latest Husky (v7)
- You can build it yourself by [reading the blog post](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js) :-)
