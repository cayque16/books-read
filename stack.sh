#!/bin/bash
IMAGE="node:22.19.0-alpine"
WORKDIR="/usr/src/myapp"
# -u "node"
docker run --rm --name node-teste -ti -p "5173:5173" -v "$PWD":"$WORKDIR" -w "$WORKDIR" "$IMAGE" "${@}"