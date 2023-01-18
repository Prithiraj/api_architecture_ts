import ajvInstance from '../ajv-instance';
import { bridgeSectionLifecycle_ajv } from '../mapper_ajv';


const bridgeSectionLifecycle_schema = {
  type: 'object',
  properties: {
    id: bridgeSectionLifecycle_ajv.id.api,
    customFieldSectionId: bridgeSectionLifecycle_ajv.customFieldSectionId.api,
    lifecycleId: bridgeSectionLifecycle_ajv.lifecycleId.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['customFieldSectionId'],
  },{
    required: ['lifecycleId'],
  },]
};

export default ajvInstance.compile(bridgeSectionLifecycle_schema);
