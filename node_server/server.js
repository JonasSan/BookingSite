var http = require("http");
var formidable = require("formidable");
var util = require("util");

var server = http.createServer(function(req, res) {
  res.setHeader("Access-Control-Allow-origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");

  if (req.method.toLowerCase() == "post") {
    processForm(req, res);
    return;
  }

  if (req.method.toLowerCase() == "get") {
    var data = {
      data: {
        rooms: ["Single", "Double", "Family", "Suite"]
      }
    };

    var responseData = JSON.stringify(data);
    res.end(responseData);
    console.log("get: ", responseData);
    return;
  }

  res.end();
});

function processForm(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields) {
    res.writeHead(200, {
      "content-type": "text/plain"
    });

    var data = JSON.stringify({
      fields: fields
    });

    res.end(data);

    console.log("posted fields:\n");
    console.log(
      util.inspect({
        fields: fields
      })
    );
  });
}

var port = 3100;
server.listen(port);
console.log("server listening on port " + port);
