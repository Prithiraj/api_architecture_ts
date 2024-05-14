import pool from '../../dbconn';

export async function select_members_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT members.*, roleIdmembers, createdBymembers, updatedBymembers
          from members 
          LEFT JOIN members roleIdmembers
          ON members.role_id = roleIdmembers.['member_id']
          LEFT JOIN members createdBymembers
          ON members.created_by = createdBymembers.['member_id']
          LEFT JOIN members updatedBymembers
          ON members.updated_by = updatedBymembers.['member_id']
          where members.['memberId'] = $1 and members.created_by = $2
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
