import ajvInstance from '../ajv-instance';
import { loSubscription_ajv } from '../mapper_ajv';


const loSubscription_schema = {
  type: 'object',
  properties: {
    id: loSubscription_ajv.id.api,
    stripeSubscription: loSubscription_ajv.stripeSubscription.api,
    stripeStatus: loSubscription_ajv.stripeStatus.api,
    stripePaymentIntent: loSubscription_ajv.stripePaymentIntent.api,
    autoBilling: loSubscription_ajv.autoBilling.api,
    boberdooId: loSubscription_ajv.boberdooId.api,
    boberdooBalance: loSubscription_ajv.boberdooBalance.api,
    bundleTitle: loSubscription_ajv.bundleTitle.api,
    cancelTime: loSubscription_ajv.cancelTime.api,
    companyId: loSubscription_ajv.companyId.api,
    currentStep: loSubscription_ajv.currentStep.api,
    dailyBudgetLimit: loSubscription_ajv.dailyBudgetLimit.api,
    dailyUnitLimit: loSubscription_ajv.dailyUnitLimit.api,
    deactivateTime: loSubscription_ajv.deactivateTime.api,
    deactivateReason: loSubscription_ajv.deactivateReason.api,
    finishTime: loSubscription_ajv.finishTime.api,
    inactive: loSubscription_ajv.inactive.api,
    price: loSubscription_ajv.price.api,
    priceSubscriptionItemId: loSubscription_ajv.priceSubscriptionItemId.api,
    productId: loSubscription_ajv.productId.api,
    transferPrice: loSubscription_ajv.transferPrice.api,
    transferPriceSubscriptionItemId: loSubscription_ajv.transferPriceSubscriptionItemId.api,
    userId: loSubscription_ajv.userId.api,
    activeLeadTransfer: loSubscription_ajv.activeLeadTransfer.api,
    agentState: loSubscription_ajv.agentState.api,
    callCenterService: loSubscription_ajv.callCenterService.api,
    creditStatus: loSubscription_ajv.creditStatus.api,
    scheduleDays: loSubscription_ajv.scheduleDays.api,
    scheduleFrom: loSubscription_ajv.scheduleFrom.api,
    scheduleTo: loSubscription_ajv.scheduleTo.api,
    timeZone: loSubscription_ajv.timeZone.api,
    primaryPhoneType: loSubscription_ajv.primaryPhoneType.api,
    primaryPhone: loSubscription_ajv.primaryPhone.api,
    primaryPhoneVerified: loSubscription_ajv.primaryPhoneVerified.api,
    secondaryPhoneType: loSubscription_ajv.secondaryPhoneType.api,
    secondaryPhone: loSubscription_ajv.secondaryPhone.api,
    secondaryPhoneVerified: loSubscription_ajv.secondaryPhoneVerified.api,
    alertList: loSubscription_ajv.alertList.api,
    addressCity: loSubscription_ajv.addressCity.api,
    addressCountry: loSubscription_ajv.addressCountry.api,
    addressState: loSubscription_ajv.addressState.api,
    addressStreet: loSubscription_ajv.addressStreet.api,
    addressStreet2: loSubscription_ajv.addressStreet2.api,
    addressStreet3: loSubscription_ajv.addressStreet3.api,
    addressZip: loSubscription_ajv.addressZip.api,
    preferredmeetingplaceCity: loSubscription_ajv.preferredmeetingplaceCity.api,
    preferredmeetingplaceCountry: loSubscription_ajv.preferredmeetingplaceCountry.api,
    preferredmeetingplaceState: loSubscription_ajv.preferredmeetingplaceState.api,
    preferredmeetingplaceStreet: loSubscription_ajv.preferredmeetingplaceStreet.api,
    preferredmeetingplaceStreet2: loSubscription_ajv.preferredmeetingplaceStreet2.api,
    preferredmeetingplaceStreet3: loSubscription_ajv.preferredmeetingplaceStreet3.api,
    preferredmeetingplaceZip: loSubscription_ajv.preferredmeetingplaceZip.api,
    county: loSubscription_ajv.county.api,
    preferredcommunicationscheduleDays: loSubscription_ajv.preferredcommunicationscheduleDays.api,
    preferredcommunicationscheduleFrom: loSubscription_ajv.preferredcommunicationscheduleFrom.api,
    preferredcommunicationscheduleTo: loSubscription_ajv.preferredcommunicationscheduleTo.api,
    infoEmail: loSubscription_ajv.infoEmail.api,
    infoPhone: loSubscription_ajv.infoPhone.api,
    infoName: loSubscription_ajv.infoName.api,
    infoWebsite: loSubscription_ajv.infoWebsite.api,
    leadType: loSubscription_ajv.leadType.api,
    transactionType: loSubscription_ajv.transactionType.api,
    loanRanges: loSubscription_ajv.loanRanges.api,
    loanType: loSubscription_ajv.loanType.api,
    vendors: loSubscription_ajv.vendors.api,
    totalMatchAmount: loSubscription_ajv.totalMatchAmount.api,
    totalTransferAmount: loSubscription_ajv.totalTransferAmount.api,
    totalLeadsMatched: loSubscription_ajv.totalLeadsMatched.api,
    totalLeadsTransfered: loSubscription_ajv.totalLeadsTransfered.api,
    totalCredited: loSubscription_ajv.totalCredited.api,
    totalRefunded: loSubscription_ajv.totalRefunded.api,
    leadCategory: loSubscription_ajv.leadCategory.api,
    weight: loSubscription_ajv.weight.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['stripeSubscription'],
  },{
    required: ['stripeStatus'],
  },{
    required: ['stripePaymentIntent'],
  },{
    required: ['autoBilling'],
  },{
    required: ['boberdooId'],
  },{
    required: ['boberdooBalance'],
  },{
    required: ['bundleTitle'],
  },{
    required: ['cancelTime'],
  },{
    required: ['companyId'],
  },{
    required: ['currentStep'],
  },{
    required: ['dailyBudgetLimit'],
  },{
    required: ['dailyUnitLimit'],
  },{
    required: ['deactivateTime'],
  },{
    required: ['deactivateReason'],
  },{
    required: ['finishTime'],
  },{
    required: ['inactive'],
  },{
    required: ['price'],
  },{
    required: ['priceSubscriptionItemId'],
  },{
    required: ['productId'],
  },{
    required: ['transferPrice'],
  },{
    required: ['transferPriceSubscriptionItemId'],
  },{
    required: ['userId'],
  },{
    required: ['activeLeadTransfer'],
  },{
    required: ['agentState'],
  },{
    required: ['callCenterService'],
  },{
    required: ['creditStatus'],
  },{
    required: ['scheduleDays'],
  },{
    required: ['scheduleFrom'],
  },{
    required: ['scheduleTo'],
  },{
    required: ['timeZone'],
  },{
    required: ['primaryPhoneType'],
  },{
    required: ['primaryPhone'],
  },{
    required: ['primaryPhoneVerified'],
  },{
    required: ['secondaryPhoneType'],
  },{
    required: ['secondaryPhone'],
  },{
    required: ['secondaryPhoneVerified'],
  },{
    required: ['alertList'],
  },{
    required: ['addressCity'],
  },{
    required: ['addressCountry'],
  },{
    required: ['addressState'],
  },{
    required: ['addressStreet'],
  },{
    required: ['addressStreet2'],
  },{
    required: ['addressStreet3'],
  },{
    required: ['addressZip'],
  },{
    required: ['preferredmeetingplaceCity'],
  },{
    required: ['preferredmeetingplaceCountry'],
  },{
    required: ['preferredmeetingplaceState'],
  },{
    required: ['preferredmeetingplaceStreet'],
  },{
    required: ['preferredmeetingplaceStreet2'],
  },{
    required: ['preferredmeetingplaceStreet3'],
  },{
    required: ['preferredmeetingplaceZip'],
  },{
    required: ['county'],
  },{
    required: ['preferredcommunicationscheduleDays'],
  },{
    required: ['preferredcommunicationscheduleFrom'],
  },{
    required: ['preferredcommunicationscheduleTo'],
  },{
    required: ['infoEmail'],
  },{
    required: ['infoPhone'],
  },{
    required: ['infoName'],
  },{
    required: ['infoWebsite'],
  },{
    required: ['leadType'],
  },{
    required: ['transactionType'],
  },{
    required: ['loanRanges'],
  },{
    required: ['loanType'],
  },{
    required: ['vendors'],
  },{
    required: ['totalMatchAmount'],
  },{
    required: ['totalTransferAmount'],
  },{
    required: ['totalLeadsMatched'],
  },{
    required: ['totalLeadsTransfered'],
  },{
    required: ['totalCredited'],
  },{
    required: ['totalRefunded'],
  },{
    required: ['leadCategory'],
  },{
    required: ['weight'],
  },]
};

export default ajvInstance.compile(loSubscription_schema);
