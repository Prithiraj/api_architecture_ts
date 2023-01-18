import ajvInstance from '../ajv-instance';
import { elementVersion_ajv } from '../mapper_ajv';


const elementVersion_schema = {
  type: 'object',
  properties: {
    version: elementVersion_ajv.version.api,
    elementId: elementVersion_ajv.elementId.api,
    name: elementVersion_ajv.name.api,
    data: elementVersion_ajv.data.api,
    id: elementVersion_ajv.id.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['version'],
  },{
    required: ['elementId'],
  },{
    required: ['name'],
  },{
    required: ['data'],
  },]
};

export default ajvInstance.compile(elementVersion_schema);
