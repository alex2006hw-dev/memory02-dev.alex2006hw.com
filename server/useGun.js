"use strict";

var Gun = require("gun");

var gun = Gun({
  file: "data.json"
});

var gunPeers = []; // used as a list of connected clients.

module.exports.useGun = function (connection) {
  gunPeers.push(connection);
  console.log("1.useGun peers : ", gunPeers.length);
  Gun.on("out", function (msg) {
    this.to.next(msg);
    msg = JSON.stringify(msg);
    gunPeers.forEach(function (peer) {
      peer.send(msg);
    });
  });
  // on data
  connection.on("data", function (message) {
    console.log("2.useGun message : ", message);
    var msg = JSON.parse(message);
    if ("forEach" in msg) msg.forEach(function (m) {
      return gun.on("in", JSON.parse(m));
    });else gun.on("in", msg);
  });
  // on close
  connection.on("close", function (reason, desc) {
    // gunpeers gone.
    var i = gunPeers.findIndex(function (p) {
      return p === connection;
    });
    console.log("3.useGun close : ", i, reason, " : ", desc);
    if (i >= 0) gunPeers.splice(i, 1);
    connection.close();
  });
};