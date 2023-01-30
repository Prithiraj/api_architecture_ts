import { select_partner_by_id_admin } from '../../dbmanager/db_select_sl/admin/partner.selectByID';
import { select_partner_by_id } from '../../dbmanager/db_select_sl/general/partner.selectByID';


export const getpartner_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_partner_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getpartner = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_partner_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
