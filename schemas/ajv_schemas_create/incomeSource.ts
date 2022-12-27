import ajvInstance from '../ajv-instance';
import { incomeSource_ajv } from '../mapper_ajv';


const incomeSource_schema = {
  type: 'object',
  properties: {
    id: incomeSource_ajv.id.api,
    contactId: incomeSource_ajv.contactId.api,
    addressId: incomeSource_ajv.addressId.api,
    organizationId: incomeSource_ajv.organizationId.api,
    type: incomeSource_ajv.type.api,
    employerName: incomeSource_ajv.employerName.api,
    title: incomeSource_ajv.title.api,
    phone: incomeSource_ajv.phone.api,
    amount: incomeSource_ajv.amount.api,
    incomeAmountPeriod: incomeSource_ajv.incomeAmountPeriod.api,
    startDate: incomeSource_ajv.startDate.api,
    endDate: incomeSource_ajv.endDate.api,
    description: incomeSource_ajv.description.api,
    createdBy: incomeSource_ajv.createdBy.api,
    createTime: incomeSource_ajv.createTime.api,
    createRequest: incomeSource_ajv.createRequest.api,
    updatedBy: incomeSource_ajv.updatedBy.api,
    updateTime: incomeSource_ajv.updateTime.api,
    updateRequest: incomeSource_ajv.updateRequest.api,
    employerPhone: incomeSource_ajv.employerPhone.api,
    status: incomeSource_ajv.status.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(incomeSource_schema);
