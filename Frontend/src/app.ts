import express, { Express } from "express";

const app = express();

app.set('port', process.env.PORT || 4200); // si existe un puerto, toma ese sino toma el 4200
export default app;