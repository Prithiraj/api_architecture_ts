import ajvInstance from '../ajv-instance';
import { links_ajv } from '../mapper_ajv';


const links_schema = {
  type: 'object',
  properties: {
    id: links_ajv.id.api,
    accountId: links_ajv.accountId.api,
    sourceId: links_ajv.sourceId.api,
    destinationId: links_ajv.destinationId.api,
    createTime: links_ajv.createTime.api,
    updateRequest: links_ajv.updateRequest.api,
    updateTime: links_ajv.updateTime.api,
    updatedBy: links_ajv.updatedBy.api,
    createRequest: links_ajv.createRequest.api,
  },
  required: ['sourceId', 'destinationId'],
  additionalProperties: false,
};

export default ajvInstance.compile(links_schema);
