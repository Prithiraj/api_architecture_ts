import ajvInstance from '../ajv-instance';
import { stripeSubscriptionItem_ajv } from '../mapper_ajv';


const stripeSubscriptionItem_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['stripePrice'],
    properties: { apicolname: stripeSubscriptionItem_ajv.stripePrice.api},	
  },]
};

export default ajvInstance.compile(stripeSubscriptionItem_schema);
