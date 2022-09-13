Feature: CityMapper Journey Planner - Health Check

    As a travelor
    I want to be able to plan a journey via API
    So that I can confirm the API is working correctly

    @regression @smoke
    Scenario Outline: Verify that the user can plan a journey for a public transport from Point A to Point B - <journey>
        Given A destination from '<from>' to '<to>'
        When I send GET request to 'api/1/directions/transit'
        Then I get response code '<code>'
        Examples:
            | journey                            | from  | to     | code |
            | within London                      | N97JA | W1B3AG | 200  |
            | A inside London & B outside London | N97JA | SS11EE | 200  |

    @regression @smoke
    Scenario Outline: Verify that the user can plan a journey for a car from Point A to Point B - <journey>
        Given A destination from '<from>' to '<to>'
        When I send GET request to 'api/1/directions/carride'
        Then I get response code '<code>'
        Examples:
            | journey                            | from  | to     | code |
            | within London                      | N97JA | W1B3AG | 200  |
            | A inside London & B outside London | N97JA | SS11EE | 200  |

    @regression @smoke
    Scenario Outline: Verify that the user can plan a journey for a motorscooterride from Point A to Point B - <journey>
        Given A destination from '<from>' to '<to>'
        When I send GET request to 'api/1/directions/motorscooterride'
        Then I get response code '<code>'
        Examples:
            | journey                            | from  | to     | code |
            | within London                      | N97JA | W1B3AG | 200  |
            | A inside London & B outside London | N97JA | SS11EE | 200  |