## Personal Portfolio (iPortfolio)

A modern, responsive personal portfolio website built with Bootstrap 5.3. It includes sections for hero, about, resume, portfolio, services, and contact, plus detail pages and a starter page. Animations, filtering, lightbox galleries, and counters are powered by lightweight vendor libraries.

> Base UI is adapted from the iPortfolio template by BootstrapMade; see Credits and Licensing below.

## Table of contents
- **Overview**
- **Features**
- **Tech stack**
- **Project structure**
- **Getting started**
- **Customization guide**
- **Contact form setup**
- **Deployment**
- **Licensing**
- **Credits**

## Overview
- **Type**: Static website (no build step required)
- **Entry point**: `index.html`
- **Detail pages**: `portfolio-details.html`, `service-details.html`, `starter-page.html`
- **Styling/JS**: Located under `assets/`

## Features
- **Responsive layout**: Built with Bootstrap 5.3 utility classes and components.
- **Animated hero text**: Typewriter effect powered by Typed.js.
- **Scroll animations**: Elements animate on scroll using AOS.
- **Portfolio filtering**: Isotope provides dynamic filtering and layout.
- **Lightbox gallery**: GLightbox for viewing portfolio images.
- **Sliders**: Swiper instances on details pages.
- **Counters**: PureCounter for animated statistics.
- **Skills animation**: Waypoints triggers progress bars on reveal.
- **Contact form (AJAX)**: Client-side validation with graceful loading/feedback.

## Tech stack
- **Core**: HTML5, CSS3, JavaScript (vanilla)
- **Framework**: Bootstrap 5.3, Bootstrap Icons
- **Libraries** (under `assets/vendor/`):
  - **AOS** (on scroll animations)
  - **GLightbox** (lightbox)
  - **Swiper** (sliders)
  - **Isotope Layout** + **ImagesLoaded** (filtering/layout)
  - **Typed.js** (typewriter effect)
  - **Waypoints** (scroll triggers)
  - **PureCounter** (animated counters)
  - **PHP Email Form (validate.js)** (client-side form handler)

Note: `.scss` sources are not included in this repo (available in the pro template). Customize `assets/css/main.css` directly or add your own stylesheet overrides.

## Project structure
```text
/
├─ index.html
├─ portfolio-details.html
├─ service-details.html
├─ starter-page.html
├─ assets/
│  ├─ css/
│  │  └─ main.css
│  ├─ js/
│  │  └─ main.js
│  ├─ img/            # Images (profile, hero, portfolio, etc.)
│  └─ vendor/         # Third-party libraries (Bootstrap, AOS, GLightbox, Swiper, etc.)
├─ forms/
│  ├─ contact.php     # Server-side handler (requires PHP + pro library)
│  └─ Readme.txt
├─ LICENSE            # MIT license for this repo
└─ Readme.txt         # BootstrapMade template readme (short)
```

## Getting started
- **Option 1 (open directly)**: Double-click `index.html` to open in your browser.
- **Option 2 (recommended, local server)**:
  - **Python**:
    ```bash
    python3 -m http.server 8080
    ```
    Then open `http://localhost:8080`.
  - **Node** (if you have it):
    ```bash
    npx serve . --listen 8080
    ```

## Customization guide
- **Branding**
  - Update the site name in `index.html` header (`h1.sitename`).
  - Replace profile and hero images in `assets/img/` (e.g., `my-profile-img.jpg`, `hero-bg.jpg`).
  - Update social links in the header.
- **Hero typed text**
  - Edit `data-typed-items` on the `.typed` element in `index.html` (comma-separated values).
- **Content**
  - Edit text in sections: About, Resume, Portfolio, Services, Contact inside `index.html`.
  - Portfolio details and service details content reside in `portfolio-details.html` and `service-details.html`.
- **Styles**
  - Adjust `assets/css/main.css`. If you prefer Sass sources, obtain the pro template or add your own Sass pipeline.
- **JavaScript behavior**
  - Site interactions are in `assets/js/main.js` (menu toggle, AOS init, Typed.js init, counters, skills animation, isotope filters, scrollspy, etc.).

## Contact form setup
The contact form in `index.html` posts to `forms/contact.php` and uses `assets/vendor/php-email-form/validate.js` for AJAX/feedback. To enable server-side email delivery:

- **PHP handler (recommended if you have PHP hosting)**
  1. Open `forms/contact.php` and set:
     - `$receiving_email_address = 'you@example.com';`
  2. This script expects the pro library `assets/vendor/php-email-form/php-email-form.php`. The file is not included in this repo; obtain it via the pro version of the template.
  3. Optional: configure SMTP in `forms/contact.php` if required by your host.
  4. Ensure your hosting environment runs PHP.

- **Static hosting alternatives (if you do not have PHP)**
  - Use a serverless or third-party form service (e.g., Netlify Forms, Formspree, Basin). You will need to update the `<form action="...">` and potentially replace or adjust `validate.js` to match the service’s expected response (the current validator expects `OK`). Follow your chosen provider’s setup guide.

- **reCAPTCHA (optional)**
  - Add `data-recaptcha-site-key="<your_site_key>"` to the form element and include Google reCAPTCHA v3 script on the page.

## Deployment
- **Static hosts (no PHP)**: GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc. Drag-and-drop or connect your repo; no build command is needed; publish directory is the repository root. Note: The PHP contact form will not work on pure static hosts unless you use serverless/third-party forms.
- **PHP-capable hosts**: Any shared/VPS hosting with PHP will work. Upload the project as-is. Ensure the PHP email form library is present if you use the provided `contact.php` handler.

## Licensing
- **This repository**: MIT License (see `LICENSE`).
- **Template**: Based on iPortfolio by BootstrapMade. Review their [license](https://bootstrapmade.com/license/) for template usage terms.
- **Vendors**: Third-party libraries under their respective licenses.

## Credits
- **Template**: iPortfolio by BootstrapMade ([template page](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/)).
- **Libraries**: Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper, Isotope, ImagesLoaded, Typed.js, Waypoints, PureCounter.

---
Maintained by: Rubel-CSTE