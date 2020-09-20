import express, { Application } from 'express';
import * as bodyParser from 'body-parser';
import { Controller } from './interfaces/controller.interface';
import mongoose from 'mongoose';
import 'dotenv/config';

class App {
  public app: Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.connectToTheDatabase();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]) {
    this.app.use(express.static('./'));
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private connectToTheDatabase() {
    const {
      MONGO_PATH,
    } = process.env;
    
    mongoose.connect(`mongodb://${MONGO_PATH}`);
  }
}

export default App;