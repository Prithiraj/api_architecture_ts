import { Request, Router, Response } from 'express';
import validateDto from '../middleware/validate-dto';
import booksCreate from '../schemas/ajv_schemas_create/books';
import booksUpdate from '../schemas/ajv_schemas_update/books';
import {insert_books} from '../dbmanager/db_insert/books.insert';
// import {update_books_admin} from '../dbmanager/db_update/general/books.update';
import {update_books_admin} from '../dbmanager/db_update/admin/books.update';
// import { getmembers } from '../api_calls/api_get/get_members';
// import {update_books_admin} from '../dbmanager/db_update/admin/books.update';
// import 

// const prisma = new PrismaClient()

const booksRouter = Router();

booksRouter.get('/',  async (request: Request, response: Response): Promise<any> => {
	try {

		response.json({"books": "OK"})
		
	} catch (error) {
		response.status(404).json({"error": error})
	}
});
  
booksRouter.put('/', validateDto(booksUpdate), async (request: Request, response: Response): Promise<any> => {
	try{
		const result = await update_books_admin(request);
		console.log(result)
		response.json({"message": result});
	} catch (err) {
		response.status(400).json(err);
	}

});
booksRouter.post('/', validateDto(booksCreate), async (request: Request, response: Response): Promise<any> => {
	try {
		const result = await insert_books(request.body);
		response.json({"message": result});

	} catch (err) {
		response.status(400).json(err);
	}
});

// booksRouter.post('/create', async (request: Request, response: Response): Promise<any> => {
// //   const { first_name, last_name } = request.body
// //   const result = await prisma.books.create({
// // 	  data: {
// // 		first_name,
// // 		last_name,
// // 	  },
// // 	})
// // 	response.json(result)	
// })

export default booksRouter;