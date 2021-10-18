#!/usr/bin/env bash

npm install --global yarn
npm --prefix 1-pure-html ci && npm --prefix 1-pure-html run build
yarn --cwd 2-pure-spa ci && yarn --cwd 2-pure-spa build
npm --prefix 3-ssg-gatsby ci --production=false && npm --prefix 3-ssg-gatsby run build
npm --prefix 4-ssr-next ci --production=false && npm --prefix 4-ssr-next run build
npm --prefix 5-dynamic-rendering ci --production=false && npm --prefix 5-dynamic-rendering run build
npm --prefix 6-sveltekit ci --production=false && npm --prefix 6-sveltekit run build
npm --prefix 7-astro ci --production=false && npm --prefix 7-astro run build
