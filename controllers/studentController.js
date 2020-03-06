const Users = require('../models/users');
exports.getIndex = (req,res,next)=>{
    Users.fetchAll().then(users=>{
        res.render("addUsers",{
            users,
        });
    }).catch(err=>{
        console.log(err);
    })
   
}

exports.addUsers = (req,res,next)=>{
   const firstname = req.body.firstname;
    const lastname = req.body.lastname;
   const email = req.body.email;
   const password = req.body.password;
    const user = new Users (firstname,lastname,email,password);
    user.save(firstname,lastname,email,password).then(result=>{
        res.redirect("/");
    }).catch(err=>{
        console.log(err);
    });
}

exports.delUsers = (req,res,next)=>{
    const email = req.params.email;
    Users.deleteDocument(email).then(deleted=>{
        res.redirect("/"); 
    }).catch(err=>{
        console.log(err);
    });
}

exports.editUsers = (req,res,next)=>{
    const email = req.params.email;
    Users.findOne(email).then(user=>{
        res.render("editPage",{
            user,
        })
    })
}


exports.updateUsers = (req,res,next)=>{
    const email = req.params.email;
    const newData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }
    Users.editDocument(email,newData).then(edited=>{
        res.redirect("/"); 
    }).catch(err=>{
        console.log(err);
    });
}