const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  maturity_date: { type: String, required: true },
  settlement_date: { type: String, required: true },
  currency: { type: String, required: true },
  volume: { type: mongoose.Schema.Types.Mixed, required: true },
  coupon: { type: mongoose.Schema.Types.Mixed, required: true },
  usd_equivalent: { type: mongoose.Schema.Types.Mixed, required: true },
}, { collection: 'investments' });

const Investment = mongoose.model('Investment', investmentSchema);
module.exports = Investment;
