#!/bin/sh

cd ${PROJECT_DIR}/packages/ui && PORT=${VIRTUAL_PORT}

# Finally, start project
yarn start-${NODE_ENV}