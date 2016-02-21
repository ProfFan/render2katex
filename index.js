katex = require('katex');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var dataset = "";

process.stdin.on('data', function(chunk) {
    dataset = dataset + chunk;
});

process.stdin.on('end', function() {
    display = true;
    if(process.argv[2]=="i") {
        display = false;
    }
    process.stdout.write(katex.renderToString(dataset,{
        displayMode: display,
        throwOnError: false
    }));
    process.exit(0);
});
