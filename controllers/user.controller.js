const uuidv4 = require('uuid/v4');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const md5 = require('md5');
// import model
const model = require('../models/publisher.model');
const User = mongoose.model('user');

const userController = {
    postHandler : (req,res) =>{
    var snapshot = req.body;
    let payload = {
        id: uuidv4(),
        fullname: snapshot.fullname,
        username: snapshot.username,
        email: snapshot.email,
        password: md5(snapshot.password),
    };
    
    User.create(payload, (err, value) => {
        if (err) {
        res.send({
          'code': 404,
          'success': 'false',
          'message': 'Eror!!!',
          });
        }
        res.send({
          'code': 201,
          'success': 'true',
          'message': 'Publisher has been inserted',
          'data': value
        });
      });
    },

    getHandler : (req, res) => {
      let payload = { '$or' : [{username: req.query.username}] };
      console.log(payload);
      User.find(payload,(err,  value) => {
        if (err) {
          res.send({
            'code': 404,
            'success': 'false',
            'message': 'Eror!!!',
            });
        }
  
        res.send({
          'code': 200,
          'success': 'true',
          'message': 'Request has been proceseed',
          'data': value
        });
      });
    },
}

module.exports = userController;