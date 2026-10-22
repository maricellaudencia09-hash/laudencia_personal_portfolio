
// ==========================================
// PROFESSIONAL PORTFOLIO - JAVASCRIPT
// ==========================================

const credentials = [
  {
    title: "Agentic AI",
    organizer: "Northeastern College - 10th I.T. Week 2026",
    category: "Seminars",
    date: "August 27, 2026",
    image: "assets/Certificates/Seminars/Agentic AI.jpg",
    verifyUrl: ""
  },
  {
    title: "Introduction to Machine Learning Concepts",
    organizer: "Microsoft Learn",
    category: "Microsoft Learn",
    date: "October 12, 2026",
    image: "assets/Certificates/Microsoft/microsoft1.jpg",
    verifyUrl: ""
  },
  {
    title: "Computer Hardware Basics",
    organizer: "Cisco Networking Academy",
    category: "Cisco Networking Academy",
    date: "September 7, 2026",
    image: "assets/Certificates/Cisco/cisco2.jpg",
    verifyUrl: ""
  },
  {
    title: "Tech It to the Next Level: Careers in Emerging Technologies",
    organizer: "Department of Information and Communications Technology - DICT Palawan",
    category: "Webinars",
    date: "July 9, 2026",
    image: "assets/Certificates/Webinars/DICT1.jpg",
    verifyUrl: ""
  },
  {
    title: "Installing and Configuring Computer Systems",
    organizer: "Technical Education and Skills Development Authority",
    category: "TESDA",
    date: "July 6, 2026",
    image: "assets/Certificates/Tesda/Installing and Configuring Computer Systems.jpg",
    verifyUrl: ""
  },
  {
    title: "Integrating IoT in Capstone Project",
    organizer: "Northeastern College - 10th I.T. Week 2026",
    category: "Seminars",
    date: "August 27, 2026",
    image: "assets/Certificates/Seminars/Integrating Iot in Capstone Project.jpg",
    verifyUrl: ""
  },
  {
    title: "Programming Fundamentals",
    organizer: "Northeastern College - 10th I.T. Week 2026",
    category: "Seminars",
    date: "August 27, 2026",
    image: "assets/Certificates/Seminars/Pogramming Fundamentals.jpg",
    verifyUrl: ""
  },
  {
    title: "Video Editing Tips & Tricks",
    organizer: "Northeastern College - 10th I.T. Week 2026",
    category: "Seminars",
    date: "August 27, 2026",
    image: "assets/Certificates/Seminars/Video Editing Tips & Tricks.jpg",
    verifyUrl: ""
  },
  {
    title: "Introduction to Computer Systems Servicing",
    organizer: "Technical Education and Skills Development Authority",
    category: "TESDA",
    date: "July 15, 2026",
    image: "assets/Certificates/Tesda/Introduction to Computer Systems Servicing.jpg",
    verifyUrl: ""
  },
  {
    title: "Maintaining Computer Systems and Networks",
    organizer: "Technical Education and Skills Development Authority",
    category: "TESDA",
    date: "July 19, 2026",
    image: "assets/Certificates/Tesda/Maintaining Computer Systems and Networks.jpg",
    verifyUrl: ""
  },
  {
    title: "Setting Up Computer Networks",
    organizer: "Technical Education and Skills Development Authority",
    category: "TESDA",
    date: "October 19, 2026",
    image: "assets/Certificates/Tesda/Setting Up Computer Networks.jpg",
    verifyUrl: ""
  },
  {
    title: "Setting Up Computer Servers",
    organizer: "Technical Education and Skills Development Authority",
    category: "TESDA",
    date: "August 16, 2026",
    image: "assets/Certificates/Tesda/Setting Up Computer Servers.jpg",
    verifyUrl: ""
  },
  {
    title: "Optimize and Extend Microsoft 365 Copilot",
    organizer: "Microsoft Learn",
    category: "Microsoft Learn",
    date: "July 23, 2026",
    image: "assets/Certificates/Microsoft/microsoft2.jpg",
    verifyUrl: ""
  },
  {
    title: "IT Customer Support Basics",
    organizer: "Cisco Networking Academy",
    category: "Cisco Networking Academy",
    date: "August 25, 2026",
    image: "assets/Certificates/Cisco/ITCUSTOMERSB.jpg",
    verifyUrl: ""
  },
  {
    title: "Being a Hobbyist Game Developer in the Modern Era",
    organizer: "DICT Regional Office VIII - ICT Industry Development Bureau",
    category: "Webinars",
    date: "August 17, 2026",
    image: "assets/Certificates/Webinars/Being a Hobbyist Game Development In the Modern Era.jpg",
    verifyUrl: ""
  },
  {
    title: "Spot the Scam",
    organizer: "DICT ICT Literacy and Competency Development Bureau - Negros Island Region",
    category: "Webinars",
    date: "October 9, 2026",
    image: "assets/Certificates/Webinars/dict3.jpg",
    verifyUrl: ""
  },
  {
    title: "Cyber Hygiene 101",
    organizer: "DICT ICT Literacy and Competency Development Bureau - Negros Island Region",
    category: "Webinars",
    date: "October 2, 2026",
    image: "assets/Certificates/Webinars/dict4.jpg",
    verifyUrl: ""
  },
  {
    title: "Falling, Learning, Creating: The Indie Journey",
    organizer: "Department of Information and Communications Technology (DICT), Regional Office VIII",
    category: "Webinars",
    date: "August 27, 2026",
    image: "assets/Certificates/Webinars/press2.jpg",
    verifyUrl: ""
  },
  {
    title: "Ani-Sirib Award",
    organizer: "Municipality of Dingras, Ilocos Norte",
    category: "Awards & Achievements",
    date: "July 10, 2023",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/ani-sirib-maricel-laudencia.jpg",
    verifyUrl: ""
  },
  {
    title: "Dean's Lister - Second Semester, SY 2023-2024",
    organizer: "Northeastern College - College of Information Technology",
    category: "Awards & Achievements",
    date: "September 2, 2024",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/deans-lister-2023-2024.jpg",
    verifyUrl: ""
  },
  {
    title: "With Honors - Senior High School",
    organizer: "San Marcelino National High School",
    category: "Awards & Achievements",
    date: "July 13, 2023",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/with-honors-senior-high.jpg",
    verifyUrl: ""
  },
  {
    title: "On-the-Job Training Completion - Industry Immersion",
    organizer: "Office of the Mayor, Municipality of Dingras",
    category: "Awards & Achievements",
    date: "June 13, 2023",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/ojt-industry-immersion-completion.jpg",
    verifyUrl: ""
  },
  {
    title: "Dean's Lister - First Semester, SY 2025-2026",
    organizer: "Northeastern College - College of Information Technology",
    category: "Awards & Achievements",
    date: "January 23, 2026",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/deans-lister-2025-2026.jpg",
    verifyUrl: ""
  },
  {
    title: "Dean's Lister - First Semester, SY 2024-2025",
    organizer: "Northeastern College - College of Information Technology",
    category: "Awards & Achievements",
    date: "March 14, 2025",
    recipient: "Maricel Laudencia",
    image: "assets/Certificates/Awards/deans-lister-2024-2025.jpg",
    verifyUrl: ""
  }
];

// Add each public GitHub repository URL here to enable its project button.
const projectRepositories = {
  carbonel: "",
  habitQuest: "https://github.com/maricellaudencia09-hash/githubfolder",
  foodRecipe: "",
  studentSystem: "https://github.com/maricellaudencia09-hash/student_management_system",
  attendance: "https://github.com/maricellaudencia09-hash/luadencia_attendance_monitoring",
  onlineVoting: "https://github.com/maricellaudencia09-hash/voting_systems"
};

document.querySelectorAll(".project-repo-link").forEach((link) => {
  const url = projectRepositories[link.dataset.project];
  const projectName = link.closest(".project-card")?.querySelector(".project-body h3")?.textContent.trim();
  link.href = url || `https://github.com/search?q=${encodeURIComponent(projectName || "Maricel Laudencia")}&type=repositories`;
  if (!url) link.innerHTML = 'Find on GitHub <span aria-hidden="true">↗</span>';
  link.hidden = false;
});

// ------------------------------------------
// MOBILE NAVIGATION
// ------------------------------------------

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-toggle-icon");
const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeIcon.textContent = isDark ? "☀" : "☾";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#171321" : "#7048c9");
}

applyTheme(initialTheme);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

const sectionNavLinks = [...navLinks.querySelectorAll('a[href^="#"]')]
  .filter((link) => link.hash && link.hash !== "#");
const navSections = sectionNavLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionNavLinks.forEach((link) => {
        const isCurrent = link.hash === `#${entry.target.id}`;
        link.classList.toggle("is-current", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

  navSections.forEach((section) => sectionObserver.observe(section));
}

// ------------------------------------------
// CURRENT YEAR
// ------------------------------------------

// ------------------------------------------
// CREDENTIAL GALLERY
// ------------------------------------------

const credentialsGrid = document.getElementById("credentialsGrid");
const credentialSearch = document.getElementById("credentialSearch");
const credentialSort = document.getElementById("credentialSort");
const credentialFilters = document.getElementById("credentialFilters");
const credentialCount = document.getElementById("credentialCount");
const credentialEmpty = document.getElementById("credentialEmpty");

let selectedCategory = "All";
let searchText = "";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}

function isPlaceholder(item) {
  return !item.title ||
    item.title.toLowerCase().startsWith("replace with");
}

function getVisibleCredentials() {
  let items = credentials.filter((item) => {
    // Hide the sample placeholders until they are replaced with real details.
    if (isPlaceholder(item)) return false;

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchContent = [
      item.title,
      item.organizer,
      item.category,
      item.date,
      item.recipient
    ].join(" ").toLowerCase();

    const matchesSearch = searchContent.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const sortMode = credentialSort.value;

  if (sortMode === "az") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortMode === "newest") {
    items.sort((a, b) => {
      return dateValue(b.date) - dateValue(a.date);
    });
  } else if (sortMode === "oldest") {
    items.sort((a, b) => {
      return dateValue(a.date) - dateValue(b.date);
    });
  }

  return items;
}

function dateValue(date) {
  if (!date) return 0;
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function renderCredentials() {
  const items = getVisibleCredentials();

  credentialCount.textContent =
    `${items.length} ${items.length === 1 ? "credential" : "credentials"}`;

  credentialEmpty.hidden = items.length !== 0;
  credentialsGrid.hidden = items.length === 0;

  credentialsGrid.innerHTML = items.map((item, index) => {
    const safeTitle = escapeHTML(item.title);
    const safeOrganizer = escapeHTML(item.organizer);
    const safeCategory = escapeHTML(item.category);
    const safeDate = escapeHTML(item.date || "Date not specified");
    const safeRecipient = escapeHTML(item.recipient || "");
    const safeImage = escapeHTML(item.image);

    return `
      <article class="credential-card">
        <button
          class="credential-open"
          type="button"
          data-credential-index="${credentials.indexOf(item)}"
          aria-label="View ${safeTitle}"
        >
          <div class="credential-image">
            <img
              src="${safeImage}"
              alt="${safeTitle}"
              loading="lazy"
              onerror="this.style.display='none';"
            >
            <div class="image-placeholder">
              <strong>${safeCategory}</strong>
              <span>Credential preview</span>
            </div>
          </div>

          <div class="credential-info">
            <span class="credential-category">${safeCategory}</span>
            <h3>${safeTitle}</h3>
            <p>${safeOrganizer}</p>
            ${safeRecipient ? `<span class="credential-recipient">Award recipient: ${safeRecipient}</span>` : ""}
            <span class="credential-date">${safeDate}</span>
            <span class="credential-open-hint">View details ↗</span>
          </div>
        </button>
      </article>
    `;
  }).join("");
}

credentialSearch.addEventListener("input", (event) => {
  searchText = event.target.value.trim().toLowerCase();
  renderCredentials();
});

credentialSort.addEventListener("change", renderCredentials);

credentialFilters.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    credentialFilters.querySelectorAll(".filter-btn").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    selectedCategory = button.dataset.filter;
    renderCredentials();
  });
});

// ------------------------------------------
// CREDENTIAL PREVIEW MODAL
// ------------------------------------------

const credentialModal = document.getElementById("credentialModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalOrganizer = document.getElementById("modalOrganizer");
const modalDate = document.getElementById("modalDate");
const modalRecipient = document.getElementById("modalRecipient");

let previousFocus = null;

function openCredential(index) {
  const item = credentials[index];
  if (!item) return;

  previousFocus = document.activeElement;

  modalTitle.textContent = item.title;
  modalCategory.textContent = item.category;
  modalOrganizer.textContent = item.organizer || "";
  modalDate.textContent = item.date ? `Date: ${item.date}` : "";
  modalRecipient.textContent = item.recipient ? `Award recipient: ${item.recipient}` : "";

  modalImage.src = item.image || "";
  modalImage.alt = item.title;

  credentialModal.classList.add("open");
  credentialModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeCredential() {
  credentialModal.classList.remove("open");
  credentialModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

credentialsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-credential-index]");
  if (!button) return;

  openCredential(Number(button.dataset.credentialIndex));
});

modalClose.addEventListener("click", closeCredential);

credentialModal.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeCredential);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && credentialModal.classList.contains("open")) {
    closeCredential();
  }
});

// ------------------------------------------
// CONTACT LINKS
// ------------------------------------------

// Add social profile URLs when available.

const portfolioContact = {
  email: "maricellaudencia09@gmail.com",
  github: "https://github.com/maricellaudencia09-hash",
  linkedin: "https://www.linkedin.com/in/maricel-laudencia-80483a445?trk=contact-info"
};

const emailLink = document.getElementById("emailLink");
const githubLink = document.getElementById("githubLink");
const linkedinLink = document.getElementById("linkedinLink");

emailLink.href = `mailto:${portfolioContact.email}`;
emailLink.setAttribute("aria-label", "Send an email");

function configureSocialLink(element, url) {
  if (!url || url === "#") {
    element.hidden = true;
    return false;
  }

  element.href = url;
  element.hidden = false;
  return true;
}

const hasGithub = configureSocialLink(
  githubLink,
  portfolioContact.github
);

const hasLinkedin = configureSocialLink(
  linkedinLink,
  portfolioContact.linkedin
);


// ------------------------------------------
// INITIALIZE
// ------------------------------------------

renderCredentials();
