import ajvInstance from '../ajv-instance';
import { user_ajv } from '../mapper_ajv';


const user_schema = {
  type: 'object',
  properties: {
    id: { type: 'string',}
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['userType'],
    properties: { apicolname: user_ajv.userType.api},	
  },{
    required: ['email'],
    properties: { apicolname: user_ajv.email.api},	
  },{
    required: ['emailVerified'],
    properties: { apicolname: user_ajv.emailVerified.api},	
  },{
    required: ['lastname'],
    properties: { apicolname: user_ajv.lastname.api},	
  },{
    required: ['phone'],
    properties: { apicolname: user_ajv.phone.api},	
  },{
    required: ['phoneNumberVerified'],
    properties: { apicolname: user_ajv.phoneNumberVerified.api},	
  },{
    required: ['profileImage'],
    properties: { apicolname: user_ajv.profileImage.api},	
  },]
};

export default ajvInstance.compile(user_schema);
