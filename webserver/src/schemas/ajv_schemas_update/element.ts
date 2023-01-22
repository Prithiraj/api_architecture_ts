import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    templateId: element_ajv.templateId.api,
    latestTemplate: element_ajv.latestTemplate.api,
    id: element_ajv.id.api,
    name: element_ajv.name.api,
    data: element_ajv.data.api,
    type: element_ajv.type.api,
    latestVersionId: element_ajv.latestVersionId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['templateId'],
  },{
    required: ['latestTemplate'],
  },{
    required: ['name'],
  },{
    required: ['data'],
  },{
    required: ['type'],
  },{
    required: ['latestVersionId'],
  },]
};

export default ajvInstance.compile(element_schema);
