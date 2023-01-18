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
    required: ['themeId'],
    properties: { apicolname: page_ajv.themeId.api},	
  },{
    required: ['category'],
    properties: { apicolname: page_ajv.category.api},	
  },{
    required: ['type'],
    properties: { apicolname: page_ajv.type.api},	
  },{
    required: ['status'],
    properties: { apicolname: page_ajv.status.api},	
  },{
    required: ['ownerId'],
    properties: { apicolname: page_ajv.ownerId.api},	
  },{
    required: ['headerMeta'],
    properties: { apicolname: page_ajv.headerMeta.api},	
  },]
};

export default ajvInstance.compile(page_schema);
