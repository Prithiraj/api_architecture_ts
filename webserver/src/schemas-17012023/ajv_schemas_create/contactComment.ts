import ajvInstance from '../ajv-instance';
import { contactComment_ajv } from '../mapper_ajv';


const contactComment_schema = {
  type: 'object',
  properties: {
    id: contactComment_ajv.id.api,
    accountId: contactComment_ajv.accountId.api,
    contactId: contactComment_ajv.contactId.api,
    userId: contactComment_ajv.userId.api,
    comment: contactComment_ajv.comment.api,
    active: contactComment_ajv.active.api,
    createTime: contactComment_ajv.createTime.api,
    updatedBy: contactComment_ajv.updatedBy.api,
    updateTime: contactComment_ajv.updateTime.api,
  },
  required: ['contactId', 'userId', 'comment', 'active'],
  additionalProperties: false,
};

export default ajvInstance.compile(contactComment_schema);
