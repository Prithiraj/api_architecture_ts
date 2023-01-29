import pool from '../dbconn';


export async function select_contact(request: any) {
	console.log(request)
	const values: any[] = [];
	values.push(request.id);
	const select_query= {text: `SELECT row_to_json(t)
				FROM (
					SELECT contact.*,  account, property, contact_status_lifecycle, contact_status, current_loan, desired_loan
					from contact
					LEFT JOIN account
					ON contact.account_id = account.id
					left join property
					on contact.address_id = property.id
					left join contact_status_lifecycle
					on contact.status_lifecycle_id = contact_status_lifecycle.id
					left join contact_status
					on contact.status_id  = contact_status.id
					left join loan current_loan
					on contact.current_loan_id = current_loan.id
					left join loan desired_loan
					on contact.desired_loan_id = desired_loan.id
					where contact.id = '$1'
				) t;`,
				values: values
			}
	try {
		const result = await pool.query(select_query);
		return result.rows;
	} catch (err: any) {
		throw 'error';
	}
}