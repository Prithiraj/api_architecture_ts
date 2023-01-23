import create_workflowState from '../../schemas/ajv_schemas_create/workflowState';
import { insert_workflowState } from '../../dbmanager/db_insert_sl/workflowState.insert';


export const postworkflowState = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflowState(request.body);
  if (!valid) {
    const { errors } = create_workflowState;
    reject(errors);
  }
  else {
    try {    
      const result = insert_workflowState(request);
      resolve(result);
    } catch (err) { 
      reject(err);
    }

  }
});
