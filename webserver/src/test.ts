// import dataKey from '../../utils/utils';
// import pool from '../../utils/pool';

// export async function insert_contact(request: any) {
//   // procesor
//   const input = request.body;

//   const table_cols: any = {
//     id: 'id',
//     accountId: 'account_id',
//     statusId: 'status_id',
//     addressId: 'address_id',
//     pictureUrl: 'picture_url',
//     nmlsId: 'nmls_id',
//     type: 'type',
//     firstName: 'first_name',
//     lastName: 'last_name',
//     personalEmail: 'personal_email',
//     workEmail: 'work_email',
//     mobilePhone: 'mobile_phone',
//     workPhone: 'work_phone',
//     extraMail: 'extra_mail',
//     extraPhone: 'extra_phone',
//     jobTitle: 'job_title',
//     maritalStatus: 'marital_status',
//     gender: 'gender',
//     dob: 'dob',
//     creationSource: 'creation_source',
//     ssn: 'ssn',
//     leadSourceType: 'lead_source_type',
//     leadSource: 'lead_source',
//     createdBy: 'created_by',
//     createTime: 'create_time',
//     createRequest: 'create_request',
//     updatedBy: 'updated_by',
//     updateTime: 'update_time',
//     updateRequest: 'update_request',
//     middleName: 'middle_name',
//     autoIncrementId: 'auto_increment_id',
//     locale: 'locale',
//     monthlyIncome: 'monthly_income',
//     organizationId: 'organization_id',
//     origin: 'origin',
//     taygoSource: 'taygo_source',
//     timezone: 'timezone',
//     isDeleted: 'is_deleted',
//     isConverted: 'is_converted',
//     statusLifecycleId: 'status_lifecycle_id',
//     homePhone: 'home_phone',
//     fico: 'fico',
//     currentLoanId: 'current_loan_id',
//     desiredLoanId: 'desired_loan_id',
//   };

//   const timestamp = new Date();

//   const additionals: any = {
//     id: `contact_${dataKey(6)}`,
//     createTime: timestamp.toISOString(),
//     updateTime: timestamp.toISOString(),
//     accountId: request.decoded.account_id,
//     createdBy: request.decoded.user_id,
//     createRequest: request.request_id,
//   };

//   Object.assign(input, additionals);

//   const key_values: any[] = []
//   const values: any[] = []
//   let id = input.id;
//   let index = 0;
//   for (let [key, value] of Object.entries(input)) {
//     if (key in table_cols) {
// 	  ++index;
//       key_values.push(`${table_cols[key]}=${index}`);
//       values.push(value);
//     }
//   }

//  // push id to values
//  values.push(id);

//   const key_value_placeholders = key_values.join(', ');
//   const all_cols: any[] = [];
//   for (let [key, value] of Object.entries(table_cols)) {
//     all_cols.push(value);
//   }

//   const all_cols_str = all_cols.join(', ');

//   const update_query = {
// 	text: `UPDATE public.{{apitablename}} SET ${key_value_placeholders} WHERE id='${index + 1}' returning ${all_cols_str}`,
// 	values: values
//   };

//   try{
// 	  const result = await pool.query(update_query);
// 	  return result.rows;
//   } catch (err: any) {
//       throw err;  
//   }
// }