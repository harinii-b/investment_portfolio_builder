const mongoose = require('mongoose');

const bondSchema = new mongoose.Schema({
  type: { type: String, required: true },
  maturity_date: { type: Number, required: true },
  settlement_date: { type: Number, required: true },
  currency: { type: String, required: true },
  volume: { type: mongoose.Schema.Types.Mixed, required: true },
  coupon: { type: mongoose.Schema.Types.Mixed, required: true },
  usd_equivalent: { type: mongoose.Schema.Types.Mixed, required: true },
}, { collection: 'bonds' });

const Bond = mongoose.model('Bond', bondSchema);

module.exports = Bond;
