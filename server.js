const express = require('express');
const cors = require('cors');
const next = require('next');
const cookieParser = require('cookie-parser');
const clientRoutes = require('./client/routes');
// const router = require('./api/routes');
// const { detectLocale } = require('./src/middlewares');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const clientRoutesHandler = clientRoutes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());

    server.use(cookieParser());
    // server.use(detectLocale);

    server.get('/healthcheck/', (req, res) => {
      res.sendStatus(200);
    });

    // server.use('/api', router);

    server.use(clientRoutesHandler);
    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
