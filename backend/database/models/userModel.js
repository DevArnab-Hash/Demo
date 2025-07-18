import mongoose, { Collection } from "mongoose";

const userModel = new schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    Timestamp: true,
    Collection: 'users'
  });

const User = mongoose.model('User', userModel);

export default userModel;
