#!/bin/sh
set -e

echo "Running Payload migrations..."
npx payload migrate

echo "Starting server..."
exec node server.js
