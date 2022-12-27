// const ajvInstance = require('./ajv-instance');

import ajvInstance from '../../ajv-instance';
import countries from '../../utils/countries';
import { contact_ajv, property_ajv } from 'src/schemas/mapper_ajv';

const property_schema = {
  type: 'object',
  properties: {
    type: property_ajv.type.api,
    units: property_ajv.units.api,
    street1: property_ajv.street1.api,
    street2: property_ajv.street2.api,
    city: property_ajv.city.api,
    state: property_ajv.state.api,
    country: property_ajv.country.api,
    taxes: property_ajv.country.api,

  }
}

const schema = {
  type: 'object',
  properties: {
    firstName: contact_ajv.firstName.api,
    
  },
  required: ['email', 'firstname', 'lastname'],
  additionalProperties: false,
};

// module.exports = ajvInstance.compile(schema);
export default ajvInstance.compile(schema);
