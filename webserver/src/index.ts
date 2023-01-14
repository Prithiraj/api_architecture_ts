// console.log('Hello world!')
// https://khalilstemmler.com/blogs/typescript/node-starter-project/

// import * as dotenv from "dotenv";

// dotenv.config()

// console.log(process.env.PGUSER)


// import express, {Router} from "express";
// // import router from "routes";


// const app = express();
// app.use(express.json());
// app.use(Router);
// app.listen(8080, () => console.log('server running on port 8080'));

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => {
  console.log('Server started');
});

