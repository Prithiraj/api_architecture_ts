import { Request, Router, Response } from 'express';
// import {Prisma, PrismaClient } from '@prisma/client';
import validateDto from '../middleware/validate-dto';
import contactCreate from '../schemas/ajv_schemas_create/contact';
import contactUpdate from '../schemas/ajv_schemas_update/contact';
import {insert_contact} from '../dbmanager/db_insert/contact.insert';
import {update_contact_admin} from '../dbmanager/db_update/admin/contact.update';
// import 

// const prisma = new PrismaClient()

const contactRouter = Router();

contactRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
contactRouter.put('/', validateDto(contactUpdate), async (request: Request, response: Response): Promise<any> => {
	try{
		const result = await update_contact_admin(request.body);
		response.json({"message": result});
	} catch (err) {
		response.status(400).json(err);
	}

});
contactRouter.post('/', validateDto(contactCreate), async (request: Request, response: Response): Promise<any> => {
	try {
		const result = await insert_contact(request.body);
		response.json({"message": result});

	} catch (err) {
		response.status(400).json(err);
	}
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