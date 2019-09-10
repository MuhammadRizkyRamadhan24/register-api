const mongoose = require('mongoose');
const AppServer = require('./server');
const env = require('./config/global_config');

const appServer = new AppServer();

// connect to mongodb
mongoose.connect(env.db, {
    useNewUrlParser: true
  })
    .then(() => console.log(`MongoDB connected...`))
    .catch(err => console.log(err));
  
  // connect to server
  appServer.server.listen(env.port, () => {
    console.log(`Server started at port ${env.port}`);
  });





// create an server
// const app = restify.createServer({
//     name: `${project.name}-server`,
//     version: project.version
//   });
  
//   app.use(restify.plugins.bodyParser());
//   app.use(restify.plugins.queryParser());

// connect to mongodb
// mongoose.connect('mongodb://localhost:27017/register-api', {
//   useNewUrlParser: true
// })
//   .then(() => console.log(`MongoDB connected...`))
//   .catch(err => console.log(err));

// // root
// app.get('/', (req, res) => {
//     res.send(`{ success:true, data:Index, message:${project.name}, code:200 }`)
// });

// //endpoint
// app.post('/register',(req,res) => {
//     var snapshot = req.body;
//     let payload = {
//         id: uuidv4(),
//         fullname: snapshot.fullname,
//         username: snapshot.username,
//         email: snapshot.email,
//         password: md5(snapshot.password),
//     };
    
//     User.create(payload, (err, value) => {
//         if (err) {
//           return res.status(500).send({'error':'An error has occurred'});
//         }
    
//         res.send({
//           'code': 201,
//           'success': 'true',
//           'message': 'Publisher has been inserted',
//           'data': value
//         });
//       });
// });

// app.post('/email', function (req, res) {
//     var snapshot = req.body;
//     let payload = {
//         email: req.body.email
//     }

//     var transporter = nodemailer.createTransport({
//         service: 'zoho',
//         auth: {
//             user: 'username123710@zoho.com',
//             pass: 'zidan3103117328',
//         }
//     });
//     var mailOptions = { 
//         from: 'username123710@zoho.com',
//         to: req.body.email,
//         subject: 'Reset Password',
//         html: ' <a href=" http://localhost:9000/</a>'
//       };
//       transporter.sendMail (mailOptions, (err, info) => {
//         if (err) throw err;
//         console.log('Email sent: ' + info.response);
//       });
//       res.send("Check your email");
//   });

// app.get('/register', (req, res) => {
//     User.find({ username : req.params.username})
//       .then((value) => {
//         res.send({
//           'code': 200,
//           'success': 'true',
//           'message': 'Request has been proceseed',
//           'data': value
//         });
//       });
//   });



// //listen port
// app.listen(port, () => {
//   console.log(`Server started at port ${port}`);
// });
