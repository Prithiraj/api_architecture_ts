import dataKey from "../../utils/utils";
import pool from "../dbconn";

function insert_contact(input: any) {

	// procesor
	const table_cols: any = {
		id: "id",
		accountId: "account_id",
		firstName: "first_name",
		lastName: "last_name",
		creationSource: "creation_source",
		isConverted: "is_converted",
		type: "type",
		createTime: "create_time",
		updateTime: "update_time",
		createdBy: "created_by",
		createRequest: "create_request",
	}

	const timestamp = new Date();

	const additionals: any= {
		id: `contact_${dataKey(6)}`,
		createTime: timestamp.toISOString(),
		updateTime: timestamp.toISOString(),
		accountId: 'account_info',
		createdBy: 'account_info_a',
		createRequest: 'create_request'
	}

	Object.assign(input, additionals)
	
	let cols: any[] = []
	let values: any[] = []
	for (let [key, value] of Object.entries(input)) {
		if (key in table_cols) {
			cols.push(table_cols[key]);
			if (typeof(value) === "string"){
				value = "'"+value+"'";
			}
			values.push(value)
		}
	}

	const cols_str = cols.join(", ");
	const values_str = values.join(", ")
	
	const insert_query = "INSERT INTO contact (" + cols_str +") values (" + values_str + ") returning id";
	console.log(insert_query);
	pool.query(insert_query, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		pool.end();
	  });
}

insert_contact({
	firstName: "first",
	lastName: "last",
	creationSource: "hello",
	isConverted: false,
	type: "contact"
});
