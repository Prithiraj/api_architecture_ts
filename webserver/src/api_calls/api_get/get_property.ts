import { select_property_by_id_admin } from '../../dbmanager/db_select_sl/admin/property.selectByID';
import { select_property_by_id } from '../../dbmanager/db_select_sl/general/property.selectByID';


export const getproperty_admin = async (id: string|number) => new Promise((resolve, reject) => {
  try {
    const result = select_property_by_id_admin(id);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});

export const getproperty = async (request: any) => new Promise((resolve, reject) => {
  try {
    const result = select_property_by_id(request);
    resolve(result);
  }
  catch (err) {
    reject(err);
  }
});
