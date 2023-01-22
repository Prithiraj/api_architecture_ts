import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    workflowTemplateId: workflowTemplatePermission_ajv.workflowTemplateId.api,
    permission: workflowTemplatePermission_ajv.permission.api,
    ownerAccountId: workflowTemplatePermission_ajv.ownerAccountId.api,
    sharedAccountId: workflowTemplatePermission_ajv.sharedAccountId.api,
    forceLatestVersion: workflowTemplatePermission_ajv.forceLatestVersion.api,
  },
  required: ['workflowTemplateId', 'ownerAccountId', 'permission', 'sharedAccountId'],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
