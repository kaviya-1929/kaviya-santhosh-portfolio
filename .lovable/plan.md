

# Portfolio Website for Kaviya Santhosh

## Design Direction
A **modern, tech-focused** portfolio with a dark aesthetic, subtle accent colors (teal/cyan), code-inspired design elements, and smooth scroll animations. Light theme only. Clean sans-serif typography (Inter/system fonts). Fully responsive for desktop, tablet, and mobile.

---

## Pages & Sections (Single-page scrolling layout)

### 1. Navigation Bar
- Fixed top navigation with links: Home, About, Skills, Experience, Projects, Services, Contact
- Smooth scroll to each section
- Mobile hamburger menu

### 2. Hero Section
- Large name display: **Kaviya Santhosh**
- Subtitle: *Software Development Engineer*
- Professional summary paragraph
- Profile photo (uploaded by user) with a modern frame/treatment
- Two CTA buttons: "View Projects" and "Contact Me"
- Subtle animated background elements (code-inspired dots/grid)

### 3. About Section
- Concise professional summary highlighting backend expertise
- Education card: B.E. in Electrical & Electronics, KPR Institute of Engineering and Technology (2020–2024)
- Tech-focused visual layout with clean cards

### 4. Skills Section
- Skills displayed as modern cards with icons
- **Primary Skills**: Java, Spring Boot, REST APIs, Microservices
- **Additional Skills**: ReactJS, HTML, CSS, MySQL, SQL, Python, Agile SDLC, Performance Optimization, Production Debugging
- Each skill card with an icon and label

### 5. Experience Section
- Vertical timeline layout
- **Kapture CX** with three roles:
  - SDE II (Oct 2025 – Dec 2025)
  - SDE (Jul 2024 – Sep 2025)
  - SDE Trainee (Jul 2023 – Jul 2024)
- **Sai Incubation Center** — IoT Intern (Dec 2022)
- Key achievements listed as bullet points under each role

### 6. Projects Section
- Card-based layout with hover effects
- **College Stack-Based Website** — built with HTML, CSS, JavaScript
- GitHub link placeholder and project description
- Space for additional projects to be added later

### 7. Services Section
- Two service cards: **Backend Development** and **API Development**
- Short description + relevant tech icons per card

### 8. Contact Section
- Direct contact info displayed:
  - 📍 Coimbatore, India
  - 📧 kaviyasanthosh0029@gmail.com
  - 📞 +91 8870180847
  - 💼 LinkedIn link
- **Working contact form** (Name, Email, Message, Submit) powered by Lovable Cloud edge function to receive messages
- Success/error toast notifications

---

## Backend (Lovable Cloud)
- **Edge function** to handle contact form submissions
- Form validation with Zod on both client and server side
- Messages stored in a Supabase database table for later retrieval

---

## Technical Highlights
- Single-page application with smooth scroll navigation
- Responsive design (mobile, tablet, desktop)
- Subtle scroll-triggered animations
- Dark, tech-focused color palette with teal/cyan accents
- Accessible and fast-loading

