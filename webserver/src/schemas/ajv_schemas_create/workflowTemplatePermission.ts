import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    userId: workflowTemplatePermission_ajv.userId.api,
    workflowTemplateId: workflowTemplatePermission_ajv.workflowTemplateId.api,
    permission: workflowTemplatePermission_ajv.permission.api,
  },
  required: ['permission', 'userId', 'workflowTemplateId'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
