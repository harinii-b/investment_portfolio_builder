// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     salary: { type: Number, required: true },
//     savings: { type: Number, required: true },
//     risk: { type: String, required: true },
//     expenses: { type: Number, required: true },
//     emi: { type: Number, required: true },
//   },
//   { collection: "userdata" }
// );

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // ⚠️ Plain text (Not Secure)
    salary: { type: Number, required: true },
    savings: { type: Number, required: true },
    risk: { type: String, required: true },
    expenses: { type: Number, required: true },
    emi: { type: Number, required: true },
  },
  { collection: "userdata" }
);

module.exports = mongoose.model("User", UserSchema);
