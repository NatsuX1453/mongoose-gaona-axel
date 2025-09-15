import { CharacterModel } from '../models/character.model.js';

// Para crear un nuevo personaje
export const createCharacter = async (req, res) => {
	const { character_name, race, clan } = req.body;
	try {
		const newCharacter = await CharacterModel.create({
			character_name: character_name,
			race: race,
			clan: clan,
		});
		res.status(201).json({
			msg: 'Personaje creado correctamente',
			newCharacter,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json('Error interno del servidor', error);
	}
};

// Para poder traer todos los personajes
export const getAllCharacters = async (req, res) => {
	try {
		const listAll = await CharacterModel.find().populate('race').populate('clan');
		res.status(200).json({
			msg: 'Listando todos los personajes',
			listAll,
		});
	} catch (error) {
		return res.status(500).json('Error interno del servidor', error);
	}
};

// para poder traer un personaje por ID
export const getCharacterById = async (req, res) => {
	const { id } = req.params;
	try {
		const findID = await CharacterModel.findById(id).populate('race').populate('clan');
		res.status(200).json({
			msg: 'Personaje encontrado',
			findID,
		});
	} catch (error) {
		return res.status(500).json('Error interno del servidor', error);
	}
};

// Para poder actualizar un personaje
export const updateCharacter = async (req, res) => {
	const { character_name, race, mutations, psyker, affiliation, jobs } = req.body;
	const { id } = req.params;
	try {
		const updatedCharacter = await CharacterModel.findByIdAndUpdate(
			id,
			{
				character_name,
				race,
				clan,
			},
			{ new: true },
		);
		res.status(200).json({
			msg: 'Personaje actualizado',
			updatedCharacter,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json('Error interno del servidor', error);
	}
};

// para poder eliminar un personaje
export const deleteCharacter = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedCharacter = await CharacterModel.findByIdAndDelete(id);
		res.status(200).json({
			msg: 'Personaje eliminado correctamente',
			deletedCharacter,
		});
	} catch (error) {
		return res.status(500).json('Error interno del servidor', error);
	}
};

//para agregar un clan a un personaje o tambien para actualizar el clan de un personaje
export const addClanToCharacter = async (req, res) => {
	try {
		const { characterID, clanID } = req.params;
		const updatedCharWClan = await CharacterModel.findByIdAndUpdate(
			characterID,
			{
				$push: { clans: clanID },
			},
			{
				new: true,
			},
		).populate('clans');
		res.status(200).json({
			msg: 'Agregado un clan al personaje',
			updatedCharWClan,
		});
	} catch (error) {
		return res.status(500).json('Error interno del servidor', error);
	}
};
