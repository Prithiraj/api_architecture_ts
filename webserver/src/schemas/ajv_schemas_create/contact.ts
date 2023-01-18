import ajvInstance from '../ajv-instance';
import { contact_ajv } from '../mapper_ajv';


const contact_schema = {
  type: 'object',
  properties: {
    statusId: contact_ajv.statusId.api,
    addressId: contact_ajv.addressId.api,
    pictureUrl: contact_ajv.pictureUrl.api,
    nmlsId: contact_ajv.nmlsId.api,
    type: contact_ajv.type.api,
    firstName: contact_ajv.firstName.api,
    lastName: contact_ajv.lastName.api,
    personalEmail: contact_ajv.personalEmail.api,
    workEmail: contact_ajv.workEmail.api,
    mobilePhone: contact_ajv.mobilePhone.api,
    workPhone: contact_ajv.workPhone.api,
    extraPhone: contact_ajv.extraPhone.api,
    maritalStatus: contact_ajv.maritalStatus.api,
    dob: contact_ajv.dob.api,
    ssn: contact_ajv.ssn.api,
    leadSource: contact_ajv.leadSource.api,
    middleName: contact_ajv.middleName.api,
    locale: contact_ajv.locale.api,
    monthlyIncome: contact_ajv.monthlyIncome.api,
    origin: contact_ajv.origin.api,
    taygoSource: contact_ajv.taygoSource.api,
    homePhone: contact_ajv.homePhone.api,
    fico: contact_ajv.fico.api,
    desiredLoanId: contact_ajv.desiredLoanId.api,
    statusLifecycleId: contact_ajv.statusLifecycleId.api,
  },
  required: ['firstName', 'lastName', 'isConverted', 'type', 'creationSource'],
  additionalProperties: false,
};

export default ajvInstance.compile(contact_schema);
