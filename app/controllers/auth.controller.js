const AuthService = require("../services/auth.service")
const {MongoClient} = require('mongodb')
// const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'stack-1'
class AuthController {
  constructor() {
    this.auth_svc = new AuthService()
  }
  login = (req, res, next) => {
    try {
      let data = req.body
      let result = this.auth_svc.loginValidate(data)
      // todo login logic
      MongoClient.connect(dbUrl, (err, client) => {
        if (err) {
          next({
            status: 500,
            msg: err
          })
        } else {
          const db = client.db(dbName)
          db.collection('users').findOne({
            email: data.email,
            password: data.password
          }).then((user) => {
            if (user) {
              console.log(user);

              res.json({
                result: user,
                msg: "Login Successful",
                status: true
              })
            } else {
              next({
                status: 400,
                msg: "Credentails does not match"
              })
            }

          }).catch((error) => {
            next({
              status: 400,
              msg: error
            })
          })
        }
      })
    } catch (error) {
      console.log("LoginException", error)

    }


  }


  register = (req, res, next) => {
    // if multiples xa vane files ma aauxa ani teslai loop lagara store garna parxa
    // if (req.file) {
    //   data.image = req.file.path
    // }
    try {
      let data = req.body
      let validation = this.auth_svc.registerValidate(data)
      if (validation) {
        next({
          msg: validation,
          status: 400
        })
      }
      else {


        MongoClient.connect(dbUrl, (err, client) => {
          if (err) {
            console.log("Failed to connect to database", err);
            next({
              status: 500,
              msg: err
            });
          } else {
            const db = client.db(dbName);
            console.log(client); // Move this inside the else block if needed
        
            db.collection('users').insertOne(data, (err, result) => {
              if (err) {
                next({
                  status: 500,
                  msg: err
                });
              } else {
                res.json({
                  result: data,
                  status: true,
                  msg: "Your account has been created"
                });
              }
        
              // Close the connection outside of the insertOne callback
              client.close();
            });
          }
        });
      }
    } catch (error) {
      next({
        status: 400,
        msg: error
      })
      console.log(error);

    }


  }
}

module.exports = AuthController