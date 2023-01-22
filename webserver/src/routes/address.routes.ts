import { Request, Router, Response } from 'express';
// import {Prisma, PrismaClient } from '@prisma/client';
import validateDto from '../middleware/validate-dto';
import propertySchema from '../schemas/ajv_schemas_create/property';
import propertyUpdate from '../schemas/ajv_schemas_update/property';
// import 

// const prisma = new PrismaClient()

const propertyRouter = Router();

propertyRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
propertyRouter.put('/', validateDto(propertyUpdate), (request: Request, response: Response): any => {
	return response.json({"message": "OK"})
});
propertyRouter.post('/', validateDto(propertySchema), (request: Request, response: Response): any => {
	return response.json({"message": "OK"});
});

propertyRouter.post('/create', async (request: Request, response: Response): Promise<any> => {
//   const { first_name, last_name } = request.body
//   const result = await prisma.contact.create({
// 	  data: {
// 		first_name,
// 		last_name,
// 	  },
// 	})
// 	response.json(result)	
})

export default propertyRouter;