import App from './backend/app';
import IndexController from './backend/controller/index.controller';
import MessageApiController from './backend/controller/api/message.api.controller';

const app = new App(
  [
    new MessageApiController(),
    new IndexController()
  ],
  3000,
);

app.listen();
