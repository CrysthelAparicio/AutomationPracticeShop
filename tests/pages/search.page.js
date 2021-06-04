var Utils = require('../utils/utils.js')

const SELECTORS = {
    //SEARCH
    SEARCH_BAR_INPUT: 'input[id="search_query_top"]',
    SEARCH_BTN: 'button[class="btn btn-default button-search"]',
    SEARCH_RESULT_FOUND: 'span[class="heading-counter"]',
    SEARCH_FIELD: 'form[id="searchbox"]',
    SEARCH_COUNT: 'div[class="product-count"]',
    NAVIGATION_PAGE: 'span[class="navigation_page"]',
    SEARCH_ITEM: 'h1[class="page-heading  product-listing"]',
    FIRST_COLUMN_SEARCH: 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 first-in-line first-item-of-tablet-line first-item-of-mobile-line"]',
    SECOND_COLUMN_SEARCH: 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-item-of-tablet-line"]',
    THIRD_COLUMN_SEARCH: 'li[class="ajax_block_product col-xs-12 col-sm-6 col-md-4 last-in-line first-item-of-tablet-line last-item-of-mobile-line"]',
}

class SearchPage {
    get SearchBarInput() {
        return $(SELECTORS.SEARCH_BAR_INPUT)
    }
    get SearchBtn() {
        return $(SELECTORS.SEARCH_BTN)
    }
    get SearchResultFound() {
        return $(SELECTORS.SEARCH_RESULT_FOUND)
    }
    get SearchField() {
        return $(SELECTORS.SEARCH_FIELD)
    }
    get SearchCount() {
        return $(SELECTORS.SEARCH_COUNT)
    }
    get NavigationPage() {
        return $(SELECTORS.NAVIGATION_PAGE)
    }
    get SearchItem() {
        return $(SELECTORS.SEARCH_ITEM)
    }
    get FirstColumnSearch() {
        return $(SELECTORS.FIRST_COLUMN_SEARCH)
    }
    get SecondColumnSearch() {
        return $(SELECTORS.SECOND_COLUMN_SEARCH)
    }
    get ThirdColumnSearch() {
        return $(SELECTORS.THIRD_COLUMN_SEARCH)
    }
    

    SearchBarInputClick() {
        this.SearchBarInput.click()
    }
    SearchBtnClick() {
        this.SearchBtn.click()
    }

    SearchResultLabelFunction() {
        this.SearchItem.waitForDisplayed()
        expect(this.SearchItem.getText()).to.match(/\d+ results have been found/)
    }

    
    SearchContent(Content) {
        this.SearchField.waitForDisplayed()
        this.SearchBarInputClick()
        this.SearchBarInput.setValue(Content)
    }

    WaitForVisibleSearchedContent() {
        this.SearchCount.waitForDisplayed()
    }

    ColumnAssertion() {
        expect(this.FirstColumnSearch.isExisting()).to.be.true
        expect(this.SecondColumnSearch.isExisting()).to.be.true
        expect(this.ThirdColumnSearch.isExisting()).to.be.true
    }

    SearchOnlyDresses(Result) {
        this.SearchField.waitForDisplayed()
        this.SearchBarInputClick()
        this.SearchBarInput.clearValue()
        this.SearchBarInputClick()
        this.SearchBarInput.setValue(Result)
    }
}

module.exports = new SearchPage() 
