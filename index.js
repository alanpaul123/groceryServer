// import json-server
const jsonServer = require("json-server");

// create server for media player app

const GServer = jsonServer.create();

// create middleware used by JSON SERVER

const middleware = jsonServer.defaults();

// set up route for json file in server

const route = jsonServer.router("db.json");

// set up port for running Serever app

const PORT = 3000 || process.env.PORT;

GServer.use(middleware);
GServer.use(route);
GServer.listen(PORT, () => {
  console.log(
    `Grocery Server Startedt at Port ${PORT} and waiting for client request `
  );
});
