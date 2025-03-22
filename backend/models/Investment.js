const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true }, // e.g., "Stocks", "Bonds"
    amount: { type: Number, required: true },
    returnRate: { type: Number, required: true } // Annual return rate in %
  },
  { collection: "investments" }
);

module.exports = mongoose.model("Investment", InvestmentSchema);
