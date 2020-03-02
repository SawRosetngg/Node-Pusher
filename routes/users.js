var express = require("express");
var router = express.Router();
var Pusher = require("pusher");
var pusher = new Pusher({
  appId: "927537",
  key: "9479b4111611d59d561e",
  secret: "cccb2f90cd9ac2b68696",
  useTLS: false,
  cluster: "ap2"
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  pusher.trigger("new-post-channel", "new-post-event", {
    message: "hello world"
  });

  res.send("respond with a resource");
});

module.exports = router;
