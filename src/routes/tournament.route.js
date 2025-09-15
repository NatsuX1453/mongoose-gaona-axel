import { Router } from 'express';
import {
	createTournament,
	deleteTournament,
	getTournaments,
	getTournamentById,
	updateTournament,
} from '../controllers/tournament.controller.js';

export const tournamentRoutes = Router();

tournamentRoutes.post('/tournaments', createTournament);
tournamentRoutes.get('/tournaments', getTournaments);
tournamentRoutes.get('/tournaments/:id', getTournamentById);
tournamentRoutes.put('/tournaments/:id', updateTournament);
tournamentRoutes.delete('/tournaments/:id', deleteTournament);

export default tournamentRoutes;
