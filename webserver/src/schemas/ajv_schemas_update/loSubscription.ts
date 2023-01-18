import ajvInstance from '../ajv-instance';
import { loSubscription_ajv } from '../mapper_ajv';


const loSubscription_schema = {
  type: 'object',
  properties: {
    id: loSubscription_ajv.id.api,
    stripeStatus: loSubscription_ajv.stripeStatus.api,
    autoBilling: loSubscription_ajv.autoBilling.api,
    boberdooBalance: loSubscription_ajv.boberdooBalance.api,
    cancelTime: loSubscription_ajv.cancelTime.api,
    dailyBudgetLimit: loSubscription_ajv.dailyBudgetLimit.api,
    deactivateTime: loSubscription_ajv.deactivateTime.api,
    price: loSubscription_ajv.price.api,
    transferPrice: loSubscription_ajv.transferPrice.api,
    activeLeadTransfer: loSubscription_ajv.activeLeadTransfer.api,
    secondaryPhoneType: loSubscription_ajv.secondaryPhoneType.api,
    addressCity: loSubscription_ajv.addressCity.api,
    addressState: loSubscription_ajv.addressState.api,
    addressStreet2: loSubscription_ajv.addressStreet2.api,
    addressStreet3: loSubscription_ajv.addressStreet3.api,
    preferredmeetingplaceCity: loSubscription_ajv.preferredmeetingplaceCity.api,
    preferredmeetingplaceStreet3: loSubscription_ajv.preferredmeetingplaceStreet3.api,
    infoWebsite: loSubscription_ajv.infoWebsite.api,
    transactionType: loSubscription_ajv.transactionType.api,
    preferredmeetingplaceCountry: loSubscription_ajv.preferredmeetingplaceCountry.api,
    primaryPhone: loSubscription_ajv.primaryPhone.api,
    loanType: loSubscription_ajv.loanType.api,
    preferredmeetingplaceStreet: loSubscription_ajv.preferredmeetingplaceStreet.api,
    vendors: loSubscription_ajv.vendors.api,
    creditStatus: loSubscription_ajv.creditStatus.api,
    infoName: loSubscription_ajv.infoName.api,
    currentStep: loSubscription_ajv.currentStep.api,
    weight: loSubscription_ajv.weight.api,
    scheduleFrom: loSubscription_ajv.scheduleFrom.api,
    totalRefunded: loSubscription_ajv.totalRefunded.api,
    infoEmail: loSubscription_ajv.infoEmail.api,
    stripeSubscription: loSubscription_ajv.stripeSubscription.api,
    preferredcommunicationscheduleFrom: loSubscription_ajv.preferredcommunicationscheduleFrom.api,
    totalTransferAmount: loSubscription_ajv.totalTransferAmount.api,
    finishTime: loSubscription_ajv.finishTime.api,
    agentState: loSubscription_ajv.agentState.api,
    county: loSubscription_ajv.county.api,
    priceSubscriptionItemId: loSubscription_ajv.priceSubscriptionItemId.api,
    totalLeadsTransfered: loSubscription_ajv.totalLeadsTransfered.api,
    secondaryPhoneVerified: loSubscription_ajv.secondaryPhoneVerified.api,
    timeZone: loSubscription_ajv.timeZone.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['stripeStatus'],
  },{
    required: ['autoBilling'],
  },{
    required: ['boberdooBalance'],
  },{
    required: ['cancelTime'],
  },{
    required: ['dailyBudgetLimit'],
  },{
    required: ['deactivateTime'],
  },{
    required: ['price'],
  },{
    required: ['transferPrice'],
  },{
    required: ['activeLeadTransfer'],
  },{
    required: ['secondaryPhoneType'],
  },{
    required: ['addressCity'],
  },{
    required: ['addressState'],
  },{
    required: ['addressStreet2'],
  },{
    required: ['addressStreet3'],
  },{
    required: ['preferredmeetingplaceCity'],
  },{
    required: ['preferredmeetingplaceStreet3'],
  },{
    required: ['infoWebsite'],
  },{
    required: ['transactionType'],
  },{
    required: ['preferredmeetingplaceCountry'],
  },{
    required: ['primaryPhone'],
  },{
    required: ['loanType'],
  },{
    required: ['preferredmeetingplaceStreet'],
  },{
    required: ['vendors'],
  },{
    required: ['creditStatus'],
  },{
    required: ['infoName'],
  },{
    required: ['currentStep'],
  },{
    required: ['weight'],
  },{
    required: ['scheduleFrom'],
  },{
    required: ['totalRefunded'],
  },{
    required: ['infoEmail'],
  },{
    required: ['stripeSubscription'],
  },{
    required: ['preferredcommunicationscheduleFrom'],
  },{
    required: ['totalTransferAmount'],
  },{
    required: ['finishTime'],
  },{
    required: ['agentState'],
  },{
    required: ['county'],
  },{
    required: ['priceSubscriptionItemId'],
  },{
    required: ['totalLeadsTransfered'],
  },{
    required: ['secondaryPhoneVerified'],
  },{
    required: ['timeZone'],
  },]
};

export default ajvInstance.compile(loSubscription_schema);
