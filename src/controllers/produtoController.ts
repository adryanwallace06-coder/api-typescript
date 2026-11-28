import { Request, Response, NextFunction } from "express";
import produtoRepository from "../repositories/produtoRepository.js";
import Produto from "../models/produto.js";

async function getProduto(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id as string);
  const produto = await produtoRepository.getProduto(id);
  if (produto) res.json(produto);
  else res.sendStatus(404);
}

async function getAllProdutos(req: Request, res: Response, next: NextFunction) {
    const produto = await produtoRepository.getAllProdutos();
    res.json(produto)
}

async function postProduto(req: Request, res: Response, next: NextFunction) {
    const produto = req.body as Produto;
    const resultado = await produtoRepository.addProduto(produto);
    res.status(201).json(resultado);
}

export default { getProduto, getAllProdutos, postProduto };