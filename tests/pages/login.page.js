const SELECTORS = {

    /*LOGIN_BUTTON: '#loginButton',
    EMAIL_INPUT: '#email-input',
    PASSWORD_INPUT: '#password-input',
    SEARCH_INPUT:'input.gLFyf.gsfi',
    */
    //LOGIN
    HOME_LOGO: 'img[class="logo img-responsive"]',
    EMAIL_ADDRES_LOGIN_INPUT: 'input[id="email"]',
    PASSWORD_INPUT: 'input[id="passwd"]',
    SUBMIT_LOGIN_BTN: 'button[id="SubmitLogin"]',
    SIGNIN_BTN: 'div[class="header_user_info"]',
    FORM_TO_LOGIN: 'form[id="login_form"]',
    LOGIN_SUCESSFULL: 'p[class="info-account"]',
    MYACCOUNT_VIEW: 'span[class="navigation_page"]',
    ADDRESS_LIST: 'div[class="row addresses-lists"]',
    SIGNOUT_BTN: 'a[class="logout"]',
    ACCOUNT_NAME: 'a[class="account"]',
    SIGN_OUT: 'a[class="logout"]'
}

class LoginPage {
    get HomeLogo() {
        return $(SELECTORS.HOME_LOGO)
    }
    get EmailAddresAuthInput() {
        return $(SELECTORS.EMAIL_ADDRES_LOGIN_INPUT)
    }
    get PasswordInput() {
        return $(SELECTORS.PASSWORD_INPUT)
    }
    get SubmitLoginBtn() {
        return $(SELECTORS.SUBMIT_LOGIN_BTN)
    }
    get SignInBtn() {
        return $(SELECTORS.SIGNIN_BTN)
    }
    get FormToLogin() {
        return $(SELECTORS.FORM_TO_LOGIN)
    }
    get LoginSucessfull() {
        return $(SELECTORS.LOGIN_SUCESSFULL)
    }
    get MyAccountView() {
        return $(SELECTORS.MYACCOUNT_VIEW)
    }
    get AddressList() {
        return $(SELECTORS.ADDRESS_LIST)
    }
    get SignOutBtn() {
        return $(SELECTORS.SIGNOUT_BTN)
    }
    get AccountName() {
        return $(SELECTORS.ACCOUNT_NAME)
    }
    get SignOut() {
        return $(SELECTORS.SIGN_OUT)
    }
    SignInBtnClick() {
        this.SignInBtn.click()
    }
    SubmitLoginBtnClick() {
        this.SubmitLoginBtn.click()
    }
    SignOutClick() {
        this.SignOut.click()
    }


    // Methods/Functions
    
    SearchAssertion(){
        expect(this.SearchInput.isDisplayed()).to.be.true
    }

    SearchText(textToSearch){
        this.SearchInput.setValue(textToSearch)
        browser.keys('Enter'); 
    }
    LoginAssertions() {
        this.SignInBtn.waitForDisplayed()
        expect(this.EmailAddresAuthInput.isExisting()).to.be.true
        expect(this.PasswordInput.isExisting()).to.be.true
    }

    logincredentials(Email, Password) {
        this.EmailAddresAuthInput.setValue(Email)
        this.PasswordInput.setValue(Password)
    }

    MessageLoginAssertion(){
        this.MyAccountView.waitForClickable()
        this.AddressList.waitForClickable()
        this.LoginSucessfull.waitForClickable()
        this.AccountName.waitForClickable()
        browser.pause(2000)
        browser.waitUntil(
            () => this.LoginSucessfull.getText().includes('Welcome to your account. Here you can manage all of your personal information and orders.'),
            {
                timeout: 20000,
                timeoutMsg: 'Error: User could not log in'
            }
        );
    }
    
}

module.exports = new LoginPage()