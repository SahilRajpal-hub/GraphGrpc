const UE = require("../models/UE");

module.exports = async function getLogs(hour = 1) {
  var queryTime = new Date().getTime() - hour * 60 * 60 * 1000;
  const ueLogs = await UE.find({ mongo_time: { $gte: queryTime } }).limit(50);
  return ueLogs;
};
