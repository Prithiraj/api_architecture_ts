import { select_workflowTargetFilters_by_id_admin } from '../../dbmanager/db_select_sl/admin/workflowTargetFilters.selectByID';
import { select_workflowTargetFilters_by_id } from '../../dbmanager/db_select_sl/general/workflowTargetFilters.selectByID';


export const getworkflowTargetFilters_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTargetFilters_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getworkflowTargetFilters = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_workflowTargetFilters_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
