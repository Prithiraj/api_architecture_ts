import ajvInstance from '../ajv-instance';
import { loan_ajv } from '../mapper_ajv';


const loan_schema = {
  type: 'object',
  properties: {
    loanOfficerId: loan_ajv.loanOfficerId.api,
    addressId: loan_ajv.addressId.api,
    purpose: loan_ajv.purpose.api,
    product: loan_ajv.product.api,
    amount: loan_ajv.amount.api,
    interestRate: loan_ajv.interestRate.api,
    term: loan_ajv.term.api,
    downPayment: loan_ajv.downPayment.api,
    remainingTerm: loan_ajv.remainingTerm.api,
    notes: loan_ajv.notes.api,
    mortgageInsurance: loan_ajv.mortgageInsurance.api,
    status: loan_ajv.status.api,
    closingDate: loan_ajv.closingDate.api,
    remainingValue: loan_ajv.remainingValue.api,
    desiredOrCurrent: loan_ajv.desiredOrCurrent.api,
    desiredCashOutAmount: loan_ajv.desiredCashOutAmount.api,
    loanPropertyType: loan_ajv.loanPropertyType.api,
    loanUnits: loan_ajv.loanUnits.api,
    timeline: loan_ajv.timeline.api,
    loanPropertyOccupancy: loan_ajv.loanPropertyOccupancy.api,
    loanPropertyValue: loan_ajv.loanPropertyValue.api,
    amortization: loan_ajv.amortization.api,
  },
  required: ['status', 'desiredOrCurrent'],
  additionalProperties: false,
};

export default ajvInstance.compile(loan_schema);
