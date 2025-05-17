// src/app.ts

import express from "express";
import path from "path";
import routes from "./routes.ts";

const app = express();
const port = 3000;

// config do EJS

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})