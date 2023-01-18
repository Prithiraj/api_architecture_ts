import ajvInstance from '../ajv-instance';
import { bridgeSectionLifecycle_ajv } from '../mapper_ajv';


const bridgeSectionLifecycle_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['customFieldSectionId'],
    properties: { apicolname: bridgeSectionLifecycle_ajv.customFieldSectionId.api},	
  },{
    required: ['lifecycleId'],
    properties: { apicolname: bridgeSectionLifecycle_ajv.lifecycleId.api},	
  },]
};

export default ajvInstance.compile(bridgeSectionLifecycle_schema);
