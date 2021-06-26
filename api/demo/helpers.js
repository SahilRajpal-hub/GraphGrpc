const UE = require("../models/UE");
const cell = require("../models/UE");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returning an object with 2 UE items and 3 cells in each
exports.createUE = () => {
  const UE = {
    time: getRandomNumber(0, 10),
    uplink: getRandomNumber(0, 10),
    downlink: getRandomNumber(0, 10),
    ue_list: [
      {
        enb_ue_id: getRandomNumber(0, 2),
        mme_ue_id: getRandomNumber(0, 2),
        rnti: getRandomNumber(0, 2),
        cells: [
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
        ],
      },
      {
        enb_ue_id: getRandomNumber(0, 2),
        mme_ue_id: getRandomNumber(0, 2),
        rnti: getRandomNumber(0, 2),
        cells: [
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
          {
            cell_id: getRandomNumber(0, 2),
            dl_bitrate: getRandomNumber(0, 10),
            ul_bitrate: getRandomNumber(0, 10),
            dl_tx: getRandomNumber(0, 10),
            ul_tx: getRandomNumber(0, 10),
            dl_retx: getRandomNumber(0, 10),
            ul_retx: getRandomNumber(0, 10),
            pucch1_snr: getRandomNumber(0, 10),
            pusch1_snr: getRandomNumber(0, 10),
            epre: getRandomNumber(0, 10),
            dl_mcs: getRandomNumber(0, 10),
            ul_mcs: getRandomNumber(0, 10),
            turbo_decoder_min: getRandomNumber(0, 10),
            turbo_decoder_avg: getRandomNumber(0, 10),
            turbo_decoder_max: getRandomNumber(0, 10),
            cqi: getRandomNumber(0, 10),
            ri: getRandomNumber(0, 10),
          },
        ],
      },
    ],
  };
  return UE;
};

// To create a single cell
exports.createCell = () => {
  const cell = {
    n_id_cell: getRandomNumber(0, 2),
    n_rb_dl: getRandomNumber(0, 10),
    n_rb_ul: getRandomNumber(0, 10),
    dl_earfcn: getRandomNumber(0, 50),
    ul_earfcn: getRandomNumber(0, 50),
    gain: getRandomNumber(0, 10),
    ul_disabled: false,
    mode: "FDD",
    dl_cyclic_prefix: "normal",
    ul_cyclic_prefix: "normal",
    prach_config_index: getRandomNumber(0, 10),
    prach_freq_offset: getRandomNumber(0, 10),
    delta_pucch_shift: getRandomNumber(0, 10),
    n_rb_cqi: getRandomNumber(0, 2),
    n_cs_an: getRandomNumber(0, 2),
    pucch_allocation: [
      {
        type: "2/2a/2b",
        rbs: getRandomNumber(0, 10),
        n: getRandomNumber(0, 10),
      },
    ],
    pucch_ack_nack_start: getRandomNumber(0, 50),
    pucch_reserved_rbs: [
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
      getRandomNumber(0, 10),
    ],
    sr_resource_count: getRandomNumber(0, 50),
    cqi_resource_count: getRandomNumber(0, 50),
    srs_resources: {
      offsets: getRandomNumber(0, 10),
      freqs: getRandomNumber(0, 10),
      total: getRandomNumber(0, 50),
    },
    gbr: {
      dl_limit: getRandomNumber(0, 100),
      ul_limit: getRandomNumber(0, 100),
    },
    cell_id: getRandomNumber(0, 2),
  };
  return cell;
};

exports.getUE = async () => {
  const ue = await UE.findOne().sort({ _id: -1 }).limit(1);
  return ue;
};
