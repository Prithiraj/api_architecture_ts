import create_elementtotemplateVersion from '../../schemas/ajv_schemas_create/elementtotemplateVersion';
import { insert_elementtotemplateVersion } from '../../dbmanager/db_insert_sl/elementtotemplateVersion.inesrt';


export const postelementtotemplateVersion = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_elementtotemplateVersion(request.body);
  if (!valid) {
    const { errors } = create_elementtotemplateVersion;
    reject(errors);
  }
  else {
    const result = insert_elementtotemplateVersion(request);
    resolve(result);
  }
});
