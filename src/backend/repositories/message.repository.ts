import MessageModel from '../models/message.model';

class MessageRepository {
	private messagesModel = MessageModel;

	public findById(id:number): any
	{
		return this.messagesModel.findById(id);
	}
}

export default MessageRepository;
