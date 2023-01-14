import ajvInstance from '../ajv-instance';
import { page_ajv } from '../mapper_ajv';


const page_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: page_ajv.accountId.api},	
  },{
    required: ['id'],
    properties: { apicolname: page_ajv.id.api},	
  },{
    required: ['name'],
    properties: { apicolname: page_ajv.name.api},	
  },{
    required: ['body'],
    properties: { apicolname: page_ajv.body.api},	
  },{
    required: ['templateId'],
    properties: { apicolname: page_ajv.templateId.api},	
  },{
    required: ['path'],
    properties: { apicolname: page_ajv.path.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: page_ajv.createTime.api},	
  },{
    required: ['themeId'],
    properties: { apicolname: page_ajv.themeId.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: page_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: page_ajv.updateRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: page_ajv.updatedBy.api},	
  },{
    required: ['category'],
    properties: { apicolname: page_ajv.category.api},	
  },{
    required: ['ownerId'],
    properties: { apicolname: page_ajv.ownerId.api},	
  },{
    required: ['status'],
    properties: { apicolname: page_ajv.status.api},	
  },{
    required: ['latestTemplateId'],
    properties: { apicolname: page_ajv.latestTemplateId.api},	
  },]
};

export default ajvInstance.compile(page_schema);
