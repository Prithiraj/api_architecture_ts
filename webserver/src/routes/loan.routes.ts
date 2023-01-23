import { Request, Router, Response } from 'express';
// import {Prisma, PrismaClient } from '@prisma/client';
import validateDto from '../middleware/validate-dto';
import loanSchema from '../schemas/ajv_schemas_create/loan';
import loanUpdate from '../schemas/ajv_schemas_update/loan';
import {insert_loan} from '../dbmanager/db_insert/loan.insert';
// import 

// const prisma = new PrismaClient()

const loanRouter = Router();

loanRouter.get('/',  (request: Request, response: Response): any => {
	return response.json("OK");
});
  
loanRouter.put('/', validateDto(loanUpdate), (request: Request, response: Response): any => {
	// loanInsert(request.body)
	
	return response.json({"message": "OK"})
});
loanRouter.post('/', validateDto(loanSchema), async (request: Request, response: Response): Promise<any> => {
	console.log(request.body)
	const result = await insert_loan(request.body);
	return response.json({"message": result});
});

loanRouter.post('/create', async (request: Request, response: Response): Promise<any> => {
//   const { first_name, last_name } = request.body
//   const result = await prisma.loan.create({
// 	  data: {
// 		first_name,
// 		last_name,
// 	  },
// 	})
// 	response.json(result)	
})

export default loanRouter;