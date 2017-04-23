import { Router, Response, Request } from 'express';

const publicRouter: Router = Router();

var Sequelize = require('Sequelize');

 var sequelize = new Sequelize('mysql://u519997597_admin:arshavin021@mysql.hostinger.in:3306/u519997597_ks');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

publicRouter.get('/simple', (request: Request, response: Response) => {
  response.json({
    title: 'Greetings.',
    text: 'Hello Angular 2'
  });
});



publicRouter.get('/create_t1', (request: Request, response: Response) => {
    var User = sequelize.import(__dirname + "/models/tas_users")
  
  User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    USERNAME: 'John',
    PASSWORD: 'Hancock'
  });
});

});





export { publicRouter }
