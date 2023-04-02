import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    maxlength: 60,
  },
  aadharNo: {
    type: String,
    required: true,
    maxlength: 200,
  },
  stocks: {
    type: [
      {
        AMZ: { type: Number, default: 0 },
        GOOGL: { type: Number, default: 0 },
        META: { type: Number, default: 0 },
      },
    ],
  },
  prevtranscations: {
    type: [{ type: String }],
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
