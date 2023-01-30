import pool from '../../dbconn';

export async function select_workflowTemplate_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT workflow_template.*, workflowIdworkflow
          from workflow_template 
          LEFT JOIN workflow workflowIdworkflow
          ON workflow_template.workflow_id = workflowIdworkflow.id
          where workflow_template.id = $1
        ) t;`,
    values: values,
  };
  try {
    const result = await pool.query(select_query);
    return result.rows[0].row_to_json;
  }
  catch (err: any) {
    throw err;
  }
}
