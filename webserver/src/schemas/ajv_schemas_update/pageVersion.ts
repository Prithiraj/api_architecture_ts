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
  },]
};

export default ajvInstance.compile(pageVersion_schema);
