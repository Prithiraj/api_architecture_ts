import ajvInstance from '../ajv-instance';
import { contactReminder_ajv } from '../mapper_ajv';


const contactReminder_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['contactId'],
    properties: { apicolname: contactReminder_ajv.contactId.api},	
  },{
    required: ['userId'],
    properties: { apicolname: contactReminder_ajv.userId.api},	
  },{
    required: ['type'],
    properties: { apicolname: contactReminder_ajv.type.api},	
  },{
    required: ['title'],
    properties: { apicolname: contactReminder_ajv.title.api},	
  },{
    required: ['description'],
    properties: { apicolname: contactReminder_ajv.description.api},	
  },{
    required: ['dueDate'],
    properties: { apicolname: contactReminder_ajv.dueDate.api},	
  },{
    required: ['executeAt'],
    properties: { apicolname: contactReminder_ajv.executeAt.api},	
  },{
    required: ['reminderData'],
    properties: { apicolname: contactReminder_ajv.reminderData.api},	
  },{
    required: ['active'],
    properties: { apicolname: contactReminder_ajv.active.api},	
  },]
};

export default ajvInstance.compile(contactReminder_schema);
