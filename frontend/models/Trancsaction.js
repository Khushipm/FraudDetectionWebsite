import mongoose from "mongoose";

const TrancsactionSchema = new mongoose.Schema({
  t_id: {
    type: String,
    required: true,
    maxlength: 60,
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
  money: {
    type: Number,
    default: 0,
  },
  prevtranscations: {
    type: [{ type: String }],
  },
});

export default mongoose.models.Trancsaction ||
  mongoose.model("Trancsaction", TrancsactionSchema);
