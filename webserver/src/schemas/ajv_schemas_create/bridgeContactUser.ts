import ajvInstance from '../ajv-instance';
import { bridgeContactUser_ajv } from '../mapper_ajv';


const bridgeContactUser_schema = {
  type: 'object',
  properties: {
    contactId: bridgeContactUser_ajv.contactId.api,
    userId: bridgeContactUser_ajv.userId.api,
    assignedBy: bridgeContactUser_ajv.assignedBy.api,
    assignTime: bridgeContactUser_ajv.assignTime.api,
    assignRequest: bridgeContactUser_ajv.assignRequest.api,
    id: bridgeContactUser_ajv.id.api,
  },
  required: ['contactId', 'id', 'assignRequest', 'userId', 'assignedBy', 'assignTime'],
  additionalProperties: false,
};

export default ajvInstance.compile(bridgeContactUser_schema);
