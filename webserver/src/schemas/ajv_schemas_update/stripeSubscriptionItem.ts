import ajvInstance from '../ajv-instance';
import { stripeSubscriptionItem_ajv } from '../mapper_ajv';


const stripeSubscriptionItem_schema = {
  type: 'object',
  properties: {
    id: stripeSubscriptionItem_ajv.id.api,
    stripePrice: stripeSubscriptionItem_ajv.stripePrice.api,
    isTransferPrice: stripeSubscriptionItem_ajv.isTransferPrice.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['stripePrice'],
  },{
    required: ['isTransferPrice'],
  },]
};

export default ajvInstance.compile(stripeSubscriptionItem_schema);
