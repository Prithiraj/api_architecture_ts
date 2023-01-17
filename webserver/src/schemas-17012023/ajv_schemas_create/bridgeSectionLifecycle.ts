import ajvInstance from '../ajv-instance';
import { bridgeSectionLifecycle_ajv } from '../mapper_ajv';


const bridgeSectionLifecycle_schema = {
  type: 'object',
  properties: {
    id: bridgeSectionLifecycle_ajv.id.api,
    accountId: bridgeSectionLifecycle_ajv.accountId.api,
    customFieldSectionId: bridgeSectionLifecycle_ajv.customFieldSectionId.api,
    lifecycleId: bridgeSectionLifecycle_ajv.lifecycleId.api,
  },
  required: ['customFieldSectionId', 'lifecycleId'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeSectionLifecycle_schema);
