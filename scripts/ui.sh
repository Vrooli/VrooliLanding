#!/bin/sh

echo 'Converting shared directory to javascript'
cd ${PROJECT_DIR}/packages/shared
yarn build

echo 'Building ui'
cd ${PROJECT_DIR}/packages/ui && PORT=${VIRTUAL_PORT}
yarn build

echo 'Starting ui'
yarn start-${NODE_ENV}