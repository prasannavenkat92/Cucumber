Feature: Add Customer
  I want to use this template for my feature file

  Background: 
    Given user should be in telecom homepage
    And user click on add customer button

  @tag1
  Scenario: Title of your scenario
    When user enter all the fields
    And user click on submit button
    Then user should be displayed the customer id is generated

  @tag1
  Scenario: One dimensional list
    When user enter all the fields.
      | Prasanna Venkatesan | R | xyz@gmail.com | Vriddhachalam | 6756757 |
    And user click on submit button
    Then user should be displayed the customer id is generated

  @tag1
  Scenario: One dimensional map
    When user enter all the field1.
      | fname   | Prasanna Venkatesan |
      | lname   | Ramachandran        |
      | email   | vrihero@gmail.com   |
      | address | VRI                 |
      | phno    |          9940815294 |
    And user click on submit button
    Then user should be displayed the customer id is generated

  @tag1
  Scenario: Two dimensional list
    When user enter all the field.
      | Prasanna Venkatesan | R | xyz@gmail.com  | Vriddhachalam |  6756757 |
      | Mani                | R | abc@gmail.com  | Vriddhachalam |  5563363 |
      | Ramachandran        | P | ram@gmail.com  | Vriddhachalam | 12121313 |
      | Usha                | R | usha@gmail.com | Vriddhachalam |  4232424 |
    And user click on submit button
    Then user should be displayed the customer id is generated

  @tag1
  Scenario: Two dimensional map
    When user enter all the field2.
      | fn                  | ln | em             | ad            | mob      |
      | Prasanna Venkatesan | R  | xyz@gmail.com  | Vriddhachalam |  6756757 |
      | Mani                | R  | abc@gmail.com  | Vriddhachalam |  5563363 |
      | Ramachandran        | P  | ram@gmail.com  | Vriddhachalam | 12121313 |
      | Usha                | R  | usha@gmail.com | Vriddhachalam |  4232424 |
    And user click on submit button
    Then user should be displayed the customer id is generated
