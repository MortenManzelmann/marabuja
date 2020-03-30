import {
    Request,
    Response,
    Router
} from 'express';
import projectDirectory from '../../root.service';
import { Controller } from '../interfaces/controller.interface';

class IndexController implements Controller{
    PATH = '';
    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.PATH, this.getIndexSite);
    }

    getIndexSite = (request: Request, response: Response) => {
        response.sendFile(`${projectDirectory.ROOT}/frontend/index.html`);
    }
}

export default IndexController;