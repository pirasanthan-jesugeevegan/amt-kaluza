Feature: MediaWiki - Health Check

    As a user
    I want to be able to edit a wiki page
    So that I can confirm the API is working correctly

    @regression @smoke
    Scenario: Verify that the user can edit a page
        Given I send GET request to 'action=query&type=login&format=json&meta=tokens' generates a token
        When the user login as a test user with username 'KaluzaTest@kaluza' and password 'cteivp02ftopvos8h9n1vpn353g6o29q'
        Then the user edits a wiki page 'test edit'