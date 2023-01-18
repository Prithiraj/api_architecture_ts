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
    required: ['provider'],
    properties: { apicolname: loLead_ajv.provider.api},	
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
    required: ['price'],
    properties: { apicolname: loLead_ajv.price.api},	
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
    required: ['addressStreet'],
    properties: { apicolname: loLead_ajv.addressStreet.api},	
  },{
    required: ['addressStreet2'],
    properties: { apicolname: loLead_ajv.addressStreet2.api},	
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
    required: ['loanTransactionType'],
    properties: { apicolname: loLead_ajv.loanTransactionType.api},	
  },{
    required: ['loLeadRawId'],
    properties: { apicolname: loLead_ajv.loLeadRawId.api},	
  },{
    required: ['creditedTransferPrice'],
    properties: { apicolname: loLead_ajv.creditedTransferPrice.api},	
  },{
    required: ['refundedPrice'],
    properties: { apicolname: loLead_ajv.refundedPrice.api},	
  },{
    required: ['transferDate'],
    properties: { apicolname: loLead_ajv.transferDate.api},	
  },{
    required: ['firstName'],
    properties: { apicolname: loLead_ajv.firstName.api},	
  },{
    required: ['addressState'],
    properties: { apicolname: loLead_ajv.addressState.api},	
  },{
    required: ['refundedTransferPrice'],
    properties: { apicolname: loLead_ajv.refundedTransferPrice.api},	
  },{
    required: ['addressZip'],
    properties: { apicolname: loLead_ajv.addressZip.api},	
  },{
    required: ['transferPrice'],
    properties: { apicolname: loLead_ajv.transferPrice.api},	
  },{
    required: ['loanPurchasePrice'],
    properties: { apicolname: loLead_ajv.loanPurchasePrice.api},	
  },{
    required: ['creditedPrice'],
    properties: { apicolname: loLead_ajv.creditedPrice.api},	
  },{
    required: ['creditStatus'],
    properties: { apicolname: loLead_ajv.creditStatus.api},	
  },]
};

export default ajvInstance.compile(loLead_schema);
