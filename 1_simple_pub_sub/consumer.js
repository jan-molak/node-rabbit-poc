'use strict';

var context = require('./../context'),
    info    = require('./../info'),
    queueName = 'poc1.messages';

context.on('error', console.warn);

context.on('ready', function() {
    info('Context is ready');

    var sub = context.socket('SUB');

    sub.connect(queueName, function() {
        info('Connected');

        sub.on('data', function(data) {
           info('Received:', data.toString());
        });
    });
});