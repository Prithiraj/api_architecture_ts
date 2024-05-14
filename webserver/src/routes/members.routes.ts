import { Request, Router, Response } from 'express';
import validateDto from '../middleware/validate-dto';
import membersCreate from '../schemas/ajv_schemas_create/members';
import membersUpdate from '../schemas/ajv_schemas_update/members';
import {insert_members} from '../dbmanager/db_insert/members.insert';
// import {update_members_admin} from '../dbmanager/db_update/general/members.update';
import {update_members_admin} from '../dbmanager/db_update/admin/members.update';
import { getmembers, getmembers_admin } from '../api_calls/api_get/get_members';
// import {update_members_admin} from '../dbmanager/db_update/admin/members.update';
// import 

// const prisma = new PrismaClient()

const membersRouter = Router();

membersRouter.get('/',  async (request: Request, response: Response): Promise<any> => {
	try {
		// console.log(request)
		const result = await getmembers_admin(1);	
		return response.json(result);
	} catch (error) {
		response.status(400).json(error);
	}
});
  
membersRouter.put('/', validateDto(membersUpdate), async (request: Request, response: Response): Promise<any> => {
	try{
		const result = await update_members_admin(request);
		console.log(result)
		response.json({"message": result});
	} catch (err) {
		response.status(400).json(err);
	}

});
membersRouter.post('/', validateDto(membersCreate), async (request: Request, response: Response): Promise<any> => {
	try {
		const result = await insert_members(request.body);
		response.json({"message": result});

	} catch (err) {
		response.status(400).json(err);
	}
});

// membersRouter.post('/create', async (request: Request, response: Response): Promise<any> => {
// //   const { first_name, last_name } = request.body
// //   const result = await prisma.members.create({
// // 	  data: {
// // 		first_name,
// // 		last_name,
// // 	  },
// // 	})
// // 	response.json(result)	
// })

export default membersRouter;