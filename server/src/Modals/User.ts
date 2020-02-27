import mongoose from "mongoose";

export type UserModel = mongoose.Document & {
  name: string;
  email: string;
  password: string;
  date: string;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// const User = mongoose.model('User', UserSchema);
const User = mongoose.model<UserModel>("User", UserSchema);
export { User };
