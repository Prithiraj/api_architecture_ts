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
  },{
    required: ['createdBy'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.createdBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.createRequest.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.updateTime.api},	
  },{
    required: ['statsDate'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.statsDate.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: loSubscriptionDailyStats_ajv.updatedBy.api},	
  },]
};

export default ajvInstance.compile(loSubscriptionDailyStats_schema);
