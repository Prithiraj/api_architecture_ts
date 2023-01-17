import ajvInstance from '../ajv-instance';
import { contactStatus_ajv } from '../mapper_ajv';


const contactStatus_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactStatus_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: contactStatus_ajv.accountId.api},	
  },{
    required: ['name'],
    properties: { apicolname: contactStatus_ajv.name.api},	
  },{
    required: ['order'],
    properties: { apicolname: contactStatus_ajv.order.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactStatus_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contactStatus_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactStatus_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactStatus_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contactStatus_ajv.updateRequest.api},	
  },{
    required: ['isConverted'],
    properties: { apicolname: contactStatus_ajv.isConverted.api},	
  },{
    required: ['statusLifecycleId'],
    properties: { apicolname: contactStatus_ajv.statusLifecycleId.api},	
  },{
    required: ['isDeleted'],
    properties: { apicolname: contactStatus_ajv.isDeleted.api},	
  },]
};

export default ajvInstance.compile(contactStatus_schema);
