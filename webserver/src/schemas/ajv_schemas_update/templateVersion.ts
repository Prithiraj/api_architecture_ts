import ajvInstance from '../ajv-instance';
import { templateVersion_ajv } from '../mapper_ajv';


const templateVersion_schema = {
  type: 'object',
  properties: {
    version: templateVersion_ajv.version.api,
    templateId: templateVersion_ajv.templateId.api,
    type: templateVersion_ajv.type.api,
    name: templateVersion_ajv.name.api,
    data: templateVersion_ajv.data.api,
    id: templateVersion_ajv.id.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['version'],
  },{
    required: ['templateId'],
  },{
    required: ['type'],
  },{
    required: ['name'],
  },{
    required: ['data'],
  },]
};

export default ajvInstance.compile(templateVersion_schema);
