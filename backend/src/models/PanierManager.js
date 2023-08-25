const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} (quanty, product_id1, user_id1) values (?,?,?)`,
      [panier.quanty, panier.product_id1, panier.user_id1]
    )
  }

  update(panier) {
    return this.database.query(
      `UPDATE ${this.table} SET quanty = ?, product_id1 = ?, user_id1 = ? WHERE (id = ?)`,
      [panier.quanty, panier.product_id1, panier.user_id1, panier.id]
    )
  }
}

module.exports = PanierManager
