import { Router } from 'express';
import booksRouter from './books.routes';
import membersRouter from './members.routes';

const routes = Router();

routes.use('/books', booksRouter);
routes.use('/members', membersRouter);

export default routes;
