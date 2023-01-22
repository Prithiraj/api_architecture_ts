import create_prismaMigrations from '../../schemas/ajv_schemas_create/prismaMigrations';
import { insert_prismaMigrations } from '../../dbmanager/db_insert_sl/prismaMigrations.inesrt';


export const postprismaMigrations = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_prismaMigrations(request.body);
  if (!valid) {
    const { errors } = create_prismaMigrations;
    reject(errors);
  }
  else {
    const result = insert_prismaMigrations(request);
    resolve(result);
  }
});
