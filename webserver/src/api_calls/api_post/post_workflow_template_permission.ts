import create_workflowTemplatePermission from '../../schemas/ajv_schemas_create/workflowTemplatePermission';
import { insert_workflowTemplatePermission } from '../../dbmanager/db_insert_sl/workflowTemplatePermission.inesrt';


export const postworkflowTemplatePermission = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflowTemplatePermission(request.body);
  if (!valid) {
    const { errors } = create_workflowTemplatePermission;
    reject(errors);
  }
  else {
    const result = insert_workflowTemplatePermission(request);
    resolve(result);
  }
});
