const AbstractManager = require("./AbstractManager")

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" })
  }

  insert(comment) {
    return this.database.query(
      `insert into ${this.table} (text, date, user_id1, product_id1) values (?,?,?,?)`,
      [comment.text, comment.date, comment.user_id1, comment.product_id1]
    )
  }

  update(comment) {
    return this.database.query(
      `UPDATE ${this.table} SET text = ?, date = ?, user_id1 = ?, quanty_id1 = ? WHERE (id = ?)`,
      [
        comment.text,
        comment.date,
        comment.user_id1,
        comment.product_id1,
        comment.id,
      ]
    )
  }
}

module.exports = CommentManager
