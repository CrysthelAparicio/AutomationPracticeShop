const { When } = require('cucumber');
let loginPage = require('../pages/login.page.js')
let signupPage = require('../pages/signgup.page.js')
let searchPage = require('../pages/search.page.js')
const cartPage = require('../pages/cart.page.js')
var Utils = require('../utils/utils.js')
var GlobalFunc = require('../utils/GlobalFunc')


/*
When(/^the page loads$/, function () {
  browser.pause(2000);
  loginPage.SearchAssertion()
})
When(/^the user type Hello iconic$/, function () {
  loginPage.SearchText('Hello iconic')
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(2000)
})
 */
When(/^user logs into the application with his credentials$/, function () {
  loginPage.FormToLogin.waitForDisplayed()
  loginPage.LoginAssertions()
  loginPage.logincredentials(Utils.Credentials.validEmail, Utils.Credentials.password)
  loginPage.SubmitLoginBtnClick()
})

When(/^view the sign out option$/, function () {
  loginPage.SignOutBtn.waitForDisplayed()
})

When(/^the user click on the Sign In button$/, function () {
  loginPage.SignInBtnClick()
})


//AUTH
When(/^user provide valid email$/, function () {
  signupPage.EmailAddressCredentials(GlobalFunc.RandomEmail())
})

When(/^user click on the Create an account button$/, function () {
  signupPage.CreateAccountBtnClick()
})

When(/^user select Mrs radio button$/, function () {
  signupPage.MrsRadioBtn.waitForDisplayed()
  signupPage.MrsRadioBtnClick()
})

When(/^user enter Personal Information fields$/, function () {
  signupPage.logincredentials(Utils.PersonalInformation.FirstName, Utils.PersonalInformation.LastName, Utils.Credentials.password)
})

When(/^user select a date of birth$/, function () {
  signupPage.DateofBirthAssertion()
})

When(/^user enter Address fields$/, function () {
  signupPage.YourAddressAssertion(Utils.PersonalInformation.Company,Utils.PersonalInformation.Address,Utils.PersonalInformation.City, Utils.PersonalInformation.ZIP, Utils.PersonalInformation.MobilePhone, Utils.PersonalInformation.Alias)
})

When(/^user select Address Fields information$/, function () {
  signupPage.AddressSelectAssertion()
})

When(/^user click on the Register button$/, function () {
  signupPage.RegisterBtnClick()
})

//SEARCH
When(/^the user type "Dresses" in search bar$/, function () {
  searchPage.SearchContent(Utils.SearchContent)
})

When(/^the user clicks on search button$/, function () {
  searchPage.SearchBtnClick()
  searchPage.WaitForVisibleSearchedContent()
  searchPage.SearchResultLabelFunction(Utils.SearchContent)
})

When(/^the user types in the search bar the word "Printed Dresses"$/, function () {
  searchPage.SearchOnlyDresses(Utils.EspecificSearch)
})

When(/^user can browse the results of his search"$/, function () {
  searchPage.WaitForVisibleSearchedContent()
})

//ADD TO CART
When(/^the user clicks on add to cart$/, function () {
  cartPage.AddToCartClick()
  browser.pause(1000)
})

When(/^the user can check the total$/, function () {
  cartPage.ItemInformation()
})

// BUY THE DRESS
When(/^the user sees the price and all the information of his purchase$/, function () {
  if(loginPage.FormToLogin.isDisplayed()){
    loginPage.LoginAssertions()
    loginPage.logincredentials(Utils.Credentials.validEmail, Utils.Credentials.password)
    loginPage.SubmitLoginBtnClick()
  }else{
    cartPage.SummaryOrderCheckout()
    cartPage.ProceedCheckoutBtnClick()
  }
})

When(/^the user will be able to check the address$/, function () {
  signupPage.AssertionPage()
  cartPage.AddressAssertion() 
  cartPage.ProceedCheckoutBtn2Click()
  browser.pause(1000)
})

When(/^the user must accept the terms of shipping$/, function () {
  signupPage.AssertionPage()
  cartPage.ShippingAssertion()
  cartPage.AcceptTermsClick()
  cartPage.ProceedCheckoutBtn3Click()
  browser.pause(1000)
})

When(/^the user must choose the method of payment$/, function () {
  cartPage.PaymentAssertion()
  cartPage.PaymentByBankClick()
  browser.pause(1000)
})

When(/^user will be able to see the status of the completed order$/, function () {
  cartPage.OrderConfirmation()
  browser.pause(1000)
  loginPage.SignOutClick()
  loginPage.HomeLogo.waitForDisplayed()
  signupPage.AssertionPage()
})








