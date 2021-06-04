const { Then } = require('cucumber');
let loginPage = require('../pages/login.page.js');
const searchPage = require('../pages/search.page.js');
const cartPage = require('../pages/cart.page.js')
var Utils = require('../utils/utils.js')

/*
Then(/^the user should see the hello iconic page searched and positioned as a first$/, function () {
  console.log("Congratulations, you are ready to Automate :D")
  browser.pause(3000)
})
*/
Then(/^the user should be able to view his account page$/, function () {
  loginPage.MessageLoginAssertion()
})
 
Then(/^the user account will be created$/, function () {
  loginPage.MessageLoginAssertion()
})

Then(/^the user must see the result found shown for "Dresses"$/, function () {
  searchPage.ColumnAssertion()
})

Then(/^user is presented with a search result of dresses only$/, function () {
  searchPage.SearchBtnClick()
  searchPage.WaitForVisibleSearchedContent()
  searchPage.SearchResultLabelFunction(Utils.EspecificSearch)
})

Then(/^Product is added to cart$/, function () {
  cartPage.XBtnClick()
  cartPage.ShoppingCartItemAdded()
  browser.pause(1000)
})

Then(/^user can check all the information to confirm his order$/, function () {
  cartPage.OrderSummary()
  cartPage.SocialNetwork.scrollIntoView();
  cartPage.ProceedCheckoutBtn2Click()
  browser.pause(1000)
})
