import { Router } from 'express';
import contactRouter from './contact.routes';
import propertyRouter from './address.routes';

const routes = Router();

routes.use('/contact', contactRouter);
routes.use('/property', propertyRouter);

export default routes;
