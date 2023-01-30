import pool from '../../dbconn';

export async function select_workflowtoworkflowTargetFilters_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT _workflowToworkflow_target_filters.*, Aworkflow, bworkflowTargetFilters
          from _workflowToworkflow_target_filters 
          LEFT JOIN workflow Aworkflow
          ON _workflowToworkflow_target_filters.A = Aworkflow.id
          LEFT JOIN workflow_target_filters bworkflowTargetFilters
          ON _workflowToworkflow_target_filters.B = bworkflowTargetFilters.id
          where _workflowToworkflow_target_filters.id = $1
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
