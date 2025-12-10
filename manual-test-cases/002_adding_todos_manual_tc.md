# Test Case ID: TC_002  

## Title: Adding todos

### Test Steps

1. Open any browser
2. Go to https://demo.playwright.dev/todomvc/#/

### Test Scenarios

#### Scenario 1: Test that the user is able to add a todo

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Test" in the input field
3. Press "Enter" on the keyboard

Expected Result:  

1. The input field should be visible and focused
2. A new todo should be added to the now visible list as "Test"
3. A checkbox should appear on the left of the todo title to be able to complete this todo
4. A delete icon should appear on the right of the todo title when hovered over to be able to delete this todo
5. Below the todo a section should contain the count of the todos, three tabs that are respectively "All", "Active" and "Completed".

Actual Result (After execution):

1. The input field is visible and focused
2. A new todo "Test" is added to the now visible list
3. A checkbox is displayed on the left of the todo title to complete this todo
4. A delete icon is displayed on the right of the todo title when hovered over to be able to delete this todo
5. Below the todo a section is displayed showing the count of the todos, three tabs that are respectively "All", "Active" and "Completed".

Status: **PASS**

#### Scenario 2: Test that the user is able to add multiple todos in a row

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Test" in the input field
3. Press "Enter" on the keyboard
4. Enter "Test 1" in the input field
5. Press "Enter" on the keyboard
6. Enter "Test 2" in the input field
7. Press "Enter" on the keyboard

Expected Result:  

1. The input field should be visible and focused
2. A new todo should be added to the now visible list as "Test"
3. A new todo should be added to the now visible list as "Test 1"
4. A new todo should be added to the now visible list as "Test 2"
5. A checkbox should appear on the left of each todo title to be able to complete this todo
6. A delete icon should appear on the right of each todo title when hovered over to be able to delete this todo
7. Below all the todos a section should contain the count of the todos, three tabs that are respectively "All", "Active" and "Completed".

Actual Result (After execution):

1. The input field is visible and focused
2. A new todo "Test" is added to the now visible list
3. A new todo "Test 1" is added to the now visible list
4. A new todo "Test 2" is added to the now visible list
5. A checkbox is displayed on the left of each todo title to complete this todo
6. A delete icon is displayed on the right of each todo title when hovered over to be able to delete this todo
7. Below all the todos a section is displayed showing the count of the todos, three tabs that are respectively "All", "Active" and "Completed".

Status: **PASS**

#### Scenario 3: Test that when adding leading or trailling spaces they will be trimmed on "Enter"

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "   Test" in the input field
3. Press "Enter" on the keyboard
4. Enter "Test1    " in the input field
5. Press "Enter" on the keyboard
6. Enter "Test    Test2" in the input field
7. Press "Enter" on the keyboard

Expected Result:  

1. The input field should be visible and focused
2. A new todo should be added to the now visible list as "Test"
3. A new todo should be added to the now visible list as "Test1"
4. A new todo should be added to the now visible list as "Test Test2"

Actual Result (After execution):

1. The input field should be visible and focused
2. A new todo is added to the now visible list as "Test" without the trailing spaces
3. A new todo is added to the now visible list as "Test1" without the leading spaces
4. A new todo is added to the now visible list as "Test Test2" without the multiple spaces in between

Status: **PASS**

#### Scenario 4: Test how long can a todo text be

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." in the input field
3. Press "Enter" on the keyboard

Expected Result:  

1. The input field should be visible and focused
2. A new todo should be added to the now visible list as "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." wrapping the text in accordance to the UI

Actual Result (After execution):

1. The input field should be visible and focused
2. A new todo is added to the now visible list as "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." wrapped in accordance to the UI where the screen becomes scrollable if there are multiple todos in the list

Status: **PASS**

#### Scenario 5: Test if we can add a todo with special characters in it

---

Steps:  

1. Check that the input field is visible and focused
2. Enter "%$#%$#*&%^Test#$%" in the input field
3. Press "Enter" on the keyboard

Expected Result:  

1. The input field should be visible and focused
2. A new todo should be added to the now visible list as "%$#%$#*&%^Test#$%"

Actual Result (After execution):

1. The input field is visible and focused
2. A new todo is now added to the now visible list as "%$#%$#*&%^Test#$%"

Status: **PASS**
