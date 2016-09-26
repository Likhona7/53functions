module.exports = function(username){
  //console.log(username);
  if (username === undefined) {

    //console.log(username);
    return "HELLO!";
  } else {
    return "Hello, " + username.toUpperCase() + "!";
  }
};
