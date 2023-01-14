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
    required: ['stripeStatus'],
    properties: { apicolname: loSubscription_ajv.stripeStatus.api},	
  },{
    required: ['stripePaymentIntent'],
    properties: { apicolname: loSubscription_ajv.stripePaymentIntent.api},	
  },{
    required: ['boberdooId'],
    properties: { apicolname: loSubscription_ajv.boberdooId.api},	
  },{
    required: ['boberdooBalance'],
    properties: { apicolname: loSubscription_ajv.boberdooBalance.api},	
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
    required: ['deactivateTime'],
    properties: { apicolname: loSubscription_ajv.deactivateTime.api},	
  },{
    required: ['finishTime'],
    properties: { apicolname: loSubscription_ajv.finishTime.api},	
  },{
    required: ['inactive'],
    properties: { apicolname: loSubscription_ajv.inactive.api},	
  },{
    required: ['price'],
    properties: { apicolname: loSubscription_ajv.price.api},	
  },{
    required: ['priceSubscriptionItemId'],
    properties: { apicolname: loSubscription_ajv.priceSubscriptionItemId.api},	
  },{
    required: ['transferPrice'],
    properties: { apicolname: loSubscription_ajv.transferPrice.api},	
  },{
    required: ['transferPriceSubscriptionItemId'],
    properties: { apicolname: loSubscription_ajv.transferPriceSubscriptionItemId.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: loSubscription_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loSubscription_ajv.updateTime.api},	
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
    required: ['timeZone'],
    properties: { apicolname: loSubscription_ajv.timeZone.api},	
  },{
    required: ['primaryPhone'],
    properties: { apicolname: loSubscription_ajv.primaryPhone.api},	
  },{
    required: ['primaryPhoneVerified'],
    properties: { apicolname: loSubscription_ajv.primaryPhoneVerified.api},	
  },{
    required: ['secondaryPhone'],
    properties: { apicolname: loSubscription_ajv.secondaryPhone.api},	
  },{
    required: ['secondaryPhoneVerified'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneVerified.api},	
  },{
    required: ['addressCity'],
    properties: { apicolname: loSubscription_ajv.addressCity.api},	
  },{
    required: ['addressCountry'],
    properties: { apicolname: loSubscription_ajv.addressCountry.api},	
  },{
    required: ['addressStreet'],
    properties: { apicolname: loSubscription_ajv.addressStreet.api},	
  },{
    required: ['addressStreet3'],
    properties: { apicolname: loSubscription_ajv.addressStreet3.api},	
  },{
    required: ['stripeSubscription'],
    properties: { apicolname: loSubscription_ajv.stripeSubscription.api},	
  },{
    required: ['primaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.primaryPhoneType.api},	
  },{
    required: ['autoBilling'],
    properties: { apicolname: loSubscription_ajv.autoBilling.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: loSubscription_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: loSubscription_ajv.createdBy.api},	
  },{
    required: ['productId'],
    properties: { apicolname: loSubscription_ajv.productId.api},	
  },{
    required: ['dailyBudgetLimit'],
    properties: { apicolname: loSubscription_ajv.dailyBudgetLimit.api},	
  },{
    required: ['leadCategory'],
    properties: { apicolname: loSubscription_ajv.leadCategory.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loSubscription_ajv.addressState.api},	
  },{
    required: ['creditStatus'],
    properties: { apicolname: loSubscription_ajv.creditStatus.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loSubscription_ajv.updateRequest.api},	
  },{
    required: ['deactivateReason'],
    properties: { apicolname: loSubscription_ajv.deactivateReason.api},	
  },{
    required: ['activeLeadTransfer'],
    properties: { apicolname: loSubscription_ajv.activeLeadTransfer.api},	
  },{
    required: ['bundleTitle'],
    properties: { apicolname: loSubscription_ajv.bundleTitle.api},	
  },{
    required: ['scheduleFrom'],
    properties: { apicolname: loSubscription_ajv.scheduleFrom.api},	
  },{
    required: ['totalCredited'],
    properties: { apicolname: loSubscription_ajv.totalCredited.api},	
  },{
    required: ['totalLeadsMatched'],
    properties: { apicolname: loSubscription_ajv.totalLeadsMatched.api},	
  },{
    required: ['preferredmeetingplaceStreet3'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet3.api},	
  },{
    required: ['totalMatchAmount'],
    properties: { apicolname: loSubscription_ajv.totalMatchAmount.api},	
  },{
    required: ['infoEmail'],
    properties: { apicolname: loSubscription_ajv.infoEmail.api},	
  },{
    required: ['preferredcommunicationscheduleFrom'],
    properties: { apicolname: loSubscription_ajv.preferredcommunicationscheduleFrom.api},	
  },{
    required: ['addressZip'],
    properties: { apicolname: loSubscription_ajv.addressZip.api},	
  },{
    required: ['preferredmeetingplaceCountry'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCountry.api},	
  },{
    required: ['secondaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneType.api},	
  },{
    required: ['loanType'],
    properties: { apicolname: loSubscription_ajv.loanType.api},	
  },{
    required: ['county'],
    properties: { apicolname: loSubscription_ajv.county.api},	
  },{
    required: ['dailyUnitLimit'],
    properties: { apicolname: loSubscription_ajv.dailyUnitLimit.api},	
  },{
    required: ['infoWebsite'],
    properties: { apicolname: loSubscription_ajv.infoWebsite.api},	
  },{
    required: ['transactionType'],
    properties: { apicolname: loSubscription_ajv.transactionType.api},	
  },{
    required: ['infoPhone'],
    properties: { apicolname: loSubscription_ajv.infoPhone.api},	
  },{
    required: ['agentState'],
    properties: { apicolname: loSubscription_ajv.agentState.api},	
  },{
    required: ['addressStreet2'],
    properties: { apicolname: loSubscription_ajv.addressStreet2.api},	
  },{
    required: ['preferredmeetingplaceStreet'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet.api},	
  },]
};

export default ajvInstance.compile(loSubscription_schema);
