import pool from '../../dbconn';

export async function select_workflowtoworkflowTargetFilters_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT _workflowToworkflow_target_filters.*, aWorkflowToworkflowTargetFilters, bWorkflowToworkflowTargetFilters
          from _workflowToworkflow_target_filters 
          LEFT JOIN _workflowToworkflow_target_filters aWorkflowToworkflowTargetFilters
          ON _workflowToworkflow_target_filters.A = aWorkflowToworkflowTargetFilters.
          LEFT JOIN _workflowToworkflow_target_filters bWorkflowToworkflowTargetFilters
          ON _workflowToworkflow_target_filters.B = bWorkflowToworkflowTargetFilters.
          where _workflowToworkflow_target_filters. = $1
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
