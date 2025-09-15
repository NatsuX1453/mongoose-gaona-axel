import { model, Schema, Types } from 'mongoose';

export const CharacterSchema = new Schema(
	{
		character_name: {
			type: String,
			required: true,
			unique: true,
		},
		race: {
			type: String,
			required: true,
		},
		clan: {
			type: String,
			enum: [
				'Lin Kuei',
				'Shirai Ryu',
				'Dragón Rojo',
				'Dragón Negro',
				'Hermandad de la Sombra',
				'Fuerzas Especiales',
				'Sociedad del Loto Blanco',
				'Shaolin',
				'Tarkat',
				'Otro',
			],
		},
	},
	{
		versionKey: false,
	},
);

export const CharacterModel = model('Character', CharacterSchema);
