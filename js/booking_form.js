$(document).ready(function () {
    $("#inputName").click(function () {
        $("#inputName").attr("placeholder", "");
    });
    $("#inputEmail").click(function () {
        $("#inputEmail").attr("placeholder", "");
    });
    $("#inputNumber").click(function () {
        $("#inputNumber").attr("placeholder", "");
    });
    $("#TextArea").click(function () {
        $("#TextArea").attr("placeholder", "");
    });
    $(".btn-booking").click(function () {
        $(".btn-booking").text("Request Sent");
    });
});

function sendMail(bookingForm) {
    emailjs.send("gmail", "booking_form", {
        "from_name": bookingForm.bname.value,
        "from_email": bookingForm.bemail.value,
        "from_walk": bookingForm.walk.value,
        "your_comment": bookingForm.bcomment.value,
        "group_size": bookingForm.bnumber.value,
        "picked_date": bookingForm.bdate.value
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








