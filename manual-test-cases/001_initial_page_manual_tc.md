# Test Case ID: TC_001  

## Title: Initial page

### Test Steps

1. Open any browser
2. Go to https://demo.playwright.dev/todomvc/#/

### Test Scenarios

#### Scenario 1: Test if the page is fresh without any todos

---

Steps:  

1. Check that the input field is visible and focused
2. Check that the placeholder is "What needs to be done?"
3. Check that the todo list is empty and not displayed

Expected Result:  

1. The input field should be visible and focused
2. The placeholder should be "What needs to be done?"
3. The todo list should be empty and not displayed

Actual Result (After execution):

1. The input field is visible and focused
2. The placeholder is correct and written as "What needs to be done?"
3. The todo list is empty and not displayed

Status: **PASS**

#### Scenario 2: Test that if the user press "Enter" on the keyboard then nothing will be added

---

Steps:  

1. Make sure that the input field is visible and focused
2. Press "Enter" on the keyboard

Expected Result:  

1. No new todo should be added and the list should remain empty

Actual Result (After execution):

1. The list remained empty and no new todo was added.

Status: **PASS**
