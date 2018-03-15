module.exports=function(app) {
    var sectodo = require('../controller/movies');
   app.route('/signup')
       .post(sectodo.newuser);
   app.route('/signin')
       .post(sectodo.login);

}