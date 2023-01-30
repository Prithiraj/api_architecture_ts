export const workflowTargetFilters = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  query: {
    key: 'query', dbKey: 'query', type: 'jsonb', required: true, foreignkey: '',
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
  timezone: {
    key: 'timezone', dbKey: 'timezone', type: 'text', required: false, foreignkey: '',
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
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: '',
  },
  isDeleted: {
    key: 'isDeleted', dbKey: 'is_deleted', type: 'boolean', required: true, foreignkey: '',
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
export const eventCategory = {
  id: {
    key: 'id', dbKey: 'id', type: 'integer', required: true, foreignkey: '',
  },
  eventCategoryName: {
    key: 'eventCategoryName', dbKey: 'event_category_name', type: 'text', required: true, foreignkey: '',
  },
  eventTargetedToTableName: {
    key: 'eventTargetedToTableName', dbKey: 'event_targeted_to_table_name', type: 'text', required: false, foreignkey: '',
  },
  eventCategoryDescription: {
    key: 'eventCategoryDescription', dbKey: 'event_category_description', type: 'text', required: false, foreignkey: '',
  },
  createdAt: {
    key: 'createdAt', dbKey: 'created_at', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  updatedAt: {
    key: 'updatedAt', dbKey: 'updated_at', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
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
export const contactFilter = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  query: {
    key: 'query', dbKey: 'query', type: 'jsonb', required: true, foreignkey: '',
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
export const contactCustomFieldSection = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: '',
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
export const filterPermission = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  ownerAccountId: {
    key: 'ownerAccountId', dbKey: 'owner_account_id', type: 'text', required: true, foreignkey: '',
  },
  sharedAccountId: {
    key: 'sharedAccountId', dbKey: 'shared_account_id', type: 'text', required: true, foreignkey: '',
  },
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'character varying(100)', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'character varying(100)', required: true, foreignkey: '',
  },
  updateRequest: {
    key: 'updateRequest', dbKey: 'update_request', type: 'character varying(100)', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'character varying(100)', required: false, foreignkey: '',
  },
  contactFilterId: {
    key: 'contactFilterId', dbKey: 'contact_filter_id', type: 'text', required: true, foreignkey: 'contactFilter',
  },
};
export const eventType = {
  id: {
    key: 'id', dbKey: 'id', type: 'integer', required: true, foreignkey: '',
  },
  eventType: {
    key: 'eventType', dbKey: 'event_type', type: 'text', required: true, foreignkey: '',
  },
  eventCategoryId: {
    key: 'eventCategoryId', dbKey: 'event_category_id', type: 'integer', required: true, foreignkey: 'eventCategory',
  },
  eventTypeDescription: {
    key: 'eventTypeDescription', dbKey: 'event_type_description', type: 'text', required: false, foreignkey: '',
  },
  dbAction: {
    key: 'dbAction', dbKey: 'db_action', type: 'text', required: false, foreignkey: '',
  },
  createdAt: {
    key: 'createdAt', dbKey: 'created_at', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  updatedAt: {
    key: 'updatedAt', dbKey: 'updated_at', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
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
  subdomain: {
    key: 'subdomain', dbKey: 'subdomain', type: 'text', required: false, foreignkey: '',
  },
  parentAccountId: {
    key: 'parentAccountId', dbKey: 'parent_account_id', type: 'text', required: false, foreignkey: '',
  },
  masterUserId: {
    key: 'masterUserId', dbKey: 'master_user_id', type: 'text', required: false, foreignkey: '',
  },
};
export const elementVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  version: {
    key: 'version', dbKey: 'version', type: 'text', required: true, foreignkey: '',
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
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
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
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: false, foreignkey: '',
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
  email: {
    key: 'email', dbKey: 'email', type: 'text', required: false, foreignkey: '',
  },
  emailVerified: {
    key: 'emailVerified', dbKey: 'email_verified', type: 'boolean', required: true, foreignkey: '',
  },
  firstname: {
    key: 'firstname', dbKey: 'firstname', type: 'text', required: false, foreignkey: '',
  },
  lastname: {
    key: 'lastname', dbKey: 'lastname', type: 'text', required: false, foreignkey: '',
  },
  phone: {
    key: 'phone', dbKey: 'phone', type: 'text', required: false, foreignkey: '',
  },
  phoneNumberVerified: {
    key: 'phoneNumberVerified', dbKey: 'phone_number_verified', type: 'boolean', required: true, foreignkey: '',
  },
  profileImage: {
    key: 'profileImage', dbKey: 'profile_image', type: 'text', required: false, foreignkey: '',
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
  postal: {
    key: 'postal', dbKey: 'postal', type: 'text', required: false, foreignkey: '',
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
  propertyUnits: {
    key: 'propertyUnits', dbKey: 'property_units', type: 'double precision', required: false, foreignkey: '',
  },
  propertyOccupancy: {
    key: 'propertyOccupancy', dbKey: 'property_occupancy', type: 'character varying(50)', required: false, foreignkey: '',
  },
};
export const workflow = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: '',
  },
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  sourceTemplate: {
    key: 'sourceTemplate', dbKey: 'source_template', type: 'text', required: false, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'workflow_status', required: true, foreignkey: '',
  },
  steps: {
    key: 'steps', dbKey: 'steps', type: 'jsonb', required: true, foreignkey: '',
  },
  targetFilter: {
    key: 'targetFilter', dbKey: 'target_filter', type: 'text', required: false, foreignkey: '',
  },
  apiVersion: {
    key: 'apiVersion', dbKey: 'api_version', type: 'text', required: true, foreignkey: '',
  },
  firstStep: {
    key: 'firstStep', dbKey: 'first_step', type: 'text', required: true, foreignkey: '',
  },
  flowType: {
    key: 'flowType', dbKey: 'flow_type', type: 'text', required: true, foreignkey: '',
  },
  name: {
    key: 'name', dbKey: 'name', type: 'text', required: true, foreignkey: '',
  },
  recurring: {
    key: 'recurring', dbKey: 'recurring', type: 'jsonb', required: false, foreignkey: '',
  },
  retry: {
    key: 'retry', dbKey: 'retry', type: 'jsonb', required: false, foreignkey: '',
  },
  startTime: {
    key: 'startTime', dbKey: 'start_time', type: 'text', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'character varying(100)', required: true, foreignkey: 'user',
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
  target: {
    key: 'target', dbKey: 'target', type: 'worflow_target', required: false, foreignkey: '',
  },
};
export const workflowtoworkflowTargetFilters = {
  A: {
    key: 'A', dbKey: 'A', type: 'text', required: true, foreignkey: 'workflow',
  },
  B: {
    key: 'B', dbKey: 'B', type: 'text', required: true, foreignkey: 'workflowTargetFilters',
  },
};
export const workflowTemplate = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  workflowId: {
    key: 'workflowId', dbKey: 'workflow_id', type: 'text', required: true, foreignkey: 'workflow',
  },
  workflowData: {
    key: 'workflowData', dbKey: 'workflow_data', type: 'jsonb', required: true, foreignkey: '',
  },
  version: {
    key: 'version', dbKey: 'version', type: 'text', required: true, foreignkey: '',
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
export const workflowState = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  workflowId: {
    key: 'workflowId', dbKey: 'workflow_id', type: 'text', required: true, foreignkey: 'workflow',
  },
  entityName: {
    key: 'entityName', dbKey: 'entity_name', type: 'text', required: true, foreignkey: '',
  },
  apiVersion: {
    key: 'apiVersion', dbKey: 'api_version', type: 'text', required: true, foreignkey: '',
  },
  steps: {
    key: 'steps', dbKey: 'steps', type: 'jsonb', required: true, foreignkey: '',
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
export const loLeadSource = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  color: {
    key: 'color', dbKey: 'color', type: 'text', required: true, foreignkey: '',
  },
  productId: {
    key: 'productId', dbKey: 'product_id', type: 'text', required: false, foreignkey: '',
  },
  tileColor: {
    key: 'tileColor', dbKey: 'tile_color', type: 'text', required: true, foreignkey: '',
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
  active: {
    key: 'active', dbKey: 'active', type: 'boolean', required: true, foreignkey: '',
  },
  callcenter: {
    key: 'callcenter', dbKey: 'callcenter', type: 'text', required: true, foreignkey: '',
  },
  dedicatedCallcenter: {
    key: 'dedicatedCallcenter', dbKey: 'dedicated_callcenter', type: 'boolean', required: true, foreignkey: '',
  },
  notificationEmails: {
    key: 'notificationEmails', dbKey: 'notification_emails', type: 'text[]', required: false, foreignkey: '',
  },
  order: {
    key: 'order', dbKey: 'order', type: 'integer', required: false, foreignkey: '',
  },
};
export const pageVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  version: {
    key: 'version', dbKey: 'version', type: 'text', required: true, foreignkey: '',
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
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
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
export const eventsV2 = {
  eventId: {
    key: 'eventId', dbKey: 'event_id', type: 'text', required: true, foreignkey: '',
  },
  eventCategoryId: {
    key: 'eventCategoryId', dbKey: 'event_category_id', type: 'integer', required: false, foreignkey: 'eventCategory',
  },
  eventCategory: {
    key: 'eventCategory', dbKey: 'event_category', type: 'text', required: false, foreignkey: '',
  },
  eventTypeId: {
    key: 'eventTypeId', dbKey: 'event_type_id', type: 'integer', required: false, foreignkey: 'eventType',
  },
  eventType: {
    key: 'eventType', dbKey: 'event_type', type: 'text', required: false, foreignkey: '',
  },
  eventData: {
    key: 'eventData', dbKey: 'event_data', type: 'jsonb', required: true, foreignkey: '',
  },
  eventProvider: {
    key: 'eventProvider', dbKey: 'event_provider', type: 'text', required: false, foreignkey: '',
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
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
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
  userPool: {
    key: 'userPool', dbKey: 'user.pool', type: 'text', required: false, foreignkey: '',
  },
  destinationId: {
    key: 'destinationId', dbKey: 'destination.id', type: 'text', required: false, foreignkey: '',
  },
  endTime: {
    key: 'endTime', dbKey: 'end_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  eventClass: {
    key: 'eventClass', dbKey: 'event_class', type: 'text', required: false, foreignkey: '',
  },
  eventCode: {
    key: 'eventCode', dbKey: 'event_code', type: 'text', required: false, foreignkey: '',
  },
  eventSeverity: {
    key: 'eventSeverity', dbKey: 'event_severity', type: 'text', required: false, foreignkey: '',
  },
  eventTime: {
    key: 'eventTime', dbKey: 'event_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  message: {
    key: 'message', dbKey: 'message', type: 'text', required: false, foreignkey: '',
  },
  ownerId: {
    key: 'ownerId', dbKey: 'owner_id', type: 'text', required: false, foreignkey: '',
  },
  referralId: {
    key: 'referralId', dbKey: 'referral.id', type: 'text', required: false, foreignkey: '',
  },
  referralType: {
    key: 'referralType', dbKey: 'referral.type', type: 'text', required: false, foreignkey: '',
  },
  startTime: {
    key: 'startTime', dbKey: 'start_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  resourceId: {
    key: 'resourceId', dbKey: 'resource_id', type: 'text', required: false, foreignkey: '',
  },
  resourceType: {
    key: 'resourceType', dbKey: 'resource_type', type: 'text', required: false, foreignkey: '',
  },
  sourceId: {
    key: 'sourceId', dbKey: 'source_id', type: 'text', required: false, foreignkey: '',
  },
  sourceType: {
    key: 'sourceType', dbKey: 'source_type', type: 'text', required: false, foreignkey: '',
  },
  timeZone: {
    key: 'timeZone', dbKey: 'time_zone', type: 'text', required: false, foreignkey: '',
  },
  channelId: {
    key: 'channelId', dbKey: 'channel_id', type: 'text', required: false, foreignkey: '',
  },
  channelType: {
    key: 'channelType', dbKey: 'channel_type', type: 'text', required: false, foreignkey: '',
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
  loanPropertyOccupancy: {
    key: 'loanPropertyOccupancy', dbKey: 'loan_property_occupancy', type: 'text', required: false, foreignkey: '',
  },
  loanPropertyValue: {
    key: 'loanPropertyValue', dbKey: 'loan_property_value', type: 'double precision', required: false, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan_type', type: 'text', required: false, foreignkey: '',
  },
};
export const workflowTemplatePermission = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
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
  workflowTemplateId: {
    key: 'workflowTemplateId', dbKey: 'workflow_template_id', type: 'text', required: true, foreignkey: 'workflowTemplate',
  },
  permission: {
    key: 'permission', dbKey: 'permission', type: 'permission', required: true, foreignkey: '',
  },
  ownerAccountId: {
    key: 'ownerAccountId', dbKey: 'owner_account_id', type: 'text', required: true, foreignkey: '',
  },
  sharedAccountId: {
    key: 'sharedAccountId', dbKey: 'shared_account_id', type: 'text', required: true, foreignkey: '',
  },
  forceLatestVersion: {
    key: 'forceLatestVersion', dbKey: 'force_latest_version', type: 'boolean', required: false, foreignkey: '',
  },
};
export const templateVersion = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  version: {
    key: 'version', dbKey: 'version', type: 'text', required: true, foreignkey: '',
  },
  templateId: {
    key: 'templateId', dbKey: 'template_id', type: 'text', required: true, foreignkey: '',
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
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
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
  latestVersionId: {
    key: 'latestVersionId', dbKey: 'latest_version_id', type: 'text', required: true, foreignkey: 'templateVersion',
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
  category: {
    key: 'category', dbKey: 'category', type: 'page_category', required: false, foreignkey: '',
  },
  ownerId: {
    key: 'ownerId', dbKey: 'owner_id', type: 'text', required: true, foreignkey: '',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'page_type', required: true, foreignkey: '',
  },
  status: {
    key: 'status', dbKey: 'status', type: 'page_status', required: false, foreignkey: '',
  },
  latestTemplateId: {
    key: 'latestTemplateId', dbKey: 'latest_template_id', type: 'text', required: false, foreignkey: 'templateVersion',
  },
  latestVersionId: {
    key: 'latestVersionId', dbKey: 'latest_version_id', type: 'text', required: true, foreignkey: 'pageVersion',
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
  resourceId: {
    key: 'resourceId', dbKey: 'resource_id', type: 'text', required: true, foreignkey: 'template',
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
  versionId: {
    key: 'versionId', dbKey: 'version_id', type: 'text', required: true, foreignkey: 'templateVersion',
  },
};
export const element = {
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  templateId: {
    key: 'templateId', dbKey: 'template_id', type: 'text', required: false, foreignkey: 'template',
  },
  latestTemplate: {
    key: 'latestTemplate', dbKey: 'latest_template', type: 'text', required: false, foreignkey: '',
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
  latestVersionId: {
    key: 'latestVersionId', dbKey: 'latest_version_id', type: 'text', required: true, foreignkey: 'elementVersion',
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
  homePhone: {
    key: 'homePhone', dbKey: 'home_phone', type: 'text', required: false, foreignkey: '',
  },
  fico: {
    key: 'fico', dbKey: 'fico', type: 'integer', required: false, foreignkey: '',
  },
  currentLoanId: {
    key: 'currentLoanId', dbKey: 'current_loan_id', type: 'text', required: false, foreignkey: 'loan',
  },
  desiredLoanId: {
    key: 'desiredLoanId', dbKey: 'desired_loan_id', type: 'text', required: false, foreignkey: 'loan',
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
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: false, foreignkey: 'contact',
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
export const contactOtherAssociates = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(100)', required: true, foreignkey: 'contact',
  },
  associateName: {
    key: 'associateName', dbKey: 'associate_name', type: 'character varying(255)', required: true, foreignkey: '',
  },
};
export const contactReminder = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: 'account',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(100)', required: true, foreignkey: 'contact',
  },
  userId: {
    key: 'userId', dbKey: 'user_id', type: 'character varying(100)', required: true, foreignkey: 'user',
  },
  type: {
    key: 'type', dbKey: 'type', type: 'character varying(100)', required: true, foreignkey: '',
  },
  title: {
    key: 'title', dbKey: 'title', type: 'text', required: false, foreignkey: '',
  },
  description: {
    key: 'description', dbKey: 'description', type: 'text', required: false, foreignkey: '',
  },
  dueDate: {
    key: 'dueDate', dbKey: 'due_date', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  executeAt: {
    key: 'executeAt', dbKey: 'execute_at', type: 'character varying(16)', required: true, foreignkey: '',
  },
  reminderData: {
    key: 'reminderData', dbKey: 'reminder_data', type: 'text', required: false, foreignkey: '',
  },
  active: {
    key: 'active', dbKey: 'active', type: 'boolean', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'character varying(100)', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'character varying(100)', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
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
export const loSubscription = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  stripeSubscription: {
    key: 'stripeSubscription', dbKey: 'stripe_subscription', type: 'text', required: false, foreignkey: '',
  },
  stripeStatus: {
    key: 'stripeStatus', dbKey: 'stripe_status', type: 'text', required: false, foreignkey: '',
  },
  stripePaymentIntent: {
    key: 'stripePaymentIntent', dbKey: 'stripe_payment_intent', type: 'text', required: false, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: false, foreignkey: '',
  },
  autoBilling: {
    key: 'autoBilling', dbKey: 'auto_billing', type: 'boolean', required: false, foreignkey: '',
  },
  boberdooId: {
    key: 'boberdooId', dbKey: 'boberdoo_id', type: 'integer', required: false, foreignkey: '',
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
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
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
  deactivateTime: {
    key: 'deactivateTime', dbKey: 'deactivate_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  deactivateReason: {
    key: 'deactivateReason', dbKey: 'deactivate_reason', type: 'text', required: false, foreignkey: '',
  },
  finishTime: {
    key: 'finishTime', dbKey: 'finish_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  inactive: {
    key: 'inactive', dbKey: 'inactive', type: 'boolean', required: false, foreignkey: '',
  },
  price: {
    key: 'price', dbKey: 'price', type: 'double precision', required: false, foreignkey: '',
  },
  priceSubscriptionItemId: {
    key: 'priceSubscriptionItemId', dbKey: 'price_subscription_item_id', type: 'text', required: false, foreignkey: 'stripeSubscriptionItem',
  },
  productId: {
    key: 'productId', dbKey: 'product_id', type: 'text', required: false, foreignkey: '',
  },
  transferPrice: {
    key: 'transferPrice', dbKey: 'transfer_price', type: 'double precision', required: false, foreignkey: '',
  },
  transferPriceSubscriptionItemId: {
    key: 'transferPriceSubscriptionItemId', dbKey: 'transfer_price_subscription_item_id', type: 'text', required: false, foreignkey: 'stripeSubscriptionItem',
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
  userId: {
    key: 'userId', dbKey: 'user_id', type: 'text', required: false, foreignkey: '',
  },
  activeLeadTransfer: {
    key: 'activeLeadTransfer', dbKey: 'active_lead_transfer', type: 'boolean', required: false, foreignkey: '',
  },
  agentState: {
    key: 'agentState', dbKey: 'agent_state', type: 'text', required: false, foreignkey: '',
  },
  callCenterService: {
    key: 'callCenterService', dbKey: 'call_center_service', type: 'text[]', required: false, foreignkey: '',
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
  scheduleTo: {
    key: 'scheduleTo', dbKey: 'schedule.to', type: 'text', required: false, foreignkey: '',
  },
  timeZone: {
    key: 'timeZone', dbKey: 'time_zone', type: 'text', required: false, foreignkey: '',
  },
  primaryPhoneType: {
    key: 'primaryPhoneType', dbKey: 'primary_phone_type', type: 'text', required: false, foreignkey: '',
  },
  primaryPhone: {
    key: 'primaryPhone', dbKey: 'primary_phone', type: 'text', required: false, foreignkey: '',
  },
  primaryPhoneVerified: {
    key: 'primaryPhoneVerified', dbKey: 'primary_phone_verified', type: 'boolean', required: false, foreignkey: '',
  },
  secondaryPhoneType: {
    key: 'secondaryPhoneType', dbKey: 'secondary_phone_type', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhone: {
    key: 'secondaryPhone', dbKey: 'secondary_phone', type: 'text', required: false, foreignkey: '',
  },
  secondaryPhoneVerified: {
    key: 'secondaryPhoneVerified', dbKey: 'secondary_phone_verified', type: 'boolean', required: false, foreignkey: '',
  },
  alertList: {
    key: 'alertList', dbKey: 'alert_list', type: 'text[]', required: false, foreignkey: '',
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
  preferredmeetingplaceCity: {
    key: 'preferredmeetingplaceCity', dbKey: 'preferred_meeting_place.city', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceCountry: {
    key: 'preferredmeetingplaceCountry', dbKey: 'preferred_meeting_place.country', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceState: {
    key: 'preferredmeetingplaceState', dbKey: 'preferred_meeting_place.state', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceStreet: {
    key: 'preferredmeetingplaceStreet', dbKey: 'preferred_meeting_place.street', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceStreet2: {
    key: 'preferredmeetingplaceStreet2', dbKey: 'preferred_meeting_place.street2', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceStreet3: {
    key: 'preferredmeetingplaceStreet3', dbKey: 'preferred_meeting_place.street3', type: 'text', required: false, foreignkey: '',
  },
  preferredmeetingplaceZip: {
    key: 'preferredmeetingplaceZip', dbKey: 'preferred_meeting_place.zip', type: 'text', required: false, foreignkey: '',
  },
  county: {
    key: 'county', dbKey: 'county', type: 'text', required: false, foreignkey: '',
  },
  preferredcommunicationscheduleDays: {
    key: 'preferredcommunicationscheduleDays', dbKey: 'preferred_communication_schedule.days', type: 'text[]', required: false, foreignkey: '',
  },
  preferredcommunicationscheduleFrom: {
    key: 'preferredcommunicationscheduleFrom', dbKey: 'preferred_communication_schedule.from', type: 'text', required: false, foreignkey: '',
  },
  preferredcommunicationscheduleTo: {
    key: 'preferredcommunicationscheduleTo', dbKey: 'preferred_communication_schedule.to', type: 'text', required: false, foreignkey: '',
  },
  infoEmail: {
    key: 'infoEmail', dbKey: 'info_email', type: 'text', required: false, foreignkey: '',
  },
  infoPhone: {
    key: 'infoPhone', dbKey: 'info_phone', type: 'text', required: false, foreignkey: '',
  },
  infoName: {
    key: 'infoName', dbKey: 'info_name', type: 'text', required: false, foreignkey: '',
  },
  infoWebsite: {
    key: 'infoWebsite', dbKey: 'info_website', type: 'text', required: false, foreignkey: '',
  },
  leadType: {
    key: 'leadType', dbKey: 'lead_type', type: 'text[]', required: false, foreignkey: '',
  },
  transactionType: {
    key: 'transactionType', dbKey: 'transaction_type', type: 'text[]', required: false, foreignkey: '',
  },
  loanRanges: {
    key: 'loanRanges', dbKey: 'loan_ranges', type: 'jsonb', required: true, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan_type', type: 'text[]', required: false, foreignkey: '',
  },
  vendors: {
    key: 'vendors', dbKey: 'vendors', type: 'text[]', required: false, foreignkey: '',
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
  totalCredited: {
    key: 'totalCredited', dbKey: 'total_credited', type: 'double precision', required: false, foreignkey: '',
  },
  totalRefunded: {
    key: 'totalRefunded', dbKey: 'total_refunded', type: 'double precision', required: false, foreignkey: '',
  },
  leadCategory: {
    key: 'leadCategory', dbKey: 'lead_category', type: 'text[]', required: false, foreignkey: '',
  },
  weight: {
    key: 'weight', dbKey: 'weight', type: 'integer', required: true, foreignkey: '',
  },
  rmpptBuyerId: {
    key: 'rmpptBuyerId', dbKey: 'rmppt_buyer_id', type: 'integer', required: false, foreignkey: '',
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
export const contactPermission = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  ownerAccountId: {
    key: 'ownerAccountId', dbKey: 'owner_account_id', type: 'text', required: true, foreignkey: '',
  },
  sharedAccountId: {
    key: 'sharedAccountId', dbKey: 'shared_account_id', type: 'text', required: true, foreignkey: '',
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
export const activityLog = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  eventId: {
    key: 'eventId', dbKey: 'event_id', type: 'text', required: false, foreignkey: '',
  },
  eventCategoryId: {
    key: 'eventCategoryId', dbKey: 'event_category_id', type: 'integer', required: true, foreignkey: 'eventCategory',
  },
  eventCategory: {
    key: 'eventCategory', dbKey: 'event_category', type: 'text', required: true, foreignkey: '',
  },
  eventTypeId: {
    key: 'eventTypeId', dbKey: 'event_type_id', type: 'integer', required: true, foreignkey: 'eventType',
  },
  eventType: {
    key: 'eventType', dbKey: 'event_type', type: 'text', required: true, foreignkey: '',
  },
  historyData: {
    key: 'historyData', dbKey: 'history_data', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  endTime: {
    key: 'endTime', dbKey: 'end_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  eventClass: {
    key: 'eventClass', dbKey: 'event_class', type: 'text', required: false, foreignkey: '',
  },
  eventCode: {
    key: 'eventCode', dbKey: 'event_code', type: 'text', required: false, foreignkey: '',
  },
  eventData: {
    key: 'eventData', dbKey: 'event_data', type: 'text', required: false, foreignkey: '',
  },
  eventSeverity: {
    key: 'eventSeverity', dbKey: 'event_severity', type: 'text', required: false, foreignkey: '',
  },
  eventTime: {
    key: 'eventTime', dbKey: 'event_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  message: {
    key: 'message', dbKey: 'message', type: 'text', required: false, foreignkey: '',
  },
  ownerId: {
    key: 'ownerId', dbKey: 'owner_id', type: 'text', required: false, foreignkey: '',
  },
  reason: {
    key: 'reason', dbKey: 'reason', type: 'text', required: false, foreignkey: '',
  },
  startTime: {
    key: 'startTime', dbKey: 'start_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  timeZone: {
    key: 'timeZone', dbKey: 'time_zone', type: 'text', required: false, foreignkey: '',
  },
  channelId: {
    key: 'channelId', dbKey: 'channel_id', type: 'text', required: false, foreignkey: '',
  },
  channelType: {
    key: 'channelType', dbKey: 'channel_type', type: 'text', required: false, foreignkey: '',
  },
  resourceId: {
    key: 'resourceId', dbKey: 'resource_id', type: 'text', required: false, foreignkey: '',
  },
  resourceType: {
    key: 'resourceType', dbKey: 'resource_type', type: 'text', required: false, foreignkey: '',
  },
  sourceId: {
    key: 'sourceId', dbKey: 'source_id', type: 'text', required: false, foreignkey: '',
  },
  sourceType: {
    key: 'sourceType', dbKey: 'source_type', type: 'text', required: false, foreignkey: '',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: false, foreignkey: 'contact',
  },
  masterEventTime: {
    key: 'masterEventTime', dbKey: 'master_event_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  userId: {
    key: 'userId', dbKey: 'user_id', type: 'text', required: false, foreignkey: 'user',
  },
};
export const loLeadRaw = {
  id: {
    key: 'id', dbKey: 'id', type: 'integer', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: false, foreignkey: '',
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
  srcId: {
    key: 'srcId', dbKey: 'src_id', type: 'text', required: false, foreignkey: '',
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
  matchWithPartnerId: {
    key: 'matchWithPartnerId', dbKey: 'match_with_partner_id', type: 'smallint[]', required: false, foreignkey: '',
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
  landingPage: {
    key: 'landingPage', dbKey: 'landing_page', type: 'text', required: false, foreignkey: '',
  },
  subId: {
    key: 'subId', dbKey: 'sub_id', type: 'text', required: false, foreignkey: '',
  },
  pubId: {
    key: 'pubId', dbKey: 'pub_id', type: 'text', required: false, foreignkey: '',
  },
  optout: {
    key: 'optout', dbKey: 'optout', type: 'text', required: false, foreignkey: '',
  },
  uniqueIdentifier: {
    key: 'uniqueIdentifier', dbKey: 'unique_identifier', type: 'text', required: false, foreignkey: '',
  },
  userAgent: {
    key: 'userAgent', dbKey: 'user_agent', type: 'text', required: false, foreignkey: '',
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
  lastName: {
    key: 'lastName', dbKey: 'last_name', type: 'text', required: false, foreignkey: '',
  },
  address: {
    key: 'address', dbKey: 'address', type: 'text', required: false, foreignkey: '',
  },
  city: {
    key: 'city', dbKey: 'city', type: 'text', required: false, foreignkey: '',
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
  estimatedPurchasePrice: {
    key: 'estimatedPurchasePrice', dbKey: 'estimated_purchase_price', type: 'numeric(10,2)', required: false, foreignkey: '',
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
  newPropertyZip: {
    key: 'newPropertyZip', dbKey: 'new_property_zip', type: 'text', required: false, foreignkey: '',
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
  propertyUse: {
    key: 'propertyUse', dbKey: 'property_use', type: 'text', required: false, foreignkey: '',
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
  foreclosureLast7Years: {
    key: 'foreclosureLast7Years', dbKey: 'foreclosure_last_7_years', type: 'text', required: false, foreignkey: '',
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
  firstMortgageBalance: {
    key: 'firstMortgageBalance', dbKey: 'first_mortgage_balance', type: 'numeric(10,2)', required: false, foreignkey: '',
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
  secondMortgageRate: {
    key: 'secondMortgageRate', dbKey: 'second_mortgage_rate', type: 'smallint', required: false, foreignkey: '',
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
  createRequest: {
    key: 'createRequest', dbKey: 'create_request', type: 'text', required: false, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'text', required: false, foreignkey: '',
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
  reason: {
    key: 'reason', dbKey: 'reason', type: 'text', required: false, foreignkey: '',
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
export const bridgeContactPrimaryIncome = {
  id: {
    key: 'id', dbKey: 'id', type: 'character varying(100)', required: true, foreignkey: '',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(80)', required: true, foreignkey: 'contact',
  },
  incomeSourceId: {
    key: 'incomeSourceId', dbKey: 'income_source_id', type: 'character varying(80)', required: true, foreignkey: 'incomeSource',
  },
};
export const contactComment = {
  id: {
    key: 'id', dbKey: 'id', type: 'text', required: true, foreignkey: '',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'character varying(100)', required: true, foreignkey: 'account',
  },
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'character varying(100)', required: true, foreignkey: 'contact',
  },
  userId: {
    key: 'userId', dbKey: 'user_id', type: 'character varying(100)', required: true, foreignkey: 'user',
  },
  comment: {
    key: 'comment', dbKey: 'comment', type: 'text', required: true, foreignkey: '',
  },
  active: {
    key: 'active', dbKey: 'active', type: 'boolean', required: true, foreignkey: '',
  },
  createdBy: {
    key: 'createdBy', dbKey: 'created_by', type: 'character varying(100)', required: true, foreignkey: '',
  },
  createTime: {
    key: 'createTime', dbKey: 'create_time', type: 'timestamp(6) with time zone', required: true, foreignkey: '',
  },
  updatedBy: {
    key: 'updatedBy', dbKey: 'updated_by', type: 'character varying(100)', required: false, foreignkey: '',
  },
  updateTime: {
    key: 'updateTime', dbKey: 'update_time', type: 'timestamp(6) with time zone', required: false, foreignkey: '',
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
  lastName: {
    key: 'lastName', dbKey: 'last_name', type: 'text', required: false, foreignkey: '',
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
  transferPrice: {
    key: 'transferPrice', dbKey: 'transfer_price', type: 'double precision', required: true, foreignkey: '',
  },
  transferStatus: {
    key: 'transferStatus', dbKey: 'transfer_status', type: 'text', required: false, foreignkey: '',
  },
  leadType: {
    key: 'leadType', dbKey: 'lead_type', type: 'text', required: false, foreignkey: '',
  },
  leadCategory: {
    key: 'leadCategory', dbKey: 'lead_category', type: 'text', required: false, foreignkey: '',
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
  loanDownPayment: {
    key: 'loanDownPayment', dbKey: 'loan.down_payment', type: 'double precision', required: false, foreignkey: '',
  },
  loanInterestRate: {
    key: 'loanInterestRate', dbKey: 'loan.interest_rate', type: 'double precision', required: false, foreignkey: '',
  },
  loanMonthlyPayment: {
    key: 'loanMonthlyPayment', dbKey: 'loan.monthly_payment', type: 'double precision', required: false, foreignkey: '',
  },
  loanPurchasePrice: {
    key: 'loanPurchasePrice', dbKey: 'loan.purchase_price', type: 'double precision', required: false, foreignkey: '',
  },
  loanTransactionType: {
    key: 'loanTransactionType', dbKey: 'loan.transaction_type', type: 'text', required: false, foreignkey: '',
  },
  loanType: {
    key: 'loanType', dbKey: 'loan.type', type: 'text', required: false, foreignkey: '',
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
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: false, foreignkey: '',
  },
  loLeadRawId: {
    key: 'loLeadRawId', dbKey: 'lo_lead_raw_id', type: 'integer', required: false, foreignkey: 'loLeadRaw',
  },
  loanRange: {
    key: 'loanRange', dbKey: 'loan_range', type: 'jsonb', required: false, foreignkey: '',
  },
  creditedPrice: {
    key: 'creditedPrice', dbKey: 'credited_price', type: 'double precision', required: true, foreignkey: '',
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
export const bridgeContactContact = {
  contactId: {
    key: 'contactId', dbKey: 'contact_id', type: 'text', required: true, foreignkey: 'contact',
  },
  accountId: {
    key: 'accountId', dbKey: 'account_id', type: 'text', required: true, foreignkey: 'account',
  },
  assignedTo: {
    key: 'assignedTo', dbKey: 'assigned_to', type: 'text', required: true, foreignkey: 'contact',
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
