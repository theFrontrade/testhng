# 🧑‍💻 HNG User Profile & Contact Task

This project is part of the **HNG Internship** tasks.  
It showcases a **responsive personal portfolio interface** built using **HTML, CSS, and JavaScript** — including both a **User Profile Page**, a **Contact Form Page**, and an **About Me Page**.

---

## 🚀 Project Overview

This task demonstrates your ability to build **accessible, semantic, and responsive web pages** using modern frontend standards.

The project now includes **two major additions**:

1. **Contact Us Page** — a simple, validated contact form.  
2. **About Me Page** — a reflective, structured personal page.

---

## 🧠 Features

### 🪪 User Profile Page
- Displays user information such as:
  - Profile picture  
  - Full name  
  - Short bio or description  
  - Contact or social media links  
  - Dislikes
- Responsive and visually clean  
- Built with semantic HTML elements

### 💬 Contact Us Page
- Simple and accessible contact form  
- Includes validation for all fields  
- Displays helpful error and success messages  
- Fully keyboard-navigable  

**Required fields (with `data-testid` attributes):**
| Field | Test ID |
|-------|----------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Error Messages | `test-contact-error-<field>` (e.g. `test-contact-error-email`) |
| Success Message | `test-contact-success` |

**Validation Rules**
- All fields are required  
- Email must be valid (`name@example.com`)  
- Message must be at least 10 characters long  
- Success message appears only after valid submission  

**Accessibility**
- All inputs have linked `<label for="">` elements  
- Errors tied to inputs with `aria-describedby`  
- Fully keyboard accessible  
- Success message announced with `role="status"`

---

### 🙋‍♀️ About Me Page
A reflective and structured page sharing your personal insights during the HNG program.

**Required Sections (with `data-testid` attributes):**
| Section | Test ID |
|----------|----------|
| Bio | `test-about-bio` |
| Goals in this program | `test-about-goals` |
| Areas of low confidence | `test-about-confidence` |
| Note to future self | `test-about-future-note` |
| Extra thoughts | `test-about-extra` |

**Semantic Structure**
- Wrapped in `<main data-testid="test-about-page">`  
- Each section uses `<section>` with proper headings (`<h2>`, `<h3>`)  
- Uses semantic elements: `<p>`, `<ul>`, `<li>`, `<article>`, etc.

---

## 🎯 Acceptance Criteria

### ✅ Contact Us Page
- All required fields exist with correct `data-testid`s  
- Validation prevents invalid submissions  
- Success message appears only after valid input  
- Accessible and keyboard-friendly  

### ✅ About Me Page
- All required sections exist with correct `data-testid`s  
- Uses semantic HTML structure (`main`, `section`, `h2`, `p`, etc.)  

### ✅ General
- Semantic HTML throughout  
- Accessible (labels, ARIA, alt text)  
- Fully responsive (mobile → desktop)  
- Keyboard navigable  
- Code is modular, readable, and consistent  

---

## 🛠️ Tech Stack

- **HTML5** – semantic markup  
- **CSS3** – styling and responsiveness  
- **JavaScript (ES6)** – validation and interactivity  

---

## 🧩 Folder Structure

