Feature: User signup
    In order to have an account to log to the application
    A user
    Should sign up

    @watch
    Scenario: Successful signup
        Given the user does not have an account
        When he signs up with "Test" name
        Then he should see "Welcome Test"

    Scenario: Incorrect email
        Given the user "Test" does not have an account
        When he signs up with "wrongemail" as email
        Then he sould see "Incorrect email"
