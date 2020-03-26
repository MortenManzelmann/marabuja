import * as express from 'express';
import * as path from 'path';

const app = express();
app.use(express.static('./'));
 
 app.get('/', (request, response) => {
     response.sendFile(__dirname + '/index.html');
 });
 
app.listen(3000);
