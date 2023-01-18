import ajvInstance from '../ajv-instance';
import { contactReminder_ajv } from '../mapper_ajv';


const contactReminder_schema = {
  type: 'object',
  properties: {
    id: contactReminder_ajv.id.api,
    contactId: contactReminder_ajv.contactId.api,
    userId: contactReminder_ajv.userId.api,
    type: contactReminder_ajv.type.api,
    title: contactReminder_ajv.title.api,
    description: contactReminder_ajv.description.api,
    dueDate: contactReminder_ajv.dueDate.api,
    executeAt: contactReminder_ajv.executeAt.api,
    reminderData: contactReminder_ajv.reminderData.api,
    active: contactReminder_ajv.active.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
  },{
    required: ['userId'],
  },{
    required: ['type'],
  },{
    required: ['title'],
  },{
    required: ['description'],
  },{
    required: ['dueDate'],
  },{
    required: ['executeAt'],
  },{
    required: ['reminderData'],
  },{
    required: ['active'],
  },]
};

export default ajvInstance.compile(contactReminder_schema);
