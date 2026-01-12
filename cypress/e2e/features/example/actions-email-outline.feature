
Feature: Actions page email input

  As a test engineer
  I want to try different email values
  So that I can see that the field works with multiple inputs

  Background:
    Given I am on the Actions page

  Scenario Outline: Typing different emails into the email field
    When I type "<email>" into the email field
    Then the email field should contain "<email>"

    Examples:
      | email                |
      | user1@example.com    |
      | second@test.org      |
      | hello+qa@company.de  |