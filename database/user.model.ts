import { model, models, Schema } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  bio?: string;
  image: string;
  location?: string;
  portfiolio?: string;
  reputation?: number;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    bio: {
      type: String,
    },

    image: {
      type: String,
      required: false,
    },
    location: {
      type: String,
    },

    portfiolio: {
      type: String,
    },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("user", userSchema);
export default User;
