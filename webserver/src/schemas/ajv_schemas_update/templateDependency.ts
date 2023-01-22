import ajvInstance from '../ajv-instance';
import { templateDependency_ajv } from '../mapper_ajv';


const templateDependency_schema = {
  type: 'object',
  properties: {
    id: templateDependency_ajv.id.api,
    templateId: templateDependency_ajv.templateId.api,
    resourceId: templateDependency_ajv.resourceId.api,
    versionId: templateDependency_ajv.versionId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['templateId'],
  },{
    required: ['resourceId'],
  },{
    required: ['versionId'],
  },]
};

export default ajvInstance.compile(templateDependency_schema);
