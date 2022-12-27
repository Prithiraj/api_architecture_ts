import ajvInstance from '../ajv-instance';
import { persons_ajv } from '../mapper_ajv';


const persons_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['personid'],
    properties: { apicolname: persons_ajv.personid.api},	
  },{
    required: ['lastname'],
    properties: { apicolname: persons_ajv.lastname.api},	
  },{
    required: ['firstname'],
    properties: { apicolname: persons_ajv.firstname.api},	
  },{
    required: ['address'],
    properties: { apicolname: persons_ajv.address.api},	
  },{
    required: ['city'],
    properties: { apicolname: persons_ajv.city.api},	
  },]
};

export default ajvInstance.compile(persons_schema);
