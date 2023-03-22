import { Router } from 'express';
import contactRouter from './contact.routes';
import propertyRouter from './address.routes';
import bridgeContactRouter from './bridgecontactcontact.routes';

const routes = Router();

routes.use('/contact', contactRouter);
routes.use('/property', propertyRouter);
routes.use('/bridgecontact', bridgeContactRouter);

export default routes;
