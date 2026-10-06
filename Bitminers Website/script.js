/* =====================================================
   BITMINERS JAVASCRIPT
===================================================== */


/* =====================================================
   COPY CONTRACT ADDRESS
===================================================== */

function copyContract() {

    const address =
        document.getElementById("contractAddress").innerText;

    navigator.clipboard.writeText(address);

    const button =
        document.querySelector(".copy-button");

    const original =
        button.innerHTML;

    button.innerHTML =
        "✓ COPIED";

    button.style.color =
        "#00c805";

    button.style.borderColor =
        "#00c805";


    setTimeout(() => {

        button.innerHTML =
            original;

        button.style.color =
            "";

        button.style.borderColor =
            "";

    }, 1800);

}



/* =====================================================
   TERMINAL ANIMATION
===================================================== */

const terminalLines = document.querySelectorAll(
    ".terminal-body p"
);


terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    line.style.transform =
        "translateX(-10px)";

    setTimeout(() => {

        line.style.transition =
            "all .4s ease";

        line.style.opacity =
            "1";

        line.style.transform =
            "translateX(0)";

    }, 300 + (index * 250));

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".mechanism-card, .holder-card, .treasury-stat, .culture-content, .final-content"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .1
        }

    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-hidden"
    );

    revealObserver.observe(
        element
    );

});



/* =====================================================
   TERMINAL BUTTON
===================================================== */

const terminalButton =
    document.querySelector(".terminal-button");


terminalButton.addEventListener(
    "click",
    () => {

        const terminal =
            document.querySelector(".terminal-body");

        terminal.innerHTML +=
            `
            <p class="terminal-green">
                &gt; connection established...
            </p>

            <p class="terminal-green">
                &gt; BITMINERS terminal ready.
            </p>
            `;

        terminal.scrollTop =
            terminal.scrollHeight;

    }
);



/* =====================================================
   NAVBAR BACKGROUND
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(".navbar");

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(3,3,3,.97)";

        } else {

            navbar.style.background =
                "rgba(3,3,3,.88)";

        }

    }
);