import {
  Request,
  Response,
  Router,
  request
} from 'express';
import projectDirectory from '../../../root.service';

import scoutRecommendationsMock from '../../fixtures/scout-recommendation.mock';
import { Controller } from '../../interfaces/controller.interface';

class ScoutRecommendationApiController implements Controller{
  PATH = '/api/scout-recommendation/get';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get(this.PATH, this.getAllScoutRecommendations);
  }

  private getAllScoutRecommendations = (request: Request, response: Response) => {
    response.send(scoutRecommendationsMock);
  }
}

export default ScoutRecommendationApiController;