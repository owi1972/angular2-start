#!/bin/sh

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 15

if [ "$CI" ]; then
  echo "Running e2e tests in CI mode"
  protractor ./protractor.saucelabs.conf.js && killall java node
else
  echo "Running e2e tests in local mode"
  protractor ./protractor.conf.js && killall java node
fi
