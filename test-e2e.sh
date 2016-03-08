#!/bin/sh

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 10

if [ "$CI" ]; then
  echo "ci"
  protractor protractor.saucelabs.conf.js
else
  echo "local"
  protractor protractor.conf.js
fi

killall java node
