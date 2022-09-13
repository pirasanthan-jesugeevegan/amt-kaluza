Feature: TFL Journey - Health Check

    As a travelor
    I want to be able to plan a journey via API
    So that I can confirm the API is working correctly

    @regression @smoke
    Scenario Outline: Verify that the user can plan a journey for a public bus from Point A to Point B - <journey>
        Given A journey from '<from>' to '<to>' via 'tube,bus,overground'
        When I get response code '<code>'
        Then I get response body field of '$type,journeyVector,journeys,lines,recommendedMaxAgeMinutes,searchCriteria,stopMessages'
        Examples:
            | journey                            | from  | to     | code |
            | within London                      | N97JA | W1B3AG | 200  |
            | A inside London & B outside London | N97JA | SS11EE | 200  |

