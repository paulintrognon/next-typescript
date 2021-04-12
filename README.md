# Next.js with TypeScript and ESLint

Starter code for a clean Next.js + TypeScript + ESLint project.

More info here: https://paulintrognon.fr/blog/post/typescript-prettier-eslint-next-js

## Get started

```sh
# Install dependencies
yarn

# Start dev server
yarn dev

# Start tests (or yarn test --watch for watch mode)
yarn test

# Lint (the dot is important)
yarn lint .
```


## What is the difference with official with-typescript-eslint-jest

Vercel made an official similar example template: https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest

Main differences are:

- ESLint and Prettier are integrated with VSCode out of the box (you just need VSCode's ESLint plugin).
- Prettier is integrated with ESLint, so you do not need the Prettier plugin.
- Improved lint-staged configuration: linting will only happen on staged files, not all files.
- TypeScript types are checked before each commit, not just on `git push`.
- It uses latest Husky v6 version
- You can build it yourself by [reading the blog post](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js) :-)
