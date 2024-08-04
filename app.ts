import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", indexRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// Добавим остальные эндпоинты позже

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;