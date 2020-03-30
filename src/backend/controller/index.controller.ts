import {
    Request,
    Response,
    Router
} from 'express';
import projectDirectory from '../../root.service';

class IndexController {
    public path = '*';
    public router = Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getIndexSite);
    }

    getIndexSite = (request: Request, response: Response) => {
        response.sendFile(`${projectDirectory.ROOT}/frontend/index.html`);
    }
}

export default IndexController;