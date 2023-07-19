import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/booksHut");
    server = app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
