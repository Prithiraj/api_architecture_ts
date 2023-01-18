import ajvInstance from '../ajv-instance';
import { workflowTemplate_ajv } from '../mapper_ajv';


const workflowTemplate_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['workflowId'],
    properties: { apicolname: workflowTemplate_ajv.workflowId.api},	
  },{
    required: ['workflowData'],
    properties: { apicolname: workflowTemplate_ajv.workflowData.api},	
  },{
    required: ['version'],
    properties: { apicolname: workflowTemplate_ajv.version.api},	
  },]
};

export default ajvInstance.compile(workflowTemplate_schema);
