import express from "express";
import * as CatalogoController from "../controllers/catalogo.controller";
import { catalogo } from "../model/catalogo";

const router = express.Router();

router.get("/catalogo", (_, res) => {
  CatalogoController.getCatalogo()
    .then((obj) => {
      res.json(obj);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.post("/catalogo", (req: express.Request, res: express.Response) => {
  CatalogoController.postCatalogo(req.body as catalogo)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

export default router;
