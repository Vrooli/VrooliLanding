#!/bin/sh

echo 'Converting shared directory to javascript'
cd ${PROJECT_DIR}/packages/shared
yarn build

cd ${PROJECT_DIR}/packages/ui && PORT=${VIRTUAL_PORT}

# Finally, start project
yarn start-${NODE_ENV}