import create_workflow from '../../schemas/ajv_schemas_create/workflow';
import { insert_workflow } from '../../dbmanager/db_insert_sl/workflow.inesrt';


export const postworkflow = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflow(request.body);
  if (!valid) {
    const { errors } = create_workflow;
    reject(errors);
  }
  else {
    const result = insert_workflow(request);
    resolve(result);
  }
});
