import ajvInstance from '../ajv-instance';
import { user_ajv } from '../mapper_ajv';


const user_schema = {
  type: 'object',
  properties: {
    id: user_ajv.id.api,
    userType: user_ajv.userType.api,
    emailVerified: user_ajv.emailVerified.api,
    lastname: user_ajv.lastname.api,
    phone: user_ajv.phone.api,
    phoneNumberVerified: user_ajv.phoneNumberVerified.api,
    profileImage: user_ajv.profileImage.api,
    firstname: user_ajv.firstname.api,
    email: user_ajv.email.api,
  },
  required: ['id'],
  additionalProperties: false,
  anyOf: [{
    required: ['userType'],
  },{
    required: ['emailVerified'],
  },{
    required: ['lastname'],
  },{
    required: ['phone'],
  },{
    required: ['phoneNumberVerified'],
  },{
    required: ['profileImage'],
  },{
    required: ['firstname'],
  },{
    required: ['email'],
  },]
};

export default ajvInstance.compile(user_schema);
