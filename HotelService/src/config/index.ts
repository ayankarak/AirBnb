// this file contains all the basic configuration logic for the app server

import dotenv from "dotenv";
type ServerConfig = {
    PORT: number
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

type DBConfig = {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};

export const dbConfig: DBConfig = {
    username: process.env.DB_user || 'root',
    password: process.env.DB_password || 'root',
    database: process.env.Db_name || 'test_db',
    host: process.env.DB_host || 'localhost',
    dialect: 'mysql'
};