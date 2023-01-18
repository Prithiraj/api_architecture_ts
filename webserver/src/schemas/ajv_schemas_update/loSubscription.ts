import ajvInstance from '../ajv-instance';
import { loSubscription_ajv } from '../mapper_ajv';


const loSubscription_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['stripeStatus'],
    properties: { apicolname: loSubscription_ajv.stripeStatus.api},	
  },{
    required: ['autoBilling'],
    properties: { apicolname: loSubscription_ajv.autoBilling.api},	
  },{
    required: ['boberdooBalance'],
    properties: { apicolname: loSubscription_ajv.boberdooBalance.api},	
  },{
    required: ['cancelTime'],
    properties: { apicolname: loSubscription_ajv.cancelTime.api},	
  },{
    required: ['dailyBudgetLimit'],
    properties: { apicolname: loSubscription_ajv.dailyBudgetLimit.api},	
  },{
    required: ['deactivateTime'],
    properties: { apicolname: loSubscription_ajv.deactivateTime.api},	
  },{
    required: ['deactivateReason'],
    properties: { apicolname: loSubscription_ajv.deactivateReason.api},	
  },{
    required: ['inactive'],
    properties: { apicolname: loSubscription_ajv.inactive.api},	
  },{
    required: ['price'],
    properties: { apicolname: loSubscription_ajv.price.api},	
  },{
    required: ['productId'],
    properties: { apicolname: loSubscription_ajv.productId.api},	
  },{
    required: ['transferPrice'],
    properties: { apicolname: loSubscription_ajv.transferPrice.api},	
  },{
    required: ['activeLeadTransfer'],
    properties: { apicolname: loSubscription_ajv.activeLeadTransfer.api},	
  },{
    required: ['callCenterService'],
    properties: { apicolname: loSubscription_ajv.callCenterService.api},	
  },{
    required: ['scheduleDays'],
    properties: { apicolname: loSubscription_ajv.scheduleDays.api},	
  },{
    required: ['scheduleTo'],
    properties: { apicolname: loSubscription_ajv.scheduleTo.api},	
  },{
    required: ['primaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.primaryPhoneType.api},	
  },{
    required: ['secondaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneType.api},	
  },{
    required: ['secondaryPhone'],
    properties: { apicolname: loSubscription_ajv.secondaryPhone.api},	
  },{
    required: ['alertList'],
    properties: { apicolname: loSubscription_ajv.alertList.api},	
  },{
    required: ['addressCity'],
    properties: { apicolname: loSubscription_ajv.addressCity.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loSubscription_ajv.addressState.api},	
  },{
    required: ['addressStreet2'],
    properties: { apicolname: loSubscription_ajv.addressStreet2.api},	
  },{
    required: ['addressStreet3'],
    properties: { apicolname: loSubscription_ajv.addressStreet3.api},	
  },{
    required: ['preferredmeetingplaceCity'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCity.api},	
  },{
    required: ['preferredmeetingplaceStreet3'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet3.api},	
  },{
    required: ['preferredmeetingplaceZip'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceZip.api},	
  },{
    required: ['preferredcommunicationscheduleDays'],
    properties: { apicolname: loSubscription_ajv.preferredcommunicationscheduleDays.api},	
  },{
    required: ['preferredcommunicationscheduleTo'],
    properties: { apicolname: loSubscription_ajv.preferredcommunicationscheduleTo.api},	
  },{
    required: ['infoPhone'],
    properties: { apicolname: loSubscription_ajv.infoPhone.api},	
  },{
    required: ['infoWebsite'],
    properties: { apicolname: loSubscription_ajv.infoWebsite.api},	
  },{
    required: ['transactionType'],
    properties: { apicolname: loSubscription_ajv.transactionType.api},	
  },{
    required: ['totalMatchAmount'],
    properties: { apicolname: loSubscription_ajv.totalMatchAmount.api},	
  },{
    required: ['preferredmeetingplaceCountry'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCountry.api},	
  },{
    required: ['totalCredited'],
    properties: { apicolname: loSubscription_ajv.totalCredited.api},	
  },{
    required: ['rmpptBuyerId'],
    properties: { apicolname: loSubscription_ajv.rmpptBuyerId.api},	
  },{
    required: ['leadCategory'],
    properties: { apicolname: loSubscription_ajv.leadCategory.api},	
  },{
    required: ['totalLeadsMatched'],
    properties: { apicolname: loSubscription_ajv.totalLeadsMatched.api},	
  },{
    required: ['primaryPhone'],
    properties: { apicolname: loSubscription_ajv.primaryPhone.api},	
  },{
    required: ['loanType'],
    properties: { apicolname: loSubscription_ajv.loanType.api},	
  },{
    required: ['preferredmeetingplaceStreet'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet.api},	
  },]
};

export default ajvInstance.compile(loSubscription_schema);
