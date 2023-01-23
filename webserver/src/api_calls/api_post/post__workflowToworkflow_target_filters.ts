import create_workflowtoworkflowTargetFilters from '../../schemas/ajv_schemas_create/workflowtoworkflowTargetFilters';
import { insert_workflowtoworkflowTargetFilters } from '../../dbmanager/db_insert_sl/workflowtoworkflowTargetFilters.insert';


export const postworkflowtoworkflowTargetFilters = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflowtoworkflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = create_workflowtoworkflowTargetFilters;
    reject(errors);
  }
  else {
    try {    
      const result = insert_workflowtoworkflowTargetFilters(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
