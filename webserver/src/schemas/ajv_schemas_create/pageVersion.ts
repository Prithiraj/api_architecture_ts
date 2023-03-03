import ajvInstance from '../ajv-instance';
import { pageVersion_ajv } from '../mapper_ajv';


const pageVersion_schema = {
  type: 'object',
  properties: {
    version: pageVersion_ajv.version.api,
    pageId: pageVersion_ajv.pageId.api,
    name: pageVersion_ajv.name.api,
    body: pageVersion_ajv.body.api,
  },
  required: ['pageId', 'version'],
  additionalProperties: false,
};

export default ajvInstance.compile(pageVersion_schema);
