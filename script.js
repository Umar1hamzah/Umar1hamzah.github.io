/* ==========================================
   PROJECT DATA STORE (STAR METHOD DESIGN)
   ========================================== */
const projectsData = {
    'gemastik-iot': {
        title: 'Sistem Koordinasi Jamaah Adaptif',
        tag: 'Gemastik XVIII 2025 Finalist',
        category: 'IoT & Machine Learning',
        stack: ['ESP32-WROOM-32', 'GPS NEO-8M', 'ESP-NOW Mesh Network', 'DBSCAN Anomaly Clustering', 'One-Class SVM', 'MapLibre', 'Arduino IDE'],
        desc: 'Hybrid dual-mode IoT platform built for Pilgrim coordination during Umrah/Hajj. It functions offline in mesh networks where cellular signals are restricted or unavailable, syncs automatically to the cloud when connections restore, and uses machine learning to detect lost pilgrims.',
        problem: 'During Hajj and Umrah, millions of pilgrims gather, causing cell towers to congest or fail. Pilgrims (especially elderly) easily lose track of their groups, and coordinators struggle to find them without active internet.',
        solution: 'I designed a dual-mode communication platform. Pilgrims carry ESP32 tracker devices equipped with GPS modules. Using ESP-NOW mesh networking protocol, these nodes broadcast coordinates peer-to-peer. A group leader device accumulates all locations, renders them offline using MapLibre, and runs clustering (DBSCAN) and classification (One-Class SVM) to detect when a node drifts abnormally.',
        achievements: [
            'Implemented a two-layer anomaly detection model that runs in hardware-constrained environments with 94% accuracy and a low 6% false alarm rate.',
            'Built functional offline real-time maps, integrated SOS emergency buttons, Push-to-Talk voice, and automated Tawaf/Sai lap counters.',
            'Network initialization completes in under 25 seconds for a mesh network of active devices.',
            'Recognized as a National Finalist at GEMASTIK XVIII 2025 (Smart Devices Category).'
        ],
        github: 'https://github.com/Umar1hamzah/MobileComputing_Uas' // Placeholder/Link
    },
    'goalpost': {
        title: 'GOALPOST',
        tag: 'UAS Web Advance Development 2',
        category: 'Full-Stack Web (Community)',
        stack: ['React (Vite)', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'JWT Authentication', 'CSS'],
        desc: 'A full-stack community-driven football portal and news hub. It supports article creation, multi-image uploads, interactive commenting, liking, bookmarking, and tournament match tracking.',
        problem: 'Football communities need a consolidated, fast hub to publish news and discuss matches. Standard platforms often suffer from slow queries, lack role-based moderation, and have complex tournament management dashboards.',
        solution: 'I built GOALPOST using React on the frontend and Express/Node.js on the backend. I designed a relational schema in Prisma ORM with cascade deletions and composite primary keys for user interactions (likes & bookmarks). I implemented multi-role access control (Admin / User) with JWT authentication and secure password hashing. It includes a tournament match tracking simulator to record match status, phase groups, scores, and disciplinary statistics (cards).',
        achievements: [
            'Engineered dynamic database relationships supporting cascade delete rules and composite unique constraints for Likes and Bookmarks.',
            'Implemented secure multi-role authorization (Admin dashboard for blocking users/moderation; User dashboard for publishing).',
            'Integrated multiple-image uploads per article linked dynamically via relational tables.',
            'Built responsive client UI featuring custom filters for match phases, article categories, and interactive user feeds.',
            'Successfully containerized/structured codebase for deployment.'
        ],
        github: 'https://github.com/Umar1hamzah/GoalPost_Uas_Wadv.git'
    },
    'recipe-app': {
        title: 'Aplikasi Buku Masak (Recipe App)',
        tag: 'UAS Mobile Computing',
        category: 'Mobile (Flutter)',
        stack: ['Flutter (Dart)', 'Provider (State)', 'Hive NoSQL', 'Http package', 'Image Picker', 'Path Provider', 'TheMealDB API'],
        desc: 'A mobile cookbook application featuring advanced search logic, isolated multi-user storage, device camera integration, and REST client imports.',
        problem: 'Many recipe applications lack isolated data storage for multiple accounts on a single device, lack camera integrations for custom uploads, or do not offer offline access to imported online recipes.',
        solution: 'I developed a Flutter app using Provider state management. I integrated Hive (NoSQL key-value store) to handle isolated local data boxes for recipes, user sessions, and shopping lists. The app accesses the device camera via Image Picker, encodes photographs to Base64 strings, and stores them in Hive. I bound http endpoints to TheMealDB API, allowing users to query, view, and save international recipes to their local offline boxes.',
        achievements: [
            'Created local multi-user authentication with auto-login session persistence (no re-login required when reopening the app).',
            'Built real-time search logic permitting users to search recipes either by culinary name or specific kitchen ingredients.',
            'Implemented a special Admin Mode using restricted credentials to inspect all user database records.',
            'Integrated a functional Shopping List Manager to catalog needed recipe ingredients.'
        ],
        github: 'https://github.com/Umar1hamzah/MobileComputing_Uas'
    },
    'trakpoint': {
        title: 'TrakPoint Fleet Monitoring',
        tag: 'Semester 2, 2024 Project',
        category: 'IoT & Web Dashboard',
        stack: ['PHP', 'MySQL', 'Node.js', 'Mosquitto MQTT', 'WebSockets', 'ESP32', 'GPS NEO-6M', 'SIM800L', 'Figma'],
        desc: 'A smart truck fleet tracking system. It combines an onboard ESP32 vehicle tracker transmitting real-time coordinates over MQTT, and a multi-role PHP web dashboard displaying telemetry.',
        problem: 'Fleet managers lack visibility on real-time transit telemetry, leading to unauthorized detours, unnoticed overspeeding, and difficulty verifying trip logs.',
        solution: 'I engineered the hardware and software. Onboard trucks, an ESP32 combined with a GPS NEO-6M detects position, and a SIM800L module publishes GPS coordinates to a Mosquitto MQTT broker. A backend WebSocket script relays MQTT payloads to a PHP/JS web client dashboard, projecting vehicle pins on interactive maps.',
        achievements: [
            'Built real-time tracking loops with instant alert flags for overspeeding, idle times, and deviation warnings.',
            'Designed full UI/UX mockups in Figma, translating them into clean responsive HTML/CSS dashboards.',
            'Created three user roles (Admin / Operator / Driver) with restricted authorization dashboards and trip history logs.'
        ],
        github: 'https://github.com/Umar1hamzah/MobileComputing'
    }
};

/* ==========================================
   THEME TOGGLE SYSTEM
   ========================================== */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check saved theme
const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('portfolio-theme', 'dark');
    }
});

/* ==========================================
   NAVIGATION ACTIVE LINK & SCROLL
   ========================================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==========================================
   PROJECT FILTER SYSTEM
   ========================================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'flex';
                // Trigger quick entry animation
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/* ==========================================
   PROJECT MODAL POPUP SYSTEM
   ========================================== */
const projectModal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-project-body');

function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Render stack tags
    const stackHTML = data.stack.map(s => `<span class="m-stack-tag">${s}</span>`).join('');
    
    // Render achievement bullets
    const bulletsHTML = data.achievements.map(b => `<li>${b}</li>`).join('');

    modalBody.innerHTML = `
        <h2 class="m-title">${data.title}</h2>
        <span class="m-tag">${data.tag}</span>
        
        <p class="m-desc">${data.desc}</p>
        
        <h3 class="m-bullets-title"><i class="fa-solid fa-circle-info"></i> Context &amp; Problem</h3>
        <p class="m-desc" style="font-size: 0.95rem; margin-bottom: 20px;">${data.problem}</p>
        
        <h3 class="m-bullets-title"><i class="fa-solid fa-gears"></i> Solution &amp; Architecture</h3>
        <p class="m-desc" style="font-size: 0.95rem; margin-bottom: 24px;">${data.solution}</p>
        
        <h3 class="m-bullets-title"><i class="fa-solid fa-trophy"></i> Key Achievements</h3>
        <ul class="m-bullets">
            ${bulletsHTML}
        </ul>

        <h3 class="m-bullets-title"><i class="fa-solid fa-layer-group"></i> Tech Stack</h3>
        <div class="m-stack">
            ${stackHTML}
        </div>

        <div class="m-footer">
            <a href="${data.github}" target="_blank" class="btn btn-primary">
                <i class="fa-brands fa-github"></i> View on GitHub
            </a>
            <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
        </div>
    `;

    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scroll
}

// Close modals when clicking outside contents
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

/* ==========================================
   CONTACT FORM SUBMISSION HANDLER
   ========================================== */
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const msgVal = document.getElementById('message').value;

    if (nameVal && emailVal && msgVal) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        
        // Submit via FormSubmit AJAX API
        fetch("https://formsubmit.co/ajax/hmzhumar@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: nameVal,
                email: emailVal,
                message: msgVal
            })
        })
        .then(response => response.json())
        .then(data => {
            submitBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
            submitBtn.innerHTML = 'Message Sent! <i class="fa-solid fa-circle-check"></i>';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }, 3000);
        })
        .catch(error => {
            console.error('Error:', error);
            submitBtn.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
            submitBtn.innerHTML = 'Error Sending <i class="fa-solid fa-circle-xmark"></i>';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
            }, 3000);
        });
    }
});

/* ==========================================
   MOBILE MENU TOGGLE
   ========================================== */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
        icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'var(--bg-main)';
        navMenu.style.borderBottom = '1px solid var(--border-color)';
        navMenu.style.padding = '20px';
        navMenu.style.gap = '16px';
        icon.classList.replace('fa-bars', 'fa-xmark');
    }
});
