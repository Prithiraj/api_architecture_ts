import pool from '../../dbconn';

export async function select_members_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
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
          where members.['memberId'] = $1
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
