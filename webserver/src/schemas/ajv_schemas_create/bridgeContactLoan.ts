import ajvInstance from '../ajv-instance';
import { bridgeContactLoan_ajv } from '../mapper_ajv';


const bridgeContactLoan_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactLoan_ajv.contactId.api,
    loanId: bridgeContactLoan_ajv.loanId.api,
    assignTime: bridgeContactLoan_ajv.assignTime.api,
    assignRequest: bridgeContactLoan_ajv.assignRequest.api,
    type: bridgeContactLoan_ajv.type.api,
    id: bridgeContactLoan_ajv.id.api,
  },
  required: ['assignedBy', 'loanId', 'type', 'contactId', 'assignTime', 'id', 'assignRequest'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactLoan_schema);
