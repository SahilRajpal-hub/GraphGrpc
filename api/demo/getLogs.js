const UE = require("../models/UE");
const NewUE = require("../models/newUe");

module.exports = async function getLogs(hour = 0.001) {
  var queryTime = new Date().getTime() - hour * 60 * 60 * 1000;
  const ueLogs = await NewUE.find({ mongo_time: { $gte: queryTime } }).limit(50);
  return ueLogs;
};
