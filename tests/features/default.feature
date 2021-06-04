
Feature: Technical Test

    “User A wants to buy dresses on the Automation Practice website. User A is able to
    either create a new account or sign in. User A searches for all the dresses, and selects all
    since all were really affordable. User A proceeds to order and checkout its order. ”

    ####### ---> If you want to execute only login, you must comment the sign up one. <--- #####
    # Scenario: User should be able to login to the application
    #     Given as an existing customer navigates to application home page
    #     When user logs into the application with his credentials
    #     Then the user should be able to view his account page
    #     And view the sign out option

    Scenario: New user can create account with minimal data provided
       Given as an existing customer navigates to application home page
       When the user click on the Sign In button
       And user provide valid email
       And user click on the Create an account button
       And user select Mrs radio button
       And user enter Personal Information fields
       And user select a date of birth
       And user enter Address fields
       And user select Address Fields information
       And user click on the Register button
       Then the user account will be created

    Scenario: Searching for dress
        Given a user on "Account" page
        When the user type "Dresses" in search bar
        And the user clicks on search button
        Then the user must see the result found shown for "Dresses"

    Scenario: Seaching only dresses
	    Given a user is on the "Search" page
        When the user types in the search bar the word "Printed Dresses"
	    Then user is presented with a search result of dresses only 

    Scenario: Add product to Cart
        Given a user who select any dress
        When the user clicks on add to cart
        And the user can check the total
        Then Product is added to cart

    Scenario: Check out the order
        Given a user on the shopping cart summary page
        When the user sees the price and all the information of his purchase
        And the user will be able to check the address
        And the user must accept the terms of shipping 
        And the user must choose the method of payment 
        Then user can check all the information to confirm his order
        And user will be able to see the status of the completed order
        

    


