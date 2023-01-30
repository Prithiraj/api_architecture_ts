import { select_workflow_by_id_admin } from '../../dbmanager/db_select_sl/admin/workflow.selectByID';
import { select_workflow_by_id } from '../../dbmanager/db_select_sl/general/workflow.selectByID';


export const getworkflow_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_workflow_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getworkflow = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_workflow_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
