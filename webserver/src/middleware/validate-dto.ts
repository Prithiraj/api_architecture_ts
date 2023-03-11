
import { ValidateFunction } from 'ajv';
import { Request, Response, NextFunction} from 'express';
// import contactSchema from '../schemas/create_customer';
// const userSchema = require('../schemas/user');
//  typeof contactSchema
function validateDto(ajvValidate: ValidateFunction<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const valid = ajvValidate(req.body);
    if (!valid) {
      const errors = ajvValidate.errors;
      return res.status(400).json(errors);
    }
    next();
  };
}

// module.exports = validateDto;
export default validateDto;

// Schema validation - user input
// Updates [{"contact_id":"ABC", "details": {...},
// {"contact_id":"BCD", "details": {...}}}]

// lib logic - business
// lib_shared - UI - lib AJV/ validation
// lambda - graphql - AJV
// lambda -  RESTful - AJV
// Lambda - UI
// Lib chat


