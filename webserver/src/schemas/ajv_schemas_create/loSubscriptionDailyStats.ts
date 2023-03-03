import ajvInstance from '../ajv-instance';
import { loSubscriptionDailyStats_ajv } from '../mapper_ajv';


const loSubscriptionDailyStats_schema = {
  type: 'object',
  properties: {
    totalMatchAmount: loSubscriptionDailyStats_ajv.totalMatchAmount.api,
    totalTransferAmount: loSubscriptionDailyStats_ajv.totalTransferAmount.api,
    totalLeadsMatched: loSubscriptionDailyStats_ajv.totalLeadsMatched.api,
    totalLeadsTransfered: loSubscriptionDailyStats_ajv.totalLeadsTransfered.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(loSubscriptionDailyStats_schema);
