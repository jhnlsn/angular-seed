#!/bin/sh
export NODE_PATH=./lib

nohup node api/server.js > /dev/null 2>&1 &