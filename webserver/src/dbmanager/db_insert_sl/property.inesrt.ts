import dataKey from '../../utils/utils';
import pool from '../dbconn';

export async function insert_property(request: any) {
  // procesor
  const input = request.body;

  const table_cols: any = {
    id: 'id',
    accountId: 'account_id',
    type: 'type',
    street1: 'street_1',
    street2: 'street_2',
    city: 'city',
    state: 'state',
    country: 'country',
    taxes: 'taxes',
    miscExp: 'misc_exp',
    rentalIncome: 'rental_income',
    squareFootage: 'square_footage',
    bedrooms: 'bedrooms',
    baths: 'baths',
    postal: 'postal',
    createdBy: 'created_by',
    createTime: 'create_time',
    createRequest: 'create_request',
    updatedBy: 'updated_by',
    updateTime: 'update_time',
    updateRequest: 'update_request',
    actualValue: 'actual_value',
    estimatedValue: 'estimated_value',
    hazardInsurance: 'hazard_insurance',
    propertyUnits: 'property_units',
    propertyOccupancy: 'property_occupancy',
  };

  const timestamp = new Date();

  const additionals: any = {
    id: `property_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: request.decoded.account_id,
    createdBy: request.decoded.user_id,
    createRequest: request.request_id,
  };

  Object.assign(input, additionals);

  const cols: any[] = [];
  const values: any[] = [];
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols) {
      cols.push(table_cols[key]);
        if (typeof(value) === 'string'){
          value = "'"+value+"'";
        }
        values.push(value);
      }
  }

  const all_cols: any[] = [];
  for (const [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(', ');
  const values_str = values.join(', ');
  const all_cols_str = all_cols.join(', ');

  const insert_query = `INSERT INTO property (${cols_str}) values (${values_str}) returning ${all_cols_str}`;
  const result = await pool.query(insert_query);

  return result.rows;
}

