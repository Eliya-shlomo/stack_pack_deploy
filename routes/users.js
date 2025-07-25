import { Router } from 'express'

const UserRouter = Router();

UserRouter.get('/', (req, res) => res.send('Fetch all users'));
UserRouter.get('/:id', (req, res) => res.send('Fetch all users'));
UserRouter.get('', (req, res) => res.send('Fetch all users'));
UserRouter.get('', (req, res) => res.send('Fetch all users'));
UserRouter.get('', (req, res) => res.send('Fetch all users'));