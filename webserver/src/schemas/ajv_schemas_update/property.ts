import ajvInstance from '../ajv-instance';
import { property_ajv } from '../mapper_ajv';


const property_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['type'],
    properties: { apicolname: property_ajv.type.api},	
  },{
    required: ['street1'],
    properties: { apicolname: property_ajv.street1.api},	
  },{
    required: ['street2'],
    properties: { apicolname: property_ajv.street2.api},	
  },{
    required: ['city'],
    properties: { apicolname: property_ajv.city.api},	
  },{
    required: ['state'],
    properties: { apicolname: property_ajv.state.api},	
  },{
    required: ['country'],
    properties: { apicolname: property_ajv.country.api},	
  },{
    required: ['taxes'],
    properties: { apicolname: property_ajv.taxes.api},	
  },{
    required: ['miscExp'],
    properties: { apicolname: property_ajv.miscExp.api},	
  },{
    required: ['rentalIncome'],
    properties: { apicolname: property_ajv.rentalIncome.api},	
  },{
    required: ['squareFootage'],
    properties: { apicolname: property_ajv.squareFootage.api},	
  },{
    required: ['bedrooms'],
    properties: { apicolname: property_ajv.bedrooms.api},	
  },{
    required: ['baths'],
    properties: { apicolname: property_ajv.baths.api},	
  },{
    required: ['postal'],
    properties: { apicolname: property_ajv.postal.api},	
  },{
    required: ['actualValue'],
    properties: { apicolname: property_ajv.actualValue.api},	
  },{
    required: ['estimatedValue'],
    properties: { apicolname: property_ajv.estimatedValue.api},	
  },{
    required: ['hazardInsurance'],
    properties: { apicolname: property_ajv.hazardInsurance.api},	
  },{
    required: ['propertyUnits'],
    properties: { apicolname: property_ajv.propertyUnits.api},	
  },{
    required: ['propertyOccupancy'],
    properties: { apicolname: property_ajv.propertyOccupancy.api},	
  },]
};

export default ajvInstance.compile(property_schema);
