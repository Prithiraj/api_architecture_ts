import ajvInstance from '../ajv-instance';
import { contact_ajv } from '../mapper_ajv';


const contact_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: contact_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: contact_ajv.accountId.api},	
  },{
    required: ['statusId'],
    properties: { apicolname: contact_ajv.statusId.api},	
  },{
    required: ['addressId'],
    properties: { apicolname: contact_ajv.addressId.api},	
  },{
    required: ['pictureUrl'],
    properties: { apicolname: contact_ajv.pictureUrl.api},	
  },{
    required: ['nmlsId'],
    properties: { apicolname: contact_ajv.nmlsId.api},	
  },{
    required: ['type'],
    properties: { apicolname: contact_ajv.type.api},	
  },{
    required: ['firstName'],
    properties: { apicolname: contact_ajv.firstName.api},	
  },{
    required: ['lastName'],
    properties: { apicolname: contact_ajv.lastName.api},	
  },{
    required: ['personalEmail'],
    properties: { apicolname: contact_ajv.personalEmail.api},	
  },{
    required: ['workEmail'],
    properties: { apicolname: contact_ajv.workEmail.api},	
  },{
    required: ['mobilePhone'],
    properties: { apicolname: contact_ajv.mobilePhone.api},	
  },{
    required: ['workPhone'],
    properties: { apicolname: contact_ajv.workPhone.api},	
  },{
    required: ['extraMail'],
    properties: { apicolname: contact_ajv.extraMail.api},	
  },{
    required: ['extraPhone'],
    properties: { apicolname: contact_ajv.extraPhone.api},	
  },{
    required: ['jobTitle'],
    properties: { apicolname: contact_ajv.jobTitle.api},	
  },{
    required: ['maritalStatus'],
    properties: { apicolname: contact_ajv.maritalStatus.api},	
  },{
    required: ['fico'],
    properties: { apicolname: contact_ajv.fico.api},	
  },{
    required: ['gender'],
    properties: { apicolname: contact_ajv.gender.api},	
  },{
    required: ['dob'],
    properties: { apicolname: contact_ajv.dob.api},	
  },{
    required: ['creationSource'],
    properties: { apicolname: contact_ajv.creationSource.api},	
  },{
    required: ['ssn'],
    properties: { apicolname: contact_ajv.ssn.api},	
  },{
    required: ['leadSourceType'],
    properties: { apicolname: contact_ajv.leadSourceType.api},	
  },{
    required: ['leadSource'],
    properties: { apicolname: contact_ajv.leadSource.api},	
  },{
    required: ['createdBy'],
    properties: { apicolname: contact_ajv.createdBy.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: contact_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: contact_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: contact_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: contact_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: contact_ajv.updateRequest.api},	
  },{
    required: ['middleName'],
    properties: { apicolname: contact_ajv.middleName.api},	
  },{
    required: ['autoIncrementId'],
    properties: { apicolname: contact_ajv.autoIncrementId.api},	
  },{
    required: ['locale'],
    properties: { apicolname: contact_ajv.locale.api},	
  },{
    required: ['monthlyIncome'],
    properties: { apicolname: contact_ajv.monthlyIncome.api},	
  },{
    required: ['organizationId'],
    properties: { apicolname: contact_ajv.organizationId.api},	
  },{
    required: ['origin'],
    properties: { apicolname: contact_ajv.origin.api},	
  },{
    required: ['taygoSource'],
    properties: { apicolname: contact_ajv.taygoSource.api},	
  },{
    required: ['timezone'],
    properties: { apicolname: contact_ajv.timezone.api},	
  },{
    required: ['isDeleted'],
    properties: { apicolname: contact_ajv.isDeleted.api},	
  },{
    required: ['isConverted'],
    properties: { apicolname: contact_ajv.isConverted.api},	
  },{
    required: ['statusLifecycleId'],
    properties: { apicolname: contact_ajv.statusLifecycleId.api},	
  },{
    required: ['homePhone'],
    properties: { apicolname: contact_ajv.homePhone.api},	
  },]
};

export default ajvInstance.compile(contact_schema);
