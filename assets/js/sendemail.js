function sendMail(contactForm) {
    emailjs.send("gmail_production", "cormac", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comments": contactForm.comments.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}

