import pool from '../../dbconn';

export async function select_loSubscription_by_id(request: any) {
  const values: any[] = [];

  const id = request.path.split('/').splice(-1)[0];
  const created_by = request.decoded.user_id;
  values.push(id);
  values.push(created_by);

  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_subscription.*, priceSubscriptionItemIdloSubscription, transferPriceSubscriptionItemIdloSubscription
          from lo_subscription 
          LEFT JOIN lo_subscription priceSubscriptionItemIdloSubscription
          ON lo_subscription.price_subscription_item_id = priceSubscriptionItemIdloSubscription.['id']
          LEFT JOIN lo_subscription transferPriceSubscriptionItemIdloSubscription
          ON lo_subscription.transfer_price_subscription_item_id = transferPriceSubscriptionItemIdloSubscription.['id']
          where lo_subscription.['id'] = $1 and lo_subscription.created_by = $2
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
