import express from "express";
import * as ServicioController from "../controllers/servicio.controller";
import { servicios } from "../model/servicios";

const router = express.Router();

router.get("/", (_, res) => {
  ServicioController.getServicios()
    .then((obj) => {
      res.json(obj);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

router.post("/", (req: express.Request, res: express.Response) => {
  ServicioController.PostServicio(req.body as servicios)
    .then((f) => {
      if (f) res.status(201).send();
      else res.status(500).send();
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

export default router;
