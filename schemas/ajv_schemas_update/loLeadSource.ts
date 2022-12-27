import ajvInstance from '../ajv-instance';
import { loLeadSource_ajv } from '../mapper_ajv';


const loLeadSource_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: loLeadSource_ajv.id.api},	
  },{
    required: ['color'],
    properties: { apicolname: loLeadSource_ajv.color.api},	
  },{
    required: ['productId'],
    properties: { apicolname: loLeadSource_ajv.productId.api},	
  },{
    required: ['tileColor'],
    properties: { apicolname: loLeadSource_ajv.tileColor.api},	
  },{
    required: ['tileDescription'],
    properties: { apicolname: loLeadSource_ajv.tileDescription.api},	
  },{
    required: ['tileHighlights'],
    properties: { apicolname: loLeadSource_ajv.tileHighlights.api},	
  },{
    required: ['title'],
    properties: { apicolname: loLeadSource_ajv.title.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loLeadSource_ajv.updateTime.api},	
  },{
    required: ['active'],
    properties: { apicolname: loLeadSource_ajv.active.api},	
  },{
    required: ['callcenter'],
    properties: { apicolname: loLeadSource_ajv.callcenter.api},	
  },{
    required: ['dedicatedCallcenter'],
    properties: { apicolname: loLeadSource_ajv.dedicatedCallcenter.api},	
  },{
    required: ['notificationEmails'],
    properties: { apicolname: loLeadSource_ajv.notificationEmails.api},	
  },{
    required: ['order'],
    properties: { apicolname: loLeadSource_ajv.order.api},	
  },]
};

export default ajvInstance.compile(loLeadSource_schema);
