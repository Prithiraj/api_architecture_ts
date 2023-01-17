import ajvInstance from '../ajv-instance';
import { element_ajv } from '../mapper_ajv';


const element_schema = {
  type: 'object',
  properties: {
    templateId: element_ajv.templateId.api,
    data: element_ajv.data.api,
    type: element_ajv.type.api,
    latestVersionId: element_ajv.latestVersionId.api,
    latestTemplate: element_ajv.latestTemplate.api,
  },
  required: ['latestVersionId', 'data', 'type'],
  additionalProperties: false,
};

export default ajvInstance.compile(element_schema);
