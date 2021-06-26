var PROTO_PATH = __dirname + "/config.proto";

var async = require('async');

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

var config_proto = grpc.loadPackageDefinition(packageDefinition).config;
var targetServer = "103.246.242.47:50051";
const client = new config_proto.Write(
    targetServer,
    // TODO: security root cert
    grpc.credentials.createInsecure()
);


// * fetchUeLogs -> creates and ends the stream of log generated
function fetchUeLogs(callback) {
    
    var call = client.getUeLogs( { nbLogs: 50 } );

    call.on('data', function (UeLog) {
        // console.log("Resopnse recieved", UeLog)
        callback(UeLog);
    });

    call.on('end', callback('End'));
}

// * it is supposed to be a continuously stream of logs, can only be closed by client
function streamUeLogs(callback) {
    var call = client.streamUeLogs();

    call.on('data', function (_ueLog) {
        console.log("Response recieved", _ueLog);
    });

    // ? Maybe we should reinitiate if the connection is ended, maybe with a delay
    // * Same function is called again when the stream ends
    // TODO: 
    // * in the enum logic in proto or somewhere make sure that the stream is complete
    // * if it is pending make sure the function is re-established, and the transfer is complete
    call.on('end', streamUeLogs);
    // call.on('end', callback);
}

function configManagement(callback) {
    
    let enbConfig = {
        logOptions: "all.level=debug,all.max_size=32",
        logFilename: "/tmp/enb0.log",
        commAddr: "0.0.0.0:4242",
        mmeList: [ 
            {
                mmeIpAddr: "192.168.29.8" 
            }
        ],
        gtpAddr: "192.168.0.122",
        enbId: "0x2A",
        cellList: [
            {
                cellId: "0x01",
                tac: "0x0001",
                nIdCell: 1,
                rootSequenceIndex: 204,
                dlEarfcn: 1776,
                nAntennaDl: 2,
                nAntennaUl: 2,
                nRbDl: 25,
                // rfPort: 0,
                plmnList: [
                    {
                        plmnId: "20892"
                    }
                ],
                // ulDlConfig: 1,
                // spConfig: 6,
                // scellList: [
                //     {
                //         cellId: "0x03",
                //         crossCarrierScheduling: false
                //     }
                // ]
            },
            {
                cellId: "0x02",
                tac: "0x0001",
                nIdCell: 2,
                rootSequenceIndex: 204,
                dlEarfcn: 1575,
                nAntennaDl: 2,
                nAntennaUl: 2,
                nRbDl: 25,
                // rfPort: 1,
                plmnList: [
                    {
                        plmnId: "20892"
                    }
                ],
                // ulDlConfig: 1,
                // spConfig: 6,
                scellList: [
                    {
                        cellId: "0x03",
                        crossCarrierScheduling: false
                    }
                ]
            },
            {
                cellId: "0x03",
                tac: "0x0001",
                nIdCell: 3,
                rootSequenceIndex: 204,
                dlEarfcn: 1374,
                nAntennaDl: 2,
                nAntennaUl: 2,
                nRbDl: 50,
                // rfPort: 2,
                plmnList: [
                    {
                        plmnId: "20892"
                    }
                ],
                // ulDlConfig: 1,
                // spConfig: 6,
                scellList: [
                    {
                        cellId: "0x02",
                        crossCarrierScheduling: false
                    }
                ]
            }
        ],
    }

    // TODO: Change to new config parameters
    client.writeConfig ( enbConfig , function (err, response) {
        if (err) {
            console.error("ERR:", err);
            callback();
        } else {
            console.log("Config Operations Status:", response);
            callback();
        }
    });
}

function main() {

    async.series([
        // configManagement,
        fetchUeLogs,
        // streamUeLogs,
    ]);
}

// main();
module.exports = fetchUeLogs