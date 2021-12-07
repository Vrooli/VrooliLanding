#!/bin/sh

echo 'Converting shared directory to javascript'
cd ${PROJECT_DIR}/packages/shared
yarn build

cd ${PROJECT_DIR}/packages/ui && PORT=${VIRTUAL_PORT}

# Production build extra steps
if [ "${NODE_ENV}" = "production" ]; then
    # Build project
    yarn build
fi

echo 'Starting ui'
yarn start-${NODE_ENV}