# Corporate Website Template - Next.js & Tailwind CSS

## Introduction
Thank you for purchasing the Corporate Website Template! This template is built with Next.js 14 and Tailwind CSS, designed for modern, responsive, and high-performance corporate websites. Below you will find instructions for installation, usage, customization, and important notes.

---

## Table of Contents
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Available Pages & Components](#available-pages--components)
- [Assets & Images](#assets--images)
- [Fonts & Icons](#fonts--icons)
- [Performance & SEO](#performance--seo)
- [Credits & Licenses](#credits--licenses)
- [Support](#support)

---

## Installation
1. **Extract the package** to your desired directory.
2. Open a terminal in the project root and run:
   ```bash
   npm install
   # or
   yarn install
   ```
3. To start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Visit `http://localhost:3000` in your browser.

---

## Project Structure
```
my-company/
├── public/                # Static assets (images, favicon, etc.)
├── src/
│   ├── app/               # Main app pages (Next.js routing)
│   ├── components/        # Reusable UI components
│   ├── data/              # JSON/data files
│   └── lib/               # Utility functions
├── styles/                # Global styles (if any)
├── package.json           # Project dependencies and scripts
└── ...
```

---

## Usage
- All main pages are located in `src/app/` (e.g., `/about`, `/service`, `/project`, `/blog`, `/contact`).
- The layout, navbar, and footer are shared across all pages for consistency.
- To build for production:
  ```bash
  npm run build
  npm start
  # or
  yarn build && yarn start
  ```

---

## Customization
- **Colors & Styles:**
  - Edit `tailwind.config.js` for color palette and theme changes.
  - Use Tailwind utility classes in components for quick style adjustments.
- **Logo & Branding:**
  - Replace `public/images/7459344.jpg` and other logo files with your own.
- **Content:**
  - Update text, images, and links in the components inside `src/components/ui/` and page files in `src/app/`.
- **Add/Remove Pages:**
  - Add new files in `src/app/` for new pages. Use existing pages as a template.
- **SEO:**
  - Update meta tags in `src/app/layout.tsx` or add a custom `_document.tsx` if needed.

---

## Available Pages & Components
- **Pages:** Home, About, Services, Projects, Blog, Contact
- **Components:** Navbar, Footer, AboutUs, Blog, Projects, Services, Testimonials, ParallaxScroll, etc.
- **Shared:** All main sections are modular and reusable.

---

## Assets & Images
- All images are stored in `public/images/` and its subfolders.
- Replace sample images with your own for production use.
- Ensure you have the right to use all images you include.

---

## Fonts & Icons
- Uses [Rubik](https://fonts.google.com/specimen/Rubik) font via Next.js font optimization.
- Icons from [FontAwesome](https://fontawesome.com/) (free version).

---

## Performance & SEO
- Built with Next.js for fast performance and SEO-friendly routing.
- Uses Next.js `<Image />` for optimized images.
- Responsive and mobile-friendly by default.

---

## Credits & Licenses
- **Images:** Demo images are for preview only. Replace with your own or use free stock images.
- **Icons:** FontAwesome Free
- **Fonts:** Google Fonts (Rubik)

---

## Support
If you have any questions or need support, please contact us via your ThemeForest profile or the support email provided in your purchase.

---

**Thank you for choosing our template! We hope it helps you build a great website.** 