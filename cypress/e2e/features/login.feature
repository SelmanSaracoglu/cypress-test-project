
Feature: Login Functionality
    As a user, I want to log in to the CURA Healtcare Service
    So that I can book an appointment

    Scenario: Successful Login with valid credentials
        Given I visit the CURA Healthcare home page
        When I click on the Make Appointment button
        And I enter the "validUser" username from "user_data" fixture
        And I enter the "validUser" password from "user_data" fixture
        And I click the Login button
        Then I should be redirected to the appointment page


    Scenario: Failed Login with invalid credentials
        Given I visit the CURA Healthcare home page
        When I click on the Make Appointment button
        And I enter the "invalidUser" username from "user_data" fixture
        And I enter the "invalidUser" password from "user_data" fixture
        And I click the Login button
        Then I should see the error message "Login failed! Please ensure the username and password are valid."

