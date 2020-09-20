import {
  Request,
  Response,
  Router
} from 'express';
import ScoutRecommendationModel from '../../models/scout-recommendstaion.model';
import { Controller } from '../../interfaces/controller.interface';
import { ScoutRecommendation } from '../../interfaces/scout-recommendation.interface';

class ScoutRecommendationApiController implements Controller {
  PATH = '/api/scout-recommendation/get';
  public router = Router();
  private scoutRecommendationsModel = ScoutRecommendationModel;

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get(this.PATH, this.getAll);
    this.router.get(this.PATH, this.getById);
    this.router.put(this.PATH, this.modify);
    this.router.post(this.PATH, this.create);
    this.router.delete(this.PATH, this.delete);
  }

  private getAll = (_request: Request, response: Response): void => {
    this.scoutRecommendationsModel.find()
      .then((data) => {
        response.send({ scoutRecommendationsList: data });
      });
  }

  private getById = (request: Request, response: Response): void => {
    const id = request.params.id;
    this.scoutRecommendationsModel.findById(id)
      .then((data) => {
        response.send(data);
      });
  }

  private create = (request: Request, response: Response): void => {
    const postData: ScoutRecommendation = request.body;
    const createdPost = new this.scoutRecommendationsModel(postData);
    createdPost.save()
      .then((savedPost) => {
        response.send(savedPost);
      });
  }

  private modify = (request: Request, response: Response): void => {
    const id = request.params.id;
    const postData: ScoutRecommendation = request.body;
    this.scoutRecommendationsModel.findByIdAndUpdate(id, postData, { new: true })
      .then((post) => {
        response.send(post);
      });
  }

  private delete = (request: Request, response: Response): void => {
    const postData: ScoutRecommendation = request.body;
    this.scoutRecommendationsModel.deleteOne(postData)
    .then(
      () => response.send(`deleted entry wit the id ${postData._id}`)
    );
    
  }
}

export default ScoutRecommendationApiController;
