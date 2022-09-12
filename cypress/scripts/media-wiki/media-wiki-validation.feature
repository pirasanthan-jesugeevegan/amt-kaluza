Feature: MediaWiki - Validation

    As a user
    I want to be able to validate the API endpoints
    So that I can confirm the API is working correctly

    Scenario Outline: Verify that the login API cannot be logged in with invalid data - <scenario>
        Given I send GET request to 'action=query&type=login&format=json&meta=tokens' generates a token
        When the user login as a test user with username '<username>' and password 'cteivp02ftopvos8h9n1vpn353g6o29q'
        Then I get failed login response '<message>'
        Examples:
            | scenarios        | username | password                         | message                                                   |
            | empty username   |          | cteivp02ftopvos8h9n1vpn353g6o29q | Incorrect username or password entered. Please try again. |
            | invalid username | Invalid  | cteivp02ftopvos8h9n1vpn353g6o29q | Incorrect username or password entered. Please try again. |
