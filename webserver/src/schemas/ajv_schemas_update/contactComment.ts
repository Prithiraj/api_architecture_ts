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
  },]
};

export default ajvInstance.compile(contactComment_schema);
