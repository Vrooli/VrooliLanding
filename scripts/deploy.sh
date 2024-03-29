#!/bin/bash
# NOTE 1: Run outside of Docker container, on production server
# NOTE 2: First run build.sh on development server
# NOTE 3: If docker-compose file was changed since the last build, you should prune the containers and images before running this script.
# Finishes up the deployment process, which was started by build.sh:
# 1. Checks if Nginx containers are running
# 2. Runs git fetch and git pull to get the latest changes.
# 3. Runs setup.sh
# 4. Moves build created by build.sh to the correct location.
# 5. Restarts docker containers
#
# Arguments (all optional):
# -v: Version number to use (e.g. "1.0.0")
# -n: Nginx proxy location (e.g. "/root/NginxSSLReverseProxy")
# -l: Project location (e.g. "/root/Vrooli")
# -h: Show this help message
HERE=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
source "${HERE}/prettify.sh"

# Read arguments
while getopts ":v:d:h" opt; do
  case $opt in
    v)
      VERSION=$OPTARG
      ;;
    n)
      NGINX_LOCATION=$OPTARG
      ;;
    h)
      echo "Usage: $0 [-v VERSION] [-d DEPLOY] [-h]"
      echo "  -v --version: Version number to use (e.g. \"1.0.0\")"
      echo "  -h --help: Show this help message"
      exit 0
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
    :)
      echo "Option -$OPTARG requires an argument." >&2
      exit 1
      ;;
  esac
done

# Ask for version number, if not supplied in arguments
if [ -z "$VERSION" ]; then
    echo "What version number do you want to deploy? (e.g. 1.0.0)"
    read -r VERSION
fi

# Check if nginx-proxy and nginx-proxy-le are running
if [ ! "$(docker ps -q -f name=nginx-proxy)" ] || [ ! "$(docker ps -q -f name=nginx-proxy-le)" ]; then
    error "Proxy containers are not running!"
    if [ -z "$NGINX_LOCATION" ]; then
        echo "Enter path to proxy container directory (defaults to /root/NginxSSLReverseProxy):"
        read -r NGINX_LOCATION
        if [ -z "$NGINX_LOCATION" ]; then
            NGINX_LOCATION="/root/NginxSSLReverseProxy"
        fi
    fi
    # Check if ${NGINX_LOCATION}/docker-compose.yml or ${NGINX_LOCATION}/docker-compose.yaml exists
    if [ -f "${NGINX_LOCATION}/docker-compose.yml" ] || [ -f "${NGINX_LOCATION}/docker-compose.yaml" ]; then
        # Start proxy containers
        cd "${NGINX_LOCATION}" && docker-compose up -d
    else
        error "Could not find docker-compose.yml file in ${NGINX_LOCATION}"
        exit 1
    fi
fi

# Stop docker containers
info "Stopping docker containers..."
docker-compose down

# Pull the latest changes from the repository.
info "Pulling latest changes from repository..."
git fetch
git pull

# Running setup.sh
info "Running setup.sh..."
${HERE}/setup.sh
if [ $? -ne 0 ]; then
    error "setup.sh failed"
    exit 1
fi

# Move and decompress build created by build.sh to the correct location.
info "Moving and decompressing new build to correct location..."
rm -rf ${HERE}/../packages/ui/build
tar -xzf /var/tmp/${VERSION}/build.tar.gz -C ${HERE}/../packages/ui
if [ $? -ne 0 ]; then
    error "Could not move and decompress build to correct location"
    exit 1
fi

# Restart docker containers.
info "Restarting docker containers..."
docker-compose -f ${HERE}/../docker-compose-prod.yml up --build -d

success "Done! You may need to wait a few minutes for the Docker containers to finish starting up."