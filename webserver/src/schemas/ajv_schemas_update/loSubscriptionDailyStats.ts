import ajvInstance from '../ajv-instance';
import { loSubscriptionDailyStats_ajv } from '../mapper_ajv';


const loSubscriptionDailyStats_schema = {
  type: 'object',
  properties: {
    loSubscriptionId: loSubscriptionDailyStats_ajv.loSubscriptionId.api,
    totalMatchAmount: loSubscriptionDailyStats_ajv.totalMatchAmount.api,
    totalTransferAmount: loSubscriptionDailyStats_ajv.totalTransferAmount.api,
    totalLeadsMatched: loSubscriptionDailyStats_ajv.totalLeadsMatched.api,
    totalLeadsTransfered: loSubscriptionDailyStats_ajv.totalLeadsTransfered.api,
    statsDate: loSubscriptionDailyStats_ajv.statsDate.api,
  },
  required: ['loSubscriptionId'],
  additionalProperties: false,
  anyOf: [{
    required: ['totalMatchAmount'],
  },{
    required: ['totalTransferAmount'],
  },{
    required: ['totalLeadsMatched'],
  },{
    required: ['totalLeadsTransfered'],
  },{
    required: ['statsDate'],
  },]
};

export default ajvInstance.compile(loSubscriptionDailyStats_schema);
