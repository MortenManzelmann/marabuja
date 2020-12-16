import Message from "../interfaces/message.interface"
import MessageList from "../interfaces/message-list.interface"

const tile1: Message = {
  _id: '1',
  title: 'Title',
  description: 'I\'m from the backend',
  author: 'Author',
  created: 'today',
}

const tile2: Message = {
  _id: '2',
  title: 'something',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const tile3: Message = {
  _id: '3',
  title: 'Title',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const messageListMock: MessageList = { messageList : [tile1, tile2, tile3]}; 

export default messageListMock
