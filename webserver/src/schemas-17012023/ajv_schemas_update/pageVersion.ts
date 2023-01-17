import ajvInstance from '../ajv-instance';
import { pageVersion_ajv } from '../mapper_ajv';


const pageVersion_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['accountId'],
    properties: { apicolname: pageVersion_ajv.accountId.api},	
  },{
    required: ['version'],
    properties: { apicolname: pageVersion_ajv.version.api},	
  },{
    required: ['pageId'],
    properties: { apicolname: pageVersion_ajv.pageId.api},	
  },{
    required: ['name'],
    properties: { apicolname: pageVersion_ajv.name.api},	
  },{
    required: ['body'],
    properties: { apicolname: pageVersion_ajv.body.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: pageVersion_ajv.createTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: pageVersion_ajv.updateRequest.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: pageVersion_ajv.updateTime.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: pageVersion_ajv.updatedBy.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: pageVersion_ajv.createRequest.api},	
  },{
    required: ['id'],
    properties: { apicolname: pageVersion_ajv.id.api},	
  },]
};

export default ajvInstance.compile(pageVersion_schema);
