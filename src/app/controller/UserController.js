const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');

// Geração do token
function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 259200, //expira em três dias esse token
    });
}

class UserController{
    async create(req,res){
        const {email} =  req.body;
        try{
            if(await User.findOne({ email })){
                return res.status(400).send({error: 'User already exists'})
            }
            const users =  await User.create(req.body);

            users.password = undefined;

            return res.status(201)
            .send({
                users,
                token: generateToken({id:users.id}),
            });
        }catch(err){
            return res.status(400).send({error: 'Registration failed'});
        }
        
    }

    async auth(req, res){
        const {email, password} =  req.body;

        const user = await User.findOne({email}).select('+password');

        if(!user){
            res.status(400).send({error: 'User not found'});
        }

        if(!await bcrypt.compare(password, user.password)){
            res.status(400).send({error: 'Invalid Password'});
        }
        
        user.password = undefined;
   
        res.send({
            user, 
            token: generateToken({id: user.id}),
        });
    }

    async index(req,res){
        const users = await User.find();
        return res.json(users);  
    }
}

module.exports = new UserController();
