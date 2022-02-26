

// Prepare some stuff
var server = require('fastify')({ logger: true });
var pov = require('point-of-view');
var static = require('fastify-static');
var ejs = require('ejs');
var port = 8002;


// Configure the server to listen on the desired port
server.listen(port, (err) => {

	if (err) {
		console.log(err);
	}

	console.log('listening on port ' + port);

});


// Registers the "Point of View" plugin for fastify,
// enabling template base rendering, specifically for EJS
server.register(pov, {

	engine: {
		ejs: ejs
	},
	root: './views',
	layout: './layouts/default.ejs'

});


// Configures server to return static assets upon request (css, js, images)
server.register(static, {
	root: __dirname
});


// Set up some simple af routes
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

