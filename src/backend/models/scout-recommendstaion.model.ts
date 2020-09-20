import * as mongoose from 'mongoose';
import { ScoutRecommendation } from '../interfaces/scout-recommendation.interface';
 
const scoutRecommendationSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  created: String,
  //created: Date;
});
 
export default mongoose.model<ScoutRecommendation & mongoose.Document>('ScoutRecommednation', scoutRecommendationSchema);
