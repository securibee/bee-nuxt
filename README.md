# Dev.to + Nuxt.js = Bee Nuxt

> Note: this project was build before Nuxt.js released its build-in static content features. I'd encourage you to use that instead.

Use the Dev.to platform to blog and statically host it yourself using Nuxt.js.
To achieve this we retrieve all posts during build and store them in a json file using `https://dev.to/api/articles/me/published` endpoint.

## Setup

Set dev.to environment variable
```
DEVTO_API_KEY=secret_key
```

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
