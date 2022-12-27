import ajvInstance from '../ajv-instance';
import { incomeSource_ajv } from '../mapper_ajv';


const incomeSource_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: incomeSource_ajv.id.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: incomeSource_ajv.contactId.api},	
  },{
    required: ['addressId'],
    properties: { apicolname: incomeSource_ajv.addressId.api},	
  },{
    required: ['organizationId'],
    properties: { apicolname: incomeSource_ajv.organizationId.api},	
  },{
    required: ['type'],
    properties: { apicolname: incomeSource_ajv.type.api},	
  },{
    required: ['employerName'],
    properties: { apicolname: incomeSource_ajv.employerName.api},	
  },{
    required: ['title'],
    properties: { apicolname: incomeSource_ajv.title.api},	
  },{
    required: ['phone'],
    properties: { apicolname: incomeSource_ajv.phone.api},	
  },{
    required: ['amount'],
    properties: { apicolname: incomeSource_ajv.amount.api},	
  },{
    required: ['incomeAmountPeriod'],
    properties: { apicolname: incomeSource_ajv.incomeAmountPeriod.api},	
  },{
    required: ['startDate'],
    properties: { apicolname: incomeSource_ajv.startDate.api},	
  },{
    required: ['endDate'],
    properties: { apicolname: incomeSource_ajv.endDate.api},	
  },{
    required: ['description'],
    properties: { apicolname: incomeSource_ajv.description.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: incomeSource_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: incomeSource_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: incomeSource_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: incomeSource_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: incomeSource_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: incomeSource_ajv.updateRequest.api},	
  },{
    required: ['employerPhone'],
    properties: { apicolname: incomeSource_ajv.employerPhone.api},	
  },{
    required: ['status'],
    properties: { apicolname: incomeSource_ajv.status.api},	
  },]
};

export default ajvInstance.compile(incomeSource_schema);
