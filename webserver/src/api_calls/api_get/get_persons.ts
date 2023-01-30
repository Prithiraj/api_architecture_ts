import { select_persons_by_id_admin } from '../../dbmanager/db_select_sl/admin/persons.selectByID';
import { select_persons_by_id } from '../../dbmanager/db_select_sl/general/persons.selectByID';


export const getpersons_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_persons_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getpersons = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_persons_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
