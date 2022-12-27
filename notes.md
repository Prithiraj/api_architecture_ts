// get all the required properties
// Conditions for not to be added in the required
// if pk then don't add in the required.
// if column names are createdBy, createTime, createRequest, updatedBy, updateTime, updateRequest, isDeleted
// New columns won't be added to the api
// PLAN IS:
// create a mapper auto - create a custom mapper and
// db -> mapper; direct update possible with the generator function
// initial step db -> custom mapper; possible
// custom mapper will be super set of base mapper
// custome mapper would contain the reference to the AJV validations


// comparer and updater between schemas
1. Set operations on Schemas
2. Add new table and new columns
3. Maintain customized schema version information

If a table is present on the newly created json, add the schema to the customized version.
If a colname is present on the newly created json, add the schema to the customized version.
If a table is present in the customized JSON, and not in the newly created JSON. Mark the table as obsolete.
If a colname is present in the customized JSON, and not in the newly created JSON. Mark the column as obsolete. 


prepare new Marshmallow Schemas for the customized version of the JSON.