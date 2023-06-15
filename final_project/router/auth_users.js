const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

//const isValid = (username)=>{ //returns boolean
//write code to check if the username is valid
//}

const isValid = (username)=>{
  let userswithsamename = users.filter((user)=>{
    return user.username === username
  });
  if(userswithsamename.length > 0){
    return true;
  } else {
    return false;
  }
}


const generateJWT = (user_id = '') => {
  return new Promise( (resolve, reject) => {
    const payload = { user_id };

    jwt.sign( payload, process.env.SECRETPRIVATEKET, {
      expiresIn: '4h'
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('Token was not generated')
      } else {
        resolve( token );
      }
    })
  })
} 

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
  if (username && password) {}
  userAuthenticated = 
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
