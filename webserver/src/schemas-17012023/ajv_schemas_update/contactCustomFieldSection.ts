import ajvInstance from '../ajv-instance';
import { contactCustomFieldSection_ajv } from '../mapper_ajv';


const contactCustomFieldSection_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactCustomFieldSection_ajv.id.api},	
  },{
    required: ['sectionName'],
    properties: { apicolname: contactCustomFieldSection_ajv.sectionName.api},	
  },{
    required: ['isDeleted'],
    properties: { apicolname: contactCustomFieldSection_ajv.isDeleted.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactCustomFieldSection_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contactCustomFieldSection_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactCustomFieldSection_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactCustomFieldSection_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contactCustomFieldSection_ajv.updateRequest.api},	
  },]
};

export default ajvInstance.compile(contactCustomFieldSection_schema);
