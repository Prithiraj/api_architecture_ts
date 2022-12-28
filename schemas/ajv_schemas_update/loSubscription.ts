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
    required: ['id'],
    properties: { apicolname: loSubscription_ajv.id.api},	
  },{
    required: ['stripeSubscription'],
    properties: { apicolname: loSubscription_ajv.stripeSubscription.api},	
  },{
    required: ['stripePaymentIntent'],
    properties: { apicolname: loSubscription_ajv.stripePaymentIntent.api},	
  },{
    required: ['boberdooId'],
    properties: { apicolname: loSubscription_ajv.boberdooId.api},	
  },{
    required: ['bundleTitle'],
    properties: { apicolname: loSubscription_ajv.bundleTitle.api},	
  },{
    required: ['cancelTime'],
    properties: { apicolname: loSubscription_ajv.cancelTime.api},	
  },{
    required: ['companyId'],
    properties: { apicolname: loSubscription_ajv.companyId.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: loSubscription_ajv.createRequest.api},	
  },{
    required: ['currentStep'],
    properties: { apicolname: loSubscription_ajv.currentStep.api},	
  },{
    required: ['dailyBudgetLimit'],
    properties: { apicolname: loSubscription_ajv.dailyBudgetLimit.api},	
  },{
    required: ['deactivateTime'],
    properties: { apicolname: loSubscription_ajv.deactivateTime.api},	
  },{
    required: ['finishTime'],
    properties: { apicolname: loSubscription_ajv.finishTime.api},	
  },{
    required: ['price'],
    properties: { apicolname: loSubscription_ajv.price.api},	
  },{
    required: ['productId'],
    properties: { apicolname: loSubscription_ajv.productId.api},	
  },{
    required: ['transferPriceSubscriptionItemId'],
    properties: { apicolname: loSubscription_ajv.transferPriceSubscriptionItemId.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loSubscription_ajv.updateRequest.api},	
  },{
    required: ['activeLeadTransfer'],
    properties: { apicolname: loSubscription_ajv.activeLeadTransfer.api},	
  },{
    required: ['callCenterService'],
    properties: { apicolname: loSubscription_ajv.callCenterService.api},	
  },{
    required: ['creditStatus'],
    properties: { apicolname: loSubscription_ajv.creditStatus.api},	
  },{
    required: ['scheduleFrom'],
    properties: { apicolname: loSubscription_ajv.scheduleFrom.api},	
  },{
    required: ['scheduleTo'],
    properties: { apicolname: loSubscription_ajv.scheduleTo.api},	
  },{
    required: ['primaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.primaryPhoneType.api},	
  },{
    required: ['primaryPhone'],
    properties: { apicolname: loSubscription_ajv.primaryPhone.api},	
  },{
    required: ['secondaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneType.api},	
  },{
    required: ['secondaryPhoneVerified'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneVerified.api},	
  },{
    required: ['alertList'],
    properties: { apicolname: loSubscription_ajv.alertList.api},	
  },{
    required: ['addressCountry'],
    properties: { apicolname: loSubscription_ajv.addressCountry.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loSubscription_ajv.addressState.api},	
  },{
    required: ['addressStreet2'],
    properties: { apicolname: loSubscription_ajv.addressStreet2.api},	
  },{
    required: ['addressZip'],
    properties: { apicolname: loSubscription_ajv.addressZip.api},	
  },{
    required: ['preferredmeetingplaceCity'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCity.api},	
  },{
    required: ['preferredmeetingplaceState'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceState.api},	
  },{
    required: ['preferredmeetingplaceStreet2'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet2.api},	
  },{
    required: ['preferredmeetingplaceStreet3'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet3.api},	
  },{
    required: ['county'],
    properties: { apicolname: loSubscription_ajv.county.api},	
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
    required: ['loanType'],
    properties: { apicolname: loSubscription_ajv.loanType.api},	
  },{
    required: ['totalMatchAmount'],
    properties: { apicolname: loSubscription_ajv.totalMatchAmount.api},	
  },{
    required: ['totalLeadsMatched'],
    properties: { apicolname: loSubscription_ajv.totalLeadsMatched.api},	
  },{
    required: ['totalCredited'],
    properties: { apicolname: loSubscription_ajv.totalCredited.api},	
  },{
    required: ['leadCategory'],
    properties: { apicolname: loSubscription_ajv.leadCategory.api},	
  },]
};

export default ajvInstance.compile(loSubscription_schema);
