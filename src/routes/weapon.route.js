import { Router } from 'express';
import {
	createWeapon,
	getWeapons,
	getWeaponById,
	updateWeapon,
	deleteWeapon,
} from '../controllers/weapon.controller.js';

export const weaponRoutes = Router();

weaponRoutes.post('/weapons/', createWeapon);
weaponRoutes.get('/weapons/', getWeapons);
weaponRoutes.get('/weapons/:id', getWeaponById);
weaponRoutes.put('/weapons/:id', updateWeapon);
weaponRoutes.delete('/weapons/:id', deleteWeapon);
export default weaponRoutes;
