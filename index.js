katex = require('katex');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var dataset = "";

process.stdin.on('data', function(chunk) {
    dataset = dataset + chunk;
});

process.stdin.on('end', function() {
    process.stdout.write(katex.renderToString(dataset));
    process.exit(0);
});
