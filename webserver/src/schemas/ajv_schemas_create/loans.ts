import ajvInstance from '../ajv-instance';
import { loans_ajv } from '../mapper_ajv';


const loans_schema = {
  type: 'object',
  properties: {
    bookId: loans_ajv.bookId.api,
    memberId: loans_ajv.memberId.api,
    loanDate: loans_ajv.loanDate.api,
    dueDate: loans_ajv.dueDate.api,
    returnedDate: loans_ajv.returnedDate.api,
    issuedBy: loans_ajv.issuedBy.api,
  },
  required: ['loanDate', 'dueDate'],
  additionalProperties: false,
};

export default ajvInstance.compile(loans_schema);
