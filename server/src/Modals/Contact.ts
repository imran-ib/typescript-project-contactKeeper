import mongoose from "mongoose";

export type ContactModel = mongoose.Document & {
  user: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
};

const ContactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: "Personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// const User = mongoose.model('User', UserSchema);
const Contact = mongoose.model<ContactModel>("contact", ContactSchema);
export { Contact };
