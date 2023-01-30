import ajvInstance from '../ajv-instance';
import { contactComment_ajv } from '../mapper_ajv';


const contactComment_schema = {
  type: 'object',
  properties: {
    contactId: contactComment_ajv.contactId.api,
    userId: contactComment_ajv.userId.api,
    comment: contactComment_ajv.comment.api,
    active: contactComment_ajv.active.api,
  },
  required: ['userId', 'contactId', 'active', 'comment'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactComment_schema);
