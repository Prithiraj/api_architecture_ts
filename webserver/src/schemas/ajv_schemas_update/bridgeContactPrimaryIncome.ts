import ajvInstance from '../ajv-instance';
import { bridgeContactPrimaryIncome_ajv } from '../mapper_ajv';


const bridgeContactPrimaryIncome_schema = {
  type: 'object',
  properties: {
    id: bridgeContactPrimaryIncome_ajv.id.api,
    contactId: bridgeContactPrimaryIncome_ajv.contactId.api,
    incomeSourceId: bridgeContactPrimaryIncome_ajv.incomeSourceId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['incomeSourceId'],
  },]
};

export default ajvInstance.compile(bridgeContactPrimaryIncome_schema);
