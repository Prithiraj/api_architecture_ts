import ajvInstance from '../ajv-instance';
import { bridgeContactPrimaryIncome_ajv } from '../mapper_ajv';


const bridgeContactPrimaryIncome_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactPrimaryIncome_ajv.contactId.api,
    incomeSourceId: bridgeContactPrimaryIncome_ajv.incomeSourceId.api,
  },
  required: ['contactId', 'incomeSourceId'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactPrimaryIncome_schema);
