import ajvInstance from '../ajv-instance';
import { workflowTemplatePermission_ajv } from '../mapper_ajv';


const workflowTemplatePermission_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['userId'],
    properties: { apicolname: workflowTemplatePermission_ajv.userId.api},	
  },{
    required: ['workflowTemplateId'],
    properties: { apicolname: workflowTemplatePermission_ajv.workflowTemplateId.api},	
  },{
    required: ['permission'],
    properties: { apicolname: workflowTemplatePermission_ajv.permission.api},	
  },]
};

export default ajvInstance.compile(workflowTemplatePermission_schema);
