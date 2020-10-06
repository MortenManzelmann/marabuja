import axios, {AxiosResponse} from 'axios';
import {Message} from '../../../interfaces/message.interface'
import {MessageList} from '../../../interfaces/message-list.interface';

export default class MessazgeApi{
  private API_URL: string = 'http://127.0.0.1/api/scout-recommendation/get';

  public getAll = async(): Promise<MessageList> => {
    const response: AxiosResponse = await axios.get<MessageList, AxiosResponse<MessageList>>(this.API_URL);
    return await response.data;
  }

  public post = async(message:Message): Promise<void> => {
    const response : AxiosResponse = await axios.post<Message,AxiosResponse<any>>('http://127.0.0.1/api/scout-recommendation/post', message);
    this.getAll();
  }
}
