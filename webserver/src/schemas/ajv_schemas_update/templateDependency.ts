import ajvInstance from '../ajv-instance';
import { templateDependency_ajv } from '../mapper_ajv';


const templateDependency_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['templateId'],
    properties: { apicolname: templateDependency_ajv.templateId.api},	
  },{
    required: ['versionId'],
    properties: { apicolname: templateDependency_ajv.versionId.api},	
  },]
};

export default ajvInstance.compile(templateDependency_schema);
