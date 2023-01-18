import ajvInstance from '../ajv-instance';
import { property_ajv } from '../mapper_ajv';


const property_schema = {
  type: 'object',
  properties: {
    id: property_ajv.id.api,
    type: property_ajv.type.api,
    street1: property_ajv.street1.api,
    street2: property_ajv.street2.api,
    city: property_ajv.city.api,
    state: property_ajv.state.api,
    country: property_ajv.country.api,
    taxes: property_ajv.taxes.api,
    miscExp: property_ajv.miscExp.api,
    rentalIncome: property_ajv.rentalIncome.api,
    squareFootage: property_ajv.squareFootage.api,
    bedrooms: property_ajv.bedrooms.api,
    baths: property_ajv.baths.api,
    postal: property_ajv.postal.api,
    actualValue: property_ajv.actualValue.api,
    estimatedValue: property_ajv.estimatedValue.api,
    hazardInsurance: property_ajv.hazardInsurance.api,
    propertyUnits: property_ajv.propertyUnits.api,
    propertyOccupancy: property_ajv.propertyOccupancy.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['type'],
  },{
    required: ['street1'],
  },{
    required: ['street2'],
  },{
    required: ['city'],
  },{
    required: ['state'],
  },{
    required: ['country'],
  },{
    required: ['taxes'],
  },{
    required: ['miscExp'],
  },{
    required: ['rentalIncome'],
  },{
    required: ['squareFootage'],
  },{
    required: ['bedrooms'],
  },{
    required: ['baths'],
  },{
    required: ['postal'],
  },{
    required: ['actualValue'],
  },{
    required: ['estimatedValue'],
  },{
    required: ['hazardInsurance'],
  },{
    required: ['propertyUnits'],
  },{
    required: ['propertyOccupancy'],
  },]
};

export default ajvInstance.compile(property_schema);
