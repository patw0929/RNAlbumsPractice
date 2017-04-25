import { createServer } from 'http';

let actions = [];
let redirects = [];
let server;

export function startServer() {
  if (server) {
    return server;
  }

  return new Promise((resolve) => {
    server = createServer((req, res) => {
      res.end(JSON.stringify({ actions, redirects }));
      actions = [];
      redirects = [];
    }).listen(5555, resolve);

    process.on('exit', () => {
      server.close();
    });
  });
}

export function action(act) {
  actions.push(act);
}

export function redirect(route) {
  redirects.push(route);
}

export function stop() {
  server && server.close(); // eslint-disable-line chai-friendly/no-unused-expressions
}
