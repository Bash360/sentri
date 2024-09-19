import 'dotenv/config';

const { PORT,
PG_HOST,
PG_PORT,
PG_USER,
PG_PASSWORD,
PG_DATABASE,
NODE_ENV,API_BASE_URL} = process.env;

export const ENV = Object.freeze({ PORT,
PG_HOST,
PG_PORT,
PG_USER,
PG_PASSWORD,
PG_DATABASE,
NODE_ENV,API_BASE_URL } );