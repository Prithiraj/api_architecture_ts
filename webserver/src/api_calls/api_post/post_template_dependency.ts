import create_templateDependency from '../../schemas/ajv_schemas_create/templateDependency';
import { insert_templateDependency } from '../../dbmanager/db_insert_sl/templateDependency.inesrt';


export const posttemplateDependency = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_templateDependency(request.body);
  if (!valid) {
    const { errors } = create_templateDependency;
    reject(errors);
  }
  else {
    const result = insert_templateDependency(request);
    resolve(result);
  }
});
