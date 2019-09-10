const restify = require('restify');
const project = require('./package.json');
const userController = require('./controllers/user.controller');
const emailController = require('./controllers/email.controller');

function AppServer(){
    // create server
  this.server = restify.createServer({
    name: `${project.name}-server`,
    version: project.version
  });
  
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.queryParser());

  // root
  this.server.get('/', (req, res) => {
    res.send({ success:true, data:'index', message:'This service is running properly', code:200 });
  });

  // author route
  this.server.get('/user', userController.getHandler);
  this.server.post('/register', userController.postHandler);
  this.server.post('/email', emailController.postHandler);
}

module.exports = AppServer;