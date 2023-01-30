import { select_workflowTemplatePermission_by_id_admin } from '../../dbmanager/db_select_sl/admin/workflowTemplatePermission.selectByID';
import { select_workflowTemplatePermission_by_id } from '../../dbmanager/db_select_sl/general/workflowTemplatePermission.selectByID';


export const getworkflowTemplatePermission_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTemplatePermission_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getworkflowTemplatePermission = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTemplatePermission_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
