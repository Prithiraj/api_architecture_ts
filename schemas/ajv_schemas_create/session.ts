import ajvInstance from '../ajv-instance';
import { session_ajv } from '../mapper_ajv';


const session_schema = {
  type: 'object',
  properties: {
    id: session_ajv.id.api,
    accountId: session_ajv.accountId.api,
    sessionStart: session_ajv.sessionStart.api,
    sessionEnd: session_ajv.sessionEnd.api,
    timezone: session_ajv.timezone.api,
    createdBy: session_ajv.createdBy.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(session_schema);
