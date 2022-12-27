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
    createdBy: loSubscriptionDailyStats_ajv.createdBy.api,
    createRequest: loSubscriptionDailyStats_ajv.createRequest.api,
    createTime: loSubscriptionDailyStats_ajv.createTime.api,
    updatedBy: loSubscriptionDailyStats_ajv.updatedBy.api,
    updateRequest: loSubscriptionDailyStats_ajv.updateRequest.api,
    updateTime: loSubscriptionDailyStats_ajv.updateTime.api,
    statsDate: loSubscriptionDailyStats_ajv.statsDate.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(loSubscriptionDailyStats_schema);
