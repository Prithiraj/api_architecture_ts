import pool from '../../dbconn';

export async function select_workflowTemplate_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT workflow_template.*, workflowIdworkflowTemplate
          from workflow_template 
          LEFT JOIN workflow_template workflowIdworkflowTemplate
          ON workflow_template.workflow_id = workflowIdworkflowTemplate.['id']
          where workflow_template.['id'] = $1 and workflow_template.created_by = $2
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
