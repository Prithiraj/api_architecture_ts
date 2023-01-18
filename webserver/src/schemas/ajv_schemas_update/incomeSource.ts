import ajvInstance from '../ajv-instance';
import { incomeSource_ajv } from '../mapper_ajv';


const incomeSource_schema = {
  type: 'object',
  properties: {
    id: incomeSource_ajv.id.api,
    contactId: incomeSource_ajv.contactId.api,
    addressId: incomeSource_ajv.addressId.api,
    organizationId: incomeSource_ajv.organizationId.api,
    type: incomeSource_ajv.type.api,
    employerName: incomeSource_ajv.employerName.api,
    title: incomeSource_ajv.title.api,
    phone: incomeSource_ajv.phone.api,
    amount: incomeSource_ajv.amount.api,
    incomeAmountPeriod: incomeSource_ajv.incomeAmountPeriod.api,
    startDate: incomeSource_ajv.startDate.api,
    endDate: incomeSource_ajv.endDate.api,
    description: incomeSource_ajv.description.api,
    employerPhone: incomeSource_ajv.employerPhone.api,
    status: incomeSource_ajv.status.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['addressId'],
  },{
    required: ['organizationId'],
  },{
    required: ['type'],
  },{
    required: ['employerName'],
  },{
    required: ['title'],
  },{
    required: ['phone'],
  },{
    required: ['amount'],
  },{
    required: ['incomeAmountPeriod'],
  },{
    required: ['startDate'],
  },{
    required: ['endDate'],
  },{
    required: ['description'],
  },{
    required: ['employerPhone'],
  },{
    required: ['status'],
  },]
};

export default ajvInstance.compile(incomeSource_schema);
