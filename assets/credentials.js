module.exports = {
  get: function (callback) {

    var data = {
      'username1': "Enter a website username here",   //maybe a site uses a username instead 
      'username2': "Enter another website username here",
      'email1': "email@website.com", //Email used for linkedin for example
      'email2': "email2@website.com",//Email used for Facebook for example
      'email3': "email3@website.com",
      'password1':"mysecretPassword", //password used for linkedin for example
      'password2': "mysecretPassword2",//password used for Facebook for example
      'password3': "mysecretPassword3"
    }
      callback(data);
    }


};
