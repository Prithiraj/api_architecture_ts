import ajvInstance from '../ajv-instance';
import { templateDependency_ajv } from '../mapper_ajv';


const templateDependency_schema = {
  type: 'object',
  properties: {
    templateId: templateDependency_ajv.templateId.api,
    versionId: templateDependency_ajv.versionId.api,
  },
  required: ['templateId', 'versionId'],
  additionalProperties: false,
};

export default ajvInstance.compile(templateDependency_schema);
