# Test Case ID: TC_003  

## Title: Todo completion

### Test Steps

1. Open any browser
2. Go to https://demo.playwright.dev/todomvc/#/
3. Check that the input field is visible and focused
4. Enter "Test" in the input field
5. Press "Enter" on the keyboard

### Test Scenarios

#### Scenario 1: Test that the user is able mark a todo as complete

---

Steps:  

1. On the left of "Test" todo, click on the checkbox that is of circle shape

Expected Result:  

1. The "Test" todo should be stricked out
2. A checkmark should be displayed inside the checkbox
3. Below the todo a section should contain the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed" and now a "Clear completed" button

Actual Result (After execution):

1. The "Test" todo is now stricked out
2. A checkmark is displayed inside the checkbox
3. Below the todo a section is displayed showing the count of the todos minus the one checked as completed, three tabs that are respectively "All", "Active" and "Completed" and a "Clear completed" button

Status: **PASS**

#### Scenario 2: Test that the user is able to toggle a completed todo back to active by pressing on the checkbox

---

Steps:  

1. On the left of "Test" todo, click on the checkbox that is of circle shape
2. Click again on the checkbox that now has a checkmark inside it

Expected Result:  

1. The "Test" todo should be stricked out
2. A checkmark should be displayed inside the checkbox
3. Below the todo a section should contain the count of the todos and it should decrement, three tabs that are respectively "All", "Active" and "Completed" and now a "Clear completed" button
4. When the checkbox is clicked again, the "Test" todo should return to its normal style (not stricked out)
5. The checkmark should be removed from the checkbox
6. Below the todo a section should contain the count of the todos and it should increment, three tabs that are respectively "All", "Active" and "Completed" and now a "Clear completed" button should remain or not based on if there is still completed todos or not

Actual Result (After execution):

1. The "Test" todo is now stricked out
2. A checkmark is displayed inside the checkbox
3. Below the todo a section is displayed showing the count of the todos minus the one checked as completed, three tabs that are respectively "All", "Active" and "Completed" and and a "Clear completed" button
4. When the checkbox is clicked again, the "Test" todo returned to its normal style (not stricked out)
5. The checkmark is removed from the checkbox
6. 3. Below the todo a section is displayed showing the count of the todos plus the one unchecked as completed, three tabs that are respectively "All", "Active" and "Completed" and and a "Clear completed" button should remain or not based on if there is still completed todos or not

Status: **PASS**

#### Scenario 3: Test that the user is able to toggle all todo to complete

---

Steps:  

1. Enter "Test1" in the input field
2. Press "Enter" on the keyboard
3. Enter "Test2" in the input field
4. Press "Enter" on the keyboard
5. Click on the "Arrow" icon next to the placeholder

Expected Result:  

1. All todos should be marked as completed (Test, Test1 and Test2) and stricked out
2. All of them should have their checkboxes filled with checkmarks
3. Below the todo a section should contain the count of the todos that are now completed which is 0, three tabs that are respectively "All", "Active" and "Completed" and a "Clear completed" button

Actual Result (After execution):

1. All todos are marked as completed (Test, Test1 and Test2) and stricked out
2. All of them have their checkboxes filled with checkmarks
3. Below the todos a section is displayed showing the count of the todos that are now completed which is 0, three tabs that are respectively "All", "Active" and "Completed" and a "Clear completed" button

Status: **PASS**

#### Scenario 4: Test that the user is able to toggle all completed todos back to active

---

Steps:  

1. Click on the "Arrow" icon next to the placeholder that is now highlighted

Expected Result:  

1. All todos should be marked as active (Test, Test1 and Test2) and back to their normal style
2. All of them should have their checkboxes empty without checkmarks
3. Below the todo a section should contain the count of the todos that are now active which is 3, three tabs that are respectively "All", "Active" and "Completed"

Actual Result (After execution):

1. All todos are marked as active (Test, Test1 and Test2) and back to their normal style
2. All of them have their checkboxes empty without checkmarks
3. Below the todo a section is displayed showing the count of the todos that are now active which is 3, three tabs that are respectively "All", "Active" and "Completed"

Status: **PASS**

#### Scenario 5: Test that the user is able to clear all completed todos

---

Steps:  

1. Enter "Test1" in the input field
2. Press "Enter" on the keyboard
3. Mark "Test1" as completed
4. Enter "Test2" in the input field
5. Press "Enter" on the keyboard
6. Click on the "Clear completed" button in the section below the todo list

Expected Result:  

1. "Test1" todo should be removed from the list
2. Below the todo a section should contain the count of the todos that are now active which is 2, three tabs that are respectively "All", "Active" and "Completed"

Actual Result (After execution):

1. "Test1" todo is removed from the list
2. Below the todo a section is displayed showing the count of the todos that are now active which is 2, three tabs that are respectively "All", "Active" and "Completed"

Status: **PASS**
