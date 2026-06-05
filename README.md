# 👗 Clothing Store — HTML & CSS Landing Page
A clean, fully responsive **clothing store landing page** built only with **HTML5** and **CSS3**.  
The layout is powered by **Flexbox** and **CSS Grid**, enhanced with subtle **CSS animations** and **hover effects**.
---
## 🔍 Demo & Preview
- **Live Demo:** _[Add your live URL here]_
- **Video Walkthrough (Loom):** _[Add your Loom URL here]_
![Clothing Store Preview](preview.png)
---
## ✨ Highlights
- 100% **HTML + CSS only** (no JavaScript, no frameworks)
- **Responsive** layout using Flexbox & CSS Grid
- Smooth **CSS transitions** and **hover animations**
- Structured sections for a realistic clothing / fashion store
- Easy to customize colors, fonts, and imagery
---
## 🗂 Project Structure
```bash
clothing-store/
│
├── index.html        # Main HTML file
├── style.css         # Global styles, layout & animations
├── README.md         # Project documentation
│
├── images/           # Image assets
│   ├── hero-bg.jpg
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── about-3.jpg
│   ├── sale-bg.jpg
│   ├── product-1.jpg
│   ├── product-2.jpg
│   ├── product-3.jpg
│   ├── product-4.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── news-1.jpg
│   ├── news-2.jpg
│   ├── news-3.jpg
│   ├── collection-1.jpg
│   ├── collection-2.jpg
│   ├── collection-3.jpg
│   ├── collection-4.jpg
│   ├── collection-5.jpg
│   ├── collection-6.jpg
│   ├── testimonial-avatar.jpg
│   └── location-store.jpg
│
└── fonts/            # Optional: local fonts (if you don’t use Google Fonts)
🧱 HTML Structure
Semantic, section-based HTML for clean structure and SEO:

html


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clothing Store</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>...</header>                 <!-- Navbar -->
  <section id="hero">...</section>     <!-- Hero -->
  <section id="about">...</section>    <!-- About Us -->
  <section id="sale">...</section>     <!-- Sale Banner -->
  <section id="features">...</section> <!-- Features -->
  <section id="products">...</section> <!-- Products -->
  <section id="newsletter">...</section>
  <section id="gallery">...</section>
  <section id="news">...</section>
  <section id="collection">...</section>
  <section id="testimonials">...</section>
  <section id="location">...</section>
  <footer>...</footer>
</body>
</html>
🎨 Layout with Flexbox & CSS Grid
The layout is driven by Flexbox and CSS Grid with responsive behavior.

Section	Method	Example Properties
Navbar	Flexbox	display: flex; justify-content: space-between;
Hero	Flexbox	align-items: center; min-height: 100vh;
About Us	Flexbox	gap: 30px; flex-wrap: wrap;
Sale Banner	Flexbox	justify-content: center; align-items: center;
Features	Grid	grid-template-columns: repeat(2, 1fr); gap: 30px;
Products	Grid	grid-template-columns: repeat(2, 1fr);
Newsletter	Flexbox	flex-direction: column; align-items: center;
Gallery	Flexbox	gap: 20px; flex-wrap: wrap;
Latest News	Flexbox	gap: 30px; flex-wrap: wrap;
Last Collection	Grid	grid-template-columns: repeat(3, 1fr);
Testimonials	Flexbox	flex-direction: column; text-align: center;
Location	Flexbox	gap: 30px;
✨ CSS Animations & Hover Effects
The project includes small, performance-friendly CSS-only animations, such as:

Buttons: hover scale and color transitions
Cards (products, news, about): shadow & translate hover effects
Hero text: subtle fade-in on load (optional)
Links & icons: color transitions on hover
Example pattern used in style.css:

css


.button,
.card {
  transition: all 0.3s ease;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.18);
}
🚀 Getting Started
1. Clone the repository
bash


git clone [github.com](https://github.com/your-username/clothing-store.git)
cd clothing-store
2. Open in your browser
No build tools or bundlers are required.

bash


# Just open index.html
open index.html          # macOS
# or
start index.html         # Windows
(You can also use the Live Server extension in VS Code.)

3. Customize
Replace images in /images with your own
Adjust layout, grid settings, and animations in style.css
Update text content and section IDs in index.html
Tweak hover effects and transitions to match your brand style
🎨 Color Palette
Name	Hex	Usage
Primary Blue	#007BFF	Buttons, links, accents
Dark	#1A1A2E	Navbar, footer backgrounds
Light Gray	#F4F6FB	Section backgrounds
White	#FFFFFF	Cards, text on dark backgrounds
Text Gray	#6B7280	Body text & descriptions
🔤 Typography
Headings: Poppins, 600–700
Body: Poppins, 400
html


<link
  href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap)"
  rel="stylesheet"
/>
(Or place local font files in the fonts/ directory and reference via @font-face.)

📱 Responsive Design
Built mobile-first with simple breakpoints for tablets and desktops.

Breakpoint	Width	Behavior
Mobile	< 576px	Single-column stacks
Tablet	576px – 992px	2-column grids where needed
Desktop	> 992px	Full multi-column layout
Example responsive rule:

css


@media (max-width: 768px) {
  .cards-wrapper,
  .products-grid,
  .news-wrapper {
    flex-direction: column;
  }
}

VIDEO:
 https://www.loom.com/share/dc91aee5c1654eec8db1b42d83bd660d
