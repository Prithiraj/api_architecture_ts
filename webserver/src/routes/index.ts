import { Router } from 'express';
import contactRouter from './contact.routes';

const routes = Router();

routes.use('/contact', contactRouter);

export default routes;
