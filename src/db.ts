import { Pool } from "pg";
import DB_URL from "./env";

const connectionString = DB_URL;
//const connectionString = process.env.DB_URL;
const db = new Pool({ connectionString });

export default db;
