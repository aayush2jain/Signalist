import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import mongoose from "mongoose";

async function main() {
    try {
        console.log(process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI!);

        console.log("Connected!");
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

main();