/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager")

class Order_detailManager extends AbstractManager {
  constructor() {
    super({ table: "order_detail" })
  }

  insert(order_detail) {
    return this.database.query(
      `insert into ${this.table} (quanty, product_id1, order_id1) values (?,?,?)`,
      [order_detail.quanty, order_detail.product_id1, order_detail.order_id1]
    )
  }

  update(order_detail) {
    return this.database.query(
      `UPDATE ${this.table} SET quanty = ?, product_id1 = ?, order_id1 = ? WHERE (id = ?)`,
      [
        order_detail.quanty,
        order_detail.product_id1,
        order_detail.order_id1,
        order_detail.id,
      ]
    )
  }
}

module.exports = Order_detailManager
