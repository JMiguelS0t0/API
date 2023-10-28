import express from 'express';
import cors from 'cors';
import personaRouter from './routes/persona.router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/persona', personaRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
});