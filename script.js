/* ==========================================
   KIRAN STUDIOS
   JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    const isOpen =
        navLinks.classList.toggle("active");

    menuToggle.classList.toggle(
        "active",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu when link is clicked */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



/* ==========================================
   BOOKING MODAL
========================================== */

const bookingModal =
    document.getElementById("bookingModal");


const bookSessionBtn =
    document.getElementById("bookSessionBtn");


const aboutBookBtn =
    document.getElementById("aboutBookBtn");


const contactBookBtn =
    document.getElementById("contactBookBtn");


const closeBooking =
    document.getElementById("closeBooking");


const bookingForm =
    document.getElementById("bookingForm");


const bookingSuccess =
    document.getElementById("bookingSuccess");



/* ==========================================
   OPEN BOOKING FORM
========================================== */

function openBookingForm() {

    bookingModal.classList.add("active");

    document.body.style.overflow = "hidden";

}



/* ==========================================
   CLOSE BOOKING FORM
========================================== */

function closeBookingForm() {

    bookingModal.classList.remove("active");

    document.body.style.overflow = "";

}



/* Buttons that open booking form */

bookSessionBtn.addEventListener(
    "click",
    openBookingForm
);


aboutBookBtn.addEventListener(
    "click",
    function () {

        window.location.href =
            "mailto:bathulajames2005@gmail.com";

    }
);


contactBookBtn.addEventListener(
    "click",
    function () {

        window.open(
            "https://wa.me/919391023210",
            "_blank"
        );

    }
);



/* Close button */

closeBooking.addEventListener(
    "click",
    closeBookingForm
);



/* Close when clicking outside */

bookingModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === bookingModal
        ) {

            closeBookingForm();

        }

    }
);



/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            bookingModal.classList.contains("active")
        ) {

            closeBookingForm();

        }

    }
);



/* ==========================================
   SET MINIMUM DATE
========================================== */

const dateInput =
    document.getElementById("date");


const earliestDate =
    new Date();


earliestDate.setDate(
    earliestDate.getDate() + 2
);


const year =
    earliestDate.getFullYear();


const month =
    String(
        earliestDate.getMonth() + 1
    ).padStart(2, "0");


const day =
    String(
        earliestDate.getDate()
    ).padStart(2, "0");


const earliestDateString =
    `${year}-${month}-${day}`;


dateInput.min = earliestDateString;



/* ==========================================
   BOOKING FORM SUBMISSION
========================================== */

bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get customer information */

        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const service =
            document
                .getElementById("service")
                .value;


        const date =
            document
                .getElementById("date")
                .value;


        const time =
            document
                .getElementById("time")
                .value;


        const address =
            document
                .getElementById("address")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();



        /* ==========================================
           KIRAN STUDIOS WHATSAPP NUMBER

           Country code: India = 91

           Number:
           9391023210

           WhatsApp format:
           919391023210
        ========================================== */

        const whatsappNumber =
            "919391023210";



        /* ==========================================
           CREATE WHATSAPP MESSAGE
        ========================================== */

        const whatsappMessage =

`📸 KIRAN STUDIOS - BOOKING REQUEST

━━━━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

━━━━━━━━━━━━━━━━━━

📷 SESSION DETAILS

Service: ${service}

📅 Date: ${date}

🕐 Time: ${time}

━━━━━━━━━━━━━━━━━━

📍 SHOOT LOCATION

${address}

━━━━━━━━━━━━━━━━━━

📝 ADDITIONAL DETAILS

${message || "No additional details provided."}

━━━━━━━━━━━━━━━━━━

Thank you for choosing Kiran Studios!`;



        /* ==========================================
           CREATE WHATSAPP URL
        ========================================== */

        const whatsappURL =

            "https://wa.me/" +

            whatsappNumber +

            "?text=" +

            encodeURIComponent(
                whatsappMessage
            );



        /* ==========================================
           OPEN WHATSAPP
        ========================================== */

        window.open(
            whatsappURL,
            "_blank"
        );



        /* ==========================================
           SHOW SUCCESS MESSAGE
        ========================================== */

        bookingForm.style.display =
            "none";


        bookingSuccess.classList.add(
            "active"
        );

    }
);