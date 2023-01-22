import create_workflowTargetFilters from '../../schemas/ajv_schemas_create/workflowTargetFilters';
import { insert_workflowTargetFilters } from '../../dbmanager/db_insert_sl/workflowTargetFilters.inesrt';


export const postworkflowTargetFilters = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflowTargetFilters(request.body);
  if (!valid) {
    const { errors } = create_workflowTargetFilters;
    reject(errors);
  }
  else {
    const result = insert_workflowTargetFilters(request);
    resolve(result);
  }
});
