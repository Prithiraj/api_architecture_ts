import pool from '../../dbconn';

export async function select_workflowTemplatePermission_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT workflow_template_permission.*, accountIdworkflowTemplatePermission, userIdworkflowTemplatePermission, workflowTemplateIdworkflowTemplatePermission
          from workflow_template_permission 
          LEFT JOIN workflow_template_permission accountIdworkflowTemplatePermission
          ON workflow_template_permission.account_id = accountIdworkflowTemplatePermission.id
          LEFT JOIN workflow_template_permission userIdworkflowTemplatePermission
          ON workflow_template_permission.user_id = userIdworkflowTemplatePermission.id
          LEFT JOIN workflow_template_permission workflowTemplateIdworkflowTemplatePermission
          ON workflow_template_permission.workflow_template_id = workflowTemplateIdworkflowTemplatePermission.id
          where workflow_template_permission.id = $1 and workflow_template_permission.created_by = $2
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
