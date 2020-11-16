import * as mongoose from 'mongoose';
import Message from '../interfaces/message.interface';
 
const messageSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  created: String,
  //created: Date;
});
 
export default mongoose.model<Message & mongoose.Document>('Message', messageSchema);
