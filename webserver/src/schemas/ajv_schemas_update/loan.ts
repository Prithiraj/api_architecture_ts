import ajvInstance from '../ajv-instance';
import { loan_ajv } from '../mapper_ajv';


const loan_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['id'],
    properties: { apicolname: loan_ajv.id.api},	
  },{
    required: ['accountId'],
    properties: { apicolname: loan_ajv.accountId.api},	
  },{
    required: ['loanOfficerId'],
    properties: { apicolname: loan_ajv.loanOfficerId.api},	
  },{
    required: ['addressId'],
    properties: { apicolname: loan_ajv.addressId.api},	
  },{
    required: ['purpose'],
    properties: { apicolname: loan_ajv.purpose.api},	
  },{
    required: ['product'],
    properties: { apicolname: loan_ajv.product.api},	
  },{
    required: ['amount'],
    properties: { apicolname: loan_ajv.amount.api},	
  },{
    required: ['interestRate'],
    properties: { apicolname: loan_ajv.interestRate.api},	
  },{
    required: ['term'],
    properties: { apicolname: loan_ajv.term.api},	
  },{
    required: ['downPayment'],
    properties: { apicolname: loan_ajv.downPayment.api},	
  },{
    required: ['remainingTerm'],
    properties: { apicolname: loan_ajv.remainingTerm.api},	
  },{
    required: ['notes'],
    properties: { apicolname: loan_ajv.notes.api},	
  },{
    required: ['mortgageInsurance'],
    properties: { apicolname: loan_ajv.mortgageInsurance.api},	
  },{
    required: ['status'],
    properties: { apicolname: loan_ajv.status.api},	
  },{
    required: ['closingDate'],
    properties: { apicolname: loan_ajv.closingDate.api},	
  },{
    required: ['createTime'],
    properties: { apicolname: loan_ajv.createTime.api},	
  },{
    required: ['createRequest'],
    properties: { apicolname: loan_ajv.createRequest.api},	
  },{
    required: ['updatedBy'],
    properties: { apicolname: loan_ajv.updatedBy.api},	
  },{
    required: ['updateTime'],
    properties: { apicolname: loan_ajv.updateTime.api},	
  },{
    required: ['updateRequest'],
    properties: { apicolname: loan_ajv.updateRequest.api},	
  },{
    required: ['remainingValue'],
    properties: { apicolname: loan_ajv.remainingValue.api},	
  },{
    required: ['desiredOrCurrent'],
    properties: { apicolname: loan_ajv.desiredOrCurrent.api},	
  },{
    required: ['desiredCashOutAmount'],
    properties: { apicolname: loan_ajv.desiredCashOutAmount.api},	
  },{
    required: ['desiredDownPayment'],
    properties: { apicolname: loan_ajv.desiredDownPayment.api},	
  },{
    required: ['loanPropertyType'],
    properties: { apicolname: loan_ajv.loanPropertyType.api},	
  },{
    required: ['loanUnits'],
    properties: { apicolname: loan_ajv.loanUnits.api},	
  },{
    required: ['timeline'],
    properties: { apicolname: loan_ajv.timeline.api},	
  },{
    required: ['loanPropertyOccupancy'],
    properties: { apicolname: loan_ajv.loanPropertyOccupancy.api},	
  },{
    required: ['loanPropertyValue'],
    properties: { apicolname: loan_ajv.loanPropertyValue.api},	
  },{
    required: ['loanType'],
    properties: { apicolname: loan_ajv.loanType.api},	
  },]
};

export default ajvInstance.compile(loan_schema);
