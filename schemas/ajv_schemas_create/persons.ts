import ajvInstance from '../ajv-instance';
import { persons_ajv } from '../mapper_ajv';


const persons_schema = {
  type: 'object',
  properties: {
    personid: persons_ajv.personid.api,
    lastname: persons_ajv.lastname.api,
    firstname: persons_ajv.firstname.api,
    address: persons_ajv.address.api,
    city: persons_ajv.city.api,
  },
  required: [],
  additionalProperties: false,
};

export default ajvInstance.compile(persons_schema);
