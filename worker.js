var vm = require('vm');
var ctx = require('./ctx');

var script = new vm.Script('(' + zarabotaiPls.toString() + ')()');
var context = new vm.createContext(Object.assign(global, ctx));

script.runInContext(context);

function zarabotaiPls() {

    setInterval(function () {
        console.log('ne umirayu!');
    }, 0);

    process.on('message', function(m){
        if(m == exit) {
            console.log('umer');
            process.exit();
        } else {
            console.log(m);
        }
    });
}
