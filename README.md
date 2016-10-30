# Multi-site-login using selenium-webdriver and nodejs 
## Getting Started
Download files to project directory


In the terminal or command line navigate to the directory

```
cd ./path/to/directory
```

Install it
```
NPM install
```
Installing takes all the files in our package.json and adds them into our node_modules folder.
## How to use
**Updating Credentials**

Credentials are added into the file credentials.js located in the assets folder. This was done to keep the passwords not visible if showing / working on the main code. We export these variables for use into the applications.


Modify this file with various username and passwords and add as many of them as you please. Just make sure to update them coming in on index.js for use.


**Adding a site to log into Sites**

Our requests are setup by using the function **siteLogOn**.



```
/* log into linkedin */
siteLogOn({
  url: "https://linkedin.com",
  email_identifier: "login-email",
  password_identifier: "login-password",
  submit_identifier: "login-submit",
  site_email: email1,
  site_password: password1,
  site_title: "Welcome! | LinkedIn"
});
```

**url** The site we are visiting

**email_identifier** The ID of the email input box (or username)

**password_identifier** The ID of the password input box

**submit_identifier** The ID of the submit button

**site_email** the email we will be using for the website

**site_password** the password we will be using for the website

**site_title** the title of the site that we will check against to know we have logged in successfully


## Upcoming Updates

* asynchronous

* ID or Class selections



## Authors
**Joseph Sanchez** [Github](https://github.com/joecodecreations)
