import ajvInstance from '../ajv-instance';
import { loLead_ajv } from '../mapper_ajv';


const loLead_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: loLead_ajv.id.api},	
  },{
    required: ['assignmentId'],
    properties: { apicolname: loLead_ajv.assignmentId.api},	
  },{
    required: ['billed'],
    properties: { apicolname: loLead_ajv.billed.api},	
  },{
    required: ['boberdooId'],
    properties: { apicolname: loLead_ajv.boberdooId.api},	
  },{
    required: ['callCenterService'],
    properties: { apicolname: loLead_ajv.callCenterService.api},	
  },{
    required: ['companyId'],
    properties: { apicolname: loLead_ajv.companyId.api},	
  },{
    required: ['creditStatus'],
    properties: { apicolname: loLead_ajv.creditStatus.api},	
  },{
    required: ['email'],
    properties: { apicolname: loLead_ajv.email.api},	
  },{
    required: ['language'],
    properties: { apicolname: loLead_ajv.language.api},	
  },{
    required: ['lastName'],
    properties: { apicolname: loLead_ajv.lastName.api},	
  },{
    required: ['ownerId'],
    properties: { apicolname: loLead_ajv.ownerId.api},	
  },{
    required: ['phone'],
    properties: { apicolname: loLead_ajv.phone.api},	
  },{
    required: ['productId'],
    properties: { apicolname: loLead_ajv.productId.api},	
  },{
    required: ['vendor'],
    properties: { apicolname: loLead_ajv.vendor.api},	
  },{
    required: ['secondaryPhone'],
    properties: { apicolname: loLead_ajv.secondaryPhone.api},	
  },{
    required: ['source'],
    properties: { apicolname: loLead_ajv.source.api},	
  },{
    required: ['subscriptionId'],
    properties: { apicolname: loLead_ajv.subscriptionId.api},	
  },{
    required: ['transferPrice'],
    properties: { apicolname: loLead_ajv.transferPrice.api},	
  },{
    required: ['transferStatus'],
    properties: { apicolname: loLead_ajv.transferStatus.api},	
  },{
    required: ['leadType'],
    properties: { apicolname: loLead_ajv.leadType.api},	
  },{
    required: ['leadCategory'],
    properties: { apicolname: loLead_ajv.leadCategory.api},	
  },{
    required: ['addressCity'],
    properties: { apicolname: loLead_ajv.addressCity.api},	
  },{
    required: ['addressCountry'],
    properties: { apicolname: loLead_ajv.addressCountry.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loLead_ajv.addressState.api},	
  },{
    required: ['addressStreet'],
    properties: { apicolname: loLead_ajv.addressStreet.api},	
  },{
    required: ['addressStreet2'],
    properties: { apicolname: loLead_ajv.addressStreet2.api},	
  },{
    required: ['addressStreet3'],
    properties: { apicolname: loLead_ajv.addressStreet3.api},	
  },{
    required: ['loanDownPayment'],
    properties: { apicolname: loLead_ajv.loanDownPayment.api},	
  },{
    required: ['loanInterestRate'],
    properties: { apicolname: loLead_ajv.loanInterestRate.api},	
  },{
    required: ['loanMonthlyPayment'],
    properties: { apicolname: loLead_ajv.loanMonthlyPayment.api},	
  },{
    required: ['loanPurchasePrice'],
    properties: { apicolname: loLead_ajv.loanPurchasePrice.api},	
  },{
    required: ['loanTransactionType'],
    properties: { apicolname: loLead_ajv.loanTransactionType.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: loLead_ajv.createdBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: loLead_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: loLead_ajv.updatedBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loLead_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loLead_ajv.updateTime.api},	
  },{
    required: ['loLeadRawId'],
    properties: { apicolname: loLead_ajv.loLeadRawId.api},	
  },{
    required: ['loanRange'],
    properties: { apicolname: loLead_ajv.loanRange.api},	
  },{
    required: ['creditedPrice'],
    properties: { apicolname: loLead_ajv.creditedPrice.api},	
  },{
    required: ['refundedPrice'],
    properties: { apicolname: loLead_ajv.refundedPrice.api},	
  },{
    required: ['refundedTransferPrice'],
    properties: { apicolname: loLead_ajv.refundedTransferPrice.api},	
  },{
    required: ['transferDate'],
    properties: { apicolname: loLead_ajv.transferDate.api},	
  },]
};

export default ajvInstance.compile(loLead_schema);
