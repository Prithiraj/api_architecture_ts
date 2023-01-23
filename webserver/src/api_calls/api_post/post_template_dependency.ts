import create_templateDependency from '../../schemas/ajv_schemas_create/templateDependency';
import { insert_templateDependency } from '../../dbmanager/db_insert_sl/templateDependency.insert';


export const posttemplateDependency = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_templateDependency(request.body);
  if (!valid) {
    const { errors } = create_templateDependency;
    reject(errors);
  }
  else {
    try {    
      const result = insert_templateDependency(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
