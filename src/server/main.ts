import express, { Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todos from './controllers/todos';
import mongoose from 'mongoose';

dotenv.config();

const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devtodos.hn5zh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongoDbUrl).catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 3100;

const router = Router();
router.use('/todos', todos);
app.use('/', router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
