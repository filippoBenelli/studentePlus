# studentePlus
Studente Plus is a web app simplifying student access to school resources. It offers a login for personalized access to timetables, absence lists, and links to the e-learning platform and school website.  It uses JavaScript for validation and dynamic content loading.

---

## **🌟 Introduction 🌟**

Studente Plus is a web application 🌐 designed to provide students with quick access to essential school-related information and resources. It simplifies the process of accessing timetables 📅, absence lists 📝, and e-learning platforms 🎓, all in one centralized location. The application utilizes HTML  for structure, CSS 🎨 for styling, and JavaScript 🚀 for interactive functionalities.

---

## **📝 Project Description and Functionalities 📝**

The project consists of two main pages:

- **Login Page (`index.html`):** This page presents a form ✍️ where students can enter their name, surname, and class section. JavaScript is used to validate the entered class section ✅ and store the user's information in the browser's local storage 💾.
- **Main Menu Page (`principale.html`):** After successful login, this page displays a personalized welcome message 👋 and a menu with links and interactive elements. These elements allow students to:
    - View teacher absences 👨‍🏫❌.
    - View their class timetable 📅 (dynamically loaded based on the class section entered during login).
    - Access the school's e-learning platform 💻.
    - Visit the school's main website 🏫.

---

## **👨‍💻 Function Explanations 👨‍💻**

Here's a breakdown of the JavaScript functions and their roles:

**`main.js` (Login Page Functionality) 🚪**

- **`checkSezione()`:**
    - **Purpose:** Validates the class section entered by the user ✅.
    - **Functionality:**
        - Converts the input to uppercase ⬆️.
        - Checks if the input length is greater than 3 characters (if so, it's invalid ❌).
        - Uses a `switch` statement to check the first character (the year) of the class section 🔢.
        - Within each case, it checks if the remaining characters (the section identifier) are valid for that year using `includes()` on an array of valid sections 🔤.
        - Returns `true` if the section is valid, `false` otherwise 🟢/🔴.
- **`addEventListener('change', function() { ... })` (on `#sezione` input):**
    - **Purpose:** Handles the event when the user changes the value of the class section input field 🔄.
    - **Functionality:**
        - Calls `checkSezione()` to validate the input 📞.
        - If `checkSezione()` returns `true`, it enables the submit button (`#invia`) by removing the `disabled` attribute 🔓.
        - If `checkSezione()` returns `false`, it disables the submit button and displays an alert message "La classe inserita non esiste" (The entered class does not exist) 🚫.
- **`addEventListener('click', function (event) { ... })` (on `#invia` button):**
    - **Purpose:** Handles the event when the user clicks the submit button 🖱️.
    - **Functionality:**
        - `event.preventDefault()`: Prevents the default form submission behavior (which would typically reload the page) 🛑.
        - Retrieves the values from the name (`#name`), surname (`#cognome`), and section (`#sezione`) input fields 📥.
        - Stores these values in the browser's `localStorage` using `localStorage.setItem()` 💾. This allows the data to persist between page visits (within the same session).
        - Redirects the user to the main menu page (`principale.html`) using `window.location.href` ➡️.

**`main2.js` (Main Menu Page Functionality) 🏠**

- **Variable Declarations:**
    - Retrieves the stored name, surname, and section from `localStorage` using `localStorage.getItem()` 📦.
    - Gets references to various HTML elements using `document.getElementById()`, such as the title (`#titolo`), menu buttons (`#orario`, `#assenze`), the main content area (`#main`), the iframe for displaying external content (`#frameOrario`), and the back button (`#back`) 🏷️.
- **`titolo.innerHTML = \`Benvenuto ${nome} ${cognome}`;`:**
    - **Purpose:** Sets the welcome message in the `<h1>` element (`#titolo`) to include the user's name and surname 💬.
    - **Functionality:** Uses template literals (backticks ``) to embed the `nome` and `cognome` variables directly into the string ✨.
- **`addEventListener('click', () => { ... })` (on `#orario` button):**
    - **Purpose:** Handles the event when the user clicks the "Visualizza l'orario della tua classe" (View your class timetable) button 📅.
    - **Functionality:**
        - `event.preventDefault()`: Prevents the default link behavior 🛑.
        - Hides the main content area (`#main`) and shows the iframe (`#frameOrario`) and the back button (`#back`) 🙈/👀.
        - Sets the `src` attribute of the iframe to dynamically load the timetable PDF for the user's class section. It constructs the URL using the `sezione` variable 🔗.
        - Sets the width, height, and top margin of the iframe for styling 📐.
- **`addEventListener('click', () => { ... })` (on `#assenze` button):**
    - **Purpose:** Handles the event when the user clicks the "Visualizza i professori assenti" (View teacher absences) button 👨‍🏫❌.
    - **Functionality:**
        - Similar to the timetable button's event listener, it hides the main content, shows the iframe and back button 🙈/👀.
        - Sets the iframe's `src` to the URL for the teacher absence list 🔗.
        - Styles the iframe 🎨.
- **`addEventListener('click', () => { ... })` (on `#back` button):**
    - **Purpose:** Handles the event when the user clicks the back button 🔙.
    - **Functionality:**
        - Shows the main content (`#main`), hides the iframe (`#frameOrario`) and the back button (`#back`) 👀/🙈.
        - Reloads the `principale.html` page using `window.location.href` 🔄. (Note: This effectively resets the page, which might not be the ideal user experience if there were any changes made before clicking an option ⚠️.)

---

## **📌 Additional Notes 📌**

- **Styling:** The project uses two CSS files (`style.css` for the login page and `style2.css` for the main menu) to style the HTML elements 💅.
- **External Resources:** The application integrates with external resources by loading timetables and absence lists from the school's website using iframes 🔗.
- **Local Storage:** `localStorage` is used for client-side data storage, which is suitable for storing small amounts of user data that need to persist across sessions 💾.
- **Missing Functionality:** The "Leggi le circolari piu' recenti" (Read the latest circulars) button in `principale.html` lacks JavaScript functionality to load or display circulars 📜⚠️, because is work in progress.
- **Error Handling:** The `checkSezione` function provides basic input validation, but more robust error handling could be implemented🚨.
