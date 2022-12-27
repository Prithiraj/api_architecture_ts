import ajvInstance from '../ajv-instance';
import { theme_ajv } from '../mapper_ajv';


const theme_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: theme_ajv.id.api},	
  },{
    required: ['name'],
    properties: { apicolname: theme_ajv.name.api},	
  },{
    required: ['theme'],
    properties: { apicolname: theme_ajv.theme.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: theme_ajv.createTime.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: theme_ajv.createdBy.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: theme_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: theme_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: theme_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: theme_ajv.createRequest.api},	
  },]
};

export default ajvInstance.compile(theme_schema);
