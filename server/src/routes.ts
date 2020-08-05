import express from 'express';

import ClassesController from './controllers/ClassesController';


const routes = express.Router();
const classesControlers = new ClassesController()

routes.post('/classes', classesControlers.create);
routes.get('/classes', classesControlers.index);

export default routes;