const AbstractManager = require("./AbstractManager")

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" })
  }

  insert(category) {
    return this.database.query(
      `insert into ${this.table} (name) values (?)`,
      category.name
    )
  }

  update(category) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE (id = ?)`,
      [category.name, category.id]
    )
  }
}

module.exports = CategoryManager
