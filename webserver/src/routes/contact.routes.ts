import { Request, Router, Response } from 'express';

import validateDto from '../middleware/validate-dto';
import contactSchema from '../schemas/ajv_schemas_create/contact';
// import 

const contactRouter = Router();

contactRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
contactRouter.post('/', validateDto(contactSchema), (request: Request, response: Response): any => {
  return response.json({"message": "OK"});

});
export default contactRouter;