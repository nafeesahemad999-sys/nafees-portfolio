# Nafees Ahemad — Portfolio

Hacker-themed personal portfolio built with React.js.

## 🚀 Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Folder Structure

```
nafees-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── resumeData.js       ← ✏️  EDIT THIS FILE to update all content
│   ├── styles/
│   │   └── global.css          ← Global styles & CSS variables (colours)
│   ├── components/
│   │   ├── MatrixRain/         ← Animated matrix background
│   │   ├── Navbar/             ← Fixed top navigation
│   │   ├── Hero/               ← Landing section with typing effect
│   │   ├── About/              ← Bio + animated stat cards
│   │   ├── Skills/             ← Skill bars by category
│   │   ├── Projects/           ← Project cards with tags & links
│   │   ├── Education/          ← Timeline (education + certifications)
│   │   ├── Services/           ← Services offered
│   │   ├── Contact/            ← Contact form + info panel
│   │   └── Footer/
│   ├── App.js
│   └── index.js
└── package.json
```

## ✏️ How to Customise

### Update your info
All personal data lives in **`src/data/resumeData.js`**.
Just edit that one file — the whole site updates automatically.

### Change colours
Open `src/styles/global.css` and edit the `:root { }` block:
```css
:root {
  --green:  #00FF41;   /* neon green */
  --cyan:   #00FFFF;   /* cyan */
  --bg:     #000000;   /* background */
}
```

### Add a profile photo
1. Place your photo in `public/` (e.g. `public/photo.jpg`)
2. Open `src/components/Hero/Hero.js`
3. Replace `{personalInfo.initials}` with:
   ```jsx
   <img src="/photo.jpg" alt="Nafees" />
   ```

### Enable real email sending (EmailJS)
1. Sign up at https://emailjs.com (free)
2. Create a Service & Email Template
3. Open `src/components/Contact/Contact.js`
4. Replace the three placeholder strings at the top:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```
5. Uncomment the `emailjs.sendForm(...)` block

### Add your GitHub & project links
In `src/data/resumeData.js`, update:
- `personalInfo.github` / `personalInfo.linkedin`
- Each project's `github` and `demo` fields

### Add your resume PDF
Place your PDF in `public/Nafees_Resume.pdf` — the Download CV button will work automatically.

## 🌐 Deploy for Free

**Netlify** (easiest):
```bash
npm run build
# Drag the /build folder to netlify.com/drop
```

**Vercel**:
```bash
npm install -g vercel
vercel
```

**GitHub Pages**:
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://yourusername.github.io/nafees-portfolio"
npm run build && npx gh-pages -d build
```
