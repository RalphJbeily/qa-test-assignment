# Test Case ID: TC_006

## Title: Page reload and storage

### Test Steps

1. Open any browser
2. Go to https://demo.playwright.dev/todomvc/#/
3. Check that the input field is visible and focused
4. Enter "Test" in the input field
5. Press "Enter" on the keyboard
6. Enter "Test1" in the input field
7. Press "Enter" on the keyboard
8. Mark "Test1" as completed
9. Enter "Test2" in the input field
10. Press "Enter" on the keyboard

### Test Scenarios

#### Scenario 1: Test that the system will store all the newly added todos in localstorage and display them after page refresh

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Test" in the input field
3. Press "Enter" on the keyboard
4. Enter "Test1" in the input field
5. Press "Enter" on the keyboard
6. Mark "Test1" as completed
7. Enter "Test2" in the input field
8. Press "Enter" on the keyboard
9. Refresh the page

Expected Result:  

1. All the todos and their respective statuses should remain the same.
2. The section below the todos list and its data should remain the same.

Actual Result (After execution):

1. All the todos and their respective statuses are the same after refresh.
2. The section below the todos list and its data is the same after refresh.

Status: **PASS**

#### Scenario 2: Test that the system will not store the recently deleted todos and not show them after refresh

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Test" in the input field
3. Press "Enter" on the keyboard
4. Enter "Test1" in the input field
5. Press "Enter" on the keyboard
6. Mark "Test1" as completed
7. Enter "Test2" in the input field
8. Press "Enter" on the keyboard
9. Delete "Test" from the todo list
10. Refresh the page

Expected Result:  

1. The todos that should be shown in the list are "Test1" and "Test2" with their respective statuses
2. "Test" todo should not be shown in the list
3. The section below the todos list and its data should remain the same after deleting "Test" todo.

Actual Result (After execution):

1. The todos liost shows only "Test1" and "Test2" with their respective statuses
2. "Test" todo is not shown in the list
3. The section below the todos list and its data remains the same after deleting "Test" todo.

Status: **PASS**

#### Scenario 3: Test that the system will behave normaly after a reload

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Test" in the input field
3. Press "Enter" on the keyboard
4. Enter "Test1" in the input field
5. Press "Enter" on the keyboard
6. Mark "Test1" as completed
7. Enter "Test2" in the input field
8. Press "Enter" on the keyboard
9. Refresh the page
10. Mark "Test" as completed

Expected Result:  

1. "Test1" and "Test2" todos and their respective statuses should remain the same.
2. "Test" todo should be marked as completed
3. The section below the todos list and its data should update after marking "Test" as completed.

Actual Result (After execution):

1. "Test1" and "Test2" todos and their respective statuses remains the same.
2. "Test" todo is marked as completed
3. The section below the todos list and its data is updated after marking "Test" as completed.

Status: **PASS**
