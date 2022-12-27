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
    required: ['dailyUnitLimit'],
    properties: { apicolname: loSubscription_ajv.dailyUnitLimit.api},	
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
    required: ['updatedBy'],
    properties: { apicolname: loSubscription_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loSubscription_ajv.updateTime.api},	
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
    required: ['primaryPhoneVerified'],
    properties: { apicolname: loSubscription_ajv.primaryPhoneVerified.api},	
  },{
    required: ['secondaryPhoneType'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneType.api},	
  },{
    required: ['secondaryPhoneVerified'],
    properties: { apicolname: loSubscription_ajv.secondaryPhoneVerified.api},	
  },{
    required: ['addressCity'],
    properties: { apicolname: loSubscription_ajv.addressCity.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loSubscription_ajv.addressState.api},	
  },{
    required: ['addressStreet'],
    properties: { apicolname: loSubscription_ajv.addressStreet.api},	
  },{
    required: ['addressStreet3'],
    properties: { apicolname: loSubscription_ajv.addressStreet3.api},	
  },{
    required: ['preferredmeetingplaceCity'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCity.api},	
  },{
    required: ['preferredmeetingplaceCountry'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceCountry.api},	
  },{
    required: ['preferredmeetingplaceStreet'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet.api},	
  },{
    required: ['preferredmeetingplaceStreet2'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceStreet2.api},	
  },{
    required: ['preferredmeetingplaceZip'],
    properties: { apicolname: loSubscription_ajv.preferredmeetingplaceZip.api},	
  },{
    required: ['county'],
    properties: { apicolname: loSubscription_ajv.county.api},	
  },{
    required: ['preferredcommunicationscheduleFrom'],
    properties: { apicolname: loSubscription_ajv.preferredcommunicationscheduleFrom.api},	
  },{
    required: ['infoEmail'],
    properties: { apicolname: loSubscription_ajv.infoEmail.api},	
  },{
    required: ['infoName'],
    properties: { apicolname: loSubscription_ajv.infoName.api},	
  },{
    required: ['leadType'],
    properties: { apicolname: loSubscription_ajv.leadType.api},	
  },{
    required: ['loanRanges'],
    properties: { apicolname: loSubscription_ajv.loanRanges.api},	
  },{
    required: ['vendors'],
    properties: { apicolname: loSubscription_ajv.vendors.api},	
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
