#!/usr/bin/env bash

npm install --global yarn
npm --prefix 1-pure-html install && npm --prefix 1-pure-html run build
yarn --cwd 2-pure-spa install && yarn --cwd 2-pure-spa build
npm --prefix 3-ssg-gatsby install && npm --prefix 3-ssg-gatsby run build
npm --prefix 4-ssr-next install --production=false && npm --prefix 4-ssr-next run build
npm --prefix 5-dynamic-rendering install --production=false && npm --prefix 5-dynamic-rendering run build
