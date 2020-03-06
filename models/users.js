const getDb = require('../util/database').getDb;

class Users {
    constructor(firstname,lastname,email,password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    save() {
        const db = getDb();
        return db
          .collection('Users')
          .insertOne(this)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
      static fetchAll(){
          const db = getDb();
          return db
            .collection('Users')
            .find()
            .toArray()
            .then(users=>{
                return users;
            })
            .catch(err=>{
                console.log(err);
            })
      }
      static findOne(email){
        const db = getDb();
        return db
          .collection('Users')
          .findOne({
            email: email,
          }).then(user=>{
            return user;
          }).catch(err=>{
            console.log(err);
          })
    }


     static deleteDocument(email){
       const db = getDb();
       return db
       .collection('Users')
       .deleteOne({ "email" : email }).then(deleted=>{
          console.log(deleted);
       }).catch(err=>{
           console.log(err);
       });
     }
     static editDocument(email,newData){
      const db = getDb();
      return db
      .collection('Users')
      .updateOne({"email": email},{
        $set: { firstname: newData.firstname, lastname: newData.lastname,email: newData.email,password: newData.password }
      }).then(edited=>{
        console.log(edited);
      }).catch(err=>{
        console.log(err);
      })
    }
     
}

module.exports = Users;