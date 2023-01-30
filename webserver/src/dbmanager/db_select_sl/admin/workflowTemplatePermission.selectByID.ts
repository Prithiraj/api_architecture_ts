import pool from '../../dbconn';

export async function select_workflowTemplatePermission_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT workflow_template_permission.*, workflowTemplateIdworkflowTemplate
          from workflow_template_permission 
          LEFT JOIN workflow_template workflowTemplateIdworkflowTemplate
          ON workflow_template_permission.workflow_template_id = workflowTemplateIdworkflowTemplate.id
          where workflow_template_permission.id = $1
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
