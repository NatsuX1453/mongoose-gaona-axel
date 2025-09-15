import { model, Schema } from 'mongoose';

const ParticipantSchema = new Schema(
	{
		character_name: String,
		race: String,
		clan: String,
	},
	{ _id: false },
);

export const TournamentSchema = new Schema(
	{
		name: { type: String, required: true },
		location: String,
		date: Date,
		description: String,
		participants: [ParticipantSchema],
		winner: ParticipantSchema,
	},
	{ versionKey: false },
);

export const TournamentModel = model('Tournament', TournamentSchema);
