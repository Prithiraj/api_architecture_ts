import ajvInstance from '../ajv-instance';
import { loLeadRaw_ajv } from '../mapper_ajv';


const loLeadRaw_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: loLeadRaw_ajv.id.api},	
  },{
    required: ['cost'],
    properties: { apicolname: loLeadRaw_ajv.cost.api},	
  },{
    required: ['allowedTimesSold'],
    properties: { apicolname: loLeadRaw_ajv.allowedTimesSold.api},	
  },{
    required: ['returnHashType'],
    properties: { apicolname: loLeadRaw_ajv.returnHashType.api},	
  },{
    required: ['returnHashValueType'],
    properties: { apicolname: loLeadRaw_ajv.returnHashValueType.api},	
  },{
    required: ['skipPartnerId'],
    properties: { apicolname: loLeadRaw_ajv.skipPartnerId.api},	
  },{
    required: ['returnBestPrice'],
    properties: { apicolname: loLeadRaw_ajv.returnBestPrice.api},	
  },{
    required: ['srcId'],
    properties: { apicolname: loLeadRaw_ajv.srcId.api},	
  },{
    required: ['type'],
    properties: { apicolname: loLeadRaw_ajv.type.api},	
  },{
    required: ['testLead'],
    properties: { apicolname: loLeadRaw_ajv.testLead.api},	
  },{
    required: ['skipXsl'],
    properties: { apicolname: loLeadRaw_ajv.skipXsl.api},	
  },{
    required: ['matchWithPartnerId'],
    properties: { apicolname: loLeadRaw_ajv.matchWithPartnerId.api},	
  },{
    required: ['redirectUrl'],
    properties: { apicolname: loLeadRaw_ajv.redirectUrl.api},	
  },{
    required: ['ipAddress'],
    properties: { apicolname: loLeadRaw_ajv.ipAddress.api},	
  },{
    required: ['src'],
    properties: { apicolname: loLeadRaw_ajv.src.api},	
  },{
    required: ['landingPage'],
    properties: { apicolname: loLeadRaw_ajv.landingPage.api},	
  },{
    required: ['subId'],
    properties: { apicolname: loLeadRaw_ajv.subId.api},	
  },{
    required: ['pubId'],
    properties: { apicolname: loLeadRaw_ajv.pubId.api},	
  },{
    required: ['optout'],
    properties: { apicolname: loLeadRaw_ajv.optout.api},	
  },{
    required: ['uniqueIdentifier'],
    properties: { apicolname: loLeadRaw_ajv.uniqueIdentifier.api},	
  },{
    required: ['userAgent'],
    properties: { apicolname: loLeadRaw_ajv.userAgent.api},	
  },{
    required: ['tcpaConsent'],
    properties: { apicolname: loLeadRaw_ajv.tcpaConsent.api},	
  },{
    required: ['tcpaLanguage'],
    properties: { apicolname: loLeadRaw_ajv.tcpaLanguage.api},	
  },{
    required: ['trustedFormUrl'],
    properties: { apicolname: loLeadRaw_ajv.trustedFormUrl.api},	
  },{
    required: ['leadidToken'],
    properties: { apicolname: loLeadRaw_ajv.leadidToken.api},	
  },{
    required: ['firstName'],
    properties: { apicolname: loLeadRaw_ajv.firstName.api},	
  },{
    required: ['lastName'],
    properties: { apicolname: loLeadRaw_ajv.lastName.api},	
  },{
    required: ['address'],
    properties: { apicolname: loLeadRaw_ajv.address.api},	
  },{
    required: ['city'],
    properties: { apicolname: loLeadRaw_ajv.city.api},	
  },{
    required: ['state'],
    properties: { apicolname: loLeadRaw_ajv.state.api},	
  },{
    required: ['zip'],
    properties: { apicolname: loLeadRaw_ajv.zip.api},	
  },{
    required: ['primaryPhone'],
    properties: { apicolname: loLeadRaw_ajv.primaryPhone.api},	
  },{
    required: ['secondaryPhone'],
    properties: { apicolname: loLeadRaw_ajv.secondaryPhone.api},	
  },{
    required: ['email'],
    properties: { apicolname: loLeadRaw_ajv.email.api},	
  },{
    required: ['estimatedPurchasePrice'],
    properties: { apicolname: loLeadRaw_ajv.estimatedPurchasePrice.api},	
  },{
    required: ['downPayment'],
    properties: { apicolname: loLeadRaw_ajv.downPayment.api},	
  },{
    required: ['foundHome'],
    properties: { apicolname: loLeadRaw_ajv.foundHome.api},	
  },{
    required: ['movingDate'],
    properties: { apicolname: loLeadRaw_ajv.movingDate.api},	
  },{
    required: ['newPropertyZip'],
    properties: { apicolname: loLeadRaw_ajv.newPropertyZip.api},	
  },{
    required: ['loanType'],
    properties: { apicolname: loLeadRaw_ajv.loanType.api},	
  },{
    required: ['productType'],
    properties: { apicolname: loLeadRaw_ajv.productType.api},	
  },{
    required: ['cashOutAmount'],
    properties: { apicolname: loLeadRaw_ajv.cashOutAmount.api},	
  },{
    required: ['dob'],
    properties: { apicolname: loLeadRaw_ajv.dob.api},	
  },{
    required: ['propertyType'],
    properties: { apicolname: loLeadRaw_ajv.propertyType.api},	
  },{
    required: ['propertyUse'],
    properties: { apicolname: loLeadRaw_ajv.propertyUse.api},	
  },{
    required: ['refiGoal'],
    properties: { apicolname: loLeadRaw_ajv.refiGoal.api},	
  },{
    required: ['workingWithAnAgent'],
    properties: { apicolname: loLeadRaw_ajv.workingWithAnAgent.api},	
  },{
    required: ['bankruptcyLast7Years'],
    properties: { apicolname: loLeadRaw_ajv.bankruptcyLast7Years.api},	
  },{
    required: ['foreclosureLast7Years'],
    properties: { apicolname: loLeadRaw_ajv.foreclosureLast7Years.api},	
  },{
    required: ['creditStatus'],
    properties: { apicolname: loLeadRaw_ajv.creditStatus.api},	
  },{
    required: ['loanValue'],
    properties: { apicolname: loLeadRaw_ajv.loanValue.api},	
  },{
    required: ['homeValue'],
    properties: { apicolname: loLeadRaw_ajv.homeValue.api},	
  },{
    required: ['firstMortgageBalance'],
    properties: { apicolname: loLeadRaw_ajv.firstMortgageBalance.api},	
  },{
    required: ['secondMortgage'],
    properties: { apicolname: loLeadRaw_ajv.secondMortgage.api},	
  },{
    required: ['secondMortgageBalance'],
    properties: { apicolname: loLeadRaw_ajv.secondMortgageBalance.api},	
  },{
    required: ['secondMortgageRate'],
    properties: { apicolname: loLeadRaw_ajv.secondMortgageRate.api},	
  },{
    required: ['ssn'],
    properties: { apicolname: loLeadRaw_ajv.ssn.api},	
  },{
    required: ['mode'],
    properties: { apicolname: loLeadRaw_ajv.mode.api},	
  },{
    required: ['status'],
    properties: { apicolname: loLeadRaw_ajv.status.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: loLeadRaw_ajv.createRequest.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: loLeadRaw_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loLeadRaw_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loLeadRaw_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: loLeadRaw_ajv.updatedBy.api},	
  },{
    required: ['reason'],
    properties: { apicolname: loLeadRaw_ajv.reason.api},	
  },{
    required: ['extraData'],
    properties: { apicolname: loLeadRaw_ajv.extraData.api},	
  },{
    required: ['subscriptionId'],
    properties: { apicolname: loLeadRaw_ajv.subscriptionId.api},	
  },{
    required: ['billingStatus'],
    properties: { apicolname: loLeadRaw_ajv.billingStatus.api},	
  },]
};

export default ajvInstance.compile(loLeadRaw_schema);
