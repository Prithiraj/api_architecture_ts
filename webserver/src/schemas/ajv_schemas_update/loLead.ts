import ajvInstance from '../ajv-instance';
import { loLead_ajv } from '../mapper_ajv';


const loLead_schema = {
  type: 'object',
  properties: {
    id: loLead_ajv.id.api,
    assignmentId: loLead_ajv.assignmentId.api,
    billed: loLead_ajv.billed.api,
    boberdooId: loLead_ajv.boberdooId.api,
    callCenterService: loLead_ajv.callCenterService.api,
    companyId: loLead_ajv.companyId.api,
    email: loLead_ajv.email.api,
    language: loLead_ajv.language.api,
    lastName: loLead_ajv.lastName.api,
    phone: loLead_ajv.phone.api,
    provider: loLead_ajv.provider.api,
    vendor: loLead_ajv.vendor.api,
    secondaryPhone: loLead_ajv.secondaryPhone.api,
    source: loLead_ajv.source.api,
    subscriptionId: loLead_ajv.subscriptionId.api,
    price: loLead_ajv.price.api,
    transferStatus: loLead_ajv.transferStatus.api,
    leadCategory: loLead_ajv.leadCategory.api,
    addressCity: loLead_ajv.addressCity.api,
    addressCountry: loLead_ajv.addressCountry.api,
    addressStreet: loLead_ajv.addressStreet.api,
    addressStreet2: loLead_ajv.addressStreet2.api,
    loanInterestRate: loLead_ajv.loanInterestRate.api,
    loanMonthlyPayment: loLead_ajv.loanMonthlyPayment.api,
    loanTransactionType: loLead_ajv.loanTransactionType.api,
    loLeadRawId: loLead_ajv.loLeadRawId.api,
    creditedTransferPrice: loLead_ajv.creditedTransferPrice.api,
    refundedPrice: loLead_ajv.refundedPrice.api,
    firstName: loLead_ajv.firstName.api,
    addressState: loLead_ajv.addressState.api,
    refundedTransferPrice: loLead_ajv.refundedTransferPrice.api,
    addressZip: loLead_ajv.addressZip.api,
    transferPrice: loLead_ajv.transferPrice.api,
    loanPurchasePrice: loLead_ajv.loanPurchasePrice.api,
    creditedPrice: loLead_ajv.creditedPrice.api,
    creditStatus: loLead_ajv.creditStatus.api,
    loanType: loLead_ajv.loanType.api,
    addressStreet3: loLead_ajv.addressStreet3.api,
    productId: loLead_ajv.productId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['assignmentId'],
  },{
    required: ['billed'],
  },{
    required: ['boberdooId'],
  },{
    required: ['callCenterService'],
  },{
    required: ['companyId'],
  },{
    required: ['email'],
  },{
    required: ['language'],
  },{
    required: ['lastName'],
  },{
    required: ['phone'],
  },{
    required: ['provider'],
  },{
    required: ['vendor'],
  },{
    required: ['secondaryPhone'],
  },{
    required: ['source'],
  },{
    required: ['subscriptionId'],
  },{
    required: ['price'],
  },{
    required: ['transferStatus'],
  },{
    required: ['leadCategory'],
  },{
    required: ['addressCity'],
  },{
    required: ['addressCountry'],
  },{
    required: ['addressStreet'],
  },{
    required: ['addressStreet2'],
  },{
    required: ['loanInterestRate'],
  },{
    required: ['loanMonthlyPayment'],
  },{
    required: ['loanTransactionType'],
  },{
    required: ['loLeadRawId'],
  },{
    required: ['creditedTransferPrice'],
  },{
    required: ['refundedPrice'],
  },{
    required: ['firstName'],
  },{
    required: ['addressState'],
  },{
    required: ['refundedTransferPrice'],
  },{
    required: ['addressZip'],
  },{
    required: ['transferPrice'],
  },{
    required: ['loanPurchasePrice'],
  },{
    required: ['creditedPrice'],
  },{
    required: ['creditStatus'],
  },{
    required: ['loanType'],
  },{
    required: ['addressStreet3'],
  },{
    required: ['productId'],
  },]
};

export default ajvInstance.compile(loLead_schema);
