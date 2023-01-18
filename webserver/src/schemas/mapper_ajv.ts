import {
  account,
  loSubscription,
  workflowtoworkflowTargetFilters,
  events,
  loLeadSource,
  stripeSubscriptionItem,
  eventCategory,
  workflowTargetFilters,
  prismaMigrations,
  engagement,
  theme,
  persons,
  template,
  templateVersion,
  eventType,
  user,
  workflow,
  loSubscriptionDailyStats,
  workflowTemplate,
  contactStatusLifecycle,
  elementVersion,
  loLeadRaw,
  property,
  eventsV2,
  contactStatus,
  page,
  workflowTemplatePermission,
  templateDependency,
  contactCustomFieldSection,
  pageVersion,
  bridgeSectionLifecycle,
  workflowState,
  routing,
  organization,
  links,
  contactTag,
  loLead,
  contactCustomField,
  partner,
  element,
  elementtotemplateVersion,
  loan,
  contact,
  contactCustomFieldValue,
  activityLog,
  incomeSource,
  contactOtherAssociates,
  bridgeContactTag,
  bridgeContactUser,
  contactReminder,
  bridgeContactContact,
  bridgeContactLoan,
  bridgeContactPartner,
  contactComment,
} from './mapper';

export const account_ajv = {
  id: {
    name: account.id.key,
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
export const loSubscription_ajv = {
  id: {
    name: loSubscription.id.key,
    api: { type: 'string' },
    required: true,
  },
  stripeStatus: {
    name: loSubscription.stripeStatus.key,
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
  cancelTime: {
    name: loSubscription.cancelTime.key,
    api: { type: 'string' },
    required: false,
  },
  createRequest: {
    name: loSubscription.createRequest.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: loSubscription.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  dailyBudgetLimit: {
    name: loSubscription.dailyBudgetLimit.key,
    api: { type: 'number' },
    required: false,
  },
  deactivateTime: {
    name: loSubscription.deactivateTime.key,
    api: { type: 'string' },
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
  transferPrice: {
    name: loSubscription.transferPrice.key,
    api: { type: 'number' },
    required: false,
  },
  updatedBy: {
    name: loSubscription.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: loSubscription.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  activeLeadTransfer: {
    name: loSubscription.activeLeadTransfer.key,
    api: { type: 'boolean' },
    required: false,
  },
  callCenterService: {
    name: loSubscription.callCenterService.key,
    api: { type: 'array' },
    required: false,
  },
  scheduleDays: {
    name: loSubscription.scheduleDays.key,
    api: { type: 'array' },
    required: false,
  },
  scheduleTo: {
    name: loSubscription.scheduleTo.key,
    api: { type: 'string' },
    required: false,
  },
  primaryPhoneType: {
    name: loSubscription.primaryPhoneType.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhoneType: {
    name: loSubscription.secondaryPhoneType.key,
    api: { type: 'string' },
    required: false,
  },
  secondaryPhone: {
    name: loSubscription.secondaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  alertList: {
    name: loSubscription.alertList.key,
    api: { type: 'array' },
    required: false,
  },
  addressCity: {
    name: loSubscription.addressCity.key,
    api: { type: 'string' },
    required: false,
  },
  addressState: {
    name: loSubscription.addressState.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet2: {
    name: loSubscription.addressStreet2.key,
    api: { type: 'string' },
    required: false,
  },
  addressStreet3: {
    name: loSubscription.addressStreet3.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceCity: {
    name: loSubscription.preferredmeetingplaceCity.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceStreet3: {
    name: loSubscription.preferredmeetingplaceStreet3.key,
    api: { type: 'string' },
    required: false,
  },
  preferredmeetingplaceZip: {
    name: loSubscription.preferredmeetingplaceZip.key,
    api: { type: 'string' },
    required: false,
  },
  preferredcommunicationscheduleDays: {
    name: loSubscription.preferredcommunicationscheduleDays.key,
    api: { type: 'array' },
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
  infoWebsite: {
    name: loSubscription.infoWebsite.key,
    api: { type: 'string' },
    required: false,
  },
  transactionType: {
    name: loSubscription.transactionType.key,
    api: { type: 'array' },
    required: false,
  },
  totalMatchAmount: {
    name: loSubscription.totalMatchAmount.key,
    api: { type: 'number' },
    required: false,
  },
  preferredmeetingplaceCountry: {
    name: loSubscription.preferredmeetingplaceCountry.key,
    api: { type: 'string' },
    required: false,
  },
  totalCredited: {
    name: loSubscription.totalCredited.key,
    api: { type: 'number' },
    required: false,
  },
  rmpptBuyerId: {
    name: loSubscription.rmpptBuyerId.key,
    api: { type: 'integer' },
    required: false,
  },
  leadCategory: {
    name: loSubscription.leadCategory.key,
    api: { type: 'array' },
    required: false,
  },
  totalLeadsMatched: {
    name: loSubscription.totalLeadsMatched.key,
    api: { type: 'integer' },
    required: false,
  },
  primaryPhone: {
    name: loSubscription.primaryPhone.key,
    api: { type: 'string' },
    required: false,
  },
  loanType: {
    name: loSubscription.loanType.key,
    api: { type: 'array' },
    required: false,
  },
  preferredmeetingplaceStreet: {
    name: loSubscription.preferredmeetingplaceStreet.key,
    api: { type: 'string' },
    required: false,
  },
};
export const workflowtoworkflowTargetFilters_ajv = {
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
  sourceId: {
    name: events.sourceId.key,
    api: { type: 'string' },
    required: false,
  },
  sourceType: {
    name: events.sourceType.key,
    api: { type: 'string' },
    required: false,
  },
  userAgent: {
    name: events.userAgent.key,
    api: { type: 'string' },
    required: false,
  },
  userPool: {
    name: events.userPool.key,
    api: { type: 'string' },
    required: false,
  },
  timezone: {
    name: events.timezone.key,
    api: { type: 'string' },
    required: false,
  },
  rawBucket: {
    name: events.rawBucket.key,
    api: { type: 'string' },
    required: false,
  },
  userType: {
    name: events.userType.key,
    api: { type: 'string' },
    required: false,
  },
  userId: {
    name: events.userId.key,
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
  color: {
    name: loLeadSource.color.key,
    api: { type: 'string' },
    required: true,
  },
  productId: {
    name: loLeadSource.productId.key,
    api: { type: 'string' },
    required: false,
  },
  tileColor: {
    name: loLeadSource.tileColor.key,
    api: { type: 'string' },
    required: true,
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
  active: {
    name: loLeadSource.active.key,
    api: { type: 'boolean' },
    required: true,
  },
  callcenter: {
    name: loLeadSource.callcenter.key,
    api: { type: 'string' },
    required: true,
  },
  dedicatedCallcenter: {
    name: loLeadSource.dedicatedCallcenter.key,
    api: { type: 'boolean' },
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
};
export const eventCategory_ajv = {
  id: {
    name: eventCategory.id.key,
    api: { type: 'integer' },
    required: true,
  },
  eventCategoryName: {
    name: eventCategory.eventCategoryName.key,
    api: { type: 'string' },
    required: true,
  },
  eventTargetedToTableName: {
    name: eventCategory.eventTargetedToTableName.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategoryDescription: {
    name: eventCategory.eventCategoryDescription.key,
    api: { type: 'string' },
    required: false,
  },
  createdAt: {
    name: eventCategory.createdAt.key,
    api: { type: 'string' },
    required: true,
  },
  updatedAt: {
    name: eventCategory.updatedAt.key,
    api: { type: 'string' },
    required: false,
  },
};
export const workflowTargetFilters_ajv = {
  id: {
    name: workflowTargetFilters.id.key,
    api: { type: 'string' },
    required: true,
  },
  query: {
    name: workflowTargetFilters.query.key,
    api: { type: 'string' },
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
  userAgent: {
    name: engagement.userAgent.key,
    api: { type: 'string' },
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
export const templateVersion_ajv = {
  accountId: {
    name: templateVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  version: {
    name: templateVersion.version.key,
    api: { type: 'string' },
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
  id: {
    name: templateVersion.id.key,
    api: { type: 'string' },
    required: true,
  },
};
export const eventType_ajv = {
  id: {
    name: eventType.id.key,
    api: { type: 'integer' },
    required: true,
  },
  eventType: {
    name: eventType.eventType.key,
    api: { type: 'string' },
    required: true,
  },
  eventTypeDescription: {
    name: eventType.eventTypeDescription.key,
    api: { type: 'string' },
    required: false,
  },
  createdAt: {
    name: eventType.createdAt.key,
    api: { type: 'string' },
    required: true,
  },
  updatedAt: {
    name: eventType.updatedAt.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategoryId: {
    name: eventType.eventCategoryId.key,
    api: { type: 'integer' },
    fk: 'eventCategory_ajv',
    required: true,
  },
  dbAction: {
    name: eventType.dbAction.key,
    api: { type: 'string' },
    required: false,
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
  createTime: {
    name: user.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: user.createRequest.key,
    api: { type: 'string' },
    required: false,
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
  email: {
    name: user.email.key,
    api: { type: 'string' },
    required: false,
  },
  emailVerified: {
    name: user.emailVerified.key,
    api: { type: 'boolean' },
    required: true,
  },
  lastname: {
    name: user.lastname.key,
    api: { type: 'string' },
    required: false,
  },
  phone: {
    name: user.phone.key,
    api: { type: 'string' },
    required: false,
  },
  phoneNumberVerified: {
    name: user.phoneNumberVerified.key,
    api: { type: 'boolean' },
    required: true,
  },
  profileImage: {
    name: user.profileImage.key,
    api: { type: 'string' },
    required: false,
  },
};
export const workflow_ajv = {
  id: {
    name: workflow.id.key,
    api: { type: 'string' },
    required: true,
  },
  sourceTemplate: {
    name: workflow.sourceTemplate.key,
    api: { type: 'string' },
    required: false,
  },
  status: {
    name: workflow.status.key,
    api: { type: 'string' },
    required: true,
  },
  steps: {
    name: workflow.steps.key,
    api: { type: 'string' },
    required: true,
  },
  targetFilter: {
    name: workflow.targetFilter.key,
    api: { type: 'string' },
    required: false,
  },
  apiVersion: {
    name: workflow.apiVersion.key,
    api: { type: 'string' },
    required: true,
  },
  firstStep: {
    name: workflow.firstStep.key,
    api: { type: 'string' },
    required: true,
  },
  flowType: {
    name: workflow.flowType.key,
    api: { type: 'string' },
    required: true,
  },
  name: {
    name: workflow.name.key,
    api: { type: 'string' },
    required: true,
  },
  recurring: {
    name: workflow.recurring.key,
    api: { type: 'string' },
    required: false,
  },
  startTime: {
    name: workflow.startTime.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: workflow.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: workflow.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  createdBy: {
    name: workflow.createdBy.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: true,
  },
  updateRequest: {
    name: workflow.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: workflow.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  retry: {
    name: workflow.retry.key,
    api: { type: 'string' },
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
export const workflowTemplate_ajv = {
  id: {
    name: workflowTemplate.id.key,
    api: { type: 'string' },
    required: true,
  },
  workflowId: {
    name: workflowTemplate.workflowId.key,
    api: { type: 'string' },
    fk: 'workflow_ajv',
    required: true,
  },
  workflowData: {
    name: workflowTemplate.workflowData.key,
    api: { type: 'string' },
    required: true,
  },
  version: {
    name: workflowTemplate.version.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: workflowTemplate.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: workflowTemplate.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: workflowTemplate.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: workflowTemplate.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: workflowTemplate.updatedBy.key,
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
export const elementVersion_ajv = {
  accountId: {
    name: elementVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  version: {
    name: elementVersion.version.key,
    api: { type: 'string' },
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
  id: {
    name: elementVersion.id.key,
    api: { type: 'string' },
    required: true,
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
  srcId: {
    name: loLeadRaw.srcId.key,
    api: { type: 'string' },
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
  matchWithPartnerId: {
    name: loLeadRaw.matchWithPartnerId.key,
    api: { type: 'array' },
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
  landingPage: {
    name: loLeadRaw.landingPage.key,
    api: { type: 'string' },
    required: false,
  },
  subId: {
    name: loLeadRaw.subId.key,
    api: { type: 'string' },
    required: false,
  },
  pubId: {
    name: loLeadRaw.pubId.key,
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
  userAgent: {
    name: loLeadRaw.userAgent.key,
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
  lastName: {
    name: loLeadRaw.lastName.key,
    api: { type: 'string' },
    required: false,
  },
  address: {
    name: loLeadRaw.address.key,
    api: { type: 'string' },
    required: false,
  },
  city: {
    name: loLeadRaw.city.key,
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
  estimatedPurchasePrice: {
    name: loLeadRaw.estimatedPurchasePrice.key,
    api: { type: 'number' },
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
  newPropertyZip: {
    name: loLeadRaw.newPropertyZip.key,
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
  propertyUse: {
    name: loLeadRaw.propertyUse.key,
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
  foreclosureLast7Years: {
    name: loLeadRaw.foreclosureLast7Years.key,
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
  secondMortgageRate: {
    name: loLeadRaw.secondMortgageRate.key,
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
  createRequest: {
    name: loLeadRaw.createRequest.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: loLeadRaw.createTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: loLeadRaw.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: loLeadRaw.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  reason: {
    name: loLeadRaw.reason.key,
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
  firstMortgageRate: {
    name: loLeadRaw.firstMortgageRate.key,
    api: { type: 'integer' },
    required: false,
  },
  loLeadId: {
    name: loLeadRaw.loLeadId.key,
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
  postal: {
    name: property.postal.key,
    api: { type: 'string' },
    required: false,
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
  propertyUnits: {
    name: property.propertyUnits.key,
    api: { type: 'number' },
    required: false,
  },
  propertyOccupancy: {
    name: property.propertyOccupancy.key,
    api: { type: 'string' },
    required: false,
  },
};
export const eventsV2_ajv = {
  eventId: {
    name: eventsV2.eventId.key,
    api: { type: 'string' },
    required: true,
  },
  eventCategoryId: {
    name: eventsV2.eventCategoryId.key,
    api: { type: 'integer' },
    fk: 'eventCategory_ajv',
    required: false,
  },
  eventCategory: {
    name: eventsV2.eventCategory.key,
    api: { type: 'string' },
    required: false,
  },
  eventTypeId: {
    name: eventsV2.eventTypeId.key,
    api: { type: 'integer' },
    fk: 'eventType_ajv',
    required: false,
  },
  eventType: {
    name: eventsV2.eventType.key,
    api: { type: 'string' },
    required: false,
  },
  eventData: {
    name: eventsV2.eventData.key,
    api: { type: 'string' },
    required: true,
  },
  eventProvider: {
    name: eventsV2.eventProvider.key,
    api: { type: 'string' },
    required: false,
  },
  rawBucket: {
    name: eventsV2.rawBucket.key,
    api: { type: 'string' },
    required: false,
  },
  rawPath: {
    name: eventsV2.rawPath.key,
    api: { type: 'string' },
    required: false,
  },
  reason: {
    name: eventsV2.reason.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: eventsV2.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  destinationLocation: {
    name: eventsV2.destinationLocation.key,
    api: { type: 'string' },
    required: false,
  },
  destinationType: {
    name: eventsV2.destinationType.key,
    api: { type: 'string' },
    required: false,
  },
  deviceIp: {
    name: eventsV2.deviceIp.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCity: {
    name: eventsV2.deviceLocationCity.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationContinent: {
    name: eventsV2.deviceLocationContinent.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCoordinatesLat: {
    name: eventsV2.deviceLocationCoordinatesLat.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCoordinatesLon: {
    name: eventsV2.deviceLocationCoordinatesLon.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationCountry: {
    name: eventsV2.deviceLocationCountry.key,
    api: { type: 'string' },
    required: false,
  },
  deviceLocationZip: {
    name: eventsV2.deviceLocationZip.key,
    api: { type: 'string' },
    required: false,
  },
  deviceTimezone: {
    name: eventsV2.deviceTimezone.key,
    api: { type: 'string' },
    required: false,
  },
  deviceType: {
    name: eventsV2.deviceType.key,
    api: { type: 'string' },
    required: false,
  },
  userPool: {
    name: eventsV2.userPool.key,
    api: { type: 'string' },
    required: false,
  },
  destinationId: {
    name: eventsV2.destinationId.key,
    api: { type: 'string' },
    required: false,
  },
  endTime: {
    name: eventsV2.endTime.key,
    api: { type: 'string' },
    required: false,
  },
  eventClass: {
    name: eventsV2.eventClass.key,
    api: { type: 'string' },
    required: false,
  },
  eventCode: {
    name: eventsV2.eventCode.key,
    api: { type: 'string' },
    required: false,
  },
  eventTime: {
    name: eventsV2.eventTime.key,
    api: { type: 'string' },
    required: true,
  },
  ownerId: {
    name: eventsV2.ownerId.key,
    api: { type: 'string' },
    required: false,
  },
  referralId: {
    name: eventsV2.referralId.key,
    api: { type: 'string' },
    required: false,
  },
  referralType: {
    name: eventsV2.referralType.key,
    api: { type: 'string' },
    required: false,
  },
  startTime: {
    name: eventsV2.startTime.key,
    api: { type: 'string' },
    required: false,
  },
  resourceType: {
    name: eventsV2.resourceType.key,
    api: { type: 'string' },
    required: false,
  },
  sourceType: {
    name: eventsV2.sourceType.key,
    api: { type: 'string' },
    required: false,
  },
  channelId: {
    name: eventsV2.channelId.key,
    api: { type: 'string' },
    required: false,
  },
  channelType: {
    name: eventsV2.channelType.key,
    api: { type: 'string' },
    required: false,
  },
  timeZone: {
    name: eventsV2.timeZone.key,
    api: { type: 'string' },
    required: false,
  },
  message: {
    name: eventsV2.message.key,
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
  themeId: {
    name: page.themeId.key,
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
  category: {
    name: page.category.key,
    api: { type: 'string' },
    required: false,
  },
  type: {
    name: page.type.key,
    api: { type: 'string' },
    required: true,
  },
  status: {
    name: page.status.key,
    api: { type: 'string' },
    required: false,
  },
  ownerId: {
    name: page.ownerId.key,
    api: { type: 'string' },
    required: true,
  },
  headerMeta: {
    name: page.headerMeta.key,
    api: { type: 'string' },
    required: false,
  },
};
export const workflowTemplatePermission_ajv = {
  id: {
    name: workflowTemplatePermission.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: workflowTemplatePermission.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  userId: {
    name: workflowTemplatePermission.userId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: true,
  },
  workflowTemplateId: {
    name: workflowTemplatePermission.workflowTemplateId.key,
    api: { type: 'string' },
    fk: 'workflowTemplate_ajv',
    required: true,
  },
  permission: {
    name: workflowTemplatePermission.permission.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: workflowTemplatePermission.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: workflowTemplatePermission.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  updateRequest: {
    name: workflowTemplatePermission.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: workflowTemplatePermission.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updatedBy: {
    name: workflowTemplatePermission.updatedBy.key,
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
  createTime: {
    name: templateDependency.createTime.key,
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
  versionId: {
    name: templateDependency.versionId.key,
    api: { type: 'string' },
    fk: 'templateVersion_ajv',
    required: true,
  },
};
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
export const pageVersion_ajv = {
  accountId: {
    name: pageVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  version: {
    name: pageVersion.version.key,
    api: { type: 'string' },
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
  id: {
    name: pageVersion.id.key,
    api: { type: 'string' },
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
export const workflowState_ajv = {
  id: {
    name: workflowState.id.key,
    api: { type: 'string' },
    required: true,
  },
  workflowId: {
    name: workflowState.workflowId.key,
    api: { type: 'string' },
    fk: 'workflow_ajv',
    required: true,
  },
  entityName: {
    name: workflowState.entityName.key,
    api: { type: 'string' },
    required: true,
  },
  apiVersion: {
    name: workflowState.apiVersion.key,
    api: { type: 'string' },
    required: true,
  },
  steps: {
    name: workflowState.steps.key,
    api: { type: 'string' },
    required: true,
  },
  createTime: {
    name: workflowState.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  createRequest: {
    name: workflowState.createRequest.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: workflowState.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: workflowState.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: workflowState.updateRequest.key,
    api: { type: 'string' },
    required: false,
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
  email: {
    name: loLead.email.key,
    api: { type: 'string' },
    required: false,
  },
  language: {
    name: loLead.language.key,
    api: { type: 'string' },
    required: false,
  },
  lastName: {
    name: loLead.lastName.key,
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
  leadCategory: {
    name: loLead.leadCategory.key,
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
  loanDownPayment: {
    name: loLead.loanDownPayment.key,
    api: { type: 'number' },
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
  transferDate: {
    name: loLead.transferDate.key,
    api: { type: 'string' },
    required: false,
  },
  firstName: {
    name: loLead.firstName.key,
    api: { type: 'string' },
    required: false,
  },
  updateRequest: {
    name: loLead.updateRequest.key,
    api: { type: 'string' },
    required: false,
  },
  addressState: {
    name: loLead.addressState.key,
    api: { type: 'string' },
    required: false,
  },
  refundedTransferPrice: {
    name: loLead.refundedTransferPrice.key,
    api: { type: 'number' },
    required: true,
  },
  addressZip: {
    name: loLead.addressZip.key,
    api: { type: 'string' },
    required: false,
  },
  transferPrice: {
    name: loLead.transferPrice.key,
    api: { type: 'number' },
    required: true,
  },
  loanPurchasePrice: {
    name: loLead.loanPurchasePrice.key,
    api: { type: 'number' },
    required: false,
  },
  creditedPrice: {
    name: loLead.creditedPrice.key,
    api: { type: 'number' },
    required: true,
  },
  creditStatus: {
    name: loLead.creditStatus.key,
    api: { type: 'string' },
    required: false,
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
  updatedBy: {
    name: partner.updatedBy.key,
    api: { type: 'string' },
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
  updateRequest: {
    name: element.updateRequest.key,
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
  latestVersionId: {
    name: element.latestVersionId.key,
    api: { type: 'string' },
    fk: 'elementVersion_ajv',
    required: true,
  },
  updateTime: {
    name: element.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
  latestTemplate: {
    name: element.latestTemplate.key,
    api: { type: 'string' },
    required: false,
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
  loanPropertyOccupancy: {
    name: loan.loanPropertyOccupancy.key,
    api: { type: 'string' },
    required: false,
  },
  loanPropertyValue: {
    name: loan.loanPropertyValue.key,
    api: { type: 'number' },
    required: false,
  },
  loanType: {
    name: loan.loanType.key,
    api: { type: 'string' },
    required: false,
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
    api: { type: 'string', not: {const: null} },
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
  homePhone: {
    name: contact.homePhone.key,
    api: { type: 'string' },
    required: false,
  },
  fico: {
    name: contact.fico.key,
    api: { type: 'integer' },
    required: false,
  },
  currentLoanId: {
    name: contact.currentLoanId.key,
    api: { type: 'string' },
    fk: 'loan_ajv',
    required: false,
  },
  desiredLoanId: {
    name: contact.desiredLoanId.key,
    api: { type: 'string' },
    fk: 'loan_ajv',
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
export const activityLog_ajv = {
  id: {
    name: activityLog.id.key,
    api: { type: 'string' },
    required: true,
  },
  eventId: {
    name: activityLog.eventId.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategoryId: {
    name: activityLog.eventCategoryId.key,
    api: { type: 'integer' },
    fk: 'eventCategory_ajv',
    required: true,
  },
  eventTypeId: {
    name: activityLog.eventTypeId.key,
    api: { type: 'integer' },
    fk: 'eventType_ajv',
    required: true,
  },
  historyData: {
    name: activityLog.historyData.key,
    api: { type: 'string' },
    required: false,
  },
  createTime: {
    name: activityLog.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  eventClass: {
    name: activityLog.eventClass.key,
    api: { type: 'string' },
    required: false,
  },
  eventData: {
    name: activityLog.eventData.key,
    api: { type: 'string' },
    required: false,
  },
  eventTime: {
    name: activityLog.eventTime.key,
    api: { type: 'string' },
    required: true,
  },
  message: {
    name: activityLog.message.key,
    api: { type: 'string' },
    required: false,
  },
  ownerId: {
    name: activityLog.ownerId.key,
    api: { type: 'string' },
    required: false,
  },
  startTime: {
    name: activityLog.startTime.key,
    api: { type: 'string' },
    required: false,
  },
  resourceType: {
    name: activityLog.resourceType.key,
    api: { type: 'string' },
    required: false,
  },
  contactId: {
    name: activityLog.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: false,
  },
  masterEventTime: {
    name: activityLog.masterEventTime.key,
    api: { type: 'string' },
    required: true,
  },
  userId: {
    name: activityLog.userId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: false,
  },
  reason: {
    name: activityLog.reason.key,
    api: { type: 'string' },
    required: false,
  },
  timeZone: {
    name: activityLog.timeZone.key,
    api: { type: 'string' },
    required: false,
  },
  eventCode: {
    name: activityLog.eventCode.key,
    api: { type: 'string' },
    required: false,
  },
  channelType: {
    name: activityLog.channelType.key,
    api: { type: 'string' },
    required: false,
  },
  eventCategory: {
    name: activityLog.eventCategory.key,
    api: { type: 'string' },
    required: true,
  },
  sourceType: {
    name: activityLog.sourceType.key,
    api: { type: 'string' },
    required: false,
  },
  endTime: {
    name: activityLog.endTime.key,
    api: { type: 'string' },
    required: false,
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
    required: false,
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
  updateTime: {
    name: incomeSource.updateTime.key,
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
export const contactReminder_ajv = {
  id: {
    name: contactReminder.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contactReminder.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  contactId: {
    name: contactReminder.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  userId: {
    name: contactReminder.userId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: true,
  },
  type: {
    name: contactReminder.type.key,
    api: { type: 'string' },
    required: true,
  },
  title: {
    name: contactReminder.title.key,
    api: { type: 'string' },
    required: false,
  },
  description: {
    name: contactReminder.description.key,
    api: { type: 'string' },
    required: false,
  },
  dueDate: {
    name: contactReminder.dueDate.key,
    api: { type: 'string' },
    required: true,
  },
  executeAt: {
    name: contactReminder.executeAt.key,
    api: { type: 'string' },
    required: true,
  },
  reminderData: {
    name: contactReminder.reminderData.key,
    api: { type: 'string' },
    required: false,
  },
  active: {
    name: contactReminder.active.key,
    api: { type: 'boolean' },
    required: true,
  },
  createTime: {
    name: contactReminder.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactReminder.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactReminder.updateTime.key,
    api: { type: 'string' },
    required: false,
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
    fk: 'contact_ajv',
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
export const contactComment_ajv = {
  id: {
    name: contactComment.id.key,
    api: { type: 'string' },
    required: true,
  },
  accountId: {
    name: contactComment.accountId.key,
    api: { type: 'string' },
    fk: 'account_ajv',
    required: true,
  },
  contactId: {
    name: contactComment.contactId.key,
    api: { type: 'string' },
    fk: 'contact_ajv',
    required: true,
  },
  userId: {
    name: contactComment.userId.key,
    api: { type: 'string' },
    fk: 'user_ajv',
    required: true,
  },
  comment: {
    name: contactComment.comment.key,
    api: { type: 'string' },
    required: true,
  },
  active: {
    name: contactComment.active.key,
    api: { type: 'boolean' },
    required: true,
  },
  createTime: {
    name: contactComment.createTime.key,
    api: { type: 'string' },
    required: true,
  },
  updatedBy: {
    name: contactComment.updatedBy.key,
    api: { type: 'string' },
    required: false,
  },
  updateTime: {
    name: contactComment.updateTime.key,
    api: { type: 'string' },
    required: false,
  },
};
