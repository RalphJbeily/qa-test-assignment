# Test Case ID: TC_004

## Title: Deleting todos

### Test Steps

1. Open any browser
2. Go to https://demo.playwright.dev/todomvc/#/
3. Check that the input field is visible and focused
4. Enter "Test" in the input field
5. Press "Enter" on the keyboard
6. Enter "Test1" in the input field
5. Press "Enter" on the keyboard

### Test Scenarios

#### Scenario 1: Test that the user is able to delete a todo

---

Steps:  

1. On the right of "Test" todo, click on the "X" icon that appears when hovering over

Expected Result:  

1. The "Test" todo should be removed from the list
2. Below the todo a section should contain the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed"

Actual Result (After execution):

1. The "Test" todo is removed from the list
2. Below the todo a section is displayed showing the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed"

Status: **PASS**

#### Scenario 2: Test that the user is able to delete multiple todos

---

Steps:  

1. On the right of "Test" todo, click on the "X" icon that appears when hovering over
2. On the right of "Test1" todo, click on the "X" icon that appears when hovering over

Expected Result:  

1. The "Test" todo should be removed from the list
2. The "Test1" todo should be removed from the list
3. Below the todo a section should contain the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed"

Actual Result (After execution):

1. The "Test" todo is removed from the list
2. The "Test1" todo is removed from the list
3. Below the todo a section is displayed showing the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed"

Status: **PASS**
