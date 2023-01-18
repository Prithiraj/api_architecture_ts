import ajvInstance from '../ajv-instance';
import { loSubscriptionDailyStats_ajv } from '../mapper_ajv';


const loSubscriptionDailyStats_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['loSubscriptionId'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.loSubscriptionId.api},	
  },{
    required: ['totalMatchAmount'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.totalMatchAmount.api},	
  },{
    required: ['totalTransferAmount'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.totalTransferAmount.api},	
  },{
    required: ['totalLeadsMatched'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.totalLeadsMatched.api},	
  },{
    required: ['totalLeadsTransfered'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.totalLeadsTransfered.api},	
  },]
};

export default ajvInstance.compile(loSubscriptionDailyStats_schema);
