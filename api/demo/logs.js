const { createUE, createCell } = require("./helpers");
const cron = require("node-cron");
const UE = require("../models/UE");
const newUE = require("../models/newUe");
const fetchUeLogs = require('../grpc/client');


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


module.exports = function startLogging(socket) {
  // '*/n * * * * *'  ------>   for every nth second
  // '* */n * * * *'  ------>   for every nth minute
  // '* * */n * * *'  ------>   for every nth hour
  // . . .
  // . . .
  // . .
  // .

  // console.log(data, value);
  cron.schedule("*/3 * * * * *", async () => {
    try {
      fetchUeLogs(async (UeLogs)=>{
        if(UeLogs.toString()!=="End"){
          
            const ue = new newUE(UeLogs)
            await ue.save()

            const response1 = {
              timestamp: new Date().getTime(),
              value: ue.time+getRandomNumber(0,10),
              zscore: 0
            }
            const response2 = {
              timestamp: new Date().getTime(),
              value: ue.ueData.ulRate+10*getRandomNumber(0,10),
              zscore: 0
            }
            const response3 = {
              timestamp: new Date().getTime(),
              value: ue.ueData.dlRate+1000000*getRandomNumber(0,10),
              zscore: 0
            }
            console.log(ue.ueData.dlRate)
            console.log(ue.ueData.ulRate)
            console.log(ue.time)
            socket[0].emit("readingtime", JSON.stringify(response1));
            socket[1].emit("readinguplink", JSON.stringify(response2));
            socket[2].emit("readingdownlink", JSON.stringify(response3));
            
        }
        
      })
     
      // const ue = new UE(createUE());
      // await ue.save();
      
     
    } catch (err) {
      socket.emit("errorSavingUeLog", err);
      console.log(err);
    }
  });
};
