#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'mods.frankkulak.com' > CNAME

git init
git add -A
git commit -m 'Deploy.'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:frankkulak/mods-web.git gh-pages

cd -