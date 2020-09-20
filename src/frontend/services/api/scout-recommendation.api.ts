import axios, { AxiosResponse } from 'axios';
import ScoutRecommendationList from '../../interfaces/scout-recommendation-list.interface';
import MessageList from '../../pages/board/components/scout-recomendation-list/message-list';
import {ScoutRecommendation} from '../../interfaces/scout-recommendation.interface'

export default class ScoutRecommendationApi {

  private static API_URL: string = 'http://127.0.0.1/api/scout-recommendation/get';

  static getAll = async (): Promise<ScoutRecommendationList> => {
    const response: AxiosResponse = 
    await axios.get<ScoutRecommendationList, AxiosResponse<ScoutRecommendationList>>(ScoutRecommendationApi.API_URL);
    return await response.data;
  }

  static post = async(scoutRecommendation:ScoutRecommendation): Promise<void> => {
    axios.post<ScoutRecommendation,AxiosResponse<any>>(ScoutRecommendationApi.API_URL, scoutRecommendation).then(()=>{});
    ScoutRecommendationApi.getAll();
  }

}
