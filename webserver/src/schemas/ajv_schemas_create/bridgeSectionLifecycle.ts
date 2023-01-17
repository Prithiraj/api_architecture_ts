import ajvInstance from '../ajv-instance';
import { bridgeSectionLifecycle_ajv } from '../mapper_ajv';


const bridgeSectionLifecycle_schema = {
  type: 'object',
  properties: {
    customFieldSectionId: bridgeSectionLifecycle_ajv.customFieldSectionId.api,
    lifecycleId: bridgeSectionLifecycle_ajv.lifecycleId.api,
  },
  required: ['lifecycleId', 'customFieldSectionId'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeSectionLifecycle_schema);
