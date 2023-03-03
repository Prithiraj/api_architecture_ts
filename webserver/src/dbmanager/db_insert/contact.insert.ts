import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_contact(input: any) {
  // procesor

  const table_cols: Record<string, string> = {
    id: 'id',
    accountId: 'account_id',
    statusId: 'status_id',
    addressId: 'address_id',
    pictureUrl: 'picture_url',
    nmlsId: 'nmls_id',
    type: 'type',
    firstName: 'first_name',
    lastName: 'last_name',
    personalEmail: 'personal_email',
    workEmail: 'work_email',
    mobilePhone: 'mobile_phone',
    workPhone: 'work_phone',
    extraMail: 'extra_mail',
    extraPhone: 'extra_phone',
    jobTitle: 'job_title',
    maritalStatus: 'marital_status',
    gender: 'gender',
    dob: 'dob',
    creationSource: 'creation_source',
    ssn: 'ssn',
    leadSourceType: 'lead_source_type',
    leadSource: 'lead_source',
    createdBy: 'created_by',
    createTime: 'create_time',
    createRequest: 'create_request',
    updatedBy: 'updated_by',
    updateTime: 'update_time',
    updateRequest: 'update_request',
    middleName: 'middle_name',
    autoIncrementId: 'auto_increment_id',
    locale: 'locale',
    monthlyIncome: 'monthly_income',
    organizationId: 'organization_id',
    origin: 'origin',
    taygoSource: 'taygo_source',
    timezone: 'timezone',
    isDeleted: 'is_deleted',
    isConverted: 'is_converted',
    statusLifecycleId: 'status_lifecycle_id',
    homePhone: 'home_phone',
    fico: 'fico',
    currentLoanId: 'current_loan_id',
    desiredLoanId: 'desired_loan_id',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `contact_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (const [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      const table_db_key = table_cols[key];
      if (table_db_key.indexOf('.') > -1) {
        cols.push(`"${table_db_key}"`);
      }
      else {
        cols.push(table_db_key);
      }
      values.push(value);
    }
  }

  const cols_str = cols.join(', ');
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    if (value.indexOf('.') > -1) {
      all_cols.push(`"${value}"`);
    }
    else {
      all_cols.push(value);
    }
  }

  const all_cols_str = all_cols.join(', ');
  const insert_query = {
	  text: `INSERT INTO contact (${cols_str}) values (${placeholders}) returning ${all_cols_str}`,
	  values: values
  };


  try{
    const result = await pool.query(insert_query);
    return result.rows;
  } catch (err: any) {
    if (err.code === 23503) {
      throw 'account_id doesn\'t exist';
    }
	  else {
      throw err;
    }
  }
}

