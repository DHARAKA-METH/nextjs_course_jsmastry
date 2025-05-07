import mongoose, { Schema, Types } from "mongoose";


export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string; 
  provider: string;
  providerAccountId: string;

}


const AccountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    name: {
        type: String,
      },
    provider: {
      type: String,
      required: true,
    },
    providerAccountId: {
      type: String,
      required: true,
      unique: true,// To avoid duplicates from the same provider
    },
    
    image: {
      type: String,
    },
    password: {
      type: String, // Only used for credentials provider
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Export the model
export default mongoose.models.Account ||
  mongoose.model<IAccount>("Account", AccountSchema);
