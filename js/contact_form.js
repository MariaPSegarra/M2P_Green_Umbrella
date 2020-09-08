$(document).ready(function () {
    $("#inputName").click(function () {
        $("#inputName").attr("placeholder", "");
    });
    $("#inputEmail").click(function () {
        $("#inputEmail").attr("placeholder", "");
    });
    $("#TextArea").click(function () {
        $("#TextArea").attr("placeholder", "");
    });
    $(".btn-contact").click(function () {
        $(".btn-contact").text("Message Sent");
    });
});

function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "your_message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}

$("form").submit(function (e) {
    e.preventDefault(); 
    $("form").remove();
    $("#submitMessage").removeClass("d-none");
});

