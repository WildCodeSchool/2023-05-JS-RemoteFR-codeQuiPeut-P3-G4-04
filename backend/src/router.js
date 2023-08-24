/* eslint-disable camelcase */
const express = require("express")

const router = express.Router()

const itemControllers = require("./controllers/itemControllers")

const productControllers = require("./controllers/productControllers")
const orderControllers = require("./controllers/orderControllers")
const panierControllers = require("./controllers/panierControllers")
const order_detailControllers = require("./controllers/order_detailControllers")
const commentControllers = require("./controllers/commentControllers")
const categoryControllers = require("./controllers/categoryControllers")
const userControllers = require("./controllers/userControllers")

// 1 -Mes Routes pour ma table Product
router.get("/product", productControllers.browse)
router.get("/product/:id", productControllers.read)
router.post("/product", productControllers.add)
router.put("/product/:id", productControllers.edit)
router.delete("/product/:id", productControllers.destroy)

// 2 -Mes Routes pour ma table Order
router.get("/order", orderControllers.browse)
router.get("/order/:id", orderControllers.read)
router.post("/order", orderControllers.add)
router.put("/order/:id", orderControllers.edit)
router.delete("/order/:id", orderControllers.destroy)

// 3 -Mes Routes pour ma table Order_Detail
router.get("/order_detail", order_detailControllers.browse)
router.get("/order_detail/:id", order_detailControllers.read)
router.post("/order_detail", order_detailControllers.add)
router.put("/order_detail/:id", order_detailControllers.edit)
router.delete("/order_detail/:id", order_detailControllers.destroy)

// 4 -Mes Routes pour ma table Comment
router.get("/comment", commentControllers.browse)
router.get("/comment/:id", commentControllers.read)
router.post("/comment", commentControllers.add)
router.put("/comment/:id", commentControllers.edit)
router.delete("/comment/:id", commentControllers.destroy)

// 5 -Mes Routes pour ma table Panier
router.get("/panier", panierControllers.browse)
router.get("/panier/:id", panierControllers.read)
router.post("/panier", panierControllers.add)
router.put("/panier/:id", panierControllers.edit)
router.delete("/panier/:id", panierControllers.destroy)

// 6 -Mes Routes pour ma table Category
router.get("/category", categoryControllers.browse)
router.get("/category/:id", categoryControllers.read)
router.post("/category", categoryControllers.add)
router.put("/category/:id", categoryControllers.edit)
router.delete("/category/:id", categoryControllers.destroy)

// 7 -Mes Routes pour ma table User
router.get("/user", userControllers.browse)
router.get("/user/:id", userControllers.read)
router.post("/user", userControllers.add)
router.put("/user/:id", userControllers.edit)
router.delete("/user/:id", userControllers.destroy)

router.get("/items", itemControllers.browse)
router.get("/items/:id", itemControllers.read)
router.put("/items/:id", itemControllers.edit)
router.post("/items", itemControllers.add)
router.delete("/items/:id", itemControllers.destroy)

module.exports = router
