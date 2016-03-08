#!/bin/sh

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 10

if [ "$CI" == true ]; then
    protractor protractor.saucelabs.conf.js
else
    protractor protractor.conf.js
fi

killall java node
