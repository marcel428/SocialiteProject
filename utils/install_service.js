var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Socialite Windows Service',
  description: 'socialite node js server as Windows Service',
  script: 'C:\\www\\Server\\src\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();