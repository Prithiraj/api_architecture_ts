import { select_workflowTemplate_by_id_admin } from '../../dbmanager/db_select_sl/admin/workflowTemplate.selectByID';
import { select_workflowTemplate_by_id } from '../../dbmanager/db_select_sl/general/workflowTemplate.selectByID';


export const getworkflowTemplate_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTemplate_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getworkflowTemplate = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTemplate_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
