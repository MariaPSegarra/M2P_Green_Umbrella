
$(document).ready(function() {
 $(".btn-booking").click(function() {
        $(".btn-booking").text("Request Sent");
   });

    });

function sendMail(bookingForm) {
    emailjs.send("gmail","booking_form", {
        "from_name": bookingForm.bname.value,
        "from_email": bookingForm.bemail.value,
        "from_walk": bookingForm.walk.value,
        "your_comment": bookingForm.bcomment.value,
        "group_size": bookingForm.bnumber.value,
        "picked_date": bookingForm.bdate.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
   return false; 
}

let people = document.getElementById("#inputNumber");
let walkBooking = people.value;
let dateAvailable = document.getElementById("#inputDate"); 
let dateBooking = dateAvailable.value;

if (this.walkBooking <= "10") {
 window.localStorage.setItem("people", JSON.stringify(walkBooking));
}



