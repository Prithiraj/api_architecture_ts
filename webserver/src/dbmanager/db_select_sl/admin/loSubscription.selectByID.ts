import pool from '../../dbconn';

export async function select_loSubscription_by_id_admin(id: string|number) {
  const values: any[] = [];

  values.push(id);
  const select_query = {
    text: `SELECT row_to_json(t)
        FROM (
          SELECT lo_subscription.*, priceSubscriptionItemIdloSubscription, transferPriceSubscriptionItemIdloSubscription
          from lo_subscription 
          LEFT JOIN lo_subscription priceSubscriptionItemIdloSubscription
          ON lo_subscription.price_subscription_item_id = priceSubscriptionItemIdloSubscription.id
          LEFT JOIN lo_subscription transferPriceSubscriptionItemIdloSubscription
          ON lo_subscription.transfer_price_subscription_item_id = transferPriceSubscriptionItemIdloSubscription.id
          where lo_subscription.id = $1
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
