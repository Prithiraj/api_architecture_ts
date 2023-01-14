// const ajvInstance = require('./ajv-instance');

import ajvInstance from './ajv-instance';
import countries from './countries';

const schema = {
  type: 'object',
  properties: {
	email: { type: 'string', format: 'email'},
	firstname: {type: 'string'},
	lastname: {type: 'string'},
	address1: { type: 'string'},
	address2: { type: 'string'},
	channel: { type: 'string'},
	city: { type: 'string'},
	company: { type: 'string'},
	country: { type: 'string', enum: countries},
	gender: { type: 'string', enum: ['M', 'F', 'O']},
	job_title: {type: 'string'},
	locale: {type: 'string'},
	mobileno: { type: 'string'},
	monthly_income: { type: 'string'},
	realtor: { type: 'string'},
	landline: {type: 'string'},
	postcode: {type: 'string'},
	provider: { type: 'string'},
	state: { type: 'string'},
	tags: { type: 'string'},
	timezone: {type: 'string'},
	unitno: {type: 'string'},
	batch_sort: {type: 'array'},
	user_defined_fields: { type: 'string'},
	custom_fields: {type: 'array'},
	acl: {type: 'string'},
	fbpotin: {type: 'boolean'},
	fboptintime: {type: 'string'},
	fbprofileImg: {type: 'string'},
	federated_ids: { type: 'string'},
	lists: { type: 'string'},
	rejectedfboptin: { type: 'boolean'},
	rejectedfboptintime: { type: 'string'},
	seid: { type: 'string'},
	sephoneno: { type: 'string'},
	stages: { type: 'string'},
	stage_map: { type: 'string'}
  },
  required: ["email", "firstname", "lastname"],
  additionalProperties: false
};

// module.exports = ajvInstance.compile(schema);
export default ajvInstance.compile(schema);
