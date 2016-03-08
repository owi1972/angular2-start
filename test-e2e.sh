#!/bin/sh

# e2e testing script

webdriver-manager update
webdriver-manager start &
npm start &

sleep 10

protractor protractor.conf.js

killall java node
