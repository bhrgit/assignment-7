import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbUrl = process.env.BETTER_AUTH_DB_URL;

if (!dbUrl) {
  // লোকাল ডেভেলপমেন্ট বা বিল্ডের সময় ক্র্যাশ এড়াতে সতর্কবার্তা
  console.warn("Warning: BETTER_AUTH_DB_URL is not defined.");
}

// যদি বিল্ড টাইমে ইউআরএল না থাকে, তবে একটি ডামি স্ট্রিং পাস হবে যেন বিল্ড পাস হয়ে যায়
const client = new MongoClient(dbUrl || "mongodb://127.0.0.1:27017/fallback_db");
const db = client.db("assign-7-bzr-dor");


export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true,
    },
  database: mongodbAdapter(db, {
    client,
  }),
});