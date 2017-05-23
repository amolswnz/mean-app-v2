module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {nodeDynamicMsg: 'Hello from NodeJS dynamic message ' + new Date()});
    });

    var user = require('../modules/user/user.controller');
    app.route('/api/user')
        .get(user.readAllUsers)
        .post(user.createUser);
    app.route('/api/user/:id')
        .get(user.readUser)
        .put(user.updateUser)
        .delete(user.deleteUser);
};
