const AbstractManager = require("./AbstractManager")

class OrderManager extends AbstractManager {
  constructor() {
    super({ table: "order" })
  }

  insert(order) {
    return this.database.query(
      `insert into ${this.table} (date, user_id1) values (?,?)`,
      [order.date, order.user_id1]
    )
  }

  update(order) {
    return this.database.query(
      `UPDATE ${this.table} SET date = ?, user_id1 = ? WHERE (id = ?)`,
      [order.date, order.user_id1, order.id]
    )
  }
}

module.exports = OrderManager
