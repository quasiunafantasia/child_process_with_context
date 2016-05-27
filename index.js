var fork = require('child_process').fork;

var child = fork(__dirname + '/worker');
child.send('privet');
setTimeout(function () {
    child.send('umri');

}, 200);


