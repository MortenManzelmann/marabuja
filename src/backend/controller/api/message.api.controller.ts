import {
  Request,
  Response,
  Router
} from 'express';
import MessageModel from '../../models/message.model';
import { Controller } from '../../interfaces/controller.interface';
import Message from '../../interfaces/message.interface';

class MessageApiController implements Controller {
  PATH = '/api/message/get';
  public router = Router();
  private messagesModel = MessageModel;

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.get(this.PATH, this.getAll);
    this.router.get(this.PATH, this.getById);
    this.router.put(this.PATH, this.modify);
    this.router.post(this.PATH, this.create);
    this.router.delete(this.PATH, this.delete);
  }

  private getAll = (_request: Request, response: Response): void => {
    this.messagesModel.find()
      .then((data) => {
        response.send({ messageList: data });
      });
  }

  private getById = (request: Request, response: Response): void => {
    const id = request.params.id;
    this.messagesModel.findById(id)
      .then((data) => {
        response.send(data);
      });
  }

  private create = (request: Request, response: Response): void => {
    const postData: Message = request.body;
    const createdPost = new this.messagesModel(postData);
    createdPost.save()
      .then((savedPost: Message	) => {
        response.send(savedPost);
      });
  }

  private modify = (request: Request, response: Response): void => {
    const id = request.params.id;
    const postData: Message = request.body;
    this.messagesModel.findByIdAndUpdate(id, postData, { new: true })
      .then((post) => {
        response.send(post);
      });
  }

  private delete = (request: Request, response: Response): void => {
    const postData: Message = request.body;
    this.messagesModel.deleteOne(postData)
    .then(
      () => response.send(`deleted entry wit the id ${postData._id}`)
    );
    
  }
}

export default MessageApiController;
