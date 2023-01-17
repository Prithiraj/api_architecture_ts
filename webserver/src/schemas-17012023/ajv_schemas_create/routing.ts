import ajvInstance from '../ajv-instance';
import { routing_ajv } from '../mapper_ajv';


const routing_schema = {
  type: 'object',
  properties: {
    accountId: routing_ajv.accountId.api,
    subdomain: routing_ajv.subdomain.api,
    path: routing_ajv.path.api,
    resourceId: routing_ajv.resourceId.api,
    createTime: routing_ajv.createTime.api,
    updateRequest: routing_ajv.updateRequest.api,
    updateTime: routing_ajv.updateTime.api,
    updatedBy: routing_ajv.updatedBy.api,
    createRequest: routing_ajv.createRequest.api,
  },
  required: ['resourceId'],
  additionalProperties: false,
};

export default ajvInstance.compile(routing_schema);
