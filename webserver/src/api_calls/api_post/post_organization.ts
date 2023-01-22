import create_organization from '../../schemas/ajv_schemas_create/organization';
import { insert_organization } from '../../dbmanager/db_insert_sl/organization.inesrt';


export const postorganization = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_organization(request.body);
  if (!valid) {
    const { errors } = create_organization;
    reject(errors);
  }
  else {
    const result = insert_organization(request);
    resolve(result);
  }
});
