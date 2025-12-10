# Test Case ID: TC_005

## Title: Filtering todos

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

#### Scenario 1: Test that the user is able to see only the completed todos in the "Completed" tab

---

Steps:  

1. In the section below the todos list, click on "Completed"

Expected Result:  

1. The user should see only the completed todos which is "Test1"

Actual Result (After execution):

1. The user is able to see only the completed todos which is "Test1"

Status: **PASS**

#### Scenario 2: Test that the user is able to see only the active todos in the "Active" tab

---

Steps:  

1. In the section below the todos list, click on "Active"

Expected Result:  

1. The user should see only the active todos which are "Test" and "Test2"

Actual Result (After execution):

1. The user is able to see only the active todos which are "Test" and "Test2"

Status: **PASS**

#### Scenario 3: Test that the user is able to see all the todos in the "All" tab

---

Steps:  

1. In the section below the todos list, click on "All"

Expected Result:  

1. The user should see all todos which are "Test", "Test1" and "Test2"

Actual Result (After execution):

1. The user is able to see all todos which are "Test", "Test1" and "Test2"

Status: **PASS**
