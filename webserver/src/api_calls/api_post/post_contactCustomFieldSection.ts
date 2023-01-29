import create_contactCustomFieldSection from '../../schemas/ajv_schemas_create/contactCustomFieldSection';
import { insert_contactCustomFieldSection } from '../../dbmanager/db_insert_sl/contactCustomFieldSection.insert';


export const postcontactCustomFieldSection = async (request: any) => new Promise((resolve, reject) => {
  // ---------Schema validation-----------
  const valid = create_contactCustomFieldSection(request.body);
  if (!valid) {
    const { errors } = create_contactCustomFieldSection;
    reject(errors);
  }
  else {
    try {
      const result = insert_contactCustomFieldSection(request);
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  }
});
