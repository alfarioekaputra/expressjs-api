const User = require('../models/user');

exports.create = function(req, res){
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err, user){
        if(err){
            res.send(err);
        }

        res.json(user);
    });
};

exports.getAll = function(req, res){
    User.find(function(err, user){
        if(err){
            console.log(err);
        }
        res.json(user);
    });
};

exports.findByName = function(req,res){
    User.findOne({ 'name': req.params.name }, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
};

exports.update = function(req, res){
    User.findById(req.params.id, function(err, user) {
        if (err) throw err;
        
        user.name = req.body.name

        user.save(function(err){
            if (err) throw err;
            
            res.json(user);
        })
        
    });
}