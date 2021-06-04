let signupPage = require('../pages/signgup.page.js')

const SELECTORS = {
    //CART
    EMPTY_CART: 'span[class="ajax_cart_no_product"]',
    PRODUCT_CART: 'span[class="ajax_cart_quantity unvisible"]',
    PRODUCT_ADD: 'span[class="ajax_cart_product_txt "]',
    PROCEED_CHECKOUT_BTN: 'a[class="button btn btn-default standard-checkout button-medium"]',
    PROCEED_CHECKOUT_BTN_2: 'button[class="button btn btn-default button-medium"]',
    PROCEED_CHECKOUT_BTN_3: 'button[class="button btn btn-default standard-checkout button-medium"]',
    SHOPING_CART_PAGE: 'span[class="navigation_page"]',
    ORDER_STEP: 'ul[id="order_step"]',
    TOTAL_CONTAINER_CART: 'td[class="total_price_container text-right"]',
    CARRIER_BOX_CART: 'div[class="delivery_options_address"]',
    TERMS_CHECKBOX: 'div[id="uniform-cgv"]',
    PAYMENT_BY_BANK:'a[class="bankwire"]',
    PAYMENT_BOX: 'div[class="box cheque-box"]',
    PAYMENT_BY_CHEQUE: 'a[class="cheque"]',
    BANK_WIRE_PAYMENT: 'p[class="cheque-indent"]',
    ORDER_CONFIRMATION: 'h1[class="page-heading"]',
    BUTTON_ORDER_CART: 'a[id="button_order_cart"]',
    PRINTED_CHIFFON: 'a[class="product-name"]',
    BOX_DRESS: 'a[class="fancybox"]',
    CLOSE_BTN: 'a[class="fancybox-item fancybox-close"]',
    IMAGE_DRESS: 'img[class="fancybox-image"]',
    ADD_TO_CART: 'button[class="exclusive"]',
    LAYER_CART_PRODUCT: 'span[id="layer_cart_product_title"]',
    TOTAL_PRICE: 'span[class="ajax_block_cart_total"]',
    X_BTN: 'span[class="cross"]',
    SHOPPING_CART_VIEW: 'span[class="ajax_cart_quantity unvisible"]',
    ADDRESS_SHOPPING: 'div[class="order_delivery clearfix row"]',
    ADDRESS_NAME: 'li[class="address_firstname address_lastname"]',
    ADDRESS_COMPANY: 'li[class="address_company"]',
    ADDRESS_COMMENT: 'div[id="ordermsg"]',
    ACCEPT_TERMS: 'div[id="uniform-cgv"]',
    DELIVERY_LOGO: 'td[class="delivery_option_logo"]',
    DELIVERY_TOTAL: 'div[class="delivery_option_price"]',
    PAYMENT_CART_DESCRIPTION: 'td[class="cart_description"]',
    PAYMENT_ORDER_CONFIRMATION: 'div[class="box"]',
    PAYMENT_AMOUNT: 'span[class="price"]',
    SOCIAL_NETWORK: 'section[id="social_block"]',
}

class CartPage {
    get EmptyCart() {
        return $(SELECTORS.EMPTY_CART)
    }
    get SocialNetwork() {
        return $(SELECTORS.SOCIAL_NETWORK)
    }
    get ProductCart() {
        return $(SELECTORS.PRODUCT_CART)
    }
    get ProductAdd() {
        return $(SELECTORS.PRODUCT_ADD)
    }
    get ProceedCheckoutBtn() {
        return $(SELECTORS.PROCEED_CHECKOUT_BTN)
    }
    get ProceedCheckoutBtn2() {
        return $(SELECTORS.PROCEED_CHECKOUT_BTN_2)
    }
    get ProceedCheckoutBtn3() {
        return $(SELECTORS.PROCEED_CHECKOUT_BTN_3)
    }
    get ShopingCartPage() {
        return $(SELECTORS.SHOPING_CART_PAGE)
    }
    get PaymentBox() {
        return $(SELECTORS.PAYMENT_BOX)
    }
    get OrderStep() {
        return $(SELECTORS.ORDER_STEP)
    }
    get TotalContainerCart() {
        return $(SELECTORS.TOTAL_CONTAINER_CART)
    }
    get CarrierBoxCart() {
        return $(SELECTORS.CARRIER_BOX_CART)
    }
    get TermsCheckbox() {
        return $(SELECTORS.TERMS_CHECKBOX)
    }
    get PaymentByBank() {
        return $(SELECTORS.PAYMENT_BY_BANK)
    }
    get PaymentByCheque() {
        return $(SELECTORS.PAYMENT_BY_CHEQUE)
    }
    get BankWirePayment() {
        return $(SELECTORS.BANK_WIRE_PAYMENT)
    }
    get ButtonOrderCart() {
        return $(SELECTORS.BUTTON_ORDER_CART)
    }
    get OrderConfirmation() {
        return $(SELECTORS.ORDER_CONFIRMATION)
    }
    get PrintedChiffon() {
        return $(SELECTORS.PRINTED_CHIFFON)
    }
    get BoxDress() {
        return $(SELECTORS.BOX_DRESS)
    }
    get CloseBtn() {
        return $(SELECTORS.CLOSE_BTN)
    }
    get ImageDress() {
        return $(SELECTORS.IMAGE_DRESS)
    }
    get AddToCart() {
        return $(SELECTORS.ADD_TO_CART)
    }
    get LayerCartProduct() {
        return $(SELECTORS.LAYER_CART_PRODUCT)
    }
    get TotalPrice() {
        return $(SELECTORS.TOTAL_PRICE)
    }
    get XBtn() {
        return $(SELECTORS.X_BTN)
    }
    get ShoppingCartView() {
        return $(SELECTORS.SHOPPING_CART_VIEW)
    }
    get AddressShopping() {
        return $(SELECTORS.ADDRESS_SHOPPING)
    }
    get AddresName() {
        return $(SELECTORS.ADDRESS_NAME)
    }
    get AddresCompany() {
        return $(SELECTORS.ADDRESS_COMPANY)
    }
    get PaymentOrderConfirmation() {
        return $(SELECTORS.PAYMENT_ORDER_CONFIRMATION)
    }
    get AddresComment() {
        return $(SELECTORS.ADDRESS_COMMENT)
    }
    get AcceptTerms() {
        return $(SELECTORS.ACCEPT_TERMS)
    }
    get DeliveryLogo() {
        return $(SELECTORS.DELIVERY_LOGO)
    }
    get DeliveryTotal() {
        return $(SELECTORS.DELIVERY_TOTAL)
    }
    get PaymentCartDescription() {
        return $(SELECTORS.PAYMENT_CART_DESCRIPTION)
    }
    get PaymentAmount() {
        return $(SELECTORS.PAYMENT_AMOUNT)
    }

    PaymentByBankClick() {
        this.PaymentByBank.scrollIntoView();
        this.PaymentByBank.waitForDisplayed()
        this.PaymentByBank.click()
    }

    ProceedCheckoutBtn2Click() {
        this.ProceedCheckoutBtn2.scrollIntoView();
        this.ProceedCheckoutBtn2.waitForDisplayed()
        this.ProceedCheckoutBtn2.click()
    }

    ProceedCheckoutBtn3Click() {
        this.ProceedCheckoutBtn3.waitForDisplayed()
        this.ProceedCheckoutBtn3.click()
    }
    
    AddToCartClick() {
        this.AddToCart.click()
    }
    XBtnClick() {
        this.XBtn.click()
    }
    ShoppingCartViewClick() {
        this.ShoppingCartView.click()
    }
    AcceptTermsClick() {
        this.AcceptTerms.scrollIntoView();
        this.AcceptTerms.waitForDisplayed()
        this.AcceptTerms.click()
    }

    ProceedCheckoutBtnClick() {
        this.ProceedCheckoutBtn.waitForDisplayed()
        this.ProceedCheckoutBtn.click()
        browser.pause(1000)
    }
    
    AddDress() {
        if(this.PrintedChiffon.getText() === 'Printed Chiffon Dress'){
            this.PrintedChiffon.click()
            this.BoxDress.waitForClickable()
            this.BoxDress.click()
            this.ImageDress.waitForDisplayed()
            this.CloseBtn.click() 
        }  
    }

    Handles() {
        let handles = browser.getWindowHandles()
        this.PrintedChiffon.scrollIntoView();
    }

    ItemInformation () {
        this.ProductAdd.waitForDisplayed()
        expect(this.ProductAdd.getText()).to.match(/\d+ item in your cart/)
        expect(this.LayerCartProduct.isDisplayed()).to.be.true
        expect(this.TotalPrice.isDisplayed()).to.be.true
    }

    ShoppingCartItemAdded() {
        this.ShoppingCartViewClick()
        signupPage.AssertionPage()
    }

    SummaryOrderCheckout() {
        this.OrderStep.waitForEnabled()
        expect(this.TotalContainerCart.getText()).to.equal('TOTAL')
        this.TotalContainerCart.scrollIntoView();
        this.AddressShopping.waitForDisplayed()
    }

    AddressAssertion() {
        this.AddresName.waitForDisplayed()
        this.AddresCompany.waitForDisplayed()
        this.AddresComment.scrollIntoView();
        this.AddresComment.waitForDisplayed()

    }

    ShippingAssertion() {
        this.DeliveryLogo.waitForExist()
        expect(this.DeliveryTotal.isDisplayed()).to.be.true
    }

    PaymentAssertion() {
        expect(this.TotalContainerCart.getText()).to.equal('TOTAL')
        expect(this.PaymentCartDescription.isDisplayed()).to.be.true
    }

    OrderSummary() {
        expect(this.OrderConfirmation.getText().toUpperCase()).to.be.equal(('Order Summary').toUpperCase());
        expect(this.PaymentBox.isDisplayed()).to.be.true
    }

    OrderConfirmationAssertion() {
        expect(this.OrderConfirmation.getText()).to.equal('ORDER CONFIRMATION')
        this.PaymentOrderConfirmation.waitForDisplayed()
        expect(this.PaymentAmount.getText()).to.contain('$')
    }
}

module.exports = new CartPage()