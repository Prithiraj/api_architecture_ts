import ajvInstance from '../ajv-instance';
import { loLeadSource_ajv } from '../mapper_ajv';


const loLeadSource_schema = {
  type: 'object',
  properties: {
    id: loLeadSource_ajv.id.api,
    color: loLeadSource_ajv.color.api,
    productId: loLeadSource_ajv.productId.api,
    tileColor: loLeadSource_ajv.tileColor.api,
    tileDescription: loLeadSource_ajv.tileDescription.api,
    tileHighlights: loLeadSource_ajv.tileHighlights.api,
    title: loLeadSource_ajv.title.api,
    createTime: loLeadSource_ajv.createTime.api,
    updateTime: loLeadSource_ajv.updateTime.api,
    active: loLeadSource_ajv.active.api,
    callcenter: loLeadSource_ajv.callcenter.api,
    dedicatedCallcenter: loLeadSource_ajv.dedicatedCallcenter.api,
    notificationEmails: loLeadSource_ajv.notificationEmails.api,
    order: loLeadSource_ajv.order.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(loLeadSource_schema);
