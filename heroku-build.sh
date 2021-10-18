#!/usr/bin/env bash

#npm install --global yarn
#npm --prefix 1-pure-html install && npm --prefix 1-pure-html build
#yarn --cwd 2-pure-spa install && yarn --cwd 2-pure-spa build
npm --prefix 3-ssg-gatsby install
npm --verbose --prefix 3-ssg-gatsby build
#npm --prefix 4-ssr-next install && npm --prefix 4-ssr-next build
#npm --prefix 5-dynamic-rendering install && npm --prefix 5-dynamic-rendering build
