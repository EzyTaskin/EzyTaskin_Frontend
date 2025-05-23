# EzyTaskin Frontend

This repository contains the frontend source code for EzyTaskin.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Building

First, install the required dependencies:

```sh
npm install
```

Then, run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

To deploy the project, first export the codebase as a static website:

```sh
npm run build
```

The resulting artifact will be present in the `out` folder. This can then be hosted as static assets
by the [EzyTaskin backend server](https://github.com/EzyTaskin/EzyTaskin_Backend).
