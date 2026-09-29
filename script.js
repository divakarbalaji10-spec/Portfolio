/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    {
        title:
            "Student House Voting & Election Management System",

        summary:
            "A web-based system for managing student house elections, voting and results.",

        problem:
            "Manual election workflows can make candidate management, voting and result tracking difficult to organize.",

        solution:
            "A centralized workflow for managing candidates, student voting and election results.",

        features: [
            "Student voting",
            "House-wise election management",
            "Election administration",
            "Result management"
        ],

        contribution:
            "Developed the application workflow, backend logic and database-driven election operations.",

        tech: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },


    {
        title:
            "RD College / School Admission Management System",

        summary:
            "A complete admission workflow connecting enquiry, confirmation, fees and student/member management.",

        problem:
            "Admission data moves through multiple stages and needs to remain consistent between enquiry, admission and student records.",

        solution:
            "A connected workflow from enquiry to confirmed admission, fee management and member/student records.",

        features: [
            "Enquiry management",
            "Admission confirmation",
            "Fee workflow",
            "Student/member management"
        ],

        contribution:
            "Worked on backend workflows, database operations and administrative interfaces.",

        tech: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },


    {
        title:
            "School Fee Management & Payment System",

        summary:
            "A fee workflow covering generation, payment processing, status tracking and receipt generation.",

        problem:
            "Schools need a reliable way to calculate fees, process payments and maintain clear payment records.",

        solution:
            "A database-driven fee and payment workflow connected with payment gateway processing and receipt generation.",

        features: [
            "Fee generation",
            "Fee calculation",
            "Payment gateway integration",
            "Payment status tracking",
            "Receipt PDF generation"
        ],

        contribution:
            "Developed backend fee logic, payment workflow and receipt-related functionality.",

        tech: [
            "PHP",
            "MySQL",
            "Payment Gateway",
            "PDF Generation",
            "JavaScript"
        ]
    },


    {
        title:
            "Snap Talk",

        summary:
            "A practical student explanation and evaluation system with star ratings and audio proof.",

        problem:
            "Teachers need a practical way to check whether a student can explain a topic that was taught.",

        solution:
            "The teacher selects a student and topic, the student explains it, and the teacher evaluates the explanation with a star rating and audio proof.",

        features: [
            "Teacher selects student",
            "Topic explanation",
            "Star rating",
            "Audio recording",
            "Participation proof"
        ],

        contribution:
            "Developed the teacher-driven workflow, evaluation functionality and audio-based proof flow.",

        tech: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Audio",
            "HTML",
            "CSS"
        ]
    },


    {
        title:
            "AI Page Vector Search",

        summary:
            "A vector-based search system that matches user queries with stored page representations.",

        problem:
            "Traditional page-name search can miss relevant pages when the wording of a user's query differs from the stored page name.",

        solution:
            "Page names/content are represented as vectors and stored in a database. A search query is converted into a vector and compared against stored vectors to rank stronger matches first.",

        features: [
            "Page vector generation",
            "Query vector generation",
            "Similarity/match scoring",
            "Relevant-page ranking"
        ],

        contribution:
            "Implemented the vector storage and matching workflow used to improve page discovery.",

        tech: [
            "PHP",
            "MySQL",
            "Vector Search",
            "AI",
            "JavaScript"
        ]
    },


    {
        title:
            "Canteen Management System",

        summary:
            "A management system for organizing canteen-related operations and records.",

        problem:
            "Canteen operations involve recurring records and workflows that benefit from centralized management.",

        solution:
            "A database-driven management application for handling canteen operations.",

        features: [
            "Management workflow",
            "Database records",
            "Administrative operations",
            "Reporting-ready data"
        ],

        contribution:
            "Worked on backend and database-driven application functionality.",

        tech: [
            "PHP",
            "MySQL",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    }

];



/* =====================================================
   PROJECT ELEMENTS
===================================================== */

const projectList =
    document.getElementById("projectList");

const projectModal =
    document.getElementById("projectModal");



/* =====================================================
   CREATE PROJECT LIST
===================================================== */

projectList.innerHTML =
    projects.map((project, index) => {

        return `

        <article
            class="project-row reveal"
            data-project="${index}"
            tabindex="0"
            role="button"
        >

            <span class="project-index">

                ${String(index + 1).padStart(2, "0")}

            </span>


            <h3>

                ${project.title}

            </h3>


            <p>

                ${project.summary}

            </p>


            <span class="project-arrow">

                ↗

            </span>

        </article>

        `;

    }).join("");



/* =====================================================
   OPEN PROJECT
===================================================== */

function openProject(index) {

    const project =
        projects[index];


    document.getElementById(
        "modalNumber"
    ).textContent =
        `03 / PROJECT ${String(index + 1).padStart(2, "0")}`;


    document.getElementById(
        "modalTitle"
    ).textContent =
        project.title;


    document.getElementById(
        "modalSummary"
    ).textContent =
        project.summary;


    document.getElementById(
        "modalProblem"
    ).textContent =
        project.problem;


    document.getElementById(
        "modalSolution"
    ).textContent =
        project.solution;


    document.getElementById(
        "modalContribution"
    ).textContent =
        project.contribution;


    document.getElementById(
        "modalFeatures"
    ).innerHTML =
        project.features
            .map(feature => `<li>${feature}</li>`)
            .join("");


    document.getElementById(
        "modalTech"
    ).innerHTML =
        project.tech
            .map(tech => `<span>${tech}</span>`)
            .join("");


    projectModal.classList.add("open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

}



/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    projectModal.classList.remove(
        "open"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}



/* =====================================================
   RESUME
===================================================== */

const resumeModal =
    document.getElementById(
        "resumeModal"
    );


const letterShell =
    document.getElementById(
        "letterShell"
    );



function openResume() {

    resumeModal.classList.add(
        "open"
    );

    resumeModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );


    letterShell.classList.remove(
        "opened"
    );


    setTimeout(() => {

        letterShell.classList.add(
            "opened"
        );

    }, 280);

}



function closeResume() {

    letterShell.classList.remove(
        "opened"
    );


    setTimeout(() => {

        resumeModal.classList.remove(
            "open"
        );

        resumeModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }, 350);

}



/* =====================================================
   PROJECT CLICK
===================================================== */

document
    .querySelectorAll(".project-row")
    .forEach(row => {

        row.addEventListener(
            "click",
            () => {

                openProject(
                    Number(row.dataset.project)
                );

            }
        );


        row.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openProject(
                        Number(row.dataset.project)
                    );

                }

            }
        );

    });



/* =====================================================
   CLOSE BUTTONS
===================================================== */

document
    .querySelectorAll("[data-close-project]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeProject
        );

    });


document
    .querySelectorAll("[data-close-resume]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeResume
        );

    });



/* =====================================================
   RESUME BUTTONS
===================================================== */

document
    .getElementById("heroResume")
    .addEventListener(
        "click",
        openResume
    );


document
    .getElementById("resumeButton")
    .addEventListener(
        "click",
        openResume
    );



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            projectModal.classList.contains("open")
        ) {

            closeProject();

        }


        if (
            resumeModal.classList.contains("open")
        ) {

            closeResume();

        }

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(
            element
        );

    });



/* =====================================================
   MOBILE MENU
===================================================== */

const nav =
    document.getElementById("nav");


const menuToggle =
    document.getElementById(
        "menuToggle"
    );


menuToggle.addEventListener(
    "click",
    () => {

        const open =
            nav.classList.toggle(
                "open"
            );


        menuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );

    }
);


nav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    [
        ...document.querySelectorAll(
            "main section[id]"
        )
    ];


const navLinks =
    [
        ...document.querySelectorAll(
            ".nav a"
        )
    ];


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(link => {

                        link.classList.toggle(

                            "active",

                            link.getAttribute(
                                "href"
                            ) ===
                            `#${entry.target.id}`

                        );

                    });

                }

            });

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(
        section
    );

});



/* =====================================================
   CURSOR GLOW
===================================================== */

const glow =
    document.querySelector(
        ".cursor-glow"
    );


window.addEventListener(
    "pointermove",
    event => {

        glow.style.left =
            `${event.clientX}px`;

        glow.style.top =
            `${event.clientY}px`;

    }
);
