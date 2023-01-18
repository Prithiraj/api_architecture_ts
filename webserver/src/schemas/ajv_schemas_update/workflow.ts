import ajvInstance from '../ajv-instance';
import { workflow_ajv } from '../mapper_ajv';


const workflow_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['sourceTemplate'],
    properties: { apicolname: workflow_ajv.sourceTemplate.api},	
  },{
    required: ['status'],
    properties: { apicolname: workflow_ajv.status.api},	
  },{
    required: ['steps'],
    properties: { apicolname: workflow_ajv.steps.api},	
  },{
    required: ['targetFilter'],
    properties: { apicolname: workflow_ajv.targetFilter.api},	
  },{
    required: ['apiVersion'],
    properties: { apicolname: workflow_ajv.apiVersion.api},	
  },{
    required: ['firstStep'],
    properties: { apicolname: workflow_ajv.firstStep.api},	
  },{
    required: ['flowType'],
    properties: { apicolname: workflow_ajv.flowType.api},	
  },{
    required: ['name'],
    properties: { apicolname: workflow_ajv.name.api},	
  },{
    required: ['recurring'],
    properties: { apicolname: workflow_ajv.recurring.api},	
  },{
    required: ['startTime'],
    properties: { apicolname: workflow_ajv.startTime.api},	
  },{
    required: ['retry'],
    properties: { apicolname: workflow_ajv.retry.api},	
  },]
};

export default ajvInstance.compile(workflow_schema);
