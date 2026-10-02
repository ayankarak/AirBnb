import dbConfig from './config.js';

const config={
    development: {
        username: dbConfig.DB_user,
        password: dbConfig.DB_password,
        database: dbConfig.Db_name,
        host: dbConfig.DB_host,
        dialect: 'mysql'
    },
}

export default config; 