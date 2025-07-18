import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbname: "Demo-project",
    })
    .then(() => {
      console.log("Database is Connected.");
    })
    .catch( (err) => {
        console.log("Database connection error", err);
    })
};

export default connectDB;