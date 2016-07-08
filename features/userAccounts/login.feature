Feature: User login
    In order to use the application
    A user
    Should log in

    Scenario: Successful login
        Given the user "Test" has an account
        When he logs in
        Then he should see "Welcome Test"

    Scenario: Failed login
        Given the user "Test" does not have an account
        When he logs in
        Then he sould see "Invalid login/password"
