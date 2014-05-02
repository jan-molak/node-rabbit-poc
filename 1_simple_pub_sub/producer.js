'use strict';

var context   = require('./../context'),
    info      = require('./../info'),
    queueName = "poc1.messages";

var message = process.argv.splice(2).join(" ") || "n/a";


context.on('error', console.warn);

context.on('ready', function() {
    info('Context is ready');

    var pub = context.socket('PUB');

    pub.connect(queueName, function() {
        info('Connected to queue');

        pub.write(message, 'utf8');
        info('Sent message: ', message);

        // closing the context without the timeout
        // causes the message to be dropped before it's sent
        setTimeout(function() {
            context.close();
        }, 1);
    });
});