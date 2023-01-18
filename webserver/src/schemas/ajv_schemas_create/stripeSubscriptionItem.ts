import ajvInstance from '../ajv-instance';
import { stripeSubscriptionItem_ajv } from '../mapper_ajv';


const stripeSubscriptionItem_schema = {
  type: 'object',
  properties: {
    stripePrice: stripeSubscriptionItem_ajv.stripePrice.api,
    isTransferPrice: stripeSubscriptionItem_ajv.isTransferPrice.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(stripeSubscriptionItem_schema);
