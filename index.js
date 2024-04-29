const jsonServer = require("json-server");//importing json-server libarary
const server = jsonServer.create();
const route = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;// chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);