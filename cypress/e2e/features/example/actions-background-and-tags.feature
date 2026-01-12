

@actions
Feature: Actions page with background and tags

  As a test engineer
  I want to reuse the same start state
  So that my scenarios stay clean and readable

  Background:
    Given I am on the Actions page

  @smoke
  Scenario: Quick visibility check for email field
    Then the email field should be visible

  @regression
  Scenario: Type a valid email
    When I type "bdd-test@example.com" into the email field
    Then the email field should contain "bdd-test@example.com"

  @regression @wip
  Scenario: Type another email and verify
    When I type "another@example.org" into the email field
    Then the email field should contain "another@example.org"