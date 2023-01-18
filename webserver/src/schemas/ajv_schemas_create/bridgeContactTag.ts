import ajvInstance from '../ajv-instance';
import { bridgeContactTag_ajv } from '../mapper_ajv';


const bridgeContactTag_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactTag_ajv.contactId.api,
    tagId: bridgeContactTag_ajv.tagId.api,
    assignedBy: bridgeContactTag_ajv.assignedBy.api,
    assignTime: bridgeContactTag_ajv.assignTime.api,
    assignRequest: bridgeContactTag_ajv.assignRequest.api,
    id: bridgeContactTag_ajv.id.api,
  },
  required: ['tagId', 'assignedBy', 'contactId', 'assignTime', 'id', 'assignRequest'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactTag_schema);
