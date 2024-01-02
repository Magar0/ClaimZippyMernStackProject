const mongoose = require('mongoose');


const tariffPlanSchema = new mongoose.Schema({
  czCatlogMasterId: {
    type: String,
    required: true,
  },
  hcpCatlogId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  deluxeSingleRoomAC: {
    rackRate: {
      type: Number,
      required: true,
    },
    offerRate: Number,
  },
  sharingRoomAC: {
    rackRate: {
      type: Number,
      required: true,
    },
    offerRate: Number
  },
})

const tariffPlan = mongoose.model.TariffPlan || mongoose.model('TariffPlan', tariffPlanSchema);
module.exports = tariffPlan;
