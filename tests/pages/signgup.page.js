let loginPage = require('../pages/login.page.js')
const SELECTORS = {
    //AUTH
    CREATE_ACCOUNT_BOX: 'form[id="create-account_form"]',
    EMAIL_ADDRES_AUTH_INPUT: 'input[id="email_create"]',
    CREATE_ACCOUNT_BTN: 'button[id="SubmitCreate"]',
    AUTH_PAGE_OBJECT: 'div[class="breadcrumb clearfix"]',
    MRS_RADIO_BTN: 'div[id="uniform-id_gender2"]',
    CUSTOMER_FIRST_NAME_INPUT: 'input[id="customer_firstname"]',
    CUSTOMER_LAST_NAME_INPUT: 'input[id="customer_lastname"]',
    ADDRESS_COMPANY_INPUT: 'input[id="company"]',
    ADDRESS1_FIELD_INPUT: 'input[id="address1"]',
    CITY_INPUT: 'input[id="city"]',
    DAYS_SELECT: 'select[id="days"]',
    MONTHS_SELECT: 'select[id="months"]',
    YEARS_SELECT: 'select[id="years"]',
    STATE_SELECT: 'select[id="id_state"]',
    ZIP_INPUT: 'input[id="postcode"]',
    COUNTRY_SELECT: 'select[id="id_country"]',
    MOBILE_PHONE_INPUT: 'input[id="phone_mobile"]',
    ALIAS_INPUT: 'input[id="alias"]',
    REGISTER_BTN: 'button[id="submitAccount"]',
    AUTH_MYACCOUNT: 'div[id="center_column"]',
    USER_INFO: 'div[class="header_user_info"]',
    NAVIGATION_PAGE: 'span[class="navigation_page"]',

}

class SignUpPage {
    // Selector variables
    get CreateAccountBox() {
        return $(SELECTORS.CREATE_ACCOUNT_BOX)
    }
    get EmailAddresAuthInput() {
        return $(SELECTORS.EMAIL_ADDRES_AUTH_INPUT)
    }
    get CreateAccountBtn() {
        return $(SELECTORS.CREATE_ACCOUNT_BTN)
    }
    get AuthPageObject() {
        return $(SELECTORS.AUTH_PAGE_OBJECT)
    }
    get MrsRadioBtn() {
        return $(SELECTORS.MRS_RADIO_BTN)
    }
    get CustomerFirstNameInput() {
        return $(SELECTORS.CUSTOMER_FIRST_NAME_INPUT)
    }
    get CustomerLastNameInput() {
        return $(SELECTORS.CUSTOMER_LAST_NAME_INPUT)
    }
    get AddressCompanyInput() {
        return $(SELECTORS.ADDRESS_COMPANY_INPUT)
    }
    get AddresFieldInput() {
        return $(SELECTORS.ADDRESS1_FIELD_INPUT)
    }
    get CityInput() {
        return $(SELECTORS.CITY_INPUT)
    }
    get DaysSelect() {
        return $(SELECTORS.DAYS_SELECT)
    }
    get MonthSelect() {
        return $(SELECTORS.MONTHS_SELECT)
    }
    get YearSelect() {
        return $(SELECTORS.YEARS_SELECT)
    }
    get StateSelect() {
        return $(SELECTORS.STATE_SELECT)
    }
    get ZipInput() {
        return $(SELECTORS.ZIP_INPUT)
    }
    get CountrySelect() {
        return $(SELECTORS.COUNTRY_SELECT)
    }
    get MobilePhoneInput() {
        return $(SELECTORS.MOBILE_PHONE_INPUT)
    }
    get AliasInput() {
        return $(SELECTORS.ALIAS_INPUT)
    }
    get RegisterBtn() {
        return $(SELECTORS.REGISTER_BTN)
    }
    get AuthMyAccount() {
        return $(SELECTORS.AUTH_MYACCOUNT)
    }
    get UserInfo() {
        return $(SELECTORS.USER_INFO)
    }
    get NavigationPage() {
        return $(SELECTORS.NAVIGATION_PAGE)
    }

    CreateAccountBtnClick() {
        this.CreateAccountBtn.click()
    }
    MrsRadioBtnClick() {
        this.MrsRadioBtn.click()
    }
    RegisterBtnClick() {
        this.RegisterBtn.waitForDisplayed()
        this.RegisterBtn.click()
    }

    EmailAddressCredentials(Email) {
        this.EmailAddresAuthInput.setValue(Email)
    }

    logincredentials(FirstName, LastName, Password) {
        this.CustomerFirstNameInput.setValue(FirstName)
        this.CustomerLastNameInput.setValue(LastName)
        loginPage.PasswordInput.setValue(Password)
    }

    // Methods/Functions
    DateofBirthAssertion() {
        this.DaysSelect.selectByIndex(13);
        this.MonthSelect.selectByIndex(4);
        this.YearSelect.selectByAttribute('value', '1998');
        browser.pause(1000)
    }

    YourAddressAssertion(Company,Address,City,Zip,MobilePhone,Alias) {
        this.AddressCompanyInput.setValue(Company)
        this.AddresFieldInput.setValue(Address)
        this.CityInput.setValue(City)
        this.ZipInput.setValue(Zip)
        this.MobilePhoneInput.setValue(MobilePhone)
        this.AliasInput.setValue(Alias)
        browser.pause(1000)
    }

    AddressSelectAssertion() {
        this.StateSelect.selectByAttribute('value', '1');
        this.CountrySelect.selectByAttribute('value', '21');
        browser.pause(1000)
    }

    AssertionPage(){
        this.NavigationPage.waitForDisplayed()
        expect(this.NavigationPage.getText()).to.match(/(Search)|(My\saccount)|(Shipping)|(Addresses)|(Your\sshopping\scart)|(Authentication)/)
    }
}

module.exports = new SignUpPage() 