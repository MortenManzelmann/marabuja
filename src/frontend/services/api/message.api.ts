import axios, { AxiosResponse } from 'axios';
import {MessageList} from '../../interfaces/message-list.interface';
import {Message} from '../../interfaces/message.interface'

export default class MessageApi {

  private static API_URL: string = 'http://127.0.0.1/api/scout-recommendation/get';

  static getAll = async (): Promise<MessageList> => {
    const response: AxiosResponse = 
    await axios.get<MessageList, AxiosResponse<MessageList>>(MessageApi.API_URL);
    return await response.data;
  }

  static post = async(message:Message): Promise<void> => {
    axios.post<Message,AxiosResponse<any>>(MessageApi.API_URL, message).then(()=>{});
    MessageApi.getAll();
  }

}
