import ajvInstance from '../ajv-instance';
import { contactComment_ajv } from '../mapper_ajv';


const contactComment_schema = {
  type: 'object',
  properties: {
    id: contactComment_ajv.id.api,
    contactId: contactComment_ajv.contactId.api,
    userId: contactComment_ajv.userId.api,
    comment: contactComment_ajv.comment.api,
    active: contactComment_ajv.active.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['userId'],
  },{
    required: ['comment'],
  },{
    required: ['active'],
  },]
};

export default ajvInstance.compile(contactComment_schema);
