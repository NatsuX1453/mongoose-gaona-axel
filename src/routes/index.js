import { Router } from 'express';

import tournamentRoutes from './tournament.route.js';
import characterRoutes from './character.route.js';
import weaponRoutes from './weapon.route.js';

export const routes = Router();

routes.use(tournamentRoutes);
routes.use(characterRoutes);
routes.use(weaponRoutes);

export default routes;
