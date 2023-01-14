import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    id: workflowTemplatePermission_ajv.id.api,
    accountId: workflowTemplatePermission_ajv.accountId.api,
    userId: workflowTemplatePermission_ajv.userId.api,
    workflowTemplateId: workflowTemplatePermission_ajv.workflowTemplateId.api,
    permission: workflowTemplatePermission_ajv.permission.api,
    createRequest: workflowTemplatePermission_ajv.createRequest.api,
    createTime: workflowTemplatePermission_ajv.createTime.api,
    createdBy: workflowTemplatePermission_ajv.createdBy.api,
    updateRequest: workflowTemplatePermission_ajv.updateRequest.api,
    updateTime: workflowTemplatePermission_ajv.updateTime.api,
    updatedBy: workflowTemplatePermission_ajv.updatedBy.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
