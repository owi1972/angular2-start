#!/bin/sh

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 10

if [ "$CI" ]; then
  echo "Running e2e tests in CI mode"
  protractor protractor.saucelabs.conf.js
else
  echo "Running e2e tests in local mode"
  protractor protractor.conf.js
fi

killall java node
