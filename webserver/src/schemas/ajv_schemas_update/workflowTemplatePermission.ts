import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    id: workflowTemplatePermission_ajv.id.api,
    userId: workflowTemplatePermission_ajv.userId.api,
    workflowTemplateId: workflowTemplatePermission_ajv.workflowTemplateId.api,
    permission: workflowTemplatePermission_ajv.permission.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['userId'],
  },{
    required: ['workflowTemplateId'],
  },{
    required: ['permission'],
  },]
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
