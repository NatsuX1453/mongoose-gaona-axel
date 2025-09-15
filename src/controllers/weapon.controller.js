import { WeaponModel } from '../models/weapon.model.js';

// Crear un arma
export const createWeapon = async (req, res) => {
	try {
		const weapon = await WeaponModel.create(req.body);
		res.status(201).json(weapon);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// trae todas las armas
export const getWeapons = async (req, res) => {
	try {
		const weapons = await WeaponModel.find().populate('owner');
		res.json(weapons);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Obtener un arma por ID
export const getWeaponById = async (req, res) => {
	try {
		const weapon = await WeaponModel.findById(req.params.id).populate('owner');
		if (!weapon) return res.status(404).json({ error: 'Weapon not found' });
		res.json(weapon);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Actualizar un arma
export const updateWeapon = async (req, res) => {
	try {
		const weapon = await WeaponModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!weapon) return res.status(404).json({ error: 'Weapon not found' });
		res.json(weapon);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Eliminar un arma
export const deleteWeapon = async (req, res) => {
	try {
		const weapon = await WeaponModel.findByIdAndDelete(req.params.id);
		if (!weapon) return res.status(404).json({ error: 'Weapon not found' });
		res.json({ message: 'Weapon deleted' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
