import { model, Schema, Types } from 'mongoose';

export const TournamentSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		location: {
			type: String,
		},
		date: {
			type: Date,
		},
		description: {
			type: String,
		},
		participants: [
			{
				type: Types.ObjectId,
				ref: 'Character',
				required: true,
			},
		],
		winner: {
			type: Types.ObjectId,
			ref: 'Character',
			required: true,
		},
	},
	{
		versionKey: false,
	},
);

export const TournamentModel = model('Tournament', TournamentSchema);
