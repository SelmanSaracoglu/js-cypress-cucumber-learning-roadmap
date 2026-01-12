

Feature: Login to demo application

  As a test engineer
  I want to verify login behavior
  So that I can be sure valid users can log in and invalid ones are rejected

  Background:
    Given I am on the demo login page

  Scenario Outline: Login with different credential combinations
    When I login with username "<username>" and password "<password>"
    Then the login result should be "<result>"

    Examples:
      | username   | password              | result   |
      | tomsmith   | SuperSecretPassword!  | success  |
      | wrongUser  | SuperSecretPassword!  | failure  |
      | tomsmith   | wrongPassword         | failure  |
