import MessageModel from '../models/message.model';
import MessageInterface from '../interfaces/message.interface';

class MessageRepository {
	private messagesModel = MessageModel;

	public findById(id:number): MessageInterface
	{
	    return this.messagesModel.findById(id);
	}
}

export default MessageRepository;
