import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import detailsRoute from './routes/details.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', detailsRoute);
app.use('/', (req, res) => {
  res.send('Youtool API');
});

app.listen(PORT, () => {
  console.log(`server up in port ${PORT}`);
});
