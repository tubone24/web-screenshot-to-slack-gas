#!/usr/bin/env bash
# Usage:
# ./deploy_gas.sh TOKEN_FILE
echo $1 > ~/.clasprc.json
npx @google/clasp push
