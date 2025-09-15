import { TournamentModel } from '../models/tournament.model.js';

// Crear un torneo
export const createTournament = async (req, res) => {
	try {
		const tournament = await TournamentModel.create(req.body);
		res.status(201).json(tournament);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// trae todos los torneos
export const getTournaments = async (req, res) => {
	try {
		const tournaments = await TournamentModel.find().populate('participants winner');
		res.json(tournaments);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// trae un torneo por ID
export const getTournamentById = async (req, res) => {
	try {
		const tournament = await TournamentModel.findById(req.params.id).populate(
			'participants winner',
		);
		if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
		res.json(tournament);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Actualiza un torneo
export const updateTournament = async (req, res) => {
	try {
		const tournament = await TournamentModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
		res.json(tournament);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Elimina un torneo
export const deleteTournament = async (req, res) => {
	try {
		const tournament = await TournamentModel.findByIdAndDelete(req.params.id);
		if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
		res.json({ message: 'Tournament deleted' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
