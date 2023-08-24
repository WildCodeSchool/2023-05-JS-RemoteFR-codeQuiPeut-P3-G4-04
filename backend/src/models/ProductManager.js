const AbstractManager = require("./AbstractManager")

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" })
  }

  insert(product) {
    return this.database.query(
      `insert into ${this.table} (name, image, price, description, user_id1, category_id1) values (?,?,?,?,?,?)`,
      [
        product.name,
        product.image,
        product.price,
        product.description,
        product.user_id1,
        product.category_id1,
      ]
    )
  }

  update(product) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, image = ?, price = ?, description = ?, user_id1 = ?, category_id1 = ? WHERE (id = ?)`,
      [
        product.name,
        product.image,
        product.price,
        product.description,
        product.user_id1,
        product.category_id1,
        product.id,
      ]
    )
  }
}

module.exports = ProductManager
