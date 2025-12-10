# QA Test Assignment - Manual

The manual test cases written for the feature under this [link](https://demo.playwright.dev/todomvc/#/) can be found inside the [manual-test-cases](./manual-test-cases) directory in the main project directory.

# QA Test Assignment - Automation

This assignment was done to automate the steps of the below three exercises using `Playwright` and `TypeScript`:

### First Exercise

a. Go to https://www.techlistic.com/  
b. Locate Selenium from the menu  
c. Expand Selenium dropdown  
d. Get the text value of each item in the dropdown  
e. Save the values in an array  
f. Output the array in console

### Second Exercise

a. Go to https://automationexercise.com/  
b. Locate the cart object  
c. Verify if the cart is empty  
d. Add 3 products to the cart (Premium Polo T-Shirts, Soft Stretch Jeans and Stylish Dress)  
e. Validate each product is added to the cart  
f. Proceed to checkout (no need to login)

### Third Exercise

a. Go to https://ourworldindata.org/explorers/covid  
b. Select the Line Chart  
c. Unselect all other countries that are selected by default and select United Kingdom from the list  
d. For each point of the chart, get the tooltip info and log it in the console  

## Setup

1. Download and install [VSCode](https://code.visualstudio.com/download)
2. From the VSCode `Extensions` tab, install the [Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension called `Playwright Test for VSCode`
3. Download and install [NodeJS](https://nodejs.org/en/download) for `NPM`

## Installation

1. Open the `qa-test-assignment` on `VSCode`
2. Since this Project already has `Playwright` initialized, there is no need to run the following command unless it is a new project that we are setting up:

```cmd
npm init playwright@latest
```

## Running the tests

Each exercise is written in a seperate test `.spec.ts` file and the three of them can be found under `tests` directory. Inside [tests](./tests) you will find [first-exercise.spec.ts](./tests/first-exercise.spec.ts), [second-exercise.spec.ts](./tests/second-exercise.spec.ts) and [third-exercise.spec.ts](./tests/third-exercise.spec.ts).

### Steps to run the tests

There are several ways to run the tests:

#### Run the tests headless mode

1. Open the `Playwright` extension now installed on `VSCode` in the left side menu.
2. Under `PLAYWRIGHT` settings, do not select anything under `SETTINGS` in order for the test to run headless without any browser.
3. Under `PLAYWRIGHT` settings, no matter what is selected from `PROJECTS` it will not take this into consideration.
4. Open for example `first-exercise.spec.ts` file and next to the below line of code there will be a green play button to run the test. Since this is headless mode the test won't run on the browser.

```typescript
test('output the value name of each item in Selenium dropdown', async ({ page }) => {
```

5. The test result will be observed under `TEST RESULTS` tab that `Playwright` will display after the test finishes.

#### Run the tests headed mode

1. Open the `Playwright` extension now installed on `VSCode` in the left side menu.
2. Under `PLAYWRIGHT` settings, select `Show browser` or `Show trace viewer` if you wish to trace each step completed under `SETTINGS` in order for the test to run on a browser.
3. Under `PLAYWRIGHT` settings also, select `chromium` under `PROJECTS` if you wish to run the tests on `Chrome` browser or other browser in the list.
4. Open for example `first-exercise.spec.ts` file and next to the below line of code there will be a green play button to run the test. Since this is headed mode the test will run on the browser.

```typescript
test('output the value name of each item in Selenium dropdown', async ({ page }) => {
```

5. The browser will open and display the automation steps that are being done.
6. The test result will be observed under `TEST RESULTS` tab that `Playwright` will display after the test finishes.

## Tools

1. [VSCode](https://code.visualstudio.com/download) as IDE
2. [Playwright](https://playwright.dev/) as automation tool
3. [Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) as support automation tool
4. [TypeScript](https://www.typescriptlang.org/) as coding language
5. [NodeJS](https://nodejs.org/en/download) using npm for package management
6. [MarkDown](https://www.markdownguide.org/) for writing documentation
