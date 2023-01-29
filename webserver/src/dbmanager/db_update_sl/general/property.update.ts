import dataKey from '../../../utils/utils';
import pool from '../../dbconn';

export async function update_property(request: any) {
	// processors
	
  const input = request.body;

  const table_cols: Record<string, string> = {
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
    updateTime: timestamp.toISOString(),
    updateRequest: request.request_id,
    updatedBy: request.decoded.user_id,
  };

  const pk = table_cols.id

  Object.assign(input, additionals);

  const key_values: any[] = [];
  const values: any[] = [];
  const id = input.id;
  let index = 0;
  for (let [key, value] of Object.entries(input)) {
    if (key in table_cols && key !== 'id') {
      ++index;
      key_values.push(`${table_cols[key]} = $${index}`);
      values.push(value);
    }
  }

  values.push(id);

  const key_value_placeholders = key_values.join(', ');
  const all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }
  
  const all_cols_str = all_cols.join(', ');

  let createdBy = '';
  if ('createdBy' in table_cols) {
    createdBy = `and ${table_cols['createdBy']}=$${index + 2}`;
    values.push(request.decoded.user_id);
  }

  const update_query = {
    text: `UPDATE public.property SET ${key_value_placeholders} WHERE ${pk}=$${index + 1} ${createdBy} returning ${all_cols_str}`,
    values: values
  }; 

  try {
	  const result = await pool.query(update_query);
	  return result.rows;
  } catch (err: any) {
	  throw err;
  }
}
