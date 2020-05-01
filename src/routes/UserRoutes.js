import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();
/*
* router.get(path_donde_se_ejecutara, funcion (req, res) => { ... });
* */
router.get('/', UserController.createUser);
router.post('/', UserController.createUser);
module.exports = router;
