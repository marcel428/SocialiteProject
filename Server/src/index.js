// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const { port, env } = require('./config/vars');
const logger = require('./config/logger');
require('./api/controllers/socket.controller');
const app = require('./config/express');
const mongoose = require('./config/mongoose');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const cert = fs.readFileSync(path.join(__dirname + '/ssl/www_socialsgonewild_com.crt'));
const ca = fs.readFileSync(path.join(__dirname + '/ssl/www_socialsgonewild_com.ca-bundle'))
const key = fs.readFileSync(path.join(__dirname + '/ssl/e99214a997d7eaaa9a8dbf852656cd4c.key'));


let options = {
	cert: cert,
	ca: ca,
	key: key
};

// open mongoose connection
mongoose.connect();

const httpServer = http.createServer(app)
const httpsServer = https.createServer(options, app)

// app.use((req, res, next) => {
// 	console.log(req.protocol + "test")
// 	if (req.protocol === 'http') {
// 		res.redirect(301, `https://${req.headers.host}${req.url}`);
// 	}
// 	next();
// });

app.get('*',function(req,res){
	res.redirect('https://'+req.headers.host+req.url);
})

// listen to requests
// app.listen(port, () => {
// 	logger.info(`server started on port ${port} (${env})`);
// });
httpServer.listen(process.env.PORT, '0.0.0.0');
httpsServer.listen(process.env.HTTPS_PORT, '0.0.0.0');
/**
* Exports express
* @public
*/
module.exports = app;
