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
    required: ['id'],
    properties: { apicolname: stripeSubscriptionItem_ajv.id.api},	
  },{
    required: ['stripePrice'],
    properties: { apicolname: stripeSubscriptionItem_ajv.stripePrice.api},	
  },{
    required: ['isTransferPrice'],
    properties: { apicolname: stripeSubscriptionItem_ajv.isTransferPrice.api},	
  },]
};

export default ajvInstance.compile(stripeSubscriptionItem_schema);
