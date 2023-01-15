import { Request, Router, Response } from 'express';
// import {Prisma, PrismaClient } from '@prisma/client';
import validateDto from '../middleware/validate-dto';
import contactSchema from '../schemas/ajv_schemas_create/contact';
// import 

// const prisma = new PrismaClient()

const contactRouter = Router();

contactRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
contactRouter.post('/', validateDto(contactSchema), (request: Request, response: Response): any => {
  
	
	return response.json({"message": "OK"});
  
});

contactRouter.post('/create', async (request: Request, response: Response): Promise<any> => {
//   const { first_name, last_name } = request.body
//   const result = await prisma.contact.create({
// 	  data: {
// 		first_name,
// 		last_name,
// 	  },
// 	})
// 	response.json(result)	
})

export default contactRouter;