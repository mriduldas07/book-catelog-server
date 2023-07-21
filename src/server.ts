import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;
const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://mriduldas0325:D85hgEO7BsCibymK@cluster0.bydkin8.mongodb.net/bookHut?retryWrites=true&w=majority"
    );
    server = app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
