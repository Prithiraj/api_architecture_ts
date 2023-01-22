import { Request, Router, Response } from 'express';
// import {Prisma, PrismaClient } from '@prisma/client';
import validateDto from '../middleware/validate-dto';
import contactSchema from '../schemas/ajv_schemas_create/contact';
import contactUpdate from '../schemas/ajv_schemas_update/contact';
import {insert_contact} from '../dbmanager/db_insert/contact.inesrt';
import {update_contact} from '../dbmanager/db_update/contact.update';
// import 

// const prisma = new PrismaClient()

const contactRouter = Router();

contactRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
contactRouter.put('/', (request: Request, response: Response) => {
	// contactInsert(request.body)
	const valid = contactUpdate(request.body);
	if (!valid) {
		const errors = contactUpdate.errors;
		response.status(400).json(errors);
	} else {
		console.log(request.body);
		const result = update_contact(request.body);
		response.json({"message": result});
	}
});
contactRouter.post('/', validateDto(contactSchema), async (request: Request, response: Response): Promise<any> => {
	console.log(request.body)
	const result = await insert_contact(request.body);
	return response.json({"message": result});
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