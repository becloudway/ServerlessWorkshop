const app = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const YAML = require('yamljs');
const swaggerDoc = YAML.load('./swagger.yaml');
const serverPort = 4000;

swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerUi());
    http.createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d/docs)', serverPort, serverPort);
    });
});
