import ajvInstance from '../ajv-instance';
import { contactComment_ajv } from '../mapper_ajv';


const contactComment_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contactComment_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: contactComment_ajv.accountId.api},	
  },{
    required: ['contactId'],
    properties: { apicolname: contactComment_ajv.contactId.api},	
  },{
    required: ['userId'],
    properties: { apicolname: contactComment_ajv.userId.api},	
  },{
    required: ['comment'],
    properties: { apicolname: contactComment_ajv.comment.api},	
  },{
    required: ['active'],
    properties: { apicolname: contactComment_ajv.active.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: contactComment_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contactComment_ajv.createTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contactComment_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contactComment_ajv.updateTime.api},	
  },]
};

export default ajvInstance.compile(contactComment_schema);
