import express from 'express';
import * as PersonaController from '../controllers/persona.controller';
import { Persona } from '../model/persona';
const router = express.Router();

router.get('/', (_, res) => {
    PersonaController.GetPersonas()
        .then((obj) => {
            res.json(obj);
        }).catch((e) => {
            res.status(500).json(e);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    PersonaController.PostPersona(req.body as Persona)
        .then((f) => {
            if (f)
                res.status(201).send();
            else
                res.status(500).send()
        }).catch((e) => {
            res.status(500).json(e);
        });
});

export default router;