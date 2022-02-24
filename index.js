
var server = require('fastify')({ logger: true });
var pov = require('point-of-view');
var static = require('fastify-static');
var ejs = require('ejs');
var port = 8002;


server.listen('8002', (err) => {

	if (err) {
		console.log(err);
	}

	console.log('listening on port ' + port);

});

server.register(pov, {

	engine: {
		ejs: ejs
	},
	root: './views',
	layout: './layouts/default.ejs'

});

console.log(__dirname + '/public');

server.register(static, {
	root: __dirname
});

server.get('/', (request, response) => {
	response.view('./index.ejs', { 'page': 'index' });
});

server.get('/gallery', (request, response) => {
	response.view('./gallery.ejs', { 'page': 'gallery' });
});

server.get('/cv', (request, response) => {
	response.view('./cv.ejs', { 'page': 'cv' });
});

server.get('/contact', (request, response) => {
	response.view('./contact.ejs', { 'page': 'contact' });
});

server.get('/bio', (request, response) => {
	response.view('./bio.ejs', { 'page': 'bio' });
});

// server.get('/', (request, response) => {
// 	response.view('./views/home.ejs', { 'myvar': 'myvar value' });
// });