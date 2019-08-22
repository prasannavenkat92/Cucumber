Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario: Title of your scenario
    Given user should be in telecom homepage
    And user click on add customer button
    When user enter all the fields
    And user click on submit button
    Then user should be displayed the customer id is generated

  @tag1
  Scenario: Title of your scenario
    Given user should be in telecom homepage
    And user click on add customer button
    When user enter all the fields.
      | Prasanna Venkatesan | R | xyz@gmail.com | Vriddhachalam | 6756757 |
    And user click on submit button
    Then user should be displayed the customer id is generated
