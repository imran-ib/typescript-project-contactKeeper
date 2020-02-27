import mongoose from "mongoose";

const db = process.env.DB_CONNECTION;

const ContectDb = async () => {
  try {
    if (db) {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
    }
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.error(error.message);
  }
};

export { ContectDb };
