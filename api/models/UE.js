const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UESchema = new Schema({
  mongo_time: { type: Date, default: Date.now },
  time: Number,
  uplink: Number,
  downlink: Number,
  ue_list: [
    {
      enb_ue_id: Number,
      mme_ue_id: Number,
      rnti: Number,
      cells: [
        {
          cell_id: Number,
          dl_bitrate: Number,
          ul_bitrate: Number,
          dl_tx: Number,
          ul_tx: Number,
          dl_retx: Number,
          ul_retx: Number,
          pucch1_snr: Number,
          pusch1_snr: Number,
          epre: Number,
          dl_mcs: Number,
          ul_mcs: Number,
          turbo_decoder_min: Number,
          turbo_decoder_avg: Number,
          turbo_decoder_max: Number,
          cqi: Number,
          ri: Number,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("UE", UESchema);
