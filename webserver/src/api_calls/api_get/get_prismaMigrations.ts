import { select_prismaMigrations_by_id_admin } from '../../dbmanager/db_select_sl/admin/prismaMigrations.selectByID';
import { select_prismaMigrations_by_id } from '../../dbmanager/db_select_sl/general/prismaMigrations.selectByID';


export const getprismaMigrations_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_prismaMigrations_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getprismaMigrations = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_prismaMigrations_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
