document.addEventListener("DOMContentLoaded", function () {
    // 🚀 Login Form Submission
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Login function
            const username = document.getElementById("username").value.trim(); // Corrected ID
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("error-message");

            // Check credentials
            if (username === "admin" && password === "1234") {
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("username", username); // Store username
                window.location.href = "dashboard.html"; // Redirect
            } else {
                errorMessage.textContent = "Invalid username or password!";
                errorMessage.style.color = "red";
            }
        });

        // ✅ Cancel Button Functionality
        const cancelBtn = document.getElementById("cancelBtn");
        if (cancelBtn) {
            cancelBtn.addEventListener("click", function () {
                loginForm.reset();
                document.getElementById("error-message").textContent = "";
            });
        }

        // ✅ Forgot Password Alert
        const forgotPassword = document.getElementById("forgotPassword");
        if (forgotPassword) {
            forgotPassword.addEventListener("click", function () {
                alert("Reset password instructions have been sent to your email.");
            });
        }
    }

    // 🚀 Dashboard: Redirect if not logged in
    if (window.location.pathname.includes("dashboard.html")) {
        if (localStorage.getItem("loggedIn") !== "true") {
            window.location.href = "index.html"; // Redirect to login page
        }

        // 🎯 Set username in dashboard
        const dashboardUsername = document.getElementById("dashboard-username");
        if (dashboardUsername) {
            dashboardUsername.textContent = localStorage.getItem("username") || "User";
        }

        // ✅ Logout function
        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("username");
                window.location.href = "index.html";
            });
        }

        // 🎯 Chart.js: Display dashboard stats visually
        const chartElement = document.getElementById("dashboardChart");
        if (chartElement) {
            const ctx = chartElement.getContext("2d");
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Users", "Tasks", "Messages"],
                    datasets: [{
                        label: "Dashboard Stats",
                        data: [1200, 5, 3], // Static data
                        backgroundColor: ["blue", "red", "green"]
                    }]
                }
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Collapsible Sections
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Logout Function (if needed)
    function logout() {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");

    // Sidebar links
    document.getElementById("dashboard-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadDashboard();
    });

    document.getElementById("home-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadHome();
    });

    document.getElementById("about-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadAbout();
    });

    document.getElementById("service-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadService();
    });

    document.getElementById("career-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadCareer();
    });

    document.getElementById("contact-link").addEventListener("click", function (event) {
        event.preventDefault();
        loadContact();
    });

    //Functions to load different sections dynamically
    function loadDashboard() {
        mainContent.innerHTML = `
            <h1>Dashboard</h1>
            <section class="stats-container">
                <div class="stat-card"><h2>113</h2><p>Opened Jobs</p><button class="view-btn">View</button></div>
                <div class="stat-card"><h2>05</h2><p>Upcoming Events</p><button class="view-btn">View</button></div>
                <div class="stat-card"><h2>47</h2><p>Applications received</p><button class="view-btn">View</button></div>
                <div class="stat-card"><h2>3</h2><p>Interview Tips and Resources</p><button class="view-btn">View</button></div>
            </section>
        `;
    }

    
    function loadHome() {
        document.body.style.background = "url('./images/company4.jpeg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    
        mainContent.innerHTML = `
    <h1>Empowering Businesses with</h1> 
    <h1>Innovative Solutions</h1>
    <div class="home-container">
        <p>We help companies grow with cutting-edge technology and expert guidance.</p>
        <button id="learnMoreBtn" class="cta-button">Learn More</button>
        
        <!-- Hidden Information Section -->
        <div id="moreInfo" class="hidden">
            <p>At out company, we believe in innovation, excellence, and customer-centric solutions. Our goal is to empower businesses with cutting-edge technology and strategies that drive success. Whether you're a startup looking for guidance or an established enterprise aiming to scale, we provide the expertise and tools to help you achieve your goals..</p>
        </div>
    </div>
`;

// JavaScript to Show/Hide Additional Information
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    const info = document.getElementById("moreInfo");
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block"; // Show content
    } else {
        info.style.display = "none"; // Hide content
    }
});
}
function loadAbout() {
    document.body.style.background = "url('./images/company5.jpeg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    mainContent.innerHTML = `
<h1>Driving Innovation with AI, Cloud Computing,</h1>
<h1>and Data Analytics</h1> 
<div class="about-container">
    <p> We are a leading technology solutions provider specializing in AI and data analytics.</p>
    <p> Our goal is to empower businesses with innovative tools to drive growth and efficiency..</p>
    <button id="KnowMoreBtn" class="cta-button">Know More</button>
    
    <!-- Hidden Information Section -->
    <div id="moreInfo" class="hidden">
    <h1>Mission & Vision</h1>
        <p>Mission: To provide cutting-edge digital solutions that enhance business performance, streamline operations, and drive innovation.</p>
        <p>Vision: To be a global leader in technology solutions, transforming businesses with AI-driven insights and automation.</p>
         <h1>Company Values</h1>
        <p> Innovation: We embrace the latest technologies to deliver forward-thinking solutions.</p>
<p>Integrity: We prioritize transparency and ethical business practices.</p>
<p>Customer-Centric Approach: We put our clients first, ensuring tailored solutions that fit their needs.</p>
<p>Excellence: We are committed to delivering top-quality products and services.</p>
<h1>History</h1>
<p>Founded in 2015, Dataphi started as a small team of tech enthusiasts passionate about AI and data analytics. Over the years, we have expanded globally, serving businesses across various industries. Today, we continue to lead in digital transformation, helping companies leverage technology for success </p>
    </div>
`;

// JavaScript to Show/Hide Additional Information
document.getElementById("KnowMoreBtn").addEventListener("click", function() {
const info = document.getElementById("moreInfo");
if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block"; // Show content
} else {
    info.style.display = "none"; // Hide content
}
});
}   
    
function loadService() {
    document.body.style.background = "url('./images/company3.jpeg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    mainContent.innerHTML = `
<h1>Transforming Businesses with Advanced AI,</h1> 
<h1>and Data-Driven Innovation.</h1>
<div class="service-container">
    <p>Our Services: Empowering Businesses with Technology</p>
    <button id="KnowMoreBtn" class="cta-button">Know More</button>
    
    <!-- Hidden Information Section -->
    <div id="moreInfo" class="hidden">
       <p>Our AI-driven business solutions help automate processes, improve decision-making, and enhance customer engagement, while our cloud computing services offer flexible, cost-effective, and highly secure infrastructure for seamless business operations. Additionally, our data analytics and business intelligence services enable organizations to leverage real-time insights for strategic decision-making.</p>
   <section id="benefits">
    <h2>Benefits of Our Solutions</h2>
    <p>✔ <strong>Increased Efficiency</strong> – Automate repetitive tasks, allowing teams to focus on strategic work.</p>
    <p>✔ <strong>Cost Savings</strong> – Optimize IT expenses with scalable and affordable cloud and AI solutions.</p>
    <p>✔ <strong>Better Decision-Making</strong> – Use data-driven insights for improved business strategies.</p>
    <p>✔ <strong>Enhanced Security</strong> – Protect sensitive information with advanced cybersecurity measures.</p>
    <p>✔ <strong>Scalability & Flexibility</strong> – Grow your business without worrying about infrastructure limitations.</p>
    <p>✔ <strong>Competitive Advantage</strong> – Leverage the latest technologies to stay ahead of the competition.</p>
</section>

       </div>
</div>
`;

// JavaScript to Show/Hide Additional Information
document.getElementById("KnowMoreBtn").addEventListener("click", function() {
const info = document.getElementById("moreInfo");
if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block"; // Show content
} else {
    info.style.display = "none"; // Hide content
}
});
}   
function loadCareer() {
    document.body.style.background = "url('./images/company6.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    mainContent.innerHTML = `
<h1>Join Dataphi and thrive in innovative,inclusive environment  </h1> 
<h1> where talent meets opportunity in AI, cloud computing,</h1>
<h1>and data analytics.</h1>
<div class="career-container">
    <p>We help companies grow with cutting-edge technology and expert guidance.</p>
    <button id="ExploreMoreBtn" class="cta-button">Explore More</button>
    
    <!-- Hidden Information Section -->
    <div id="moreInfo" class="hidden">
    <h2>Why Work With Us?</h2>
    
    <p><strong>✅ Innovative Work Environment</strong> – Be part of a team that values creativity, collaboration, and problem-solving.</p>
    <p><strong>✅ Career Growth & Development</strong> – Access continuous learning opportunities, mentorship programs, and leadership training.</p>
    <p><strong>✅ Work-Life Balance</strong> – We promote a healthy work culture with flexible schedules and remote work options.</p>
    <p><strong>✅ Competitive Benefits</strong> – Enjoy competitive salaries, health benefits, and performance-based rewards.</p>
    <p><strong>✅ Diversity & Inclusion</strong> – We celebrate diversity and believe in fostering an inclusive workplace for all.</p>

    <h2>Current Job Openings</h2>
    <p>We are always looking for talented individuals to join our team. Explore opportunities in:</p>
    
    <ul>
        <li>📌 Software Development</li>
        <li>📌 Data Science & Analytics</li>
        <li>📌 Cloud Engineering</li>
        <li>📌 Cybersecurity</li>
        <li>📌 Project Management</li>
        <li>📌 Sales & Marketing</li>
    </ul>

    <p>If you’re passionate about technology and looking to make a meaningful impact, we’d love to hear from you! Apply today and be part of our journey toward innovation and excellence.</p>

    <a href="#" class="cta-button">View Open Positions</a>
    <a href="#" class="cta-button">Submit Your Resume</a>
</section>

       </div>
</div>
`;

// JavaScript to Show/Hide Additional Information
document.getElementById("ExploreMoreBtn").addEventListener("click", function() {
const info = document.getElementById("moreInfo");
if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block"; // Show content
} else {
    info.style.display = "none"; // Hide content
}
});
}
function loadContact() {
    document.body.style.background = "url('./images/company7.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";

    mainContent.innerHTML = `

    <section class="contact-container">
        <h2>Contact Us</h2>
        <p>..............</p>
        <p>Have any questions? Reach out to us and we’ll get back to you within 24 hours.</p>

        <div class="contact-content">
            <!-- Contact Form -->
            <form id="contactForm">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" required>

                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required>

                <label for="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" placeholder="Enter your phone number">

                <label for="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="Write your message here..." required></textarea>

                <button type="submit">Send Message</button>
                <p id="form-message"></p>
            </form>

            <!-- Contact Info -->
            <div class="contact-info">
                <h3>Our Office</h3>
                <p>📍 15, 60 Feet Rd, KHB Colony, 6th Block, Koramangala, Bengaluru, Karnataka 560095</p>
                <p>📧 Email: support@dataphi.com</p>
                <p>📞 Phone:80 4202 7095</p>
                <p>🕒 Business Hours: Mon - Fri (9:30 AM - 6:30 PM)</p>

                <!-- Social Media Links -->
                <div class="social-links">
                    <p><a href="#" target="_blank">🔗 LinkedIn</a><p>
                    <p><a href="#" target="_blank">🐦 Twitter</a></p>
                    <p><a href="#" target="_blank">📘 Facebook</a></p>
                    <p><a href="#" target="_blank">📸 Instagram</a></p>
                </div>
            </div>
        </div>

        <!-- Google Map -->
        <div class="map-container">
           <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.403913929822!2d77.62184757507644!3d12.935677290840913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d6bab66d1%3A0x176779d0074c8e4a!2sKoramangala%2C%20Bengaluru%2C%20Karnataka%20560095!5e0!3m2!1sen!2sin!4v1711623456789" 
    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>

        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>

`;
}
});
document.getElementById("logout-btn").addEventListener("click", function() {
    window.location.href = "login.html"; // Change "login.html" to your actual login page
});

document.addEventListener("DOMContentLoaded", function() {
    // Collapsible Sections
    let collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });

    // Simulated Job Data (Dynamic Loading)
    let jobList = document.getElementById("job-list");
    let jobs = [
        "Software Engineer - Full Stack",
        "Data Analyst - Remote",
        "Project Manager - On-site",
        "UI/UX Designer",
        "Marketing Executive",
        "DevOps Engineer",
        "Business Analyst",
        "Cybersecurity Specialist",
        "Frontend Developer",
        "Backend Developer"
    ];

    // ✅ Populate Job List with Clickable Buttons
    jobList.innerHTML = jobs.map(job => `<li><button class="job-item">${job}</button></li>`).join('');

    // Job Search Functionality
    document.getElementById("job-search").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        let jobs = document.querySelectorAll("#job-list li");

        jobs.forEach(job => {
            let text = job.textContent.toLowerCase();
            job.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    // Event Search (Fix incorrect selector `#event-list`)
    document.getElementById("event-search").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        let events = document.querySelectorAll("#event-list li"); // Changed from `#event-list`
        
        events.forEach(event => {
            let text = event.textContent.toLowerCase();
            event.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    // Interview Tips Search
    document.getElementById("tips-search").addEventListener("input", function () {
        let filter = this.value.toLowerCase();
        let tips = document.querySelectorAll("#tips-list li");

        tips.forEach(tip => {  // Fixed duplicate variable name `tips`
            let text = tip.textContent.toLowerCase();
            tip.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    // ✅ Apply Button Functionality
    let applyContainer = document.getElementById("apply-container");
    let applyButton = document.getElementById("apply-button");

    // Select newly added job items
    document.querySelectorAll(".job-item").forEach(job => {
        job.addEventListener("click", function() {
            // Remove previous selection
            document.querySelectorAll(".job-item").forEach(item => {
                item.classList.remove("selected-job");
            });

            // Highlight selected job
            this.classList.add("selected-job");

            // Get job title
            let selectedJob = this.textContent.trim();

            // Store job title in button
            applyButton.setAttribute("data-job", selectedJob);

            // Show apply button below the selected job
            applyContainer.style.display = "block";

            // Update button text
            applyButton.textContent = `Apply for ${selectedJob}`;

            // Move apply button below selected job
            this.parentNode.insertAdjacentElement("afterend", applyContainer);
        });
    });

    // ✅ Apply Button Click Event
    applyButton.addEventListener("click", function() {
        let jobTitle = this.getAttribute("data-job");
        alert(`You are applying for: ${jobTitle}`);
        // Redirect to an application form
        window.location.href = `apply.html?job=${encodeURIComponent(jobTitle)}`;
    });
});
function viewEventDetails(eventId) {
    const eventInfo = {
        careerFair: {
            title: "Career Fair - April 15",
            description: "Meet top employers, submit your resume, and attend on-site interviews."
        },
        techTalk: {
            title: "Tech Talk - May 1",
            description: "Join industry leaders to discuss the latest tech trends and innovations."
        },
        networkingEvent: {
            title: "Networking Event - June 10",
            description: "Expand your professional network with recruiters and peers."
        },
        resumeWorkshop: {
            title: "Resume Workshop - July 5",
            description: "Get expert advice on building a standout resume."
        },
        aiConference: {
            title: "AI Conference - August 20",
            description: "Explore the future of Artificial Intelligence with leading experts."
        }
    };

    const modal = document.getElementById("eventModal");
    document.getElementById("modalTitle").textContent = eventInfo[eventId].title;
    document.getElementById("modalDescription").textContent = eventInfo[eventId].description;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("eventModal").style.display = "none";
}

// Optional: Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById("eventModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//intrw tps
