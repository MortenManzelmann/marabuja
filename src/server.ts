// import * as express from 'express';
// import * as path from 'path';

// const app = express();
// app.use(express.static('./'));

// const router = express.Router();


// router.get('/*', (request, response) => {
//     response.sendFile(__dirname + '/index.html');
// });

// app.use('/', router);

// app.listen(3000);

import App from './backend/app';
import IndexController from './backend/controller/index.controller';
 
const app = new App(
  [
    new IndexController(),
  ],
  3000,
);
 
app.listen();