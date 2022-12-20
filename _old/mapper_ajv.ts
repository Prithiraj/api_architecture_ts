import {
  contactCustomFieldSection,
  contactStatusLifecycle,
  prismaMigrations,
  persons,
  stripeSubscriptionItem,
  theme,
  engagement,
  loLeadSource,
  account,
  contactTag,
  property,
  elementVersion,
  events,
  loSubscription,
  loSubscriptionDailyStats,
  template,
  contactCustomField,
  pageVersion,
  user,
  loLeadRaw,
  contactStatus,
  bridgeSectionLifecycle,
  templateVersion,
  organization,
  page,
  partner,
  element,
  loLead,
  templateDependency,
  routing,
  links,
  elementtotemplateVersion,
  contact,
  contactCustomFieldValue,
  loan,
  contactOtherAssociates,
  bridgeContactTag,
  incomeSource,
  bridgeContactPartner,
  bridgeContactLoan,
  bridgeContactContact,
  bridgeContactUser,
} from 'src/schemas/mapper';

export const contactCustomFieldSection_ajv = {
  id: {
    name: contactCustomFieldSection.id.key,
    api: { type: 'string' },
    required: true,
  },
  sectionName: {
    name: contactCustomFieldSection.sectionName.key,
    api: { type: 'string' },
    required: true,
  },
  isDeleted: {
    name: contactCustomFieldSection.isDeleted.key,
    api: { type: 'boolean' },
    required: true,
  },
  createdBy: {
    name: contactCustomFieldSection.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contactCustomFieldSection.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contactCustomFieldSection.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactCustomFieldSection.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactCustomFieldSection.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contactCustomFieldSection.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
};
export const contactStatusLifecycle_ajv = {
  id: {
    name: contactStatusLifecycle.id.key,
    api: { type: 'string' },
    required: true,
  },
  lifecycleName: {
    name: contactStatusLifecycle.lifecycleName.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: contactStatusLifecycle.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contactStatusLifecycle.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contactStatusLifecycle.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactStatusLifecycle.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactStatusLifecycle.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contactStatusLifecycle.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  isDeleted: {
    name: contactStatusLifecycle.isDeleted.key,
    api: { type: 'boolean' },
    required: true,
  },
};
export const prismaMigrations_ajv = {
  id: {
    name: prismaMigrations.id.key,
    api: { type: 'string' },
    required: true,
  },
  checksum: {
    name: prismaMigrations.checksum.key,
    api: { type: 'string' },
    required: true,
  },
  finishedAt: {
    name: prismaMigrations.finishedAt.key,
    api: { type: 'string' },
    required: false,
  },
  migrationName: {
    name: prismaMigrations.migrationName.key,
    api: { type: 'string' },
    required: true,
  },
  logs: {
    name: prismaMigrations.logs.key,
    api: { type: 'string' },
    required: false,
  },
  rolledBackAt: {
    name: prismaMigrations.rolledBackAt.key,
    api: { type: 'string' },
    required: false,
  },
  startedAt: {
    name: prismaMigrations.startedAt.key,
    api: { type: 'string' },
    required: true,
  },
  appliedStepsCount: {
    name: prismaMigrations.appliedStepsCount.key,
    api: { type: 'integer' },
    required: true,
  },
};
export const persons_ajv = {
  personid: {
    name: persons.personid.key,
    api: { type: 'integer' },
    required: true,
  },
  lastname: {
    name: persons.lastname.key,
    api: { type: 'string' },
    required: false,
  },
  firstname: {
    name: persons.firstname.key,
    api: { type: 'string' },
    required: false,
  },
  address: {
    name: persons.address.key,
    api: { type: 'string' },
    required: false,
  },
  city: {
    name: persons.city.key,
    api: { type: 'string' },
    required: false,
  },
};
export const stripeSubscriptionItem_ajv = {
  id: {
    name: stripeSubscriptionItem.id.key,
    api: { type: 'string' },
    required: true,
  },
  stripePrice: {
    name: stripeSubscriptionItem.stripePrice.key,
    api: { type: 'string' },
    required: false,
  },
  isTransferPrice: {
    name: stripeSubscriptionItem.isTransferPrice.key,
    api: { type: 'boolean' },
    required: false,
  },
};
export const theme_ajv = {
  id: {
    name: theme.id.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: theme.name.key,
    api: { type: 'string' },
    required: false,
  },
  theme: {
    name: theme.theme.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: theme.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: theme.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: theme.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: theme.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: theme.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: theme.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const engagement_ajv = {
  parentId: {
    name: engagement.parentId.key,
    api: { type: 'string' },
    required: false,
  },
  eventId: {
    name: engagement.eventId.key,
    api: { type: 'string' },
    required: true,
  },
  rawBucket: {
    name: engagement.rawBucket.key,
    api: { type: 'string' },
    required: false,
  },
  rawPath: {
    name: engagement.rawPath.key,
    api: { type: 'string' },
    required: false,
  },
  eventClass: {
    name: engagement.eventClass.key,
    api: { type: 'string' },
    required: false,
  },
  eventType: {
    name: engagement.eventType.key,
    api: { type: 'string' },
    required: false,
  },
  eventTime: {
    name: engagement.eventTime.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: engagement.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  eventProvider: {
    name: engagement.eventProvider.key,
    api: { type: 'string' },
    required: false,
  },
  eventAction: {
    name: engagement.eventAction.key,
    api: { type: 'string' },
    required: false,
  },
  eventName: {
    name: engagement.eventName.key,
    api: { type: 'string' },
    required: false,
  },
  eventGroup: {
    name: engagement.eventGroup.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategory: {
    name: engagement.eventCategory.key,
    api: { type: 'string' },
    required: false,
  },
  eventCode: {
    name: engagement.eventCode.key,
    api: { type: 'string' },
    required: false,
  },
  eventSeverity: {
    name: engagement.eventSeverity.key,
    api: { type: 'string' },
    required: false,
  },
  outcome: {
    name: engagement.outcome.key,
    api: { type: 'string' },
    required: false,
  },
  message: {
    name: engagement.message.key,
    api: { type: 'string' },
    required: false,
  },
  reason: {
    name: engagement.reason.key,
    api: { type: 'string' },
    required: false,
  },
  timezone: {
    name: engagement.timezone.key,
    api: { type: 'string' },
    required: false,
  },
  startTime: {
    name: engagement.startTime.key,
    api: { type: 'string' },
    required: false,
  },
  endTime: {
    name: engagement.endTime.key,
    api: { type: 'string' },
    required: false,
  },
  eventData: {
    name: engagement.eventData.key,
    api: { type: 'string' },
    required: false,
  },
  channelId: {
    name: engagement.channelId.key,
    api: { type: 'string' },
    required: false,
  },
  channelType: {
    name: engagement.channelType.key,
    api: { type: 'string' },
    required: false,
  },
  resourceId: {
    name: engagement.resourceId.key,
    api: { type: 'string' },
    required: false,
  },
  resourceType: {
    name: engagement.resourceType.key,
    api: { type: 'string' },
    required: false,
  },
  sourceId: {
    name: engagement.sourceId.key,
    api: { type: 'string' },
    required: false,
  },
  sourceType: {
    name: engagement.sourceType.key,
    api: { type: 'string' },
    required: false,
  },
  userAgent: {
    name: engagement.userAgent.key,
    api: { type: 'string' },
    required: false,
  },
  userId: {
    name: engagement.userId.key,
    api: { type: 'string' },
    required: false,
  },
  userPool: {
    name: engagement.userPool.key,
    api: { type: 'string' },
    required: false,
  },
  userType: {
    name: engagement.userType.key,
    api: { type: 'string' },
    required: false,
  },
  testCol01: {
    name: engagement.testCol01.key,
    api: { type: 'string' },
    required: false,
  },
};
export const loLeadSource_ajv = {
  id: {
    name: loLeadSource.id.key,
    api: { type: 'string' },
    required: true,
  },
  productId: {
    name: loLeadSource.productId.key,
    api: { type: 'string' },
    required: false,
  },
  tileDescription: {
    name: loLeadSource.tileDescription.key,
    api: { type: 'string' },
    required: true,
  },
  tileHighlights: {
    name: loLeadSource.tileHighlights.key,
    api: { type: 'array' },
    required: false,
  },
  title: {
    name: loLeadSource.title.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: loLeadSource.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loLeadSource.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  callcenter: {
    name: loLeadSource.callcenter.key,
    api: { type: 'string' },
    required: true,
  },
  notificationEmails: {
    name: loLeadSource.notificationEmails.key,
    api: { type: 'array' },
    required: false,
  },
  order: {
    name: loLeadSource.order.key,
    api: { type: 'integer' },
    required: false,
  },
};
export const account_ajv = {
  id: {
    name: account.id.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: account.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: account.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: account.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: account.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: account.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: account.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
};
export const contactTag_ajv = {
  id: {
    name: contactTag.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contactTag.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  name: {
    name: contactTag.name.key,
    api: { type: 'string' },
    required: true,
  },
  order: {
    name: contactTag.order.key,
    api: { type: 'integer' },
    required: true,
  },
  createdBy: {
    name: contactTag.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contactTag.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contactTag.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactTag.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactTag.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contactTag.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
};
export const property_ajv = {
  id: {
    name: property.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: property.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  type: {
    name: property.type.key,
    api: { type: 'string' },
    required: true,
  },
  units: {
    name: property.units.key,
    api: { type: 'number' },
    required: false,
  },
  street1: {
    name: property.street1.key,
    api: { type: 'string' },
    required: false,
  },
  street2: {
    name: property.street2.key,
    api: { type: 'string' },
    required: false,
  },
  city: {
    name: property.city.key,
    api: { type: 'string' },
    required: false,
  },
  state: {
    name: property.state.key,
    api: { type: 'string' },
    required: false,
  },
  country: {
    name: property.country.key,
    api: { type: 'string' },
    required: false,
  },
  taxes: {
    name: property.taxes.key,
    api: { type: 'number' },
    required: false,
  },
  miscExp: {
    name: property.miscExp.key,
    api: { type: 'number' },
    required: false,
  },
  rentalIncome: {
    name: property.rentalIncome.key,
    api: { type: 'number' },
    required: false,
  },
  squareFootage: {
    name: property.squareFootage.key,
    api: { type: 'number' },
    required: false,
  },
  bedrooms: {
    name: property.bedrooms.key,
    api: { type: 'number' },
    required: false,
  },
  baths: {
    name: property.baths.key,
    api: { type: 'number' },
    required: false,
  },
  createdBy: {
    name: property.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: property.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: property.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: property.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: property.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: property.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  actualValue: {
    name: property.actualValue.key,
    api: { type: 'number' },
    required: false,
  },
  estimatedValue: {
    name: property.estimatedValue.key,
    api: { type: 'number' },
    required: false,
  },
  hazardInsurance: {
    name: property.hazardInsurance.key,
    api: { type: 'number' },
    required: false,
  },
  occupancy: {
    name: property.occupancy.key,
    api: { type: 'string' },
    required: false,
  },
};
export const elementVersion_ajv = {
  accountId: {
    name: elementVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  elementId: {
    name: elementVersion.elementId.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: elementVersion.name.key,
    api: { type: 'string' },
    required: false,
  },
  data: {
    name: elementVersion.data.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: elementVersion.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: elementVersion.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: elementVersion.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: elementVersion.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: elementVersion.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: elementVersion.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const events_ajv = {
  eventAction: {
    name: events.eventAction.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategory: {
    name: events.eventCategory.key,
    api: { type: 'string' },
    required: false,
  },
  eventClass: {
    name: events.eventClass.key,
    api: { type: 'string' },
    required: false,
  },
  eventCode: {
    name: events.eventCode.key,
    api: { type: 'string' },
    required: false,
  },
  eventData: {
    name: events.eventData.key,
    api: { type: 'string' },
    required: false,
  },
  eventGroup: {
    name: events.eventGroup.key,
    api: { type: 'string' },
    required: false,
  },
  eventId: {
    name: events.eventId.key,
    api: { type: 'string' },
    required: true,
  },
  eventName: {
    name: events.eventName.key,
    api: { type: 'string' },
    required: false,
  },
  eventProvider: {
    name: events.eventProvider.key,
    api: { type: 'string' },
    required: false,
  },
  eventSeverity: {
    name: events.eventSeverity.key,
    api: { type: 'string' },
    required: false,
  },
  eventType: {
    name: events.eventType.key,
    api: { type: 'string' },
    required: false,
  },
  message: {
    name: events.message.key,
    api: { type: 'string' },
    required: false,
  },
  outcome: {
    name: events.outcome.key,
    api: { type: 'string' },
    required: false,
  },
  parentId: {
    name: events.parentId.key,
    api: { type: 'string' },
    required: false,
  },
  rawBucket: {
    name: events.rawBucket.key,
    api: { type: 'string' },
    required: false,
  },
  rawPath: {
    name: events.rawPath.key,
    api: { type: 'string' },
    required: false,
  },
  reason: {
    name: events.reason.key,
    api: { type: 'string' },
    required: false,
  },
  timezone: {
    name: events.timezone.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: events.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  endTime: {
    name: events.endTime.key,
    api: { type: 'string' },
    required: false,
  },
  eventTime: {
    name: events.eventTime.key,
    api: { type: 'string' },
    required: false,
  },
  startTime: {
    name: events.startTime.key,
    api: { type: 'string' },
    required: false,
  },
  destinationId: {
    name: events.destinationId.key,
    api: { type: 'string' },
    required: false,
  },
  channelId: {
    name: events.channelId.key,
    api: { type: 'string' },
    required: false,
  },
  channelType: {
    name: events.channelType.key,
    api: { type: 'string' },
    required: false,
  },
  destinationLocation: {
    name: events.destinationLocation.key,
    api: { type: 'string' },
    required: false,
  },
  destinationType: {
    name: events.destinationType.key,
    api: { type: 'string' },
    required: false,
  },
  deviceIp: {
    name: events.deviceIp.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCity: {
    name: events.deviceLocationCity.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationContinent: {
    name: events.deviceLocationContinent.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCoordinatesLat: {
    name: events.deviceLocationCoordinatesLat.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCoordinatesLon: {
    name: events.deviceLocationCoordinatesLon.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCountry: {
    name: events.deviceLocationCountry.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationZip: {
    name: events.deviceLocationZip.key,
    api: { type: 'string' },
    required: false,
  },
  deviceTimezone: {
    name: events.deviceTimezone.key,
    api: { type: 'string' },
    required: false,
  },
  deviceType: {
    name: events.deviceType.key,
    api: { type: 'string' },
    required: false,
  },
  referralId: {
    name: events.referralId.key,
    api: { type: 'string' },
    required: false,
  },
  referralType: {
    name: events.referralType.key,
    api: { type: 'string' },
    required: false,
  },
  resourceId: {
    name: events.resourceId.key,
    api: { type: 'string' },
    required: false,
  },
  resourceType: {
    name: events.resourceType.key,
    api: { type: 'string' },
    required: false,
  },
  sourceId: {
    name: events.sourceId.key,
    api: { type: 'string' },
    required: false,
  },
  userAgent: {
    name: events.userAgent.key,
    api: { type: 'string' },
    required: false,
  },
  userId: {
    name: events.userId.key,
    api: { type: 'string' },
    required: false,
  },
  userPool: {
    name: events.userPool.key,
    api: { type: 'string' },
    required: false,
  },
  userType: {
    name: events.userType.key,
    api: { type: 'string' },
    required: false,
  },
};
export const loSubscription_ajv = {
  id: {
    name: loSubscription.id.key,
    api: { type: 'string' },
    required: true,
  },
  stripeSubscription: {
    name: loSubscription.stripeSubscription.key,
    api: { type: 'string' },
    required: false,
  },
  stripePaymentIntent: {
    name: loSubscription.stripePaymentIntent.key,
    api: { type: 'string' },
    required: false,
  },
  autoBilling: {
    name: loSubscription.autoBilling.key,
    api: { type: 'boolean' },
    required: false,
  },
  boberdooBalance: {
    name: loSubscription.boberdooBalance.key,
    api: { type: 'number' },
    required: false,
  },
  bundleTitle: {
    name: loSubscription.bundleTitle.key,
    api: { type: 'string' },
    required: false,
  },
  cancelTime: {
    name: loSubscription.cancelTime.key,
    api: { type: 'string' },
    required: false,
  },
  companyId: {
    name: loSubscription.companyId.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: loSubscription.createdBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: loSubscription.createRequest.key,
    api: { type: 'string' },
    required: false,
  },
  currentStep: {
    name: loSubscription.currentStep.key,
    api: { type: 'string' },
    required: false,
  },
  dailyBudgetLimit: {
    name: loSubscription.dailyBudgetLimit.key,
    api: { type: 'number' },
    required: false,
  },
  dailyUnitLimit: {
    name: loSubscription.dailyUnitLimit.key,
    api: { type: 'integer' },
    required: false,
  },
  deactivateReason: {
    name: loSubscription.deactivateReason.key,
    api: { type: 'string' },
    required: false,
  },
  inactive: {
    name: loSubscription.inactive.key,
    api: { type: 'boolean' },
    required: false,
  },
  price: {
    name: loSubscription.price.key,
    api: { type: 'number' },
    required: false,
  },
  productId: {
    name: loSubscription.productId.key,
    api: { type: 'string' },
    required: false,
  },
  transferPriceSubscriptionItemId: {
    name: loSubscription.transferPriceSubscriptionItemId.key,
    api: { type: 'string' },
    fk: 'stripeSubscriptionItem_ajv',
    required: false,
  },
  updateRequest: {
    name: loSubscription.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  activeLeadTransfer: {
    name: loSubscription.activeLeadTransfer.key,
    api: { type: 'boolean' },
    required: false,
  },
  agentState: {
    name: loSubscription.agentState.key,
    api: { type: 'string' },
    required: false,
  },
  creditStatus: {
    name: loSubscription.creditStatus.key,
    api: { type: 'array' },
    required: false,
  },
  scheduleDays: {
    name: loSubscription.scheduleDays.key,
    api: { type: 'array' },
    required: false,
  },
  scheduleFrom: {
    name: loSubscription.scheduleFrom.key,
    api: { type: 'string' },
    required: false,
  },
  timeZone: {
    name: loSubscription.timeZone.key,
    api: { type: 'string' },
    required: false,
  },
  primaryPhone: {
    name: loSubscription.primaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhoneType: {
    name: loSubscription.secondaryPhoneType.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhoneVerified: {
    name: loSubscription.secondaryPhoneVerified.key,
    api: { type: 'boolean' },
    required: false,
  },
  addressCity: {
    name: loSubscription.addressCity.key,
    api: { type: 'string' },
    required: false,
  },
  addressCountry: {
    name: loSubscription.addressCountry.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet: {
    name: loSubscription.addressStreet.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet2: {
    name: loSubscription.addressStreet2.key,
    api: { type: 'string' },
    required: false,
  },
  addressZip: {
    name: loSubscription.addressZip.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceCountry: {
    name: loSubscription.preferredmeetingplaceCountry.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceStreet: {
    name: loSubscription.preferredmeetingplaceStreet.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceStreet3: {
    name: loSubscription.preferredmeetingplaceStreet3.key,
    api: { type: 'string' },
    required: false,
  },
  county: {
    name: loSubscription.county.key,
    api: { type: 'string' },
    required: false,
  },
  preferredcommunicationscheduleFrom: {
    name: loSubscription.preferredcommunicationscheduleFrom.key,
    api: { type: 'string' },
    required: false,
  },
  preferredcommunicationscheduleTo: {
    name: loSubscription.preferredcommunicationscheduleTo.key,
    api: { type: 'string' },
    required: false,
  },
  infoPhone: {
    name: loSubscription.infoPhone.key,
    api: { type: 'string' },
    required: false,
  },
  infoName: {
    name: loSubscription.infoName.key,
    api: { type: 'string' },
    required: false,
  },
  leadType: {
    name: loSubscription.leadType.key,
    api: { type: 'array' },
    required: false,
  },
  transactionType: {
    name: loSubscription.transactionType.key,
    api: { type: 'array' },
    required: false,
  },
  loanType: {
    name: loSubscription.loanType.key,
    api: { type: 'array' },
    required: false,
  },
  totalMatchAmount: {
    name: loSubscription.totalMatchAmount.key,
    api: { type: 'number' },
    required: false,
  },
  totalLeadsMatched: {
    name: loSubscription.totalLeadsMatched.key,
    api: { type: 'integer' },
    required: false,
  },
  totalCredited: {
    name: loSubscription.totalCredited.key,
    api: { type: 'number' },
    required: false,
  },
  leadCategory: {
    name: loSubscription.leadCategory.key,
    api: { type: 'array' },
    required: false,
  },
};
export const loSubscriptionDailyStats_ajv = {
  loSubscriptionId: {
    name: loSubscriptionDailyStats.loSubscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription_ajv',
    required: true,
  },
  totalMatchAmount: {
    name: loSubscriptionDailyStats.totalMatchAmount.key,
    api: { type: 'number' },
    required: false,
  },
  totalTransferAmount: {
    name: loSubscriptionDailyStats.totalTransferAmount.key,
    api: { type: 'number' },
    required: false,
  },
  totalLeadsMatched: {
    name: loSubscriptionDailyStats.totalLeadsMatched.key,
    api: { type: 'integer' },
    required: false,
  },
  totalLeadsTransfered: {
    name: loSubscriptionDailyStats.totalLeadsTransfered.key,
    api: { type: 'integer' },
    required: false,
  },
  createdBy: {
    name: loSubscriptionDailyStats.createdBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: loSubscriptionDailyStats.createRequest.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: loSubscriptionDailyStats.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: loSubscriptionDailyStats.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: loSubscriptionDailyStats.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loSubscriptionDailyStats.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  statsDate: {
    name: loSubscriptionDailyStats.statsDate.key,
    api: { type: 'string' },
    required: true,
  },
};
export const template_ajv = {
  accountId: {
    name: template.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  id: {
    name: template.id.key,
    api: { type: 'string' },
    required: true,
  },
  type: {
    name: template.type.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: template.name.key,
    api: { type: 'string' },
    required: true,
  },
  data: {
    name: template.data.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: template.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  thumbnail: {
    name: template.thumbnail.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: template.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: template.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: template.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: template.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: template.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const contactCustomField_ajv = {
  id: {
    name: contactCustomField.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contactCustomField.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  name: {
    name: contactCustomField.name.key,
    api: { type: 'string' },
    required: true,
  },
  internalName: {
    name: contactCustomField.internalName.key,
    api: { type: 'string' },
    required: true,
  },
  type: {
    name: contactCustomField.type.key,
    api: { type: 'string' },
    required: true,
  },
  order: {
    name: contactCustomField.order.key,
    api: { type: 'integer' },
    required: true,
  },
  purpose: {
    name: contactCustomField.purpose.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: contactCustomField.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contactCustomField.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contactCustomField.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactCustomField.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactCustomField.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contactCustomField.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  sectionId: {
    name: contactCustomField.sectionId.key,
    api: { type: 'string' },
    fk: 'contactCustomFieldSection_ajv',
    required: false,
  },
  isDeleted: {
    name: contactCustomField.isDeleted.key,
    api: { type: 'boolean' },
    required: true,
  },
};
export const pageVersion_ajv = {
  accountId: {
    name: pageVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  pageId: {
    name: pageVersion.pageId.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: pageVersion.name.key,
    api: { type: 'string' },
    required: false,
  },
  body: {
    name: pageVersion.body.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: pageVersion.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: pageVersion.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: pageVersion.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: pageVersion.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: pageVersion.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: pageVersion.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const user_ajv = {
  id: {
    name: user.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: user.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  userType: {
    name: user.userType.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: user.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: user.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: user.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: user.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: user.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: user.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
};
export const loLeadRaw_ajv = {
  id: {
    name: loLeadRaw.id.key,
    api: { type: 'integer' },
    required: true,
  },
  cost: {
    name: loLeadRaw.cost.key,
    api: { type: 'number' },
    required: false,
  },
  allowedTimesSold: {
    name: loLeadRaw.allowedTimesSold.key,
    api: { type: 'integer' },
    required: false,
  },
  returnHashType: {
    name: loLeadRaw.returnHashType.key,
    api: { type: 'string' },
    required: false,
  },
  returnHashValueType: {
    name: loLeadRaw.returnHashValueType.key,
    api: { type: 'string' },
    required: false,
  },
  skipPartnerId: {
    name: loLeadRaw.skipPartnerId.key,
    api: { type: 'string' },
    required: false,
  },
  returnBestPrice: {
    name: loLeadRaw.returnBestPrice.key,
    api: { type: 'integer' },
    required: false,
  },
  type: {
    name: loLeadRaw.type.key,
    api: { type: 'integer' },
    required: false,
  },
  testLead: {
    name: loLeadRaw.testLead.key,
    api: { type: 'integer' },
    required: false,
  },
  skipXsl: {
    name: loLeadRaw.skipXsl.key,
    api: { type: 'integer' },
    required: false,
  },
  redirectUrl: {
    name: loLeadRaw.redirectUrl.key,
    api: { type: 'string' },
    required: false,
  },
  ipAddress: {
    name: loLeadRaw.ipAddress.key,
    api: { type: 'string' },
    required: false,
  },
  src: {
    name: loLeadRaw.src.key,
    api: { type: 'string' },
    required: false,
  },
  subId: {
    name: loLeadRaw.subId.key,
    api: { type: 'string' },
    required: false,
  },
  optout: {
    name: loLeadRaw.optout.key,
    api: { type: 'string' },
    required: false,
  },
  uniqueIdentifier: {
    name: loLeadRaw.uniqueIdentifier.key,
    api: { type: 'string' },
    required: false,
  },
  tcpaConsent: {
    name: loLeadRaw.tcpaConsent.key,
    api: { type: 'string' },
    required: false,
  },
  tcpaLanguage: {
    name: loLeadRaw.tcpaLanguage.key,
    api: { type: 'string' },
    required: false,
  },
  trustedFormUrl: {
    name: loLeadRaw.trustedFormUrl.key,
    api: { type: 'string' },
    required: false,
  },
  leadidToken: {
    name: loLeadRaw.leadidToken.key,
    api: { type: 'string' },
    required: false,
  },
  firstName: {
    name: loLeadRaw.firstName.key,
    api: { type: 'string' },
    required: false,
  },
  address: {
    name: loLeadRaw.address.key,
    api: { type: 'string' },
    required: false,
  },
  state: {
    name: loLeadRaw.state.key,
    api: { type: 'string' },
    required: false,
  },
  zip: {
    name: loLeadRaw.zip.key,
    api: { type: 'string' },
    required: false,
  },
  primaryPhone: {
    name: loLeadRaw.primaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhone: {
    name: loLeadRaw.secondaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  email: {
    name: loLeadRaw.email.key,
    api: { type: 'string' },
    required: false,
  },
  downPayment: {
    name: loLeadRaw.downPayment.key,
    api: { type: 'number' },
    required: false,
  },
  foundHome: {
    name: loLeadRaw.foundHome.key,
    api: { type: 'string' },
    required: false,
  },
  movingDate: {
    name: loLeadRaw.movingDate.key,
    api: { type: 'string' },
    required: false,
  },
  loanType: {
    name: loLeadRaw.loanType.key,
    api: { type: 'string' },
    required: false,
  },
  productType: {
    name: loLeadRaw.productType.key,
    api: { type: 'string' },
    required: false,
  },
  cashOutAmount: {
    name: loLeadRaw.cashOutAmount.key,
    api: { type: 'number' },
    required: false,
  },
  dob: {
    name: loLeadRaw.dob.key,
    api: { type: 'string' },
    required: false,
  },
  propertyType: {
    name: loLeadRaw.propertyType.key,
    api: { type: 'string' },
    required: false,
  },
  refiGoal: {
    name: loLeadRaw.refiGoal.key,
    api: { type: 'string' },
    required: false,
  },
  workingWithAnAgent: {
    name: loLeadRaw.workingWithAnAgent.key,
    api: { type: 'string' },
    required: false,
  },
  bankruptcyLast7Years: {
    name: loLeadRaw.bankruptcyLast7Years.key,
    api: { type: 'string' },
    required: false,
  },
  creditStatus: {
    name: loLeadRaw.creditStatus.key,
    api: { type: 'string' },
    required: false,
  },
  loanValue: {
    name: loLeadRaw.loanValue.key,
    api: { type: 'number' },
    required: false,
  },
  homeValue: {
    name: loLeadRaw.homeValue.key,
    api: { type: 'number' },
    required: false,
  },
  firstMortgageRate: {
    name: loLeadRaw.firstMortgageRate.key,
    api: { type: 'integer' },
    required: false,
  },
  secondMortgage: {
    name: loLeadRaw.secondMortgage.key,
    api: { type: 'string' },
    required: false,
  },
  secondMortgageBalance: {
    name: loLeadRaw.secondMortgageBalance.key,
    api: { type: 'number' },
    required: false,
  },
  ltv: {
    name: loLeadRaw.ltv.key,
    api: { type: 'integer' },
    required: false,
  },
  ssn: {
    name: loLeadRaw.ssn.key,
    api: { type: 'string' },
    required: false,
  },
  mode: {
    name: loLeadRaw.mode.key,
    api: { type: 'string' },
    required: false,
  },
  status: {
    name: loLeadRaw.status.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: loLeadRaw.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: loLeadRaw.createdBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loLeadRaw.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: loLeadRaw.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  loLeadId: {
    name: loLeadRaw.loLeadId.key,
    api: { type: 'string' },
    required: false,
  },
  extraData: {
    name: loLeadRaw.extraData.key,
    api: { type: 'string' },
    required: false,
  },
  subscriptionId: {
    name: loLeadRaw.subscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription_ajv',
    required: false,
  },
  billingStatus: {
    name: loLeadRaw.billingStatus.key,
    api: { type: 'string' },
    required: false,
  },
};
export const contactStatus_ajv = {
  id: {
    name: contactStatus.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contactStatus.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  name: {
    name: contactStatus.name.key,
    api: { type: 'string' },
    required: true,
  },
  order: {
    name: contactStatus.order.key,
    api: { type: 'integer' },
    required: true,
  },
  createdBy: {
    name: contactStatus.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contactStatus.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contactStatus.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactStatus.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactStatus.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contactStatus.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  isConverted: {
    name: contactStatus.isConverted.key,
    api: { type: 'boolean' },
    required: true,
  },
  statusLifecycleId: {
    name: contactStatus.statusLifecycleId.key,
    api: { type: 'string' },
    fk: 'contactStatusLifecycle_ajv',
    required: false,
  },
  isDeleted: {
    name: contactStatus.isDeleted.key,
    api: { type: 'boolean' },
    required: true,
  },
};
export const bridgeSectionLifecycle_ajv = {
  id: {
    name: bridgeSectionLifecycle.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: bridgeSectionLifecycle.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  customFieldSectionId: {
    name: bridgeSectionLifecycle.customFieldSectionId.key,
    api: { type: 'string' },
    fk: 'contactCustomFieldSection_ajv',
    required: true,
  },
  lifecycleId: {
    name: bridgeSectionLifecycle.lifecycleId.key,
    api: { type: 'string' },
    fk: 'contactStatusLifecycle_ajv',
    required: true,
  },
};
export const templateVersion_ajv = {
  accountId: {
    name: templateVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  type: {
    name: templateVersion.type.key,
    api: { type: 'string' },
    required: false,
  },
  name: {
    name: templateVersion.name.key,
    api: { type: 'string' },
    required: false,
  },
  data: {
    name: templateVersion.data.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: templateVersion.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: templateVersion.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: templateVersion.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: templateVersion.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: templateVersion.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: templateVersion.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const organization_ajv = {
  id: {
    name: organization.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: organization.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  addressId: {
    name: organization.addressId.key,
    api: { type: 'string' },
    fk: 'property_ajv',
    required: false,
  },
  name: {
    name: organization.name.key,
    api: { type: 'string' },
    required: false,
  },
  type: {
    name: organization.type.key,
    api: { type: 'string' },
    required: false,
  },
  phone: {
    name: organization.phone.key,
    api: { type: 'string' },
    required: false,
  },
  email: {
    name: organization.email.key,
    api: { type: 'string' },
    required: false,
  },
  nmlsId: {
    name: organization.nmlsId.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: organization.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: organization.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: organization.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: organization.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: organization.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: organization.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  parentOrganizationId: {
    name: organization.parentOrganizationId.key,
    api: { type: 'string' },
    fk: 'organization_ajv',
    required: false,
  },
};
export const page_ajv = {
  accountId: {
    name: page.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  id: {
    name: page.id.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: page.name.key,
    api: { type: 'string' },
    required: true,
  },
  body: {
    name: page.body.key,
    api: { type: 'string' },
    required: true,
  },
  templateId: {
    name: page.templateId.key,
    api: { type: 'string' },
    fk: 'template_ajv',
    required: false,
  },
  latestTemplate: {
    name: page.latestTemplate.key,
    api: { type: 'string' },
    fk: 'templateVersion_ajv',
    required: false,
  },
  path: {
    name: page.path.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: page.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  headerMeta: {
    name: page.headerMeta.key,
    api: { type: 'string' },
    required: false,
  },
  themeId: {
    name: page.themeId.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: page.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: page.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: page.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: page.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: page.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  type: {
    name: page.type.key,
    api: { type: 'string' },
    required: true,
  },
};
export const partner_ajv = {
  id: {
    name: partner.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: partner.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  organizationId: {
    name: partner.organizationId.key,
    api: { type: 'string' },
    fk: 'organization_ajv',
    required: false,
  },
  type: {
    name: partner.type.key,
    api: { type: 'string' },
    required: false,
  },
  firstName: {
    name: partner.firstName.key,
    api: { type: 'string' },
    required: true,
  },
  lastName: {
    name: partner.lastName.key,
    api: { type: 'string' },
    required: true,
  },
  personalEmail: {
    name: partner.personalEmail.key,
    api: { type: 'string' },
    required: false,
  },
  workEmail: {
    name: partner.workEmail.key,
    api: { type: 'string' },
    required: false,
  },
  mobilePhone: {
    name: partner.mobilePhone.key,
    api: { type: 'string' },
    required: false,
  },
  workPhone: {
    name: partner.workPhone.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: partner.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: partner.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: partner.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: partner.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: partner.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: partner.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  addressId: {
    name: partner.addressId.key,
    api: { type: 'string' },
    fk: 'property_ajv',
    required: false,
  },
};
export const element_ajv = {
  accountId: {
    name: element.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  latestVersion: {
    name: element.latestVersion.key,
    api: { type: 'string' },
    fk: 'elementVersion_ajv',
    required: false,
  },
  templateId: {
    name: element.templateId.key,
    api: { type: 'string' },
    fk: 'template_ajv',
    required: false,
  },
  id: {
    name: element.id.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: element.name.key,
    api: { type: 'string' },
    required: true,
  },
  data: {
    name: element.data.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: element.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  type: {
    name: element.type.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: element.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: element.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: element.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: element.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: element.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const loLead_ajv = {
  id: {
    name: loLead.id.key,
    api: { type: 'string' },
    required: true,
  },
  assignmentId: {
    name: loLead.assignmentId.key,
    api: { type: 'string' },
    required: false,
  },
  billed: {
    name: loLead.billed.key,
    api: { type: 'boolean' },
    required: true,
  },
  boberdooId: {
    name: loLead.boberdooId.key,
    api: { type: 'integer' },
    required: false,
  },
  callCenterService: {
    name: loLead.callCenterService.key,
    api: { type: 'string' },
    required: false,
  },
  companyId: {
    name: loLead.companyId.key,
    api: { type: 'string' },
    required: false,
  },
  creditStatus: {
    name: loLead.creditStatus.key,
    api: { type: 'string' },
    required: false,
  },
  email: {
    name: loLead.email.key,
    api: { type: 'string' },
    required: false,
  },
  firstName: {
    name: loLead.firstName.key,
    api: { type: 'string' },
    required: false,
  },
  language: {
    name: loLead.language.key,
    api: { type: 'string' },
    required: false,
  },
  ownerId: {
    name: loLead.ownerId.key,
    api: { type: 'string' },
    required: false,
  },
  phone: {
    name: loLead.phone.key,
    api: { type: 'string' },
    required: false,
  },
  productId: {
    name: loLead.productId.key,
    api: { type: 'string' },
    required: false,
  },
  provider: {
    name: loLead.provider.key,
    api: { type: 'string' },
    required: false,
  },
  vendor: {
    name: loLead.vendor.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhone: {
    name: loLead.secondaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  source: {
    name: loLead.source.key,
    api: { type: 'string' },
    required: false,
  },
  subscriptionId: {
    name: loLead.subscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription_ajv',
    required: true,
  },
  price: {
    name: loLead.price.key,
    api: { type: 'number' },
    required: true,
  },
  transferStatus: {
    name: loLead.transferStatus.key,
    api: { type: 'string' },
    required: false,
  },
  leadType: {
    name: loLead.leadType.key,
    api: { type: 'string' },
    required: false,
  },
  addressCity: {
    name: loLead.addressCity.key,
    api: { type: 'string' },
    required: false,
  },
  addressCountry: {
    name: loLead.addressCountry.key,
    api: { type: 'string' },
    required: false,
  },
  addressState: {
    name: loLead.addressState.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet: {
    name: loLead.addressStreet.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet2: {
    name: loLead.addressStreet2.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet3: {
    name: loLead.addressStreet3.key,
    api: { type: 'string' },
    required: false,
  },
  addressZip: {
    name: loLead.addressZip.key,
    api: { type: 'string' },
    required: false,
  },
  loanInterestRate: {
    name: loLead.loanInterestRate.key,
    api: { type: 'number' },
    required: false,
  },
  loanMonthlyPayment: {
    name: loLead.loanMonthlyPayment.key,
    api: { type: 'number' },
    required: false,
  },
  loanTransactionType: {
    name: loLead.loanTransactionType.key,
    api: { type: 'string' },
    required: false,
  },
  loanType: {
    name: loLead.loanType.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: loLead.createRequest.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: loLead.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: loLead.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: loLead.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loLead.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  loLeadRawId: {
    name: loLead.loLeadRawId.key,
    api: { type: 'integer' },
    fk: 'loLeadRaw_ajv',
    required: false,
  },
  loanRange: {
    name: loLead.loanRange.key,
    api: { type: 'string' },
    required: false,
  },
  creditedTransferPrice: {
    name: loLead.creditedTransferPrice.key,
    api: { type: 'number' },
    required: true,
  },
  refundedPrice: {
    name: loLead.refundedPrice.key,
    api: { type: 'number' },
    required: true,
  },
  refundedTransferPrice: {
    name: loLead.refundedTransferPrice.key,
    api: { type: 'number' },
    required: true,
  },
  transferDate: {
    name: loLead.transferDate.key,
    api: { type: 'string' },
    required: false,
  },
};
export const templateDependency_ajv = {
  id: {
    name: templateDependency.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: templateDependency.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  templateId: {
    name: templateDependency.templateId.key,
    api: { type: 'string' },
    fk: 'template_ajv',
    required: true,
  },
  version: {
    name: templateDependency.version.key,
    api: { type: 'string' },
    fk: 'templateVersion_ajv',
    required: true,
  },
  createTime: {
    name: templateDependency.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: templateDependency.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: templateDependency.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: templateDependency.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: templateDependency.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: templateDependency.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const routing_ajv = {
  accountId: {
    name: routing.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  subdomain: {
    name: routing.subdomain.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: false,
  },
  path: {
    name: routing.path.key,
    api: { type: 'string' },
    required: true,
  },
  resourceId: {
    name: routing.resourceId.key,
    api: { type: 'string' },
    fk: 'page_ajv',
    required: true,
  },
  createTime: {
    name: routing.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: routing.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: routing.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: routing.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: routing.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: routing.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const links_ajv = {
  id: {
    name: links.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: links.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  sourceId: {
    name: links.sourceId.key,
    api: { type: 'string' },
    fk: 'page_ajv',
    required: true,
  },
  destinationId: {
    name: links.destinationId.key,
    api: { type: 'string' },
    fk: 'page_ajv',
    required: true,
  },
  createTime: {
    name: links.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: links.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: links.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: links.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: links.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const elementtotemplateVersion_ajv = {
  A: {
    name: elementtotemplateVersion.A.key,
    api: { type: 'string' },
    fk: 'element_ajv',
    required: true,
  },
  B: {
    name: elementtotemplateVersion.B.key,
    api: { type: 'string' },
    fk: 'templateVersion_ajv',
    required: true,
  },
};
export const contact_ajv = {
  id: {
    name: contact.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contact.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  statusId: {
    name: contact.statusId.key,
    api: { type: 'string' },
    fk: 'contactStatus_ajv',
    required: false,
  },
  addressId: {
    name: contact.addressId.key,
    api: { type: 'string' },
    fk: 'property_ajv',
    required: false,
  },
  pictureUrl: {
    name: contact.pictureUrl.key,
    api: { type: 'string' },
    required: false,
  },
  nmlsId: {
    name: contact.nmlsId.key,
    api: { type: 'string' },
    required: false,
  },
  type: {
    name: contact.type.key,
    api: { type: 'string' },
    required: true,
  },
  firstName: {
    name: contact.firstName.key,
    api: { type: 'string' },
    required: true,
  },
  lastName: {
    name: contact.lastName.key,
    api: { type: 'string' },
    required: true,
  },
  personalEmail: {
    name: contact.personalEmail.key,
    api: { type: 'string' },
    required: false,
  },
  workEmail: {
    name: contact.workEmail.key,
    api: { type: 'string' },
    required: false,
  },
  mobilePhone: {
    name: contact.mobilePhone.key,
    api: { type: 'string' },
    required: false,
  },
  workPhone: {
    name: contact.workPhone.key,
    api: { type: 'string' },
    required: false,
  },
  extraMail: {
    name: contact.extraMail.key,
    api: { type: 'array' },
    required: false,
  },
  extraPhone: {
    name: contact.extraPhone.key,
    api: { type: 'array' },
    required: false,
  },
  jobTitle: {
    name: contact.jobTitle.key,
    api: { type: 'string' },
    required: false,
  },
  maritalStatus: {
    name: contact.maritalStatus.key,
    api: { type: 'string' },
    required: false,
  },
  fico: {
    name: contact.fico.key,
    api: { type: 'string' },
    required: false,
  },
  gender: {
    name: contact.gender.key,
    api: { type: 'string' },
    required: false,
  },
  dob: {
    name: contact.dob.key,
    api: { type: 'string' },
    required: false,
  },
  creationSource: {
    name: contact.creationSource.key,
    api: { type: 'string' },
    required: true,
  },
  ssn: {
    name: contact.ssn.key,
    api: { type: 'string' },
    required: false,
  },
  leadSourceType: {
    name: contact.leadSourceType.key,
    api: { type: 'string' },
    required: false,
  },
  leadSource: {
    name: contact.leadSource.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: contact.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: contact.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: contact.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contact.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contact.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: contact.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  middleName: {
    name: contact.middleName.key,
    api: { type: 'string' },
    required: false,
  },
  autoIncrementId: {
    name: contact.autoIncrementId.key,
    api: { type: 'integer' },
    required: true,
  },
  locale: {
    name: contact.locale.key,
    api: { type: 'string' },
    required: false,
  },
  monthlyIncome: {
    name: contact.monthlyIncome.key,
    api: { type: 'number' },
    required: false,
  },
  organizationId: {
    name: contact.organizationId.key,
    api: { type: 'string' },
    fk: 'organization_ajv',
    required: false,
  },
  origin: {
    name: contact.origin.key,
    api: { type: 'string' },
    required: false,
  },
  taygoSource: {
    name: contact.taygoSource.key,
    api: { type: 'string' },
    required: false,
  },
  timezone: {
    name: contact.timezone.key,
    api: { type: 'string' },
    required: false,
  },
  isDeleted: {
    name: contact.isDeleted.key,
    api: { type: 'boolean' },
    required: true,
  },
  isConverted: {
    name: contact.isConverted.key,
    api: { type: 'boolean' },
    required: true,
  },
  statusLifecycleId: {
    name: contact.statusLifecycleId.key,
    api: { type: 'string' },
    fk: 'contactStatusLifecycle_ajv',
    required: false,
  },
};
export const contactCustomFieldValue_ajv = {
  accountId: {
    name: contactCustomFieldValue.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  contactId: {
    name: contactCustomFieldValue.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  customFieldId: {
    name: contactCustomFieldValue.customFieldId.key,
    api: { type: 'string' },
    fk: 'contactCustomField_ajv',
    required: true,
  },
  value: {
    name: contactCustomFieldValue.value.key,
    api: { type: 'string' },
    required: true,
  },
  id: {
    name: contactCustomFieldValue.id.key,
    api: { type: 'string' },
    required: true,
  },
};
export const loan_ajv = {
  id: {
    name: loan.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: loan.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  loanOfficerId: {
    name: loan.loanOfficerId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: false,
  },
  addressId: {
    name: loan.addressId.key,
    api: { type: 'string' },
    fk: 'property_ajv',
    required: false,
  },
  purpose: {
    name: loan.purpose.key,
    api: { type: 'string' },
    required: false,
  },
  type: {
    name: loan.type.key,
    api: { type: 'string' },
    required: false,
  },
  product: {
    name: loan.product.key,
    api: { type: 'string' },
    required: false,
  },
  amount: {
    name: loan.amount.key,
    api: { type: 'number' },
    required: false,
  },
  interestRate: {
    name: loan.interestRate.key,
    api: { type: 'number' },
    required: false,
  },
  term: {
    name: loan.term.key,
    api: { type: 'string' },
    required: false,
  },
  downPayment: {
    name: loan.downPayment.key,
    api: { type: 'number' },
    required: false,
  },
  remainingTerm: {
    name: loan.remainingTerm.key,
    api: { type: 'string' },
    required: false,
  },
  notes: {
    name: loan.notes.key,
    api: { type: 'string' },
    required: false,
  },
  propertyOccupancy: {
    name: loan.propertyOccupancy.key,
    api: { type: 'string' },
    required: false,
  },
  mortgageInsurance: {
    name: loan.mortgageInsurance.key,
    api: { type: 'number' },
    required: false,
  },
  status: {
    name: loan.status.key,
    api: { type: 'string' },
    required: true,
  },
  closingDate: {
    name: loan.closingDate.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: loan.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: loan.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: loan.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: loan.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loan.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: loan.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  remainingValue: {
    name: loan.remainingValue.key,
    api: { type: 'number' },
    required: false,
  },
  amortization: {
    name: loan.amortization.key,
    api: { type: 'string' },
    required: false,
  },
  desiredOrCurrent: {
    name: loan.desiredOrCurrent.key,
    api: { type: 'string' },
    required: true,
  },
  desiredCashOutAmount: {
    name: loan.desiredCashOutAmount.key,
    api: { type: 'number' },
    required: false,
  },
  desiredDownPayment: {
    name: loan.desiredDownPayment.key,
    api: { type: 'number' },
    required: false,
  },
  loanPropertyType: {
    name: loan.loanPropertyType.key,
    api: { type: 'string' },
    required: false,
  },
  loanUnits: {
    name: loan.loanUnits.key,
    api: { type: 'number' },
    required: false,
  },
  timeline: {
    name: loan.timeline.key,
    api: { type: 'string' },
    required: false,
  },
};
export const contactOtherAssociates_ajv = {
  id: {
    name: contactOtherAssociates.id.key,
    api: { type: 'string' },
    required: true,
  },
  contactId: {
    name: contactOtherAssociates.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  associateName: {
    name: contactOtherAssociates.associateName.key,
    api: { type: 'string' },
    required: true,
  },
};
export const bridgeContactTag_ajv = {
  contactId: {
    name: bridgeContactTag.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  tagId: {
    name: bridgeContactTag.tagId.key,
    api: { type: 'string' },
    fk: 'contactTag_ajv',
    required: true,
  },
  accountId: {
    name: bridgeContactTag.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  assignedBy: {
    name: bridgeContactTag.assignedBy.key,
    api: { type: 'string' },
    required: true,
  },
  assignTime: {
    name: bridgeContactTag.assignTime.key,
    api: { type: 'string' },
    required: true,
  },
  assignRequest: {
    name: bridgeContactTag.assignRequest.key,
    api: { type: 'string' },
    required: true,
  },
  id: {
    name: bridgeContactTag.id.key,
    api: { type: 'string' },
    required: true,
  },
};
export const incomeSource_ajv = {
  id: {
    name: incomeSource.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: incomeSource.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  contactId: {
    name: incomeSource.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  addressId: {
    name: incomeSource.addressId.key,
    api: { type: 'string' },
    fk: 'property_ajv',
    required: false,
  },
  organizationId: {
    name: incomeSource.organizationId.key,
    api: { type: 'string' },
    fk: 'organization_ajv',
    required: false,
  },
  type: {
    name: incomeSource.type.key,
    api: { type: 'string' },
    required: false,
  },
  employerName: {
    name: incomeSource.employerName.key,
    api: { type: 'string' },
    required: false,
  },
  title: {
    name: incomeSource.title.key,
    api: { type: 'string' },
    required: false,
  },
  phone: {
    name: incomeSource.phone.key,
    api: { type: 'string' },
    required: false,
  },
  amount: {
    name: incomeSource.amount.key,
    api: { type: 'number' },
    required: false,
  },
  incomeAmountPeriod: {
    name: incomeSource.incomeAmountPeriod.key,
    api: { type: 'string' },
    required: false,
  },
  startDate: {
    name: incomeSource.startDate.key,
    api: { type: 'string' },
    required: false,
  },
  endDate: {
    name: incomeSource.endDate.key,
    api: { type: 'string' },
    required: false,
  },
  description: {
    name: incomeSource.description.key,
    api: { type: 'string' },
    required: false,
  },
  createdBy: {
    name: incomeSource.createdBy.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: incomeSource.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: incomeSource.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: incomeSource.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: incomeSource.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: incomeSource.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  employerPhone: {
    name: incomeSource.employerPhone.key,
    api: { type: 'string' },
    required: false,
  },
  status: {
    name: incomeSource.status.key,
    api: { type: 'string' },
    required: false,
  },
};
export const bridgeContactPartner_ajv = {
  id: {
    name: bridgeContactPartner.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: bridgeContactPartner.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  contactId: {
    name: bridgeContactPartner.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  partnerId: {
    name: bridgeContactPartner.partnerId.key,
    api: { type: 'string' },
    fk: 'partner_ajv',
    required: true,
  },
  type: {
    name: bridgeContactPartner.type.key,
    api: { type: 'string' },
    required: false,
  },
  assignedBy: {
    name: bridgeContactPartner.assignedBy.key,
    api: { type: 'string' },
    required: true,
  },
  assignTime: {
    name: bridgeContactPartner.assignTime.key,
    api: { type: 'string' },
    required: true,
  },
  assignRequest: {
    name: bridgeContactPartner.assignRequest.key,
    api: { type: 'string' },
    required: true,
  },
};
export const bridgeContactLoan_ajv = {
  contactId: {
    name: bridgeContactLoan.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  loanId: {
    name: bridgeContactLoan.loanId.key,
    api: { type: 'string' },
    fk: 'loan_ajv',
    required: true,
  },
  accountId: {
    name: bridgeContactLoan.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  assignedBy: {
    name: bridgeContactLoan.assignedBy.key,
    api: { type: 'string' },
    required: true,
  },
  assignTime: {
    name: bridgeContactLoan.assignTime.key,
    api: { type: 'string' },
    required: true,
  },
  assignRequest: {
    name: bridgeContactLoan.assignRequest.key,
    api: { type: 'string' },
    required: true,
  },
  type: {
    name: bridgeContactLoan.type.key,
    api: { type: 'string' },
    required: true,
  },
  id: {
    name: bridgeContactLoan.id.key,
    api: { type: 'string' },
    required: true,
  },
};
export const bridgeContactContact_ajv = {
  contactId: {
    name: bridgeContactContact.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  accountId: {
    name: bridgeContactContact.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  assignedTo: {
    name: bridgeContactContact.assignedTo.key,
    api: { type: 'string' },
    required: true,
  },
  relationship: {
    name: bridgeContactContact.relationship.key,
    api: { type: 'string' },
    required: true,
  },
  assignedBy: {
    name: bridgeContactContact.assignedBy.key,
    api: { type: 'string' },
    required: true,
  },
  assignTime: {
    name: bridgeContactContact.assignTime.key,
    api: { type: 'string' },
    required: true,
  },
  assignRequest: {
    name: bridgeContactContact.assignRequest.key,
    api: { type: 'string' },
    required: true,
  },
  id: {
    name: bridgeContactContact.id.key,
    api: { type: 'string' },
    required: true,
  },
};
export const bridgeContactUser_ajv = {
  contactId: {
    name: bridgeContactUser.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  userId: {
    name: bridgeContactUser.userId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: true,
  },
  accountId: {
    name: bridgeContactUser.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  assignedBy: {
    name: bridgeContactUser.assignedBy.key,
    api: { type: 'string' },
    required: true,
  },
  assignTime: {
    name: bridgeContactUser.assignTime.key,
    api: { type: 'string' },
    required: true,
  },
  assignRequest: {
    name: bridgeContactUser.assignRequest.key,
    api: { type: 'string' },
    required: true,
  },
  id: {
    name: bridgeContactUser.id.key,
    api: { type: 'string' },
    required: true,
  },
};
