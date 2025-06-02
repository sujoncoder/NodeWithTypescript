import { Server } from "http";

import app from "./app";

let server: Server

const port = 5000;

const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log("Server is working...👋");
    });
};

bootstrap();