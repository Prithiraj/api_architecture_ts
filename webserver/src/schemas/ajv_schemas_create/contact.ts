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
    extraMail: contact_ajv.extraMail.api,
    extraPhone: contact_ajv.extraPhone.api,
    jobTitle: contact_ajv.jobTitle.api,
    maritalStatus: contact_ajv.maritalStatus.api,
    gender: contact_ajv.gender.api,
    dob: contact_ajv.dob.api,
    creationSource: contact_ajv.creationSource.api,
    ssn: contact_ajv.ssn.api,
    leadSourceType: contact_ajv.leadSourceType.api,
    leadSource: contact_ajv.leadSource.api,
    middleName: contact_ajv.middleName.api,
    locale: contact_ajv.locale.api,
    monthlyIncome: contact_ajv.monthlyIncome.api,
    organizationId: contact_ajv.organizationId.api,
    origin: contact_ajv.origin.api,
    taygoSource: contact_ajv.taygoSource.api,
    timezone: contact_ajv.timezone.api,
    isConverted: contact_ajv.isConverted.api,
    statusLifecycleId: contact_ajv.statusLifecycleId.api,
    homePhone: contact_ajv.homePhone.api,
    fico: contact_ajv.fico.api,
    currentLoanId: contact_ajv.currentLoanId.api,
    desiredLoanId: contact_ajv.desiredLoanId.api,
  },
  required: ['creationSource', 'lastName', 'firstName', 'isConverted', 'type'],
  additionalProperties: false,
};

export default ajvInstance.compile(contact_schema);
