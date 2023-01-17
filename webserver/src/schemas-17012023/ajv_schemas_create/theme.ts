import ajvInstance from '../ajv-instance';
import { theme_ajv } from '../mapper_ajv';


const theme_schema = {
  type: 'object',
  properties: {
    id: theme_ajv.id.api,
    name: theme_ajv.name.api,
    theme: theme_ajv.theme.api,
    createTime: theme_ajv.createTime.api,
    updateRequest: theme_ajv.updateRequest.api,
    updateTime: theme_ajv.updateTime.api,
    updatedBy: theme_ajv.updatedBy.api,
    createRequest: theme_ajv.createRequest.api,
  },
  required: ['theme'],
  additionalProperties: false,
};

export default ajvInstance.compile(theme_schema);
