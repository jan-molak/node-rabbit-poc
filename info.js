'use strict';

require('colors');

module.exports = console.log.bind(console, '[x] %s'.green);