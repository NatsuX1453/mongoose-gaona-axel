import { model, Schema, Types } from 'mongoose';

export const WeaponSchema = new Schema(
	{
		weapon_name: {
			type: String,
		},
		type: {
			type: String,
			enum: ['melee', 'ranged'],
			required: true,
		},
		owner: {
			type: Types.ObjectId,
			ref: 'Character',
		},
		description: {
			type: String,
		},
		special_ability: {
			type: String,
		},
	},

	{
		versionKey: false,
	},
);

export const WeaponModel = model('Weapon', WeaponSchema);
