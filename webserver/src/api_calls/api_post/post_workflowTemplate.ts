import create_workflowTemplate from '../../schemas/ajv_schemas_create/workflowTemplate';
import { insert_workflowTemplate } from '../../dbmanager/db_insert_sl/workflowTemplate.insert';


export const postworkflowTemplate = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_workflowTemplate(request.body);
  if (!valid) {
    const { errors } = create_workflowTemplate;
    reject(errors);
  }
  else {
    try {
      const result = insert_workflowTemplate(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
