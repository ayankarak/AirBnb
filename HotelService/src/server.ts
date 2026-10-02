import express from "express";
import {serverConfig} from "./config/index";
import v1Router from "./routers/v1/index.router";
import v2Router from "./routers/v2/index.router";
const app = express();
app.use(express.json());

app.use('/v1', v1Router);
app.use('/v2', v2Router);


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server.`);
});