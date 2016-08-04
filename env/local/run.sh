#!/bin/bash

echo ''
echo 'Type/Code Splash Development Environment'
echo ''

# Setup some env


COMMAND="$1"
shift
case "$COMMAND" in

        up)
            echo '  Dev Environment'
            docker-compose -p ge-hs-pb up
            ;;

        dc)
            echo '  docker-compose'
            docker-compose -p ge-hs-pb $@
            ;;

        *)
            echo $"Usage: $0 {up|dc <commands>}"
            exit 1
esac
