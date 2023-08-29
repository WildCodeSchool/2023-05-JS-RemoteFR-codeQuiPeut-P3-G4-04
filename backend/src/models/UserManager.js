const AbstractManager = require("./AbstractManager")

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" })
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (last_name, first_name, address, password) values (?,?,?,?)`,
      [user.lastname, user.firstname, user.address, user.password]
    )
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET last name = ?, first name = ?, address = ?, password = ? WHERE (id = ?)`,
      [user.lastname, user.firstname, user.address, user.password, user.id]
    )
  }
}

module.exports = UserManager
