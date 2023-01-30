import { select_workflowState_by_id_admin } from '../../dbmanager/db_select_sl/admin/workflowState.selectByID';
import { select_workflowState_by_id } from '../../dbmanager/db_select_sl/general/workflowState.selectByID';


export const getworkflowState_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowState_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getworkflowState = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowState_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
