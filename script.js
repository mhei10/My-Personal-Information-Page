document.addEventListener("DOMContentLoaded", function () {

    // Greeting Button
    const greetBtn = document.getElementById("greetBtn");
    const greetingMessage = document.getElementById("greetingMessage");

    if (greetBtn && greetingMessage) {
        greetBtn.addEventListener("click", function () {
            greetingMessage.textContent =
                "Hello there! I'm Arriane Mhei, a college IT student who does her best on learning and still learning about business analytics and video editing. I love to explore the technology to learn and gain newknowledge about it.";
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {

        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            let fullName = document.getElementById("fullName").value.trim();
            let email = document.getElementById("emailAddress").value.trim();
            let message = document.getElementById("message").value.trim();

            const scriptURL = "https://script.google.com/macros/s/AKfycbwx_4ycBpjGlu8kgOtNoDY0uYbV7DTQ01JpTBn2pBTzD9j8LOolbQIAMXiDqmRMbLw/exec";

            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

            if (!gmailRegex.test(email)) {
                formMessage.textContent = "Please enter a valid @gmail.com email address.";
                formMessage.style.color = "#d32f2f";
                return;
            }

            if (fullName !== "" && email !== "" && message !== "") {

                formMessage.textContent = "🦫 Sending your message to Arriane Mhei";
                formMessage.style.color = "#6f4e37";

                let formData = new FormData();
                formData.append("fullName", fullName);
                formData.append("email", email);
                formData.append("message", message);

                try {
                    await fetch(scriptURL, {
                        method: "POST",
                        body: formData,
                        mode: "no-cors"
                    });

                    formMessage.textContent = "🦫 Thank you, " + fullName + "! Your message has been sent successfully.";
                    formMessage.style.color = "#2e7d32";

                    contactForm.reset();

                } catch (error) {
                    formMessage.textContent = "Something went wrong. Please try again.";
                    formMessage.style.color = "#d32f2f";
                }

            } else {
                formMessage.textContent = "Please complete all required fields.";
                formMessage.style.color = "#d32f2f";
            }

        });

    }

    document.addEventListener("click", function (event) {

        const emojis = ["🦫"];

        for (let i = 0; i < 10; i++) {

            const emoji = document.createElement("span");

            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            emoji.style.position = "fixed";
            emoji.style.left = event.clientX + "px";
            emoji.style.top = event.clientY + "px";
            emoji.style.fontSize = "25px";
            emoji.style.zIndex = "9999";
            emoji.style.pointerEvents = "none";

            document.body.appendChild(emoji);

            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;

            emoji.animate(
                [
                    {
                        transform: "translate(0, 0) scale(1)",
                        opacity: 1
                    },
                    {
                        transform: "translate(" + x + "px, " + y + "px) scale(1.5)",
                        opacity: 0
                    }
                ],
                {
                    duration: 1000,
                    easing: "ease-out"
                }
            );

            setTimeout(function () {
                emoji.remove();
            }, 1000);

        }

    });

});