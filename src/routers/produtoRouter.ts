import express from "express";
import produtoController from "../controllers/produtoController.js";

const router = express.Router();

router.get("/", produtoController.getAllProdutos);
router.post("/", produtoController.postProduto);
router.get("/:id", produtoController.getProduto);

export default router;

