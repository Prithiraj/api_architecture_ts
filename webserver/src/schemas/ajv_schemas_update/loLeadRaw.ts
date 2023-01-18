import ajvInstance from '../ajv-instance';
import { loLeadRaw_ajv } from '../mapper_ajv';


const loLeadRaw_schema = {
  type: 'object',
  properties: {
    id: loLeadRaw_ajv.id.api,
    cost: loLeadRaw_ajv.cost.api,
    allowedTimesSold: loLeadRaw_ajv.allowedTimesSold.api,
    returnHashType: loLeadRaw_ajv.returnHashType.api,
    returnHashValueType: loLeadRaw_ajv.returnHashValueType.api,
    skipPartnerId: loLeadRaw_ajv.skipPartnerId.api,
    srcId: loLeadRaw_ajv.srcId.api,
    type: loLeadRaw_ajv.type.api,
    testLead: loLeadRaw_ajv.testLead.api,
    skipXsl: loLeadRaw_ajv.skipXsl.api,
    matchWithPartnerId: loLeadRaw_ajv.matchWithPartnerId.api,
    redirectUrl: loLeadRaw_ajv.redirectUrl.api,
    ipAddress: loLeadRaw_ajv.ipAddress.api,
    src: loLeadRaw_ajv.src.api,
    landingPage: loLeadRaw_ajv.landingPage.api,
    subId: loLeadRaw_ajv.subId.api,
    pubId: loLeadRaw_ajv.pubId.api,
    optout: loLeadRaw_ajv.optout.api,
    uniqueIdentifier: loLeadRaw_ajv.uniqueIdentifier.api,
    userAgent: loLeadRaw_ajv.userAgent.api,
    tcpaLanguage: loLeadRaw_ajv.tcpaLanguage.api,
    trustedFormUrl: loLeadRaw_ajv.trustedFormUrl.api,
    leadidToken: loLeadRaw_ajv.leadidToken.api,
    firstName: loLeadRaw_ajv.firstName.api,
    lastName: loLeadRaw_ajv.lastName.api,
    address: loLeadRaw_ajv.address.api,
    city: loLeadRaw_ajv.city.api,
    state: loLeadRaw_ajv.state.api,
    zip: loLeadRaw_ajv.zip.api,
    primaryPhone: loLeadRaw_ajv.primaryPhone.api,
    secondaryPhone: loLeadRaw_ajv.secondaryPhone.api,
    email: loLeadRaw_ajv.email.api,
    estimatedPurchasePrice: loLeadRaw_ajv.estimatedPurchasePrice.api,
    downPayment: loLeadRaw_ajv.downPayment.api,
    foundHome: loLeadRaw_ajv.foundHome.api,
    movingDate: loLeadRaw_ajv.movingDate.api,
    newPropertyZip: loLeadRaw_ajv.newPropertyZip.api,
    loanType: loLeadRaw_ajv.loanType.api,
    productType: loLeadRaw_ajv.productType.api,
    cashOutAmount: loLeadRaw_ajv.cashOutAmount.api,
    dob: loLeadRaw_ajv.dob.api,
    propertyType: loLeadRaw_ajv.propertyType.api,
    propertyUse: loLeadRaw_ajv.propertyUse.api,
    refiGoal: loLeadRaw_ajv.refiGoal.api,
    bankruptcyLast7Years: loLeadRaw_ajv.bankruptcyLast7Years.api,
    loanValue: loLeadRaw_ajv.loanValue.api,
    homeValue: loLeadRaw_ajv.homeValue.api,
    secondMortgage: loLeadRaw_ajv.secondMortgage.api,
    secondMortgageBalance: loLeadRaw_ajv.secondMortgageBalance.api,
    mode: loLeadRaw_ajv.mode.api,
    status: loLeadRaw_ajv.status.api,
    billingStatus: loLeadRaw_ajv.billingStatus.api,
    firstMortgageRate: loLeadRaw_ajv.firstMortgageRate.api,
    loLeadId: loLeadRaw_ajv.loLeadId.api,
    ltv: loLeadRaw_ajv.ltv.api,
    creditStatus: loLeadRaw_ajv.creditStatus.api,
    extraData: loLeadRaw_ajv.extraData.api,
    reason: loLeadRaw_ajv.reason.api,
    subscriptionId: loLeadRaw_ajv.subscriptionId.api,
    returnBestPrice: loLeadRaw_ajv.returnBestPrice.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['cost'],
  },{
    required: ['allowedTimesSold'],
  },{
    required: ['returnHashType'],
  },{
    required: ['returnHashValueType'],
  },{
    required: ['skipPartnerId'],
  },{
    required: ['srcId'],
  },{
    required: ['type'],
  },{
    required: ['testLead'],
  },{
    required: ['skipXsl'],
  },{
    required: ['matchWithPartnerId'],
  },{
    required: ['redirectUrl'],
  },{
    required: ['ipAddress'],
  },{
    required: ['src'],
  },{
    required: ['landingPage'],
  },{
    required: ['subId'],
  },{
    required: ['pubId'],
  },{
    required: ['optout'],
  },{
    required: ['uniqueIdentifier'],
  },{
    required: ['userAgent'],
  },{
    required: ['tcpaLanguage'],
  },{
    required: ['trustedFormUrl'],
  },{
    required: ['leadidToken'],
  },{
    required: ['firstName'],
  },{
    required: ['lastName'],
  },{
    required: ['address'],
  },{
    required: ['city'],
  },{
    required: ['state'],
  },{
    required: ['zip'],
  },{
    required: ['primaryPhone'],
  },{
    required: ['secondaryPhone'],
  },{
    required: ['email'],
  },{
    required: ['estimatedPurchasePrice'],
  },{
    required: ['downPayment'],
  },{
    required: ['foundHome'],
  },{
    required: ['movingDate'],
  },{
    required: ['newPropertyZip'],
  },{
    required: ['loanType'],
  },{
    required: ['productType'],
  },{
    required: ['cashOutAmount'],
  },{
    required: ['dob'],
  },{
    required: ['propertyType'],
  },{
    required: ['propertyUse'],
  },{
    required: ['refiGoal'],
  },{
    required: ['bankruptcyLast7Years'],
  },{
    required: ['loanValue'],
  },{
    required: ['homeValue'],
  },{
    required: ['secondMortgage'],
  },{
    required: ['secondMortgageBalance'],
  },{
    required: ['mode'],
  },{
    required: ['status'],
  },{
    required: ['billingStatus'],
  },{
    required: ['firstMortgageRate'],
  },{
    required: ['loLeadId'],
  },{
    required: ['ltv'],
  },{
    required: ['creditStatus'],
  },{
    required: ['extraData'],
  },{
    required: ['reason'],
  },{
    required: ['subscriptionId'],
  },{
    required: ['returnBestPrice'],
  },]
};

export default ajvInstance.compile(loLeadRaw_schema);
