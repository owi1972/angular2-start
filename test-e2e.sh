#!/bin/bash

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 15

if [[ $CI ]]; then
  echo "Running e2e tests in CI mode"
  protractor ./protractor.saucelabs.conf.js
else
  echo "Running e2e tests in local mode"
  protractor ./protractor.conf.js
fi

rc=$?

killall java node

if [[ $rc != 0 ]]; then
  echo "protractor tests failed"
  exit 1
else 
  echo "protractor tests passed"
  exit 0
fi

