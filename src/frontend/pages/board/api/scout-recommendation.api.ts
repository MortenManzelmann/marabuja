import axios, {AxiosResponse} from 'axios';
import ScoutRecommendationList from '../../../interfaces/scout-recommendation-list.interface';

export default class ScoutRecommendationApi{
  private API_URL: string = 'http://127.0.0.1/api/scout-recommendation/get';

  public getAll = async(): Promise<ScoutRecommendationList> => {
    const response: AxiosResponse = await axios.get<ScoutRecommendationList, AxiosResponse<ScoutRecommendationList>>(this.API_URL);
    return await response.data;
  }
}