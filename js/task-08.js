const form = document.querySelector(".login-form");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert ("Please fill in all the fields!");
    }

const result = {
    email: email.value,
    password: password.value,
};

    console.log(result)

    event.currentTarget.reset();
}













// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

