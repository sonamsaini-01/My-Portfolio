// ============================================
//   HOME PAGE — code typewriter + terminal
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ----------------------------------------
    // 1. sonam.py typewriter
    // Each line is a list of [tokenClass, text] pairs.
    // ----------------------------------------

    const CODE = [
        [["c", "# sonam.py — hello, world"]],
        [["k", "class"], ["p", " "], ["n", "Sonam"], ["p", ":"]],
        [["p", "    "], ["s", '"""B.Tech CSE · AI & ML · JMIETI \'28"""']],
        [],
        [["p", "    "], ["k", "def"], ["p", " "], ["n", "__init__"], ["p", "("], ["b", "self"], ["p", "):"]],
        [["p", "        "], ["b", "self"], ["p", ".role = "], ["s", '"AI / ML Enthusiast"']],
        [["p", "        "], ["b", "self"], ["p", ".stack = ["], ["s", '"Python"'], ["p", ", "], ["s", '"Flask"'], ["p", ", "], ["s", '"Pandas"'], ["p", "]"]],
        [["p", "        "], ["b", "self"], ["p", ".fuel = "], ["s", '"chai + curiosity"']],
        [],
        [["p", "    "], ["k", "def"], ["p", " "], ["n", "build"], ["p", "("], ["b", "self"], ["p", ", idea):"]],
        [["p", "        "], ["k", "return"], ["p", " ship(idea)  "], ["c"]],
        [],
        [["p", "me = "], ["n", "Sonam"], ["p", "()"]],
        [["p", "me.build("], ["s", '"something intelligent"'], ["p", ")"]],
    ];

    const codeTarget = document.getElementById("codeTarget");
    const codeCursor = document.getElementById("codeCursor");

    if (codeTarget) {

        const renderInstant = () => {
            CODE.forEach((line) => {
                line.forEach(([cls, text]) => {
                    const span = document.createElement("span");
                    span.className = "tok-" + cls;
                    span.textContent = text;
                    codeTarget.appendChild(span);
                });
                codeTarget.appendChild(document.createTextNode("\n"));
            });
        };

        if (reducedMotion) {

            renderInstant();
            if (codeCursor) codeCursor.style.display = "none";

        } else {

            let li = 0, ti = 0, ci = 0;
            let currentSpan = null;

            const typeStep = () => {

                if (li >= CODE.length) return; // done — leave blinking cursor

                const line = CODE[li];

                if (ti >= line.length) {
                    codeTarget.appendChild(document.createTextNode("\n"));
                    li++; ti = 0; ci = 0; currentSpan = null;
                    setTimeout(typeStep, line.length ? 90 : 30);
                    return;
                }

                const [cls, text] = line[ti];

                if (!currentSpan) {
                    currentSpan = document.createElement("span");
                    currentSpan.className = "tok-" + cls;
                    codeTarget.appendChild(currentSpan);
                }

                currentSpan.textContent = text.slice(0, ++ci);

                if (ci >= text.length) {
                    ti++; ci = 0; currentSpan = null;
                }

                setTimeout(typeStep, 14 + Math.random() * 26);
            };

            setTimeout(typeStep, 900);
        }
    }

    // ----------------------------------------
    // 2. Interactive terminal
    // ----------------------------------------

    const term = document.getElementById("term");
    const termOut = document.getElementById("termOut");
    const termIn = document.getElementById("termIn");

    if (!term || !termOut || !termIn) return;

    const print = (html, cls) => {
        const line = document.createElement("div");
        if (cls) line.className = cls;
        line.innerHTML = html;
        termOut.appendChild(line);
        termOut.scrollTop = termOut.scrollHeight;
    };

    print("Welcome! This terminal is real — type <span class='t-ok'>help</span> to explore.");

    const goto = (path, label) => {
        print("opening <span class='t-link'>" + label + "</span> …");
        setTimeout(() => { window.location.href = path; }, 650);
    };

    const COMMANDS = {

        help() {
            print(
                "available commands:<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>whoami</span>&nbsp;&nbsp;&nbsp;&nbsp;who is sonam?<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>skills</span>&nbsp;&nbsp;&nbsp;&nbsp;tech i work with<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>projects</span>&nbsp;&nbsp;open my projects<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>journey</span>&nbsp;&nbsp;&nbsp;my story so far<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>github</span>&nbsp;&nbsp;&nbsp;&nbsp;open my github<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>resume</span>&nbsp;&nbsp;&nbsp;&nbsp;download my resume<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>contact</span>&nbsp;&nbsp;&nbsp;say hello<br>" +
                "&nbsp;&nbsp;<span class='t-ok'>clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clean the screen"
            );
        },

        whoami() {
            print("Sonam — CSE undergrad who builds AI-powered things with Python & Flask. Currently: B.Tech @ JMIETI, class of '28.");
        },

        skills() {
            print("Python · Flask · Pandas · Scikit-learn · Power BI · SQL · Web Scraping · Gemini API · Git");
        },

        ls() {
            print("<span class='t-link'>projects/</span>&nbsp;&nbsp;<span class='t-link'>skills/</span>&nbsp;&nbsp;<span class='t-link'>journey/</span>&nbsp;&nbsp;<span class='t-link'>certificates/</span>&nbsp;&nbsp;contact.txt");
        },

        projects() { goto("/projects", "/projects"); },
        journey()  { goto("/journey", "/journey"); },
        contact()  { goto("/contact", "/contact"); },
        education(){ goto("/education", "/education"); },
        certificates(){ goto("/certificates", "/certificates"); },

        github() {
            print("opening <span class='t-link'>github.com/sonamsaini-01</span> …");
            window.open("https://github.com/sonamsaini-01", "_blank", "noopener");
        },

        linkedin() {
            print("opening <span class='t-link'>linkedin</span> …");
            window.open("https://www.linkedin.com/in/sonam-saini-047436326/", "_blank", "noopener");
        },

        resume() {
            const link = document.getElementById("resumeLink");
            if (link) {
                print("downloading <span class='t-link'>Resume.pdf</span> …");
                link.click();
            }
        },

        clear() { termOut.innerHTML = ""; },

    };

    const run = (raw) => {

        const cmd = raw.trim().toLowerCase();

        print("<span class='t-prompt'>sonam@portfolio:~$</span> <span class='t-cmd'>" +
              raw.replace(/</g, "&lt;") + "</span>");

        if (!cmd) return;

        if (cmd === "sudo hire sonam" || cmd === "hire sonam" || cmd === "sudo hire-sonam") {
            print("[sudo] permission granted <span class='t-ok'>✔</span> — excellent decision. HR has been notified.");
            return;
        }

        if (COMMANDS[cmd]) {
            COMMANDS[cmd]();
        } else {
            print("command not found: <span class='t-err'>" + cmd.replace(/</g, "&lt;") +
                  "</span> — try <span class='t-ok'>help</span>");
        }
    };

    termIn.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            run(termIn.value);
            termIn.value = "";
        }
    });

    // clicking anywhere on the terminal focuses the input
    term.addEventListener("click", () => termIn.focus());

});
