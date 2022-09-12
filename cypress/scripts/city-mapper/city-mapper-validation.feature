Feature: CityMapper Journey Planner - Validation

    As a travelor
    I want to be able to plan a journey via API
    So that I can confirm the API is working correctly

    Scenario Outline: Verify that the direction endpoint has the right validation - <validation>
        Given I send GET request to '<url>'
        When I get response code '<code>'
        Then I get response message '<message>'
        Examples:
            | validation     | url                      | message                            | code |
            | empty params   | api/1/directions/        | no Route matched with those values | 404  |
            | invlaid params | api/1/directions/Invalid | no Route matched with those values | 404  |


