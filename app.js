import express from 'express';
import 'dotenv/config';
import { connectDB } from './src/config/database.js';
import { routes } from './src/routes/index.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/api', routes);

app.listen(PORT, async () => {
	try {
		await connectDB();
		console.log(`Servidor escuchando en el puerto ${PORT}`);
	} catch (error) {
		console.log('Error al conectar con MongoDB', error);
	}
});
