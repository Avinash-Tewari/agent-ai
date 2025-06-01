import { drizzle } from "drizzle-orm/neon-http";
import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.DATABASE_URL!); // Ensure this comes after dotenv
export const db = drizzle(sql);
// // export const db = drizzle(process.env.DATABASE_URL!);






