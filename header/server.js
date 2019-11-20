const express = require("express");
const app = express();
var port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/dist"));

const ProjectDB = require("./db.js");

app.get("/header/:id", (req, res) => {
  var id = req.params.id;
  console.log("inside API : TAZ");
  console.log(id);

  ProjectDB.Project.find({ projectId: id }, function(err, data) {
    if (err) {
      console.log("Error");
    }
    console.log(data);
    res.json(data);
  });
});

// app.get("/header/:id", (req, res) => {
//   // var id = req.params.id;
//   console.log("inside API");
//   // console.log(id);

//   // ProjectDB.Project.find({ projectId: id }, function(err, data) {
//   //   if (err) {
//   //     console.log("Error");
//   //   }
//   //   console.log(data);
//   //   res.json(data);
//   // });
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
