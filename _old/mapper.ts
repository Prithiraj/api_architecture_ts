export const contactCustomFieldSection = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  sectionName: {
    key: 'sectionName', dbKey: 'section_name', type: 'character varying(255)', required: true, foreignkey: '',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'character varying(100)', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'character varying(100)', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'character varying(100)', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'character varying(100)', required: false, foreignkey: '',
  },
};
export const contactStatusLifecycle = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  lifecycleName: {
    key: 'lifecycleName', dbKey: 'lifecycle_name', type: 'text', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
  },
};
export const prismaMigrations = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(36)', required: true, foreignkey: '',
  },
  checksum: {
    key: 'checksum', dbKey: 'checksum', type: 'character varying(64)', required: true, foreignkey: '',
  },
  finishedAt: {
    key: 'finishedAt', dbKey: 'finished_at', type: 'timestamp with time zone', required: false, foreignkey: '',
  },
  migrationName: {
    key: 'migrationName', dbKey: 'migration_name', type: 'character varying(255)', required: true, foreignkey: '',
  },
  logs: {
    key: 'logs', dbKey: 'logs', type: 'text', required: false, foreignkey: '',
  },
  rolledBackAt: {
    key: 'rolledBackAt', dbKey: 'rolled_back_at', type: 'timestamp with time zone', required: false, foreignkey: '',
  },
  startedAt: {
    key: 'startedAt', dbKey: 'started_at', type: 'timestamp with time zone', required: true, foreignkey: '',
  },
  appliedStepsCount: {
    key: 'appliedStepsCount', dbKey: 'applied_steps_count', type: 'integer', required: true, foreignkey: '',
  },
};
export const persons = {
  personid: {
    key: 'personid', dbKey: 'personid', type: 'integer', required: true, foreignkey: '',
  },
  lastname: {
    key: 'lastname', dbKey: 'lastname', type: 'text', required: false, foreignkey: '',
  },
  firstname: {
    key: 'firstname', dbKey: 'firstname', type: 'text', required: false, foreignkey: '',
  },
  address: {
    key: 'address', dbKey: 'address', type: 'text', required: false, foreignkey: '',
  },
  city: {
    key: 'city', dbKey: 'city', type: 'text', required: false, foreignkey: '',
  },
};
export const stripeSubscriptionItem = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  stripePrice: {
    key: 'stripePrice', dbKey: 'stripe_price', type: 'text', required: false, foreignkey: '',
  },
  isTransferPrice: {
    key: 'isTransferPrice', dbKey: 'is_transfer_price', type: 'boolean', required: false, foreignkey: '',
  },
};
export const theme = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: false, foreignkey: '',
  },
  theme: {
    key: 'theme', dbKey: 'theme', type: 'jsonb', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const engagement = {
  parentId: {
    key: 'parentId', dbKey: 'parent_id', type: 'text', required: false, foreignkey: '',
  },
  eventId: {
    key: 'eventId', dbKey: 'event_id', type: 'text', required: true, foreignkey: '',
  },
  rawBucket: {
    key: 'rawBucket', dbKey: 'raw_bucket', type: 'text', required: false, foreignkey: '',
  },
  rawPath: {
    key: 'rawPath', dbKey: 'raw_path', type: 'text', required: false, foreignkey: '',
  },
  eventClass: {
    key: 'eventClass', dbKey: 'event_class', type: 'text', required: false, foreignkey: '',
  },
  eventType: {
    key: 'eventType', dbKey: 'event_type', type: 'text', required: false, foreignkey: '',
  },
  eventTime: {
    key: 'eventTime', dbKey: 'event_time', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'text', required: false, foreignkey: '',
  },
  eventProvider: {
    key: 'eventProvider', dbKey: 'event_provider', type: 'text', required: false, foreignkey: '',
  },
  eventAction: {
    key: 'eventAction', dbKey: 'event_action', type: 'text', required: false, foreignkey: '',
  },
  eventName: {
    key: 'eventName', dbKey: 'event_name', type: 'text', required: false, foreignkey: '',
  },
  eventGroup: {
    key: 'eventGroup', dbKey: 'event_group', type: 'text', required: false, foreignkey: '',
  },
  eventCategory: {
    key: 'eventCategory', dbKey: 'event_category', type: 'text', required: false, foreignkey: '',
  },
  eventCode: {
    key: 'eventCode', dbKey: 'event_code', type: 'text', required: false, foreignkey: '',
  },
  eventSeverity: {
    key: 'eventSeverity', dbKey: 'event_severity', type: 'text', required: false, foreignkey: '',
  },
  outcome: {
    key: 'outcome', dbKey: 'outcome', type: 'text', required: false, foreignkey: '',
  },
  message: {
    key: 'message', dbKey: 'message', type: 'text', required: false, foreignkey: '',
  },
  reason: {
    key: 'reason', dbKey: 'reason', type: 'text', required: false, foreignkey: '',
  },
  timezone: {
    key: 'timezone', dbKey: 'timezone', type: 'text', required: false, foreignkey: '',
  },
  startTime: {
    key: 'startTime', dbKey: 'start_time', type: 'text', required: false, foreignkey: '',
  },
  endTime: {
    key: 'endTime', dbKey: 'end_time', type: 'text', required: false, foreignkey: '',
  },
  eventData: {
    key: 'eventData', dbKey: 'event_data', type: 'jsonb', required: false, foreignkey: '',
  },
  channelId: {
    key: 'channelId', dbKey: 'channel.id', type: 'text', required: false, foreignkey: '',
  },
  channelType: {
    key: 'channelType', dbKey: 'channel.type', type: 'text', required: false, foreignkey: '',
  },
  resourceId: {
    key: 'resourceId', dbKey: 'resource.id', type: 'text', required: false, foreignkey: '',
  },
  resourceType: {
    key: 'resourceType', dbKey: 'resource.type', type: 'text', required: false, foreignkey: '',
  },
  sourceId: {
    key: 'sourceId', dbKey: 'source.id', type: 'text', required: false, foreignkey: '',
  },
  sourceType: {
    key: 'sourceType', dbKey: 'source.type', type: 'text', required: false, foreignkey: '',
  },
  userAgent: {
    key: 'userAgent', dbKey: 'user.agent', type: 'text', required: false, foreignkey: '',
  },
  userId: {
    key: 'userId', dbKey: 'user.id', type: 'text', required: false, foreignkey: '',
  },
  userPool: {
    key: 'userPool', dbKey: 'user.pool', type: 'text', required: false, foreignkey: '',
  },
  userType: {
    key: 'userType', dbKey: 'user.type', type: 'text', required: false, foreignkey: '',
  },
  testCol01: {
    key: 'testCol01', dbKey: 'test_col_01', type: 'text', required: false, foreignkey: '',
  },
};
export const loLeadSource = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  productId: {
    key: 'productId', dbKey: 'product_id', type: 'text', required: false, foreignkey: '',
  },
  tileDescription: {
    key: 'tileDescription', dbKey: 'tile_description', type: 'text', required: true, foreignkey: '',
  },
  tileHighlights: {
    key: 'tileHighlights', dbKey: 'tile_highlights', type: 'text[]', required: false, foreignkey: '',
  },
  title: {
    key: 'title', dbKey: 'title', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  callcenter: {
    key: 'callcenter', dbKey: 'callcenter', type: 'text', required: true, foreignkey: '',
  },
  notificationEmails: {
    key: 'notificationEmails', dbKey: 'notification_emails', type: 'text[]', required: false, foreignkey: '',
  },
  order: {
    key: 'order', dbKey: 'order', type: 'integer', required: false, foreignkey: '',
  },
};
export const account = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
};
export const contactTag = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  order: {
    key: 'order', dbKey: 'order', type: 'integer', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
};
export const property = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  units: {
    key: 'units', dbKey: 'units', type: 'double precision', required: false, foreignkey: '',
  },
  street1: {
    key: 'street1', dbKey: 'street_1', type: 'text', required: false, foreignkey: '',
  },
  street2: {
    key: 'street2', dbKey: 'street_2', type: 'text', required: false, foreignkey: '',
  },
  city: {
    key: 'city', dbKey: 'city', type: 'text', required: false, foreignkey: '',
  },
  state: {
    key: 'state', dbKey: 'state', type: 'text', required: false, foreignkey: '',
  },
  country: {
    key: 'country', dbKey: 'country', type: 'text', required: false, foreignkey: '',
  },
  taxes: {
    key: 'taxes', dbKey: 'taxes', type: 'double precision', required: false, foreignkey: '',
  },
  miscExp: {
    key: 'miscExp', dbKey: 'misc_exp', type: 'double precision', required: false, foreignkey: '',
  },
  rentalIncome: {
    key: 'rentalIncome', dbKey: 'rental_income', type: 'double precision', required: false, foreignkey: '',
  },
  squareFootage: {
    key: 'squareFootage', dbKey: 'square_footage', type: 'double precision', required: false, foreignkey: '',
  },
  bedrooms: {
    key: 'bedrooms', dbKey: 'bedrooms', type: 'double precision', required: false, foreignkey: '',
  },
  baths: {
    key: 'baths', dbKey: 'baths', type: 'double precision', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  actualValue: {
    key: 'actualValue', dbKey: 'actual_value', type: 'double precision', required: false, foreignkey: '',
  },
  estimatedValue: {
    key: 'estimatedValue', dbKey: 'estimated_value', type: 'double precision', required: false, foreignkey: '',
  },
  hazardInsurance: {
    key: 'hazardInsurance', dbKey: 'hazard_insurance', type: 'double precision', required: false, foreignkey: '',
  },
  occupancy: {
    key: 'occupancy', dbKey: 'occupancy', type: 'character varying(50)', required: false, foreignkey: '',
  },
};
export const elementVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  elementId: {
    key: 'elementId', dbKey: 'element_id', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: false, foreignkey: '',
  },
  data: {
    key: 'data', dbKey: 'data', type: 'jsonb', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const events = {
  eventAction: {
    key: 'eventAction', dbKey: 'event_action', type: 'text', required: false, foreignkey: '',
  },
  eventCategory: {
    key: 'eventCategory', dbKey: 'event_category', type: 'text', required: false, foreignkey: '',
  },
  eventClass: {
    key: 'eventClass', dbKey: 'event_class', type: 'text', required: false, foreignkey: '',
  },
  eventCode: {
    key: 'eventCode', dbKey: 'event_code', type: 'text', required: false, foreignkey: '',
  },
  eventData: {
    key: 'eventData', dbKey: 'event_data', type: 'jsonb', required: false, foreignkey: '',
  },
  eventGroup: {
    key: 'eventGroup', dbKey: 'event_group', type: 'text', required: false, foreignkey: '',
  },
  eventId: {
    key: 'eventId', dbKey: 'event_id', type: 'text', required: true, foreignkey: '',
  },
  eventName: {
    key: 'eventName', dbKey: 'event_name', type: 'text', required: false, foreignkey: '',
  },
  eventProvider: {
    key: 'eventProvider', dbKey: 'event_provider', type: 'text', required: false, foreignkey: '',
  },
  eventSeverity: {
    key: 'eventSeverity', dbKey: 'event_severity', type: 'text', required: false, foreignkey: '',
  },
  eventType: {
    key: 'eventType', dbKey: 'event_type', type: 'text', required: false, foreignkey: '',
  },
  message: {
    key: 'message', dbKey: 'message', type: 'text', required: false, foreignkey: '',
  },
  outcome: {
    key: 'outcome', dbKey: 'outcome', type: 'text', required: false, foreignkey: '',
  },
  parentId: {
    key: 'parentId', dbKey: 'parent_id', type: 'text', required: false, foreignkey: '',
  },
  rawBucket: {
    key: 'rawBucket', dbKey: 'raw_bucket', type: 'text', required: false, foreignkey: '',
  },
  rawPath: {
    key: 'rawPath', dbKey: 'raw_path', type: 'text', required: false, foreignkey: '',
  },
  reason: {
    key: 'reason', dbKey: 'reason', type: 'text', required: false, foreignkey: '',
  },
  timezone: {
    key: 'timezone', dbKey: 'timezone', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  endTime: {
    key: 'endTime', dbKey: 'end_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  eventTime: {
    key: 'eventTime', dbKey: 'event_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  startTime: {
    key: 'startTime', dbKey: 'start_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  destinationId: {
    key: 'destinationId', dbKey: 'destination.id', type: 'text', required: false, foreignkey: '',
  },
  channelId: {
    key: 'channelId', dbKey: 'channel.id', type: 'text', required: false, foreignkey: '',
  },
  channelType: {
    key: 'channelType', dbKey: 'channel.type', type: 'text', required: false, foreignkey: '',
  },
  destinationLocation: {
    key: 'destinationLocation', dbKey: 'destination.location', type: 'text', required: false, foreignkey: '',
  },
  destinationType: {
    key: 'destinationType', dbKey: 'destination.type', type: 'text', required: false, foreignkey: '',
  },
  deviceIp: {
    key: 'deviceIp', dbKey: 'device.ip', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationCity: {
    key: 'deviceLocationCity', dbKey: 'device.location.city', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationContinent: {
    key: 'deviceLocationContinent', dbKey: 'device.location.continent', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationCoordinatesLat: {
    key: 'deviceLocationCoordinatesLat', dbKey: 'device.location.coordinates.lat', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationCoordinatesLon: {
    key: 'deviceLocationCoordinatesLon', dbKey: 'device.location.coordinates.lon', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationCountry: {
    key: 'deviceLocationCountry', dbKey: 'device.location.country', type: 'text', required: false, foreignkey: '',
  },
  deviceLocationZip: {
    key: 'deviceLocationZip', dbKey: 'device.location.zip', type: 'text', required: false, foreignkey: '',
  },
  deviceTimezone: {
    key: 'deviceTimezone', dbKey: 'device.timezone', type: 'text', required: false, foreignkey: '',
  },
  deviceType: {
    key: 'deviceType', dbKey: 'device.type', type: 'text', required: false, foreignkey: '',
  },
  referralId: {
    key: 'referralId', dbKey: 'referral.id', type: 'text', required: false, foreignkey: '',
  },
  referralType: {
    key: 'referralType', dbKey: 'referral.type', type: 'text', required: false, foreignkey: '',
  },
  resourceId: {
    key: 'resourceId', dbKey: 'resource.id', type: 'text', required: false, foreignkey: '',
  },
  resourceType: {
    key: 'resourceType', dbKey: 'resource.type', type: 'text', required: false, foreignkey: '',
  },
  sourceId: {
    key: 'sourceId', dbKey: 'source.id', type: 'text', required: false, foreignkey: '',
  },
  userAgent: {
    key: 'userAgent', dbKey: 'user.agent', type: 'text', required: false, foreignkey: '',
  },
  userId: {
    key: 'userId', dbKey: 'user.id', type: 'text', required: false, foreignkey: '',
  },
  userPool: {
    key: 'userPool', dbKey: 'user.pool', type: 'text', required: false, foreignkey: '',
  },
  userType: {
    key: 'userType', dbKey: 'user.type', type: 'text', required: false, foreignkey: '',
  },
};
export const loSubscription = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  stripeSubscription: {
    key: 'stripeSubscription', dbKey: 'stripe_subscription', type: 'text', required: false, foreignkey: '',
  },
  stripePaymentIntent: {
    key: 'stripePaymentIntent', dbKey: 'stripe_payment_intent', type: 'text', required: false, foreignkey: '',
  },
  autoBilling: {
    key: 'autoBilling', dbKey: 'auto_billing', type: 'boolean', required: false, foreignkey: '',
  },
  boberdooBalance: {
    key: 'boberdooBalance', dbKey: 'boberdoo_balance', type: 'double precision', required: false, foreignkey: '',
  },
  bundleTitle: {
    key: 'bundleTitle', dbKey: 'bundle_title', type: 'text', required: false, foreignkey: '',
  },
  cancelTime: {
    key: 'cancelTime', dbKey: 'cancel_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  companyId: {
    key: 'companyId', dbKey: 'company_id', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: false, foreignkey: '',
  },
  currentStep: {
    key: 'currentStep', dbKey: 'current_step', type: 'text', required: false, foreignkey: '',
  },
  dailyBudgetLimit: {
    key: 'dailyBudgetLimit', dbKey: 'daily_budget_limit', type: 'double precision', required: false, foreignkey: '',
  },
  dailyUnitLimit: {
    key: 'dailyUnitLimit', dbKey: 'daily_unit_limit', type: 'integer', required: false, foreignkey: '',
  },
  deactivateReason: {
    key: 'deactivateReason', dbKey: 'deactivate_reason', type: 'text', required: false, foreignkey: '',
  },
  inactive: {
    key: 'inactive', dbKey: 'inactive', type: 'boolean', required: false, foreignkey: '',
  },
  price: {
    key: 'price', dbKey: 'price', type: 'double precision', required: false, foreignkey: '',
  },
  productId: {
    key: 'productId', dbKey: 'product_id', type: 'text', required: false, foreignkey: '',
  },
  transferPriceSubscriptionItemId: {
    key: 'transferPriceSubscriptionItemId', dbKey: 'transfer_price_subscription_item_id', type: 'text', required: false, foreignkey: 'stripeSubscriptionItem',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  activeLeadTransfer: {
    key: 'activeLeadTransfer', dbKey: 'active_lead_transfer', type: 'boolean', required: false, foreignkey: '',
  },
  agentState: {
    key: 'agentState', dbKey: 'agent_state', type: 'text', required: false, foreignkey: '',
  },
  creditStatus: {
    key: 'creditStatus', dbKey: 'credit_status', type: 'text[]', required: false, foreignkey: '',
  },
  scheduleDays: {
    key: 'scheduleDays', dbKey: 'schedule.days', type: 'text[]', required: false, foreignkey: '',
  },
  scheduleFrom: {
    key: 'scheduleFrom', dbKey: 'schedule.from', type: 'text', required: false, foreignkey: '',
  },
  timeZone: {
    key: 'timeZone', dbKey: 'time_zone', type: 'text', required: false, foreignkey: '',
  },
  primaryPhone: {
    key: 'primaryPhone', dbKey: 'primary_phone', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhoneType: {
    key: 'secondaryPhoneType', dbKey: 'secondary_phone_type', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhoneVerified: {
    key: 'secondaryPhoneVerified', dbKey: 'secondary_phone_verified', type: 'boolean', required: false, foreignkey: '',
  },
  addressCity: {
    key: 'addressCity', dbKey: 'address.city', type: 'text', required: false, foreignkey: '',
  },
  addressCountry: {
    key: 'addressCountry', dbKey: 'address.country', type: 'text', required: false, foreignkey: '',
  },
  addressStreet: {
    key: 'addressStreet', dbKey: 'address.street', type: 'text', required: false, foreignkey: '',
  },
  addressStreet2: {
    key: 'addressStreet2', dbKey: 'address.street2', type: 'text', required: false, foreignkey: '',
  },
  addressZip: {
    key: 'addressZip', dbKey: 'address.zip', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceCountry: {
    key: 'preferredmeetingplaceCountry', dbKey: 'preferred_meeting_place.country', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceStreet: {
    key: 'preferredmeetingplaceStreet', dbKey: 'preferred_meeting_place.street', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceStreet3: {
    key: 'preferredmeetingplaceStreet3', dbKey: 'preferred_meeting_place.street3', type: 'text', required: false, foreignkey: '',
  },
  county: {
    key: 'county', dbKey: 'county', type: 'text', required: false, foreignkey: '',
  },
  preferredcommunicationscheduleFrom: {
    key: 'preferredcommunicationscheduleFrom', dbKey: 'preferred_communication_schedule.from', type: 'text', required: false, foreignkey: '',
  },
  preferredcommunicationscheduleTo: {
    key: 'preferredcommunicationscheduleTo', dbKey: 'preferred_communication_schedule.to', type: 'text', required: false, foreignkey: '',
  },
  infoPhone: {
    key: 'infoPhone', dbKey: 'info_phone', type: 'text', required: false, foreignkey: '',
  },
  infoName: {
    key: 'infoName', dbKey: 'info_name', type: 'text', required: false, foreignkey: '',
  },
  leadType: {
    key: 'leadType', dbKey: 'lead_type', type: 'text[]', required: false, foreignkey: '',
  },
  transactionType: {
    key: 'transactionType', dbKey: 'transaction_type', type: 'text[]', required: false, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan_type', type: 'text[]', required: false, foreignkey: '',
  },
  totalMatchAmount: {
    key: 'totalMatchAmount', dbKey: 'total_match_amount', type: 'double precision', required: false, foreignkey: '',
  },
  totalLeadsMatched: {
    key: 'totalLeadsMatched', dbKey: 'total_leads_matched', type: 'integer', required: false, foreignkey: '',
  },
  totalCredited: {
    key: 'totalCredited', dbKey: 'total_credited', type: 'double precision', required: false, foreignkey: '',
  },
  leadCategory: {
    key: 'leadCategory', dbKey: 'lead_category', type: 'text[]', required: false, foreignkey: '',
  },
};
export const loSubscriptionDailyStats = {
  loSubscriptionId: {
    key: 'loSubscriptionId', dbKey: 'lo_subscription_id', type: 'text', required: true, foreignkey: 'loSubscription',
  },
  totalMatchAmount: {
    key: 'totalMatchAmount', dbKey: 'total_match_amount', type: 'double precision', required: false, foreignkey: '',
  },
  totalTransferAmount: {
    key: 'totalTransferAmount', dbKey: 'total_transfer_amount', type: 'double precision', required: false, foreignkey: '',
  },
  totalLeadsMatched: {
    key: 'totalLeadsMatched', dbKey: 'total_leads_matched', type: 'integer', required: false, foreignkey: '',
  },
  totalLeadsTransfered: {
    key: 'totalLeadsTransfered', dbKey: 'total_leads_transfered', type: 'integer', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  statsDate: {
    key: 'statsDate', dbKey: 'stats_date', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
};
export const template = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  data: {
    key: 'data', dbKey: 'data', type: 'jsonb', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  thumbnail: {
    key: 'thumbnail', dbKey: 'thumbnail', type: 'text', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const contactCustomField = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  internalName: {
    key: 'internalName', dbKey: 'internal_name', type: 'text', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  order: {
    key: 'order', dbKey: 'order', type: 'integer', required: true, foreignkey: '',
  },
  purpose: {
    key: 'purpose', dbKey: 'purpose', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  sectionId: {
    key: 'sectionId', dbKey: 'section_id', type: 'character varying(100)', required: false, foreignkey: 'contactCustomFieldSection',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
  },
};
export const pageVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  pageId: {
    key: 'pageId', dbKey: 'page_id', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: false, foreignkey: '',
  },
  body: {
    key: 'body', dbKey: 'body', type: 'jsonb', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const user = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  userType: {
    key: 'userType', dbKey: 'user_type', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
};
export const loLeadRaw = {
  id: {
    key: 'id', dbKey: 'id', type: 'integer', required: true, foreignkey: '',
  },
  cost: {
    key: 'cost', dbKey: 'cost', type: 'double precision', required: false, foreignkey: '',
  },
  allowedTimesSold: {
    key: 'allowedTimesSold', dbKey: 'allowed_times_sold', type: 'integer', required: false, foreignkey: '',
  },
  returnHashType: {
    key: 'returnHashType', dbKey: 'return_hash_type', type: 'text', required: false, foreignkey: '',
  },
  returnHashValueType: {
    key: 'returnHashValueType', dbKey: 'return_hash_value_type', type: 'text', required: false, foreignkey: '',
  },
  skipPartnerId: {
    key: 'skipPartnerId', dbKey: 'skip_partner_id', type: 'text', required: false, foreignkey: '',
  },
  returnBestPrice: {
    key: 'returnBestPrice', dbKey: 'return_best_price', type: 'smallint', required: false, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'smallint', required: false, foreignkey: '',
  },
  testLead: {
    key: 'testLead', dbKey: 'test_lead', type: 'smallint', required: false, foreignkey: '',
  },
  skipXsl: {
    key: 'skipXsl', dbKey: 'skip_xsl', type: 'smallint', required: false, foreignkey: '',
  },
  redirectUrl: {
    key: 'redirectUrl', dbKey: 'redirect_url', type: 'text', required: false, foreignkey: '',
  },
  ipAddress: {
    key: 'ipAddress', dbKey: 'ip_address', type: 'text', required: false, foreignkey: '',
  },
  src: {
    key: 'src', dbKey: 'src', type: 'text', required: false, foreignkey: '',
  },
  subId: {
    key: 'subId', dbKey: 'sub_id', type: 'text', required: false, foreignkey: '',
  },
  optout: {
    key: 'optout', dbKey: 'optout', type: 'text', required: false, foreignkey: '',
  },
  uniqueIdentifier: {
    key: 'uniqueIdentifier', dbKey: 'unique_identifier', type: 'text', required: false, foreignkey: '',
  },
  tcpaConsent: {
    key: 'tcpaConsent', dbKey: 'tcpa_consent', type: 'text', required: false, foreignkey: '',
  },
  tcpaLanguage: {
    key: 'tcpaLanguage', dbKey: 'tcpa_language', type: 'text', required: false, foreignkey: '',
  },
  trustedFormUrl: {
    key: 'trustedFormUrl', dbKey: 'trusted_form_url', type: 'text', required: false, foreignkey: '',
  },
  leadidToken: {
    key: 'leadidToken', dbKey: 'leadid_token', type: 'text', required: false, foreignkey: '',
  },
  firstName: {
    key: 'firstName', dbKey: 'first_name', type: 'text', required: false, foreignkey: '',
  },
  address: {
    key: 'address', dbKey: 'address', type: 'text', required: false, foreignkey: '',
  },
  state: {
    key: 'state', dbKey: 'state', type: 'text', required: false, foreignkey: '',
  },
  zip: {
    key: 'zip', dbKey: 'zip', type: 'text', required: false, foreignkey: '',
  },
  primaryPhone: {
    key: 'primaryPhone', dbKey: 'primary_phone', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhone: {
    key: 'secondaryPhone', dbKey: 'secondary_phone', type: 'text', required: false, foreignkey: '',
  },
  email: {
    key: 'email', dbKey: 'email', type: 'text', required: false, foreignkey: '',
  },
  downPayment: {
    key: 'downPayment', dbKey: 'down_payment', type: 'numeric(10,2)', required: false, foreignkey: '',
  },
  foundHome: {
    key: 'foundHome', dbKey: 'found_home', type: 'text', required: false, foreignkey: '',
  },
  movingDate: {
    key: 'movingDate', dbKey: 'moving_date', type: 'text', required: false, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan_type', type: 'text', required: false, foreignkey: '',
  },
  productType: {
    key: 'productType', dbKey: 'product_type', type: 'text', required: false, foreignkey: '',
  },
  cashOutAmount: {
    key: 'cashOutAmount', dbKey: 'cash_out_amount', type: 'numeric(10,2)', required: false, foreignkey: '',
  },
  dob: {
    key: 'dob', dbKey: 'dob', type: 'text', required: false, foreignkey: '',
  },
  propertyType: {
    key: 'propertyType', dbKey: 'property_type', type: 'text', required: false, foreignkey: '',
  },
  refiGoal: {
    key: 'refiGoal', dbKey: 'refi_goal', type: 'text', required: false, foreignkey: '',
  },
  workingWithAnAgent: {
    key: 'workingWithAnAgent', dbKey: 'working_with_an_agent', type: 'text', required: false, foreignkey: '',
  },
  bankruptcyLast7Years: {
    key: 'bankruptcyLast7Years', dbKey: 'bankruptcy_last_7_years', type: 'text', required: false, foreignkey: '',
  },
  creditStatus: {
    key: 'creditStatus', dbKey: 'credit_status', type: 'text', required: false, foreignkey: '',
  },
  loanValue: {
    key: 'loanValue', dbKey: 'loan_value', type: 'numeric(10,2)', required: false, foreignkey: '',
  },
  homeValue: {
    key: 'homeValue', dbKey: 'home_value', type: 'numeric(10,2)', required: false, foreignkey: '',
  },
  firstMortgageRate: {
    key: 'firstMortgageRate', dbKey: 'first_mortgage_rate', type: 'smallint', required: false, foreignkey: '',
  },
  secondMortgage: {
    key: 'secondMortgage', dbKey: 'second_mortgage', type: 'text', required: false, foreignkey: '',
  },
  secondMortgageBalance: {
    key: 'secondMortgageBalance', dbKey: 'second_mortgage_balance', type: 'numeric(10,2)', required: false, foreignkey: '',
  },
  ltv: {
    key: 'ltv', dbKey: 'ltv', type: 'smallint', required: false, foreignkey: '',
  },
  ssn: {
    key: 'ssn', dbKey: 'ssn', type: 'text', required: false, foreignkey: '',
  },
  mode: {
    key: 'mode', dbKey: 'mode', type: 'text', required: false, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  loLeadId: {
    key: 'loLeadId', dbKey: 'lo_lead_id', type: 'text', required: false, foreignkey: '',
  },
  extraData: {
    key: 'extraData', dbKey: 'extra_data', type: 'jsonb', required: false, foreignkey: '',
  },
  subscriptionId: {
    key: 'subscriptionId', dbKey: 'subscription_id', type: 'text', required: false, foreignkey: 'loSubscription',
  },
  billingStatus: {
    key: 'billingStatus', dbKey: 'billing_status', type: 'text', required: false, foreignkey: '',
  },
};
export const contactStatus = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  order: {
    key: 'order', dbKey: 'order', type: 'integer', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  isConverted: {
    key: 'isConverted', dbKey: 'is_converted', type: 'boolean', required: true, foreignkey: '',
  },
  statusLifecycleId: {
    key: 'statusLifecycleId', dbKey: 'status_lifecycle_id', type: 'text', required: false, foreignkey: 'contactStatusLifecycle',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
  },
};
export const bridgeSectionLifecycle = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: 'account',
  },
  customFieldSectionId: {
    key: 'customFieldSectionId', dbKey: 'custom_field_section_id', type: 'character varying(100)', required: true, foreignkey: 'contactCustomFieldSection',
  },
  lifecycleId: {
    key: 'lifecycleId', dbKey: 'lifecycle_id', type: 'character varying(100)', required: true, foreignkey: 'contactStatusLifecycle',
  },
};
export const templateVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: false, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: false, foreignkey: '',
  },
  data: {
    key: 'data', dbKey: 'data', type: 'jsonb', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const organization = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  addressId: {
    key: 'addressId', dbKey: 'address_id', type: 'text', required: false, foreignkey: 'property',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: false, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: false, foreignkey: '',
  },
  phone: {
    key: 'phone', dbKey: 'phone', type: 'text', required: false, foreignkey: '',
  },
  email: {
    key: 'email', dbKey: 'email', type: 'text', required: false, foreignkey: '',
  },
  nmlsId: {
    key: 'nmlsId', dbKey: 'nmls_id', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  parentOrganizationId: {
    key: 'parentOrganizationId', dbKey: 'parent_organization_id', type: 'text', required: false, foreignkey: 'organization',
  },
};
export const page = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  body: {
    key: 'body', dbKey: 'body', type: 'jsonb', required: true, foreignkey: '',
  },
  templateId: {
    key: 'templateId', dbKey: 'template_id', type: 'text', required: false, foreignkey: 'template',
  },
  latestTemplate: {
    key: 'latestTemplate', dbKey: 'latest_template', type: 'text', required: false, foreignkey: 'templateVersion',
  },
  path: {
    key: 'path', dbKey: 'path', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  headerMeta: {
    key: 'headerMeta', dbKey: 'header_meta', type: 'jsonb', required: false, foreignkey: '',
  },
  themeId: {
    key: 'themeId', dbKey: 'theme_id', type: 'text', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
};
export const partner = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  organizationId: {
    key: 'organizationId', dbKey: 'organization_id', type: 'text', required: false, foreignkey: 'organization',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: false, foreignkey: '',
  },
  firstName: {
    key: 'firstName', dbKey: 'first_name', type: 'text', required: true, foreignkey: '',
  },
  lastName: {
    key: 'lastName', dbKey: 'last_name', type: 'text', required: true, foreignkey: '',
  },
  personalEmail: {
    key: 'personalEmail', dbKey: 'personal_email', type: 'text', required: false, foreignkey: '',
  },
  workEmail: {
    key: 'workEmail', dbKey: 'work_email', type: 'text', required: false, foreignkey: '',
  },
  mobilePhone: {
    key: 'mobilePhone', dbKey: 'mobile_phone', type: 'text', required: false, foreignkey: '',
  },
  workPhone: {
    key: 'workPhone', dbKey: 'work_phone', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  addressId: {
    key: 'addressId', dbKey: 'address_id', type: 'text', required: false, foreignkey: 'property',
  },
};
export const element = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  latestVersion: {
    key: 'latestVersion', dbKey: 'latest_version', type: 'text', required: false, foreignkey: 'elementVersion',
  },
  templateId: {
    key: 'templateId', dbKey: 'template_id', type: 'text', required: false, foreignkey: 'template',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  data: {
    key: 'data', dbKey: 'data', type: 'jsonb', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const loLead = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  assignmentId: {
    key: 'assignmentId', dbKey: 'assignment_id', type: 'text', required: false, foreignkey: '',
  },
  billed: {
    key: 'billed', dbKey: 'billed', type: 'boolean', required: true, foreignkey: '',
  },
  boberdooId: {
    key: 'boberdooId', dbKey: 'boberdoo_id', type: 'integer', required: false, foreignkey: '',
  },
  callCenterService: {
    key: 'callCenterService', dbKey: 'call_center_service', type: 'text', required: false, foreignkey: '',
  },
  companyId: {
    key: 'companyId', dbKey: 'company_id', type: 'text', required: false, foreignkey: '',
  },
  creditStatus: {
    key: 'creditStatus', dbKey: 'credit_status', type: 'text', required: false, foreignkey: '',
  },
  email: {
    key: 'email', dbKey: 'email', type: 'text', required: false, foreignkey: '',
  },
  firstName: {
    key: 'firstName', dbKey: 'first_name', type: 'text', required: false, foreignkey: '',
  },
  language: {
    key: 'language', dbKey: 'language', type: 'text', required: false, foreignkey: '',
  },
  ownerId: {
    key: 'ownerId', dbKey: 'owner_id', type: 'text', required: false, foreignkey: '',
  },
  phone: {
    key: 'phone', dbKey: 'phone', type: 'text', required: false, foreignkey: '',
  },
  productId: {
    key: 'productId', dbKey: 'product_id', type: 'text', required: false, foreignkey: '',
  },
  provider: {
    key: 'provider', dbKey: 'provider', type: 'text', required: false, foreignkey: '',
  },
  vendor: {
    key: 'vendor', dbKey: 'vendor', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhone: {
    key: 'secondaryPhone', dbKey: 'secondary_phone', type: 'text', required: false, foreignkey: '',
  },
  source: {
    key: 'source', dbKey: 'source', type: 'text', required: false, foreignkey: '',
  },
  subscriptionId: {
    key: 'subscriptionId', dbKey: 'subscription_id', type: 'text', required: true, foreignkey: 'loSubscription',
  },
  price: {
    key: 'price', dbKey: 'price', type: 'double precision', required: true, foreignkey: '',
  },
  transferStatus: {
    key: 'transferStatus', dbKey: 'transfer_status', type: 'text', required: false, foreignkey: '',
  },
  leadType: {
    key: 'leadType', dbKey: 'lead_type', type: 'text', required: false, foreignkey: '',
  },
  addressCity: {
    key: 'addressCity', dbKey: 'address.city', type: 'text', required: false, foreignkey: '',
  },
  addressCountry: {
    key: 'addressCountry', dbKey: 'address.country', type: 'text', required: false, foreignkey: '',
  },
  addressState: {
    key: 'addressState', dbKey: 'address.state', type: 'text', required: false, foreignkey: '',
  },
  addressStreet: {
    key: 'addressStreet', dbKey: 'address.street', type: 'text', required: false, foreignkey: '',
  },
  addressStreet2: {
    key: 'addressStreet2', dbKey: 'address.street2', type: 'text', required: false, foreignkey: '',
  },
  addressStreet3: {
    key: 'addressStreet3', dbKey: 'address.street3', type: 'text', required: false, foreignkey: '',
  },
  addressZip: {
    key: 'addressZip', dbKey: 'address.zip', type: 'text', required: false, foreignkey: '',
  },
  loanInterestRate: {
    key: 'loanInterestRate', dbKey: 'loan.interest_rate', type: 'double precision', required: false, foreignkey: '',
  },
  loanMonthlyPayment: {
    key: 'loanMonthlyPayment', dbKey: 'loan.monthly_payment', type: 'double precision', required: false, foreignkey: '',
  },
  loanTransactionType: {
    key: 'loanTransactionType', dbKey: 'loan.transaction_type', type: 'text', required: false, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan.type', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  loLeadRawId: {
    key: 'loLeadRawId', dbKey: 'lo_lead_raw_id', type: 'integer', required: false, foreignkey: 'loLeadRaw',
  },
  loanRange: {
    key: 'loanRange', dbKey: 'loan_range', type: 'jsonb', required: false, foreignkey: '',
  },
  creditedTransferPrice: {
    key: 'creditedTransferPrice', dbKey: 'credited_transfer_price', type: 'double precision', required: true, foreignkey: '',
  },
  refundedPrice: {
    key: 'refundedPrice', dbKey: 'refunded_price', type: 'double precision', required: true, foreignkey: '',
  },
  refundedTransferPrice: {
    key: 'refundedTransferPrice', dbKey: 'refunded_transfer_price', type: 'double precision', required: true, foreignkey: '',
  },
  transferDate: {
    key: 'transferDate', dbKey: 'transfer_date', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
};
export const templateDependency = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  templateId: {
    key: 'templateId', dbKey: 'template_id', type: 'text', required: true, foreignkey: 'template',
  },
  version: {
    key: 'version', dbKey: 'version', type: 'text', required: true, foreignkey: 'templateVersion',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const routing = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  subdomain: {
    key: 'subdomain', dbKey: 'subdomain', type: 'text', required: false, foreignkey: 'account',
  },
  path: {
    key: 'path', dbKey: 'path', type: 'text', required: true, foreignkey: '',
  },
  resourceId: {
    key: 'resourceId', dbKey: 'resource_id', type: 'text', required: true, foreignkey: 'page',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const links = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  sourceId: {
    key: 'sourceId', dbKey: 'source_id', type: 'text', required: true, foreignkey: 'page',
  },
  destinationId: {
    key: 'destinationId', dbKey: 'destination_id', type: 'text', required: true, foreignkey: 'page',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
};
export const elementtotemplateVersion = {
  A: {
    key: 'A', dbKey: 'A', type: 'text', required: true, foreignkey: 'element',
  },
  B: {
    key: 'B', dbKey: 'B', type: 'text', required: true, foreignkey: 'templateVersion',
  },
};
export const contact = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  statusId: {
    key: 'statusId', dbKey: 'status_id', type: 'text', required: false, foreignkey: 'contactStatus',
  },
  addressId: {
    key: 'addressId', dbKey: 'address_id', type: 'text', required: false, foreignkey: 'property',
  },
  pictureUrl: {
    key: 'pictureUrl', dbKey: 'picture_url', type: 'text', required: false, foreignkey: '',
  },
  nmlsId: {
    key: 'nmlsId', dbKey: 'nmls_id', type: 'text', required: false, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  firstName: {
    key: 'firstName', dbKey: 'first_name', type: 'text', required: true, foreignkey: '',
  },
  lastName: {
    key: 'lastName', dbKey: 'last_name', type: 'text', required: true, foreignkey: '',
  },
  personalEmail: {
    key: 'personalEmail', dbKey: 'personal_email', type: 'text', required: false, foreignkey: '',
  },
  workEmail: {
    key: 'workEmail', dbKey: 'work_email', type: 'text', required: false, foreignkey: '',
  },
  mobilePhone: {
    key: 'mobilePhone', dbKey: 'mobile_phone', type: 'text', required: false, foreignkey: '',
  },
  workPhone: {
    key: 'workPhone', dbKey: 'work_phone', type: 'text', required: false, foreignkey: '',
  },
  extraMail: {
    key: 'extraMail', dbKey: 'extra_mail', type: 'text[]', required: false, foreignkey: '',
  },
  extraPhone: {
    key: 'extraPhone', dbKey: 'extra_phone', type: 'text[]', required: false, foreignkey: '',
  },
  jobTitle: {
    key: 'jobTitle', dbKey: 'job_title', type: 'text', required: false, foreignkey: '',
  },
  maritalStatus: {
    key: 'maritalStatus', dbKey: 'marital_status', type: 'text', required: false, foreignkey: '',
  },
  fico: {
    key: 'fico', dbKey: 'fico', type: 'text', required: false, foreignkey: '',
  },
  gender: {
    key: 'gender', dbKey: 'gender', type: 'text', required: false, foreignkey: '',
  },
  dob: {
    key: 'dob', dbKey: 'dob', type: 'text', required: false, foreignkey: '',
  },
  creationSource: {
    key: 'creationSource', dbKey: 'creation_source', type: 'text', required: true, foreignkey: '',
  },
  ssn: {
    key: 'ssn', dbKey: 'ssn', type: 'text', required: false, foreignkey: '',
  },
  leadSourceType: {
    key: 'leadSourceType', dbKey: 'lead_source_type', type: 'text', required: false, foreignkey: '',
  },
  leadSource: {
    key: 'leadSource', dbKey: 'lead_source', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  middleName: {
    key: 'middleName', dbKey: 'middle_name', type: 'text', required: false, foreignkey: '',
  },
  autoIncrementId: {
    key: 'autoIncrementId', dbKey: 'auto_increment_id', type: 'integer', required: true, foreignkey: '',
  },
  locale: {
    key: 'locale', dbKey: 'locale', type: 'character varying(50)', required: false, foreignkey: '',
  },
  monthlyIncome: {
    key: 'monthlyIncome', dbKey: 'monthly_income', type: 'double precision', required: false, foreignkey: '',
  },
  organizationId: {
    key: 'organizationId', dbKey: 'organization_id', type: 'text', required: false, foreignkey: 'organization',
  },
  origin: {
    key: 'origin', dbKey: 'origin', type: 'character varying(100)', required: false, foreignkey: '',
  },
  taygoSource: {
    key: 'taygoSource', dbKey: 'taygo_source', type: 'character varying(100)', required: false, foreignkey: '',
  },
  timezone: {
    key: 'timezone', dbKey: 'timezone', type: 'character varying(50)', required: false, foreignkey: '',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
  },
  isConverted: {
    key: 'isConverted', dbKey: 'is_converted', type: 'boolean', required: true, foreignkey: '',
  },
  statusLifecycleId: {
    key: 'statusLifecycleId', dbKey: 'status_lifecycle_id', type: 'character varying(100)', required: false, foreignkey: 'contactStatusLifecycle',
  },
};
export const contactCustomFieldValue = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  customFieldId: {
    key: 'customFieldId', dbKey: 'custom_field_id', type: 'text', required: true, foreignkey: 'contactCustomField',
  },
  value: {
    key: 'value', dbKey: 'value', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
};
export const loan = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  loanOfficerId: {
    key: 'loanOfficerId', dbKey: 'loan_officer_id', type: 'text', required: false, foreignkey: 'user',
  },
  addressId: {
    key: 'addressId', dbKey: 'address_id', type: 'text', required: false, foreignkey: 'property',
  },
  purpose: {
    key: 'purpose', dbKey: 'purpose', type: 'text', required: false, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: false, foreignkey: '',
  },
  product: {
    key: 'product', dbKey: 'product', type: 'text', required: false, foreignkey: '',
  },
  amount: {
    key: 'amount', dbKey: 'amount', type: 'double precision', required: false, foreignkey: '',
  },
  interestRate: {
    key: 'interestRate', dbKey: 'interest_rate', type: 'double precision', required: false, foreignkey: '',
  },
  term: {
    key: 'term', dbKey: 'term', type: 'text', required: false, foreignkey: '',
  },
  downPayment: {
    key: 'downPayment', dbKey: 'down_payment', type: 'double precision', required: false, foreignkey: '',
  },
  remainingTerm: {
    key: 'remainingTerm', dbKey: 'remaining_term', type: 'text', required: false, foreignkey: '',
  },
  notes: {
    key: 'notes', dbKey: 'notes', type: 'text', required: false, foreignkey: '',
  },
  propertyOccupancy: {
    key: 'propertyOccupancy', dbKey: 'property_occupancy', type: 'text', required: false, foreignkey: '',
  },
  mortgageInsurance: {
    key: 'mortgageInsurance', dbKey: 'mortgage_insurance', type: 'double precision', required: false, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'text', required: true, foreignkey: '',
  },
  closingDate: {
    key: 'closingDate', dbKey: 'closing_date', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  remainingValue: {
    key: 'remainingValue', dbKey: 'remaining_value', type: 'double precision', required: false, foreignkey: '',
  },
  amortization: {
    key: 'amortization', dbKey: 'amortization', type: 'text', required: false, foreignkey: '',
  },
  desiredOrCurrent: {
    key: 'desiredOrCurrent', dbKey: 'desired_or_current', type: 'text', required: true, foreignkey: '',
  },
  desiredCashOutAmount: {
    key: 'desiredCashOutAmount', dbKey: 'desired_cash_out_amount', type: 'double precision', required: false, foreignkey: '',
  },
  desiredDownPayment: {
    key: 'desiredDownPayment', dbKey: 'desired_down_payment', type: 'double precision', required: false, foreignkey: '',
  },
  loanPropertyType: {
    key: 'loanPropertyType', dbKey: 'loan_property_type', type: 'character varying(255)', required: false, foreignkey: '',
  },
  loanUnits: {
    key: 'loanUnits', dbKey: 'loan_units', type: 'double precision', required: false, foreignkey: '',
  },
  timeline: {
    key: 'timeline', dbKey: 'timeline', type: 'character varying(80)', required: false, foreignkey: '',
  },
};
export const contactOtherAssociates = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(100)', required: true, foreignkey: 'contact',
  },
  associateName: {
    key: 'associateName', dbKey: 'associate_name', type: 'character varying(255)', required: true, foreignkey: '',
  },
};
export const bridgeContactTag = {
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  tagId: {
    key: 'tagId', dbKey: 'tag_id', type: 'text', required: true, foreignkey: 'contactTag',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  assignedBy: {
    key: 'assignedBy', dbKey: 'assigned_by', type: 'text', required: true, foreignkey: '',
  },
  assignTime: {
    key: 'assignTime', dbKey: 'assign_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  assignRequest: {
    key: 'assignRequest', dbKey: 'assign_request', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
};
export const incomeSource = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  addressId: {
    key: 'addressId', dbKey: 'address_id', type: 'text', required: false, foreignkey: 'property',
  },
  organizationId: {
    key: 'organizationId', dbKey: 'organization_id', type: 'text', required: false, foreignkey: 'organization',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: false, foreignkey: '',
  },
  employerName: {
    key: 'employerName', dbKey: 'employer_name', type: 'text', required: false, foreignkey: '',
  },
  title: {
    key: 'title', dbKey: 'title', type: 'text', required: false, foreignkey: '',
  },
  phone: {
    key: 'phone', dbKey: 'phone', type: 'text', required: false, foreignkey: '',
  },
  amount: {
    key: 'amount', dbKey: 'amount', type: 'double precision', required: false, foreignkey: '',
  },
  incomeAmountPeriod: {
    key: 'incomeAmountPeriod', dbKey: 'income_amount_period', type: 'text', required: false, foreignkey: '',
  },
  startDate: {
    key: 'startDate', dbKey: 'start_date', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  endDate: {
    key: 'endDate', dbKey: 'end_date', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  description: {
    key: 'description', dbKey: 'description', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'text', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'text', required: false, foreignkey: '',
  },
  employerPhone: {
    key: 'employerPhone', dbKey: 'employer_phone', type: 'character varying(25)', required: false, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'character varying(50)', required: false, foreignkey: '',
  },
};
export const bridgeContactPartner = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: 'account',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(100)', required: true, foreignkey: 'contact',
  },
  partnerId: {
    key: 'partnerId', dbKey: 'partner_id', type: 'character varying(100)', required: true, foreignkey: 'partner',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'character varying(255)', required: false, foreignkey: '',
  },
  assignedBy: {
    key: 'assignedBy', dbKey: 'assigned_by', type: 'character varying(100)', required: true, foreignkey: '',
  },
  assignTime: {
    key: 'assignTime', dbKey: 'assign_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  assignRequest: {
    key: 'assignRequest', dbKey: 'assign_request', type: 'character varying(100)', required: true, foreignkey: '',
  },
};
export const bridgeContactLoan = {
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  loanId: {
    key: 'loanId', dbKey: 'loan_id', type: 'text', required: true, foreignkey: 'loan',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  assignedBy: {
    key: 'assignedBy', dbKey: 'assigned_by', type: 'text', required: true, foreignkey: '',
  },
  assignTime: {
    key: 'assignTime', dbKey: 'assign_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  assignRequest: {
    key: 'assignRequest', dbKey: 'assign_request', type: 'text', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
};
export const bridgeContactContact = {
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  assignedTo: {
    key: 'assignedTo', dbKey: 'assigned_to', type: 'text', required: true, foreignkey: '',
  },
  relationship: {
    key: 'relationship', dbKey: 'relationship', type: 'text', required: true, foreignkey: '',
  },
  assignedBy: {
    key: 'assignedBy', dbKey: 'assigned_by', type: 'text', required: true, foreignkey: '',
  },
  assignTime: {
    key: 'assignTime', dbKey: 'assign_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  assignRequest: {
    key: 'assignRequest', dbKey: 'assign_request', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
};
export const bridgeContactUser = {
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  userId: {
    key: 'userId', dbKey: 'user_id', type: 'text', required: true, foreignkey: 'user',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  assignedBy: {
    key: 'assignedBy', dbKey: 'assigned_by', type: 'text', required: true, foreignkey: '',
  },
  assignTime: {
    key: 'assignTime', dbKey: 'assign_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  assignRequest: {
    key: 'assignRequest', dbKey: 'assign_request', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
};
