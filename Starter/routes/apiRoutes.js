var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/UserFeelings", function(req, res) {
    db.UserFeeling.findAll({}).then(function(RaUser) {
      res.json(RaUser);
    });
  });
    // Get all examples today
    app.get("/api/today", function(req, res) {
      db.UserFeeling.findAll({
        where:{
          createdAt: {
            [db.Op.lt]: new Date(),
            [db.Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
          }
        }
      }).then(function(dbExamples) {
        res.json(dbExamples);
      });
    });

  // Create a new example
  // app.post("/api/UserFeelings", function(req, res) {
  //   db.RaUser.create({
  //     feeling: req.body.feeling,
  //     userID: req.body.userID,
  //   })
  //   .then(function(RaUser) {
  //     res.json(RaUser);
  //   });
  // });

  // Create a new example
 app.post("/api/UserFeelings", function(req, res) {
  db.UserFeeling.create(req.body).then(function(RaUser) {
    res.json(RaUser);
  });
});

  // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(RaUser) {
//       res.json(RaUser);
//     });
//   });
 };
