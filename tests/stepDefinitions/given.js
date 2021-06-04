const { Given } = require('cucumber');
let loginPage = require('../pages/login.page.js');
const signgupPage = require('../pages/signgup.page.js');
const cartPage = require('../pages/cart.page.js')
var Utils = require('../utils/utils.js')

Given(/^as an existing customer navigates to application home page$/, function () {
  loginPage.HomeLogo.waitForDisplayed()
  loginPage.SignInBtnClick()
})
 
Given(/^a user on "Account" page$/, function () {
  if(!signgupPage.NavigationPage.isDisplayed()){
    loginPage.SignInBtnClick()
    loginPage.FormToLogin.waitForDisplayed()
    loginPage.LoginAssertions()
    loginPage.logincredentials(Utils.Credentials.validEmail, Utils.Credentials.password)
    loginPage.SubmitLoginBtnClick()
  }else{
    signgupPage.AssertionPage()
  }
  
})

Given(/^a user is on the "Search" page$/, function () {
  if(!signgupPage.NavigationPage.isDisplayed()){
    loginPage.SignInBtnClick()
    loginPage.FormToLogin.waitForDisplayed()
    loginPage.LoginAssertions()
    loginPage.logincredentials(Utils.Credentials.validEmail, Utils.Credentials.password)
    loginPage.SubmitLoginBtnClick()
  }else{
    signgupPage.AssertionPage()
  }
})

Given(/^a user who select any dress$/, function () {
  if(!signgupPage.NavigationPage.isDisplayed()){
    loginPage.SignInBtnClick()
    loginPage.FormToLogin.waitForDisplayed()
    loginPage.LoginAssertions()
    loginPage.logincredentials(Utils.Credentials.validEmail, Utils.Credentials.password)
    loginPage.SubmitLoginBtnClick()
  }else{
    cartPage.Handles()
    cartPage.AddDress()
  }
})

Given(/^a user on the shopping cart summary page$/, function () {
  signgupPage.AssertionPage()
})