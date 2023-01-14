import ajvInstance from '../ajv-instance';
import { workflowTemplate_ajv } from '../mapper_ajv';


const workflowTemplate_schema = {
  type: 'object',
  properties: {
    id: workflowTemplate_ajv.id.api,
    workflowId: workflowTemplate_ajv.workflowId.api,
    workflowData: workflowTemplate_ajv.workflowData.api,
    version: workflowTemplate_ajv.version.api,
    createRequest: workflowTemplate_ajv.createRequest.api,
    createTime: workflowTemplate_ajv.createTime.api,
    createdBy: workflowTemplate_ajv.createdBy.api,
    updateRequest: workflowTemplate_ajv.updateRequest.api,
    updateTime: workflowTemplate_ajv.updateTime.api,
    updatedBy: workflowTemplate_ajv.updatedBy.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(workflowTemplate_schema);
