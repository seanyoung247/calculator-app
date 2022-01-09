#!/bin/bash
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:seanyoung247/calculator-app.git main:gh-pages
cd -