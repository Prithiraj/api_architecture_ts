import dataKey from "../../utils/utils";
import pool from "../dbconn";

export async function insert_page(input: any) {

  // procesor

  const table_cols: any = {
    accountId: 'account_id',
    id: 'id',
    name: 'name',
    body: 'body',
    templateId: 'template_id',
    path: 'path',
    createTime: 'create_time',
    headerMeta: 'header_meta',
    themeId: 'theme_id',
    createdBy: 'created_by',
    updateRequest: 'update_request',
    updateTime: 'update_time',
    updatedBy: 'updated_by',
    createRequest: 'create_request',
    category: 'category',
    ownerId: 'owner_id',
    type: 'type',
    status: 'status',
    latestTemplateId: 'latest_template_id',
    latestVersionId: 'latest_version_id',
  }

  const timestamp = new Date();

  const additionals: any= {
    id: `page_${dataKey(6)}`,
    createTime: timestamp.toISOString(),
    updateTime: timestamp.toISOString(),
    accountId: "account_1607435487272_5nl561qt",
    createdBy: "request.decoded.user_id",
    createRequest: `request_${dataKey(6)}`,
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


  let all_cols: any[] = [];
  for (let [key, value] of Object.entries(table_cols)) {
    all_cols.push(value);
  }

  const cols_str = cols.join(", ");
  const values_str = values.join(", ")
  const all_cols_str = all_cols.join(", ")

  const insert_query = "INSERT INTO page (" + cols_str +") values (" + values_str + ") returning " + all_cols_str + "";
  const result = await pool.query(insert_query);

  return result['rows']
}

