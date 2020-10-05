import axios, {AxiosResponse} from 'axios';
import {ScoutRecommendation} from '../../../interfaces/scout-recommendation.interface'
import ScoutRecommendationList from '../../../interfaces/scout-recommendation-list.interface';
import MessageList from '../components/scout-recomendation-list/message-list';

export default class ScoutRecommendationApi{
  private API_URL: string = 'http://127.0.0.1/api/scout-recommendation/get';

  public getAll = async(): Promise<ScoutRecommendationList> => {
    const response: AxiosResponse = await axios.get<ScoutRecommendationList, AxiosResponse<ScoutRecommendationList>>(this.API_URL);
    return await response.data;
  }

  public post = async(scoutRecommendation:ScoutRecommendation): Promise<void> => {
    const response : AxiosResponse = await axios.post<ScoutRecommendation,AxiosResponse<any>>('http://127.0.0.1/api/scout-recommendation/post', scoutRecommendation);
    this.getAll();
  }
}
