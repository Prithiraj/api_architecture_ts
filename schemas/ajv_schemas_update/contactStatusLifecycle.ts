import ajvInstance from '../ajv-instance';
import { contactStatusLifecycle_ajv } from '../mapper_ajv';


const contactStatusLifecycle_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactStatusLifecycle_ajv.id.api},	
  },{
    required: ['lifecycleName'],
    properties: { apicolname: contactStatusLifecycle_ajv.lifecycleName.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: contactStatusLifecycle_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactStatusLifecycle_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contactStatusLifecycle_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactStatusLifecycle_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactStatusLifecycle_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contactStatusLifecycle_ajv.updateRequest.api},	
  },{
    required: ['isDeleted'],
    properties: { apicolname: contactStatusLifecycle_ajv.isDeleted.api},	
  },]
};

export default ajvInstance.compile(contactStatusLifecycle_schema);
