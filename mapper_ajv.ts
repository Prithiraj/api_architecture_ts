import { contactCustomFieldSection, contactStatusLifecycle, prismaMigrations, persons, theme, engagement, events, loLeadSource, account, contactTag, pageVersion, property, stripeSubscriptionItem, user, loSubscription, loSubscriptionDailyStats, contactStatus, contactCustomField, elementVersion, loLeadRaw, template, loan, templateVersion, organization, partner, loLead, bridgeSectionLifecycle, page, contact, contactCustomFieldValue, incomeSource, templateDependency, bridgeContactContact, bridgeContactTag, routing, links, bridgeContactLoan, element, bridgeContactPartner, bridgeContactUser, elementtotemplateVersion,  } from 'src/schemas/dbschemas/mapper';

export const contactCustomFieldSection_ajv = {
  id: {
    name: contactCustomFieldSection.id.key,
    api: { type: 'string' },
  },
  sectionName: {
    name: contactCustomFieldSection.sectionName.key,
    api: { type: 'string' },
  },
  isDeleted: {
    name: contactCustomFieldSection.isDeleted.key,
    api: { type: 'boolean' },
  },
  createdBy: {
    name: contactCustomFieldSection.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contactCustomFieldSection.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contactCustomFieldSection.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contactCustomFieldSection.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contactCustomFieldSection.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contactCustomFieldSection.updateRequest.key,
    api: { type: 'string' },
  },
};

export const contactStatusLifecycle_ajv = {
  id: {
    name: contactStatusLifecycle.id.key,
    api: { type: 'string' },
  },
  lifecycleName: {
    name: contactStatusLifecycle.lifecycleName.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: contactStatusLifecycle.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contactStatusLifecycle.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contactStatusLifecycle.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contactStatusLifecycle.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contactStatusLifecycle.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contactStatusLifecycle.updateRequest.key,
    api: { type: 'string' },
  },
  isDeleted: {
    name: contactStatusLifecycle.isDeleted.key,
    api: { type: 'boolean' },
  },
};

export const prismaMigrations_ajv = {
  id: {
    name: prismaMigrations.id.key,
    api: { type: 'string' },
  },
  checksum: {
    name: prismaMigrations.checksum.key,
    api: { type: 'string' },
  },
  finishedAt: {
    name: prismaMigrations.finishedAt.key,
    api: { type: 'string' },
  },
  migrationName: {
    name: prismaMigrations.migrationName.key,
    api: { type: 'string' },
  },
  logs: {
    name: prismaMigrations.logs.key,
    api: { type: 'string' },
  },
  rolledBackAt: {
    name: prismaMigrations.rolledBackAt.key,
    api: { type: 'string' },
  },
  startedAt: {
    name: prismaMigrations.startedAt.key,
    api: { type: 'string' },
  },
  appliedStepsCount: {
    name: prismaMigrations.appliedStepsCount.key,
    api: { type: 'integer' },
  },
};

export const persons_ajv = {
  personid: {
    name: persons.personid.key,
    api: { type: 'integer' },
  },
  lastname: {
    name: persons.lastname.key,
    api: { type: 'string' },
  },
  firstname: {
    name: persons.firstname.key,
    api: { type: 'string' },
  },
  address: {
    name: persons.address.key,
    api: { type: 'string' },
  },
  city: {
    name: persons.city.key,
    api: { type: 'string' },
  },
};

export const theme_ajv = {
  id: {
    name: theme.id.key,
    api: { type: 'string' },
  },
  name: {
    name: theme.name.key,
    api: { type: 'string' },
  },
  theme: {
    name: theme.theme.key,
    api: { type: 'string' },
  },
  createTime: {
    name: theme.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: theme.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: theme.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: theme.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: theme.updatedBy.key,
    api: { type: 'string' },
  },
};

export const engagement_ajv = {
  parentId: {
    name: engagement.parentId.key,
    api: { type: 'string' },
  },
  eventId: {
    name: engagement.eventId.key,
    api: { type: 'string' },
  },
  rawBucket: {
    name: engagement.rawBucket.key,
    api: { type: 'string' },
  },
  rawPath: {
    name: engagement.rawPath.key,
    api: { type: 'string' },
  },
  eventClass: {
    name: engagement.eventClass.key,
    api: { type: 'string' },
  },
  eventType: {
    name: engagement.eventType.key,
    api: { type: 'string' },
  },
  eventTime: {
    name: engagement.eventTime.key,
    api: { type: 'string' },
  },
  createTime: {
    name: engagement.createTime.key,
    api: { type: 'string' },
  },
  eventProvider: {
    name: engagement.eventProvider.key,
    api: { type: 'string' },
  },
  eventAction: {
    name: engagement.eventAction.key,
    api: { type: 'string' },
  },
  eventName: {
    name: engagement.eventName.key,
    api: { type: 'string' },
  },
  eventGroup: {
    name: engagement.eventGroup.key,
    api: { type: 'string' },
  },
  eventCategory: {
    name: engagement.eventCategory.key,
    api: { type: 'string' },
  },
  eventCode: {
    name: engagement.eventCode.key,
    api: { type: 'string' },
  },
  eventSeverity: {
    name: engagement.eventSeverity.key,
    api: { type: 'string' },
  },
  outcome: {
    name: engagement.outcome.key,
    api: { type: 'string' },
  },
  message: {
    name: engagement.message.key,
    api: { type: 'string' },
  },
  reason: {
    name: engagement.reason.key,
    api: { type: 'string' },
  },
  timezone: {
    name: engagement.timezone.key,
    api: { type: 'string' },
  },
  startTime: {
    name: engagement.startTime.key,
    api: { type: 'string' },
  },
  endTime: {
    name: engagement.endTime.key,
    api: { type: 'string' },
  },
  eventData: {
    name: engagement.eventData.key,
    api: { type: 'string' },
  },
  channelId: {
    name: engagement.channelId.key,
    api: { type: 'string' },
  },
  channelType: {
    name: engagement.channelType.key,
    api: { type: 'string' },
  },
  resourceId: {
    name: engagement.resourceId.key,
    api: { type: 'string' },
  },
  resourceType: {
    name: engagement.resourceType.key,
    api: { type: 'string' },
  },
  sourceId: {
    name: engagement.sourceId.key,
    api: { type: 'string' },
  },
  sourceType: {
    name: engagement.sourceType.key,
    api: { type: 'string' },
  },
  userAgent: {
    name: engagement.userAgent.key,
    api: { type: 'string' },
  },
  userId: {
    name: engagement.userId.key,
    api: { type: 'string' },
  },
  userPool: {
    name: engagement.userPool.key,
    api: { type: 'string' },
  },
  userType: {
    name: engagement.userType.key,
    api: { type: 'string' },
  },
  testCol01: {
    name: engagement.testCol01.key,
    api: { type: 'string' },
  },
};

export const events_ajv = {
  eventAction: {
    name: events.eventAction.key,
    api: { type: 'string' },
  },
  eventCategory: {
    name: events.eventCategory.key,
    api: { type: 'string' },
  },
  eventClass: {
    name: events.eventClass.key,
    api: { type: 'string' },
  },
  eventCode: {
    name: events.eventCode.key,
    api: { type: 'string' },
  },
  eventData: {
    name: events.eventData.key,
    api: { type: 'string' },
  },
  eventGroup: {
    name: events.eventGroup.key,
    api: { type: 'string' },
  },
  eventId: {
    name: events.eventId.key,
    api: { type: 'string' },
  },
  eventName: {
    name: events.eventName.key,
    api: { type: 'string' },
  },
  eventProvider: {
    name: events.eventProvider.key,
    api: { type: 'string' },
  },
  eventSeverity: {
    name: events.eventSeverity.key,
    api: { type: 'string' },
  },
  eventType: {
    name: events.eventType.key,
    api: { type: 'string' },
  },
  message: {
    name: events.message.key,
    api: { type: 'string' },
  },
  outcome: {
    name: events.outcome.key,
    api: { type: 'string' },
  },
  parentId: {
    name: events.parentId.key,
    api: { type: 'string' },
  },
  rawBucket: {
    name: events.rawBucket.key,
    api: { type: 'string' },
  },
  rawPath: {
    name: events.rawPath.key,
    api: { type: 'string' },
  },
  reason: {
    name: events.reason.key,
    api: { type: 'string' },
  },
  timezone: {
    name: events.timezone.key,
    api: { type: 'string' },
  },
  createTime: {
    name: events.createTime.key,
    api: { type: 'string' },
  },
  endTime: {
    name: events.endTime.key,
    api: { type: 'string' },
  },
  eventTime: {
    name: events.eventTime.key,
    api: { type: 'string' },
  },
  destinationId: {
    name: events.destinationId.key,
    api: { type: 'string' },
  },
  channelId: {
    name: events.channelId.key,
    api: { type: 'string' },
  },
  channelType: {
    name: events.channelType.key,
    api: { type: 'string' },
  },
  destinationLocation: {
    name: events.destinationLocation.key,
    api: { type: 'string' },
  },
  destinationType: {
    name: events.destinationType.key,
    api: { type: 'string' },
  },
  deviceIp: {
    name: events.deviceIp.key,
    api: { type: 'string' },
  },
  deviceLocationCity: {
    name: events.deviceLocationCity.key,
    api: { type: 'string' },
  },
  deviceLocationCoordinatesLat: {
    name: events.deviceLocationCoordinatesLat.key,
    api: { type: 'string' },
  },
  deviceLocationCoordinatesLon: {
    name: events.deviceLocationCoordinatesLon.key,
    api: { type: 'string' },
  },
  deviceLocationCountry: {
    name: events.deviceLocationCountry.key,
    api: { type: 'string' },
  },
  deviceTimezone: {
    name: events.deviceTimezone.key,
    api: { type: 'string' },
  },
  deviceType: {
    name: events.deviceType.key,
    api: { type: 'string' },
  },
  referralId: {
    name: events.referralId.key,
    api: { type: 'string' },
  },
  referralType: {
    name: events.referralType.key,
    api: { type: 'string' },
  },
  resourceId: {
    name: events.resourceId.key,
    api: { type: 'string' },
  },
  resourceType: {
    name: events.resourceType.key,
    api: { type: 'string' },
  },
  sourceId: {
    name: events.sourceId.key,
    api: { type: 'string' },
  },
  sourceType: {
    name: events.sourceType.key,
    api: { type: 'string' },
  },
  userAgent: {
    name: events.userAgent.key,
    api: { type: 'string' },
  },
  userId: {
    name: events.userId.key,
    api: { type: 'string' },
  },
  userPool: {
    name: events.userPool.key,
    api: { type: 'string' },
  },
  userType: {
    name: events.userType.key,
    api: { type: 'string' },
  },
};

export const loLeadSource_ajv = {
  id: {
    name: loLeadSource.id.key,
    api: { type: 'string' },
  },
  color: {
    name: loLeadSource.color.key,
    api: { type: 'string' },
  },
  productId: {
    name: loLeadSource.productId.key,
    api: { type: 'string' },
  },
  tileDescription: {
    name: loLeadSource.tileDescription.key,
    api: { type: 'string' },
  },
  title: {
    name: loLeadSource.title.key,
    api: { type: 'string' },
  },
  createTime: {
    name: loLeadSource.createTime.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: loLeadSource.updateTime.key,
    api: { type: 'string' },
  },
  active: {
    name: loLeadSource.active.key,
    api: { type: 'boolean' },
  },
  dedicatedCallcenter: {
    name: loLeadSource.dedicatedCallcenter.key,
    api: { type: 'boolean' },
  },
  notificationEmails: {
    name: loLeadSource.notificationEmails.key,
    api: { type: 'array' },
  },
  order: {
    name: loLeadSource.order.key,
    api: { type: 'integer' },
  },
};

export const account_ajv = {
  id: {
    name: account.id.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: account.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: account.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: account.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: account.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: account.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: account.updateRequest.key,
    api: { type: 'string' },
  },
};

export const contactTag_ajv = {
  id: {
    name: contactTag.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: contactTag.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  name: {
    name: contactTag.name.key,
    api: { type: 'string' },
  },
  order: {
    name: contactTag.order.key,
    api: { type: 'integer' },
  },
  createdBy: {
    name: contactTag.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contactTag.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contactTag.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contactTag.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contactTag.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contactTag.updateRequest.key,
    api: { type: 'string' },
  },
};

export const pageVersion_ajv = {
  accountId: {
    name: pageVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  pageId: {
    name: pageVersion.pageId.key,
    api: { type: 'string' },
  },
  name: {
    name: pageVersion.name.key,
    api: { type: 'string' },
  },
  body: {
    name: pageVersion.body.key,
    api: { type: 'string' },
  },
  createTime: {
    name: pageVersion.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: pageVersion.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: pageVersion.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: pageVersion.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: pageVersion.updatedBy.key,
    api: { type: 'string' },
  },
};

export const property_ajv = {
  id: {
    name: property.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: property.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  type: {
    name: property.type.key,
    api: { type: 'string' },
  },
  units: {
    name: property.units.key,
    api: { type: 'number' },
  },
  street1: {
    name: property.street1.key,
    api: { type: 'string' },
  },
  street2: {
    name: property.street2.key,
    api: { type: 'string' },
  },
  city: {
    name: property.city.key,
    api: { type: 'string' },
  },
  state: {
    name: property.state.key,
    api: { type: 'string' },
  },
  country: {
    name: property.country.key,
    api: { type: 'string' },
  },
  taxes: {
    name: property.taxes.key,
    api: { type: 'number' },
  },
  miscExp: {
    name: property.miscExp.key,
    api: { type: 'number' },
  },
  rentalIncome: {
    name: property.rentalIncome.key,
    api: { type: 'number' },
  },
  squareFootage: {
    name: property.squareFootage.key,
    api: { type: 'number' },
  },
  bedrooms: {
    name: property.bedrooms.key,
    api: { type: 'number' },
  },
  baths: {
    name: property.baths.key,
    api: { type: 'number' },
  },
  postal: {
    name: property.postal.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: property.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: property.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: property.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: property.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: property.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: property.updateRequest.key,
    api: { type: 'string' },
  },
  actualValue: {
    name: property.actualValue.key,
    api: { type: 'number' },
  },
  estimatedValue: {
    name: property.estimatedValue.key,
    api: { type: 'number' },
  },
  hazardInsurance: {
    name: property.hazardInsurance.key,
    api: { type: 'number' },
  },
  occupancy: {
    name: property.occupancy.key,
    api: { type: 'string' },
  },
};

export const stripeSubscriptionItem_ajv = {
  id: {
    name: stripeSubscriptionItem.id.key,
    api: { type: 'string' },
  },
  stripePrice: {
    name: stripeSubscriptionItem.stripePrice.key,
    api: { type: 'string' },
  },
  isTransferPrice: {
    name: stripeSubscriptionItem.isTransferPrice.key,
    api: { type: 'boolean' },
  },
};

export const user_ajv = {
  id: {
    name: user.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: user.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  userType: {
    name: user.userType.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: user.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: user.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: user.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: user.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: user.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: user.updateRequest.key,
    api: { type: 'string' },
  },
};

export const loSubscription_ajv = {
  id: {
    name: loSubscription.id.key,
    api: { type: 'string' },
  },
  stripeSubscription: {
    name: loSubscription.stripeSubscription.key,
    api: { type: 'string' },
  },
  stripeStatus: {
    name: loSubscription.stripeStatus.key,
    api: { type: 'string' },
  },
  stripePaymentIntent: {
    name: loSubscription.stripePaymentIntent.key,
    api: { type: 'string' },
  },
  autoBilling: {
    name: loSubscription.autoBilling.key,
    api: { type: 'boolean' },
  },
  boberdooBalance: {
    name: loSubscription.boberdooBalance.key,
    api: { type: 'number' },
  },
  cancelTime: {
    name: loSubscription.cancelTime.key,
    api: { type: 'string' },
  },
  companyId: {
    name: loSubscription.companyId.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: loSubscription.createRequest.key,
    api: { type: 'string' },
  },
  currentStep: {
    name: loSubscription.currentStep.key,
    api: { type: 'string' },
  },
  dailyUnitLimit: {
    name: loSubscription.dailyUnitLimit.key,
    api: { type: 'integer' },
  },
  deactivateReason: {
    name: loSubscription.deactivateReason.key,
    api: { type: 'string' },
  },
  inactive: {
    name: loSubscription.inactive.key,
    api: { type: 'boolean' },
  },
  price: {
    name: loSubscription.price.key,
    api: { type: 'number' },
  },
  productId: {
    name: loSubscription.productId.key,
    api: { type: 'string' },
  },
  transferPriceSubscriptionItemId: {
    name: loSubscription.transferPriceSubscriptionItemId.key,
    api: { type: 'string' },
    fk: 'stripeSubscriptionItem',
  },
  updateRequest: {
    name: loSubscription.updateRequest.key,
    api: { type: 'string' },
  },
  activeLeadTransfer: {
    name: loSubscription.activeLeadTransfer.key,
    api: { type: 'boolean' },
  },
  callCenterService: {
    name: loSubscription.callCenterService.key,
    api: { type: 'array' },
  },
  creditStatus: {
    name: loSubscription.creditStatus.key,
    api: { type: 'array' },
  },
  scheduleFrom: {
    name: loSubscription.scheduleFrom.key,
    api: { type: 'string' },
  },
  scheduleTo: {
    name: loSubscription.scheduleTo.key,
    api: { type: 'string' },
  },
  timeZone: {
    name: loSubscription.timeZone.key,
    api: { type: 'string' },
  },
  primaryPhone: {
    name: loSubscription.primaryPhone.key,
    api: { type: 'string' },
  },
  secondaryPhoneType: {
    name: loSubscription.secondaryPhoneType.key,
    api: { type: 'string' },
  },
  secondaryPhoneVerified: {
    name: loSubscription.secondaryPhoneVerified.key,
    api: { type: 'boolean' },
  },
  addressCity: {
    name: loSubscription.addressCity.key,
    api: { type: 'string' },
  },
  addressCountry: {
    name: loSubscription.addressCountry.key,
    api: { type: 'string' },
  },
  addressStreet: {
    name: loSubscription.addressStreet.key,
    api: { type: 'string' },
  },
  addressStreet3: {
    name: loSubscription.addressStreet3.key,
    api: { type: 'string' },
  },
  addressZip: {
    name: loSubscription.addressZip.key,
    api: { type: 'string' },
  },
  preferredmeetingplaceCountry: {
    name: loSubscription.preferredmeetingplaceCountry.key,
    api: { type: 'string' },
  },
  preferredmeetingplaceStreet: {
    name: loSubscription.preferredmeetingplaceStreet.key,
    api: { type: 'string' },
  },
  preferredmeetingplaceStreet3: {
    name: loSubscription.preferredmeetingplaceStreet3.key,
    api: { type: 'string' },
  },
  county: {
    name: loSubscription.county.key,
    api: { type: 'string' },
  },
  preferredcommunicationscheduleFrom: {
    name: loSubscription.preferredcommunicationscheduleFrom.key,
    api: { type: 'string' },
  },
  infoEmail: {
    name: loSubscription.infoEmail.key,
    api: { type: 'string' },
  },
  infoName: {
    name: loSubscription.infoName.key,
    api: { type: 'string' },
  },
  infoWebsite: {
    name: loSubscription.infoWebsite.key,
    api: { type: 'string' },
  },
  transactionType: {
    name: loSubscription.transactionType.key,
    api: { type: 'array' },
  },
  loanType: {
    name: loSubscription.loanType.key,
    api: { type: 'array' },
  },
  totalMatchAmount: {
    name: loSubscription.totalMatchAmount.key,
    api: { type: 'number' },
  },
  totalLeadsMatched: {
    name: loSubscription.totalLeadsMatched.key,
    api: { type: 'integer' },
  },
  totalCredited: {
    name: loSubscription.totalCredited.key,
    api: { type: 'number' },
  },
  leadCategory: {
    name: loSubscription.leadCategory.key,
    api: { type: 'array' },
  },
};

export const loSubscriptionDailyStats_ajv = {
  loSubscriptionId: {
    name: loSubscriptionDailyStats.loSubscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription',
  },
  totalMatchAmount: {
    name: loSubscriptionDailyStats.totalMatchAmount.key,
    api: { type: 'number' },
  },
  totalTransferAmount: {
    name: loSubscriptionDailyStats.totalTransferAmount.key,
    api: { type: 'number' },
  },
  totalLeadsMatched: {
    name: loSubscriptionDailyStats.totalLeadsMatched.key,
    api: { type: 'integer' },
  },
  totalLeadsTransfered: {
    name: loSubscriptionDailyStats.totalLeadsTransfered.key,
    api: { type: 'integer' },
  },
  createdBy: {
    name: loSubscriptionDailyStats.createdBy.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: loSubscriptionDailyStats.createRequest.key,
    api: { type: 'string' },
  },
  createTime: {
    name: loSubscriptionDailyStats.createTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: loSubscriptionDailyStats.updatedBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: loSubscriptionDailyStats.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: loSubscriptionDailyStats.updateTime.key,
    api: { type: 'string' },
  },
  statsDate: {
    name: loSubscriptionDailyStats.statsDate.key,
    api: { type: 'string' },
  },
};

export const contactStatus_ajv = {
  id: {
    name: contactStatus.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: contactStatus.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  name: {
    name: contactStatus.name.key,
    api: { type: 'string' },
  },
  order: {
    name: contactStatus.order.key,
    api: { type: 'integer' },
  },
  createdBy: {
    name: contactStatus.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contactStatus.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contactStatus.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contactStatus.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contactStatus.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contactStatus.updateRequest.key,
    api: { type: 'string' },
  },
  isConverted: {
    name: contactStatus.isConverted.key,
    api: { type: 'boolean' },
  },
  statusLifecycleId: {
    name: contactStatus.statusLifecycleId.key,
    api: { type: 'string' },
    fk: 'contactStatusLifecycle',
  },
  isDeleted: {
    name: contactStatus.isDeleted.key,
    api: { type: 'boolean' },
  },
};

export const contactCustomField_ajv = {
  id: {
    name: contactCustomField.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: contactCustomField.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  name: {
    name: contactCustomField.name.key,
    api: { type: 'string' },
  },
  internalName: {
    name: contactCustomField.internalName.key,
    api: { type: 'string' },
  },
  type: {
    name: contactCustomField.type.key,
    api: { type: 'string' },
  },
  order: {
    name: contactCustomField.order.key,
    api: { type: 'integer' },
  },
  purpose: {
    name: contactCustomField.purpose.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: contactCustomField.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contactCustomField.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contactCustomField.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contactCustomField.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contactCustomField.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contactCustomField.updateRequest.key,
    api: { type: 'string' },
  },
  sectionId: {
    name: contactCustomField.sectionId.key,
    api: { type: 'string' },
    fk: 'contactCustomFieldSection',
  },
  isDeleted: {
    name: contactCustomField.isDeleted.key,
    api: { type: 'boolean' },
  },
};

export const elementVersion_ajv = {
  accountId: {
    name: elementVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  elementId: {
    name: elementVersion.elementId.key,
    api: { type: 'string' },
  },
  name: {
    name: elementVersion.name.key,
    api: { type: 'string' },
  },
  data: {
    name: elementVersion.data.key,
    api: { type: 'string' },
  },
  createTime: {
    name: elementVersion.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: elementVersion.createdBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: elementVersion.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: elementVersion.updatedBy.key,
    api: { type: 'string' },
  },
};

export const loLeadRaw_ajv = {
  id: {
    name: loLeadRaw.id.key,
    api: { type: 'integer' },
  },
  cost: {
    name: loLeadRaw.cost.key,
    api: { type: 'number' },
  },
  allowedTimesSold: {
    name: loLeadRaw.allowedTimesSold.key,
    api: { type: 'integer' },
  },
  returnHashType: {
    name: loLeadRaw.returnHashType.key,
    api: { type: 'string' },
  },
  returnHashValueType: {
    name: loLeadRaw.returnHashValueType.key,
    api: { type: 'string' },
  },
  skipPartnerId: {
    name: loLeadRaw.skipPartnerId.key,
    api: { type: 'string' },
  },
  returnBestPrice: {
    name: loLeadRaw.returnBestPrice.key,
    api: { type: 'integer' },
  },
  srcId: {
    name: loLeadRaw.srcId.key,
    api: { type: 'string' },
  },
  testLead: {
    name: loLeadRaw.testLead.key,
    api: { type: 'integer' },
  },
  skipXsl: {
    name: loLeadRaw.skipXsl.key,
    api: { type: 'integer' },
  },
  matchWithPartnerId: {
    name: loLeadRaw.matchWithPartnerId.key,
    api: { type: 'array' },
  },
  redirectUrl: {
    name: loLeadRaw.redirectUrl.key,
    api: { type: 'string' },
  },
  ipAddress: {
    name: loLeadRaw.ipAddress.key,
    api: { type: 'string' },
  },
  src: {
    name: loLeadRaw.src.key,
    api: { type: 'string' },
  },
  subId: {
    name: loLeadRaw.subId.key,
    api: { type: 'string' },
  },
  pubId: {
    name: loLeadRaw.pubId.key,
    api: { type: 'string' },
  },
  optout: {
    name: loLeadRaw.optout.key,
    api: { type: 'string' },
  },
  userAgent: {
    name: loLeadRaw.userAgent.key,
    api: { type: 'string' },
  },
  tcpaConsent: {
    name: loLeadRaw.tcpaConsent.key,
    api: { type: 'string' },
  },
  tcpaLanguage: {
    name: loLeadRaw.tcpaLanguage.key,
    api: { type: 'string' },
  },
  trustedFormUrl: {
    name: loLeadRaw.trustedFormUrl.key,
    api: { type: 'string' },
  },
  leadidToken: {
    name: loLeadRaw.leadidToken.key,
    api: { type: 'string' },
  },
  firstName: {
    name: loLeadRaw.firstName.key,
    api: { type: 'string' },
  },
  address: {
    name: loLeadRaw.address.key,
    api: { type: 'string' },
  },
  city: {
    name: loLeadRaw.city.key,
    api: { type: 'string' },
  },
  zip: {
    name: loLeadRaw.zip.key,
    api: { type: 'string' },
  },
  primaryPhone: {
    name: loLeadRaw.primaryPhone.key,
    api: { type: 'string' },
  },
  secondaryPhone: {
    name: loLeadRaw.secondaryPhone.key,
    api: { type: 'string' },
  },
  email: {
    name: loLeadRaw.email.key,
    api: { type: 'string' },
  },
  estimatedPurchasePrice: {
    name: loLeadRaw.estimatedPurchasePrice.key,
    api: { type: 'number' },
  },
  downPayment: {
    name: loLeadRaw.downPayment.key,
    api: { type: 'number' },
  },
  movingDate: {
    name: loLeadRaw.movingDate.key,
    api: { type: 'string' },
  },
  loanType: {
    name: loLeadRaw.loanType.key,
    api: { type: 'string' },
  },
  productType: {
    name: loLeadRaw.productType.key,
    api: { type: 'string' },
  },
  cashOutAmount: {
    name: loLeadRaw.cashOutAmount.key,
    api: { type: 'number' },
  },
  dob: {
    name: loLeadRaw.dob.key,
    api: { type: 'string' },
  },
  propertyType: {
    name: loLeadRaw.propertyType.key,
    api: { type: 'string' },
  },
  propertyUse: {
    name: loLeadRaw.propertyUse.key,
    api: { type: 'string' },
  },
  refiGoal: {
    name: loLeadRaw.refiGoal.key,
    api: { type: 'string' },
  },
  workingWithAnAgent: {
    name: loLeadRaw.workingWithAnAgent.key,
    api: { type: 'string' },
  },
  bankruptcyLast7Years: {
    name: loLeadRaw.bankruptcyLast7Years.key,
    api: { type: 'string' },
  },
  foreclosureLast7Years: {
    name: loLeadRaw.foreclosureLast7Years.key,
    api: { type: 'string' },
  },
  creditStatus: {
    name: loLeadRaw.creditStatus.key,
    api: { type: 'string' },
  },
  homeValue: {
    name: loLeadRaw.homeValue.key,
    api: { type: 'number' },
  },
  firstMortgageBalance: {
    name: loLeadRaw.firstMortgageBalance.key,
    api: { type: 'number' },
  },
  firstMortgageRate: {
    name: loLeadRaw.firstMortgageRate.key,
    api: { type: 'integer' },
  },
  secondMortgageBalance: {
    name: loLeadRaw.secondMortgageBalance.key,
    api: { type: 'number' },
  },
  secondMortgageRate: {
    name: loLeadRaw.secondMortgageRate.key,
    api: { type: 'integer' },
  },
  ltv: {
    name: loLeadRaw.ltv.key,
    api: { type: 'integer' },
  },
  ssn: {
    name: loLeadRaw.ssn.key,
    api: { type: 'string' },
  },
  mode: {
    name: loLeadRaw.mode.key,
    api: { type: 'string' },
  },
  status: {
    name: loLeadRaw.status.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: loLeadRaw.createRequest.key,
    api: { type: 'string' },
  },
  createTime: {
    name: loLeadRaw.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: loLeadRaw.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: loLeadRaw.updateRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: loLeadRaw.updatedBy.key,
    api: { type: 'string' },
  },
  loLeadId: {
    name: loLeadRaw.loLeadId.key,
    api: { type: 'string' },
  },
  subscriptionId: {
    name: loLeadRaw.subscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription',
  },
  billingStatus: {
    name: loLeadRaw.billingStatus.key,
    api: { type: 'string' },
  },
};

export const template_ajv = {
  accountId: {
    name: template.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  id: {
    name: template.id.key,
    api: { type: 'string' },
  },
  type: {
    name: template.type.key,
    api: { type: 'string' },
  },
  name: {
    name: template.name.key,
    api: { type: 'string' },
  },
  data: {
    name: template.data.key,
    api: { type: 'string' },
  },
  createTime: {
    name: template.createTime.key,
    api: { type: 'string' },
  },
  thumbnail: {
    name: template.thumbnail.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: template.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: template.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: template.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: template.updatedBy.key,
    api: { type: 'string' },
  },
};

export const loan_ajv = {
  id: {
    name: loan.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: loan.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  loanOfficerId: {
    name: loan.loanOfficerId.key,
    api: { type: 'string' },
    fk: 'user',
  },
  addressId: {
    name: loan.addressId.key,
    api: { type: 'string' },
    fk: 'property',
  },
  purpose: {
    name: loan.purpose.key,
    api: { type: 'string' },
  },
  type: {
    name: loan.type.key,
    api: { type: 'string' },
  },
  product: {
    name: loan.product.key,
    api: { type: 'string' },
  },
  amount: {
    name: loan.amount.key,
    api: { type: 'number' },
  },
  interestRate: {
    name: loan.interestRate.key,
    api: { type: 'number' },
  },
  term: {
    name: loan.term.key,
    api: { type: 'string' },
  },
  downPayment: {
    name: loan.downPayment.key,
    api: { type: 'number' },
  },
  remainingTerm: {
    name: loan.remainingTerm.key,
    api: { type: 'string' },
  },
  notes: {
    name: loan.notes.key,
    api: { type: 'string' },
  },
  propertyOccupancy: {
    name: loan.propertyOccupancy.key,
    api: { type: 'string' },
  },
  mortgageInsurance: {
    name: loan.mortgageInsurance.key,
    api: { type: 'number' },
  },
  status: {
    name: loan.status.key,
    api: { type: 'string' },
  },
  closingDate: {
    name: loan.closingDate.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: loan.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: loan.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: loan.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: loan.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: loan.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: loan.updateRequest.key,
    api: { type: 'string' },
  },
  remainingValue: {
    name: loan.remainingValue.key,
    api: { type: 'number' },
  },
  amortization: {
    name: loan.amortization.key,
    api: { type: 'string' },
  },
  desiredOrCurrent: {
    name: loan.desiredOrCurrent.key,
    api: { type: 'string' },
  },
  desiredCashOutAmount: {
    name: loan.desiredCashOutAmount.key,
    api: { type: 'number' },
  },
  desiredDownPayment: {
    name: loan.desiredDownPayment.key,
    api: { type: 'number' },
  },
  loanPropertyType: {
    name: loan.loanPropertyType.key,
    api: { type: 'string' },
  },
  loanUnits: {
    name: loan.loanUnits.key,
    api: { type: 'number' },
  },
  timeline: {
    name: loan.timeline.key,
    api: { type: 'string' },
  },
};

export const templateVersion_ajv = {
  accountId: {
    name: templateVersion.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  type: {
    name: templateVersion.type.key,
    api: { type: 'string' },
  },
  name: {
    name: templateVersion.name.key,
    api: { type: 'string' },
  },
  data: {
    name: templateVersion.data.key,
    api: { type: 'string' },
  },
  createTime: {
    name: templateVersion.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: templateVersion.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: templateVersion.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: templateVersion.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: templateVersion.updatedBy.key,
    api: { type: 'string' },
  },
};

export const organization_ajv = {
  id: {
    name: organization.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: organization.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  addressId: {
    name: organization.addressId.key,
    api: { type: 'string' },
    fk: 'property',
  },
  name: {
    name: organization.name.key,
    api: { type: 'string' },
  },
  type: {
    name: organization.type.key,
    api: { type: 'string' },
  },
  phone: {
    name: organization.phone.key,
    api: { type: 'string' },
  },
  email: {
    name: organization.email.key,
    api: { type: 'string' },
  },
  nmlsId: {
    name: organization.nmlsId.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: organization.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: organization.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: organization.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: organization.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: organization.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: organization.updateRequest.key,
    api: { type: 'string' },
  },
  parentOrganizationId: {
    name: organization.parentOrganizationId.key,
    api: { type: 'string' },
    fk: 'organization',
  },
};

export const partner_ajv = {
  id: {
    name: partner.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: partner.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  organizationId: {
    name: partner.organizationId.key,
    api: { type: 'string' },
    fk: 'organization',
  },
  type: {
    name: partner.type.key,
    api: { type: 'string' },
  },
  firstName: {
    name: partner.firstName.key,
    api: { type: 'string' },
  },
  lastName: {
    name: partner.lastName.key,
    api: { type: 'string' },
  },
  personalEmail: {
    name: partner.personalEmail.key,
    api: { type: 'string' },
  },
  workEmail: {
    name: partner.workEmail.key,
    api: { type: 'string' },
  },
  mobilePhone: {
    name: partner.mobilePhone.key,
    api: { type: 'string' },
  },
  workPhone: {
    name: partner.workPhone.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: partner.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: partner.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: partner.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: partner.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: partner.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: partner.updateRequest.key,
    api: { type: 'string' },
  },
  addressId: {
    name: partner.addressId.key,
    api: { type: 'string' },
    fk: 'property',
  },
};

export const loLead_ajv = {
  id: {
    name: loLead.id.key,
    api: { type: 'string' },
  },
  assignmentId: {
    name: loLead.assignmentId.key,
    api: { type: 'string' },
  },
  billed: {
    name: loLead.billed.key,
    api: { type: 'boolean' },
  },
  boberdooId: {
    name: loLead.boberdooId.key,
    api: { type: 'integer' },
  },
  callCenterService: {
    name: loLead.callCenterService.key,
    api: { type: 'string' },
  },
  companyId: {
    name: loLead.companyId.key,
    api: { type: 'string' },
  },
  creditStatus: {
    name: loLead.creditStatus.key,
    api: { type: 'string' },
  },
  email: {
    name: loLead.email.key,
    api: { type: 'string' },
  },
  firstName: {
    name: loLead.firstName.key,
    api: { type: 'string' },
  },
  language: {
    name: loLead.language.key,
    api: { type: 'string' },
  },
  lastName: {
    name: loLead.lastName.key,
    api: { type: 'string' },
  },
  ownerId: {
    name: loLead.ownerId.key,
    api: { type: 'string' },
  },
  phone: {
    name: loLead.phone.key,
    api: { type: 'string' },
  },
  productId: {
    name: loLead.productId.key,
    api: { type: 'string' },
  },
  provider: {
    name: loLead.provider.key,
    api: { type: 'string' },
  },
  vendor: {
    name: loLead.vendor.key,
    api: { type: 'string' },
  },
  secondaryPhone: {
    name: loLead.secondaryPhone.key,
    api: { type: 'string' },
  },
  source: {
    name: loLead.source.key,
    api: { type: 'string' },
  },
  subscriptionId: {
    name: loLead.subscriptionId.key,
    api: { type: 'string' },
    fk: 'loSubscription',
  },
  price: {
    name: loLead.price.key,
    api: { type: 'number' },
  },
  transferPrice: {
    name: loLead.transferPrice.key,
    api: { type: 'number' },
  },
  transferStatus: {
    name: loLead.transferStatus.key,
    api: { type: 'string' },
  },
  leadType: {
    name: loLead.leadType.key,
    api: { type: 'string' },
  },
  leadCategory: {
    name: loLead.leadCategory.key,
    api: { type: 'string' },
  },
  addressCity: {
    name: loLead.addressCity.key,
    api: { type: 'string' },
  },
  addressState: {
    name: loLead.addressState.key,
    api: { type: 'string' },
  },
  addressStreet: {
    name: loLead.addressStreet.key,
    api: { type: 'string' },
  },
  addressStreet2: {
    name: loLead.addressStreet2.key,
    api: { type: 'string' },
  },
  addressStreet3: {
    name: loLead.addressStreet3.key,
    api: { type: 'string' },
  },
  addressZip: {
    name: loLead.addressZip.key,
    api: { type: 'string' },
  },
  loanDownPayment: {
    name: loLead.loanDownPayment.key,
    api: { type: 'number' },
  },
  loanInterestRate: {
    name: loLead.loanInterestRate.key,
    api: { type: 'number' },
  },
  loanMonthlyPayment: {
    name: loLead.loanMonthlyPayment.key,
    api: { type: 'number' },
  },
  loanPurchasePrice: {
    name: loLead.loanPurchasePrice.key,
    api: { type: 'number' },
  },
  loanTransactionType: {
    name: loLead.loanTransactionType.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: loLead.createdBy.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: loLead.createRequest.key,
    api: { type: 'string' },
  },
  createTime: {
    name: loLead.createTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: loLead.updatedBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: loLead.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: loLead.updateTime.key,
    api: { type: 'string' },
  },
  loLeadRawId: {
    name: loLead.loLeadRawId.key,
    api: { type: 'integer' },
    fk: 'loLeadRaw',
  },
  loanRange: {
    name: loLead.loanRange.key,
    api: { type: 'string' },
  },
  creditedTransferPrice: {
    name: loLead.creditedTransferPrice.key,
    api: { type: 'number' },
  },
  refundedPrice: {
    name: loLead.refundedPrice.key,
    api: { type: 'number' },
  },
  refundedTransferPrice: {
    name: loLead.refundedTransferPrice.key,
    api: { type: 'number' },
  },
  transferDate: {
    name: loLead.transferDate.key,
    api: { type: 'string' },
  },
};

export const bridgeSectionLifecycle_ajv = {
  id: {
    name: bridgeSectionLifecycle.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: bridgeSectionLifecycle.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  customFieldSectionId: {
    name: bridgeSectionLifecycle.customFieldSectionId.key,
    api: { type: 'string' },
    fk: 'contactCustomFieldSection',
  },
  lifecycleId: {
    name: bridgeSectionLifecycle.lifecycleId.key,
    api: { type: 'string' },
    fk: 'contactStatusLifecycle',
  },
};

export const page_ajv = {
  accountId: {
    name: page.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  id: {
    name: page.id.key,
    api: { type: 'string' },
  },
  name: {
    name: page.name.key,
    api: { type: 'string' },
  },
  type: {
    name: page.type.key,
    api: { type: 'string' },
  },
  body: {
    name: page.body.key,
    api: { type: 'string' },
  },
  templateId: {
    name: page.templateId.key,
    api: { type: 'string' },
    fk: 'template',
  },
  latestTemplate: {
    name: page.latestTemplate.key,
    api: { type: 'string' },
    fk: 'templateVersion',
  },
  path: {
    name: page.path.key,
    api: { type: 'string' },
  },
  createTime: {
    name: page.createTime.key,
    api: { type: 'string' },
  },
  headerMeta: {
    name: page.headerMeta.key,
    api: { type: 'string' },
  },
  themeId: {
    name: page.themeId.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: page.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: page.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: page.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: page.updatedBy.key,
    api: { type: 'string' },
  },
};

export const contact_ajv = {
  id: {
    name: contact.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: contact.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  statusId: {
    name: contact.statusId.key,
    api: { type: 'string' },
    fk: 'contactStatus',
  },
  addressId: {
    name: contact.addressId.key,
    api: { type: 'string' },
    fk: 'property',
  },
  pictureUrl: {
    name: contact.pictureUrl.key,
    api: { type: 'string' },
  },
  nmlsId: {
    name: contact.nmlsId.key,
    api: { type: 'string' },
  },
  type: {
    name: contact.type.key,
    api: { type: 'string' },
  },
  firstName: {
    name: contact.firstName.key,
    api: { type: 'string' },
  },
  lastName: {
    name: contact.lastName.key,
    api: { type: 'string' },
  },
  personalEmail: {
    name: contact.personalEmail.key,
    api: { type: 'string' },
  },
  workEmail: {
    name: contact.workEmail.key,
    api: { type: 'string' },
  },
  mobilePhone: {
    name: contact.mobilePhone.key,
    api: { type: 'string' },
  },
  workPhone: {
    name: contact.workPhone.key,
    api: { type: 'string' },
  },
  extraMail: {
    name: contact.extraMail.key,
    api: { type: 'array' },
  },
  extraPhone: {
    name: contact.extraPhone.key,
    api: { type: 'array' },
  },
  jobTitle: {
    name: contact.jobTitle.key,
    api: { type: 'string' },
  },
  maritalStatus: {
    name: contact.maritalStatus.key,
    api: { type: 'string' },
  },
  fico: {
    name: contact.fico.key,
    api: { type: 'string' },
  },
  gender: {
    name: contact.gender.key,
    api: { type: 'string' },
  },
  dob: {
    name: contact.dob.key,
    api: { type: 'string' },
  },
  creationSource: {
    name: contact.creationSource.key,
    api: { type: 'string' },
  },
  ssn: {
    name: contact.ssn.key,
    api: { type: 'string' },
  },
  leadSourceType: {
    name: contact.leadSourceType.key,
    api: { type: 'string' },
  },
  leadSource: {
    name: contact.leadSource.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: contact.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: contact.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: contact.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: contact.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: contact.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: contact.updateRequest.key,
    api: { type: 'string' },
  },
  middleName: {
    name: contact.middleName.key,
    api: { type: 'string' },
  },
  autoIncrementId: {
    name: contact.autoIncrementId.key,
    api: { type: 'integer' },
  },
  locale: {
    name: contact.locale.key,
    api: { type: 'string' },
  },
  monthlyIncome: {
    name: contact.monthlyIncome.key,
    api: { type: 'number' },
  },
  organizationId: {
    name: contact.organizationId.key,
    api: { type: 'string' },
    fk: 'organization',
  },
  origin: {
    name: contact.origin.key,
    api: { type: 'string' },
  },
  taygoSource: {
    name: contact.taygoSource.key,
    api: { type: 'string' },
  },
  timezone: {
    name: contact.timezone.key,
    api: { type: 'string' },
  },
  isDeleted: {
    name: contact.isDeleted.key,
    api: { type: 'boolean' },
  },
};

export const contactCustomFieldValue_ajv = {
  accountId: {
    name: contactCustomFieldValue.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  contactId: {
    name: contactCustomFieldValue.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  customFieldId: {
    name: contactCustomFieldValue.customFieldId.key,
    api: { type: 'string' },
    fk: 'contactCustomField',
  },
  value: {
    name: contactCustomFieldValue.value.key,
    api: { type: 'string' },
  },
  id: {
    name: contactCustomFieldValue.id.key,
    api: { type: 'string' },
  },
};

export const incomeSource_ajv = {
  id: {
    name: incomeSource.id.key,
    api: { type: 'string' },
  },
  contactId: {
    name: incomeSource.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  addressId: {
    name: incomeSource.addressId.key,
    api: { type: 'string' },
    fk: 'property',
  },
  organizationId: {
    name: incomeSource.organizationId.key,
    api: { type: 'string' },
    fk: 'organization',
  },
  type: {
    name: incomeSource.type.key,
    api: { type: 'string' },
  },
  employerName: {
    name: incomeSource.employerName.key,
    api: { type: 'string' },
  },
  title: {
    name: incomeSource.title.key,
    api: { type: 'string' },
  },
  phone: {
    name: incomeSource.phone.key,
    api: { type: 'string' },
  },
  amount: {
    name: incomeSource.amount.key,
    api: { type: 'number' },
  },
  incomeAmountPeriod: {
    name: incomeSource.incomeAmountPeriod.key,
    api: { type: 'string' },
  },
  startDate: {
    name: incomeSource.startDate.key,
    api: { type: 'string' },
  },
  endDate: {
    name: incomeSource.endDate.key,
    api: { type: 'string' },
  },
  description: {
    name: incomeSource.description.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: incomeSource.createdBy.key,
    api: { type: 'string' },
  },
  createTime: {
    name: incomeSource.createTime.key,
    api: { type: 'string' },
  },
  createRequest: {
    name: incomeSource.createRequest.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: incomeSource.updatedBy.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: incomeSource.updateTime.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: incomeSource.updateRequest.key,
    api: { type: 'string' },
  },
  employerPhone: {
    name: incomeSource.employerPhone.key,
    api: { type: 'string' },
  },
  status: {
    name: incomeSource.status.key,
    api: { type: 'string' },
  },
};

export const templateDependency_ajv = {
  id: {
    name: templateDependency.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: templateDependency.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  templateId: {
    name: templateDependency.templateId.key,
    api: { type: 'string' },
    fk: 'template',
  },
  version: {
    name: templateDependency.version.key,
    api: { type: 'string' },
    fk: 'templateVersion',
  },
  createTime: {
    name: templateDependency.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: templateDependency.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: templateDependency.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: templateDependency.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: templateDependency.updatedBy.key,
    api: { type: 'string' },
  },
};

export const bridgeContactContact_ajv = {
  contactId: {
    name: bridgeContactContact.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  accountId: {
    name: bridgeContactContact.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  assignedTo: {
    name: bridgeContactContact.assignedTo.key,
    api: { type: 'string' },
  },
  relationship: {
    name: bridgeContactContact.relationship.key,
    api: { type: 'string' },
  },
  assignedBy: {
    name: bridgeContactContact.assignedBy.key,
    api: { type: 'string' },
  },
  assignTime: {
    name: bridgeContactContact.assignTime.key,
    api: { type: 'string' },
  },
  assignRequest: {
    name: bridgeContactContact.assignRequest.key,
    api: { type: 'string' },
  },
  id: {
    name: bridgeContactContact.id.key,
    api: { type: 'string' },
  },
};

export const bridgeContactTag_ajv = {
  contactId: {
    name: bridgeContactTag.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  tagId: {
    name: bridgeContactTag.tagId.key,
    api: { type: 'string' },
    fk: 'contactTag',
  },
  accountId: {
    name: bridgeContactTag.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  assignedBy: {
    name: bridgeContactTag.assignedBy.key,
    api: { type: 'string' },
  },
  assignTime: {
    name: bridgeContactTag.assignTime.key,
    api: { type: 'string' },
  },
  assignRequest: {
    name: bridgeContactTag.assignRequest.key,
    api: { type: 'string' },
  },
  id: {
    name: bridgeContactTag.id.key,
    api: { type: 'string' },
  },
};

export const routing_ajv = {
  accountId: {
    name: routing.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  subdomain: {
    name: routing.subdomain.key,
    api: { type: 'string' },
    fk: 'account',
  },
  path: {
    name: routing.path.key,
    api: { type: 'string' },
  },
  resourceId: {
    name: routing.resourceId.key,
    api: { type: 'string' },
    fk: 'page',
  },
  createTime: {
    name: routing.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: routing.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: routing.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: routing.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: routing.updatedBy.key,
    api: { type: 'string' },
  },
};

export const links_ajv = {
  id: {
    name: links.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: links.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  destinationId: {
    name: links.destinationId.key,
    api: { type: 'string' },
    fk: 'page',
  },
  createTime: {
    name: links.createTime.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: links.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: links.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: links.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: links.updatedBy.key,
    api: { type: 'string' },
  },
};

export const bridgeContactLoan_ajv = {
  contactId: {
    name: bridgeContactLoan.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  loanId: {
    name: bridgeContactLoan.loanId.key,
    api: { type: 'string' },
    fk: 'loan',
  },
  accountId: {
    name: bridgeContactLoan.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  assignedBy: {
    name: bridgeContactLoan.assignedBy.key,
    api: { type: 'string' },
  },
  assignTime: {
    name: bridgeContactLoan.assignTime.key,
    api: { type: 'string' },
  },
  assignRequest: {
    name: bridgeContactLoan.assignRequest.key,
    api: { type: 'string' },
  },
  type: {
    name: bridgeContactLoan.type.key,
    api: { type: 'string' },
  },
  id: {
    name: bridgeContactLoan.id.key,
    api: { type: 'string' },
  },
};

export const element_ajv = {
  accountId: {
    name: element.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  latestVersion: {
    name: element.latestVersion.key,
    api: { type: 'string' },
    fk: 'elementVersion',
  },
  templateId: {
    name: element.templateId.key,
    api: { type: 'string' },
    fk: 'template',
  },
  id: {
    name: element.id.key,
    api: { type: 'string' },
  },
  name: {
    name: element.name.key,
    api: { type: 'string' },
  },
  data: {
    name: element.data.key,
    api: { type: 'string' },
  },
  createTime: {
    name: element.createTime.key,
    api: { type: 'string' },
  },
  type: {
    name: element.type.key,
    api: { type: 'string' },
  },
  createdBy: {
    name: element.createdBy.key,
    api: { type: 'string' },
  },
  updateRequest: {
    name: element.updateRequest.key,
    api: { type: 'string' },
  },
  updateTime: {
    name: element.updateTime.key,
    api: { type: 'string' },
  },
  updatedBy: {
    name: element.updatedBy.key,
    api: { type: 'string' },
  },
};

export const bridgeContactPartner_ajv = {
  id: {
    name: bridgeContactPartner.id.key,
    api: { type: 'string' },
  },
  accountId: {
    name: bridgeContactPartner.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  contactId: {
    name: bridgeContactPartner.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  partnerId: {
    name: bridgeContactPartner.partnerId.key,
    api: { type: 'string' },
    fk: 'partner',
  },
  type: {
    name: bridgeContactPartner.type.key,
    api: { type: 'string' },
  },
  assignedBy: {
    name: bridgeContactPartner.assignedBy.key,
    api: { type: 'string' },
  },
  assignTime: {
    name: bridgeContactPartner.assignTime.key,
    api: { type: 'string' },
  },
  assignRequest: {
    name: bridgeContactPartner.assignRequest.key,
    api: { type: 'string' },
  },
};

export const bridgeContactUser_ajv = {
  contactId: {
    name: bridgeContactUser.contactId.key,
    api: { type: 'string' },
    fk: 'contact',
  },
  userId: {
    name: bridgeContactUser.userId.key,
    api: { type: 'string' },
    fk: 'user',
  },
  accountId: {
    name: bridgeContactUser.accountId.key,
    api: { type: 'string' },
    fk: 'account',
  },
  assignedBy: {
    name: bridgeContactUser.assignedBy.key,
    api: { type: 'string' },
  },
  assignTime: {
    name: bridgeContactUser.assignTime.key,
    api: { type: 'string' },
  },
  assignRequest: {
    name: bridgeContactUser.assignRequest.key,
    api: { type: 'string' },
  },
  id: {
    name: bridgeContactUser.id.key,
    api: { type: 'string' },
  },
};

export const elementtotemplateVersion_ajv = {
  A: {
    name: elementtotemplateVersion.A.key,
    api: { type: 'string' },
    fk: 'element',
  },
  B: {
    name: elementtotemplateVersion.B.key,
    api: { type: 'string' },
    fk: 'templateVersion',
  },
};

