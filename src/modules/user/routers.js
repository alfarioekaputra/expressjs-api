const user = require('./controllers/userController');

module.exports = (app, express) => {
    const router = express();

    // api/v1/user
    router.route('/user')
        .get(user.getAll);
    
    // api/v1/user/create
    router.route('/user/create')
        .post(user.create);
    
    // api/v1/user/:name
    router.route('/user/:name')
        .get(user.findByName);
    
    // api/v1/user/:id
    router.route('/user/:id')
        .put(user.update);
    
    return router;
};