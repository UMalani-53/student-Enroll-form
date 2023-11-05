const form = document.getElementById("enrollment-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting for now

        // Perform form validation here, e.g., check for required fields

        const name = document.getElementById("fname").value;
        const email = document.getElementById("email").value;

        if (!name || !email) {
            alert("Name and email are required fields.");
        } else {
            // You can submit the form to the server here
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener("click", function () {
        form.reset();
    });