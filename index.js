var credentials = require('./assets/credentials.js'); //load in passwords & usernames

//helpers for drivers
require('chromedriver');
require('geckodriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

/* Additional error reporting  */
var logErrors = false;

/* Simulate Network Error
   you can use this around the script to test a delay
   see below */
var simulateNetworkError = false;

/* Grab Credentials */
var username1,
    username2,
    email1,
    email2,
    email3,
    password1,
    password2,
    password3;

/*Usernames and Passwords are in another file in case you are showing code to others */
credentials.get(function(callback){
  username1 =  callback['username1'];
  username2 =  callback['username2'];
  email1 = callback['email1'];
  email2 = callback['email2'];
  email3 = callback['email3'];
  password1 = callback['password1'];
  password2 = callback['password2'];
  password3 = callback['password3'];

})

/* log into linkedin */
siteLogOn({
  url: "https://linkedin.com",
  email_identifier: "login-email", //html ID on form for email field
  password_identifier: "login-password", //html ID on form for password field
  submit_identifier: "login-submit", //html ID for submit button
  site_email: email1, //which email we will be using on this site
  site_password: password1, //which password we will be using on this site
  site_title: "Welcome! | LinkedIn" //once we are logged in we are going to validate by checking the page title
});

/* log into linkedin */
siteLogOn({
  url: "https://facebook.com",
  email_identifier: "email",
  password_identifier: "pass",
  submit_identifier: "loginbutton",
  site_email: email2,
  site_password: password2,
  site_title: "Facebook"
});

function siteLogOn(data){
  console.log("Starting Login Process for "+data['url']);

  var driver = new webdriver.Builder().forBrowser('firefox').build();
  driver.get(data['url']);

  /* example of simulating network pause for 4000ms uncomment code below */
  // if (simulateNetworkError){letsWait(4000);}

  /* Enter Email Address */
  driver.findElement(By.id(data['email_identifier'])).then(function(webElement) {
    //login exists send pw
    driver.findElement(By.id(data['email_identifier'])).sendKeys(data['site_email']);
    console.log(data['url']+": email field found!");

  }, function(err) {
        if(logErrors){ console.log(err); }
        console.log(data['url']+":login-email error!");
  });


  /* Enter password */
  driver.findElement(By.id(data['password_identifier'])).then(function(webElement) {
    //login exists send pw
    driver.findElement(By.id(data['password_identifier'])).sendKeys(data['site_password']);
    console.log(data['url']+":Password Field Found!");

  }, function(err) {

    if(logErrors){ console.log(err); }
    console.log(data['url']+":login-password error!");

  });

  /* Login Submit */
  driver.findElement(By.id(data['submit_identifier'])).then(function(webElement) {
    //login exists submit click
    driver.findElement(By.id(data['submit_identifier'])).click();
    console.log(data['url']+":submit Button Found!");
  }, function(err) {
    if(logErrors){ console.log(err); }
    console.log(data['url']+":Login Submit Button Error");
  });

  /* Validate login By Checking Page title */
  driver.getTitle().then(function(title) {
    //we have the title
    if(title == data['site_title']){
      console.log("You're logged into "+data['url']+"!"+"\n\n\n");
      return title;
    } else {
       console.log("Whoops! Wrong Page or bad title!");
    }

  }, function(err) {

    if(logErrors){ console.log(err); }
    console.log(data['url']+":This title doesn't match");

  });

  driver.quit();
}

/* Functions */
function letsWait(ms){
  /* wait until page title matches but it never would so just a wait for set duration  */
  driver.wait(until.titleIs('12312313123123'), ms).then(function(err) {
      //will never be true
  }, function(err) {

    //timer has completed
    return;
  });

}
