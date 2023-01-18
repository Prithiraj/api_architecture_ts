import pool from "../dbconn";

function insert_contact(contact: any) {

	// procesor
	const table_cols = {
		firstName: "first_name",
		lastName: "last_name"
	}

	const additionals= {
		createdAt: "",
		updatedAt: ""
	}

	Object.assign(contact, additionals)
	console.log(contact)
}

insert_contact({
	firstName: "first",
	lastName: "last",
});
