import App from './backend/app';
import IndexController from './backend/controller/index.controller';
import ScoutRecommendationApiController from './backend/controller/api/scout-recommendation.api.controller';
 
const app = new App(
  [
    new ScoutRecommendationApiController(),
    new IndexController()
  ],
  3000,
);
 
app.listen();