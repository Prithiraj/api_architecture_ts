import ajvInstance from '../ajv-instance';
import { user_ajv } from '../mapper_ajv';


const user_schema = {
  type: 'object',
  properties: {
    userType: user_ajv.userType.api,
    email: user_ajv.email.api,
    emailVerified: user_ajv.emailVerified.api,
    lastname: user_ajv.lastname.api,
    phone: user_ajv.phone.api,
    phoneNumberVerified: user_ajv.phoneNumberVerified.api,
    profileImage: user_ajv.profileImage.api,
  },
  required: ['emailVerified', 'phoneNumberVerified'],
  additionalProperties: false,
};

export default ajvInstance.compile(user_schema);
