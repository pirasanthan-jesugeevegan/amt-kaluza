Feature: MediaWiki - Validation

    As a user
    I want to be able to validate the API endpoints
    So that I can confirm the API is working correctly

    @regression
    Scenario Outline: Verify that the login API cannot be logged in with invalid data - <scenario>
        Given I send GET request to 'action=query&type=login&format=json&meta=tokens' generates a token
        When the user login as a test user with username '<username>' and password '<password>'
        Then I get failed login response '<message>'
        Examples:
            | scenarios        | username | password            | message                                                   |
            | empty username   |          | MEDIA_WIKI_PASSWORD | Incorrect username or password entered. Please try again. |
            | invalid username | Invalid  | MEDIA_WIKI_PASSWORD | Incorrect username or password entered. Please try again. |
