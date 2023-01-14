import ajvInstance from '../ajv-instance';
import { property_ajv } from '../mapper_ajv';


const property_schema = {
  type: 'object',
  properties: {
    id: property_ajv.id.api,
    accountId: property_ajv.accountId.api,
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
    createdBy: property_ajv.createdBy.api,
    createTime: property_ajv.createTime.api,
    createRequest: property_ajv.createRequest.api,
    updatedBy: property_ajv.updatedBy.api,
    updateRequest: property_ajv.updateRequest.api,
    actualValue: property_ajv.actualValue.api,
    estimatedValue: property_ajv.estimatedValue.api,
    hazardInsurance: property_ajv.hazardInsurance.api,
    propertyUnits: property_ajv.propertyUnits.api,
    propertyOccupancy: property_ajv.propertyOccupancy.api,
    updateTime: property_ajv.updateTime.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(property_schema);
