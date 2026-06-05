# Mouhcine Malek — AI Engineer Portfolio

A futuristic, dark-themed portfolio centered on a unique concept:
**your profile image transforms into an interactive CNN architecture** — each layer revealing a section of your story.

## The Concept

1. Land on the page → see a professional hero with your photo
2. Click your image → scan line + pixel explosion animation
3. Your image shatters into tiles that fly outward
4. A **CNN architecture** materializes: `INPUT → CONV_1 → MAX_POOL → CONV_2 → FC_DENSE → OUTPUT`
5. Each layer maps to a portfolio section (Education, Skills, Projects, Experience, Hire Me)
6. Click any layer → InfoPanel slides in with full content
7. Hit **Reset View** to reassemble the image and return to hero

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | React Icons 5 |
| Email | EmailJS browser SDK |

## Getting Started

### Prerequisites
- Node.js 18+

### Install & Run

```bash
npm install
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## Adding Your Assets

### Profile Photo
Place your photo at:
```
public/photo.jpg
```
The tile explosion animation reads directly from this URL.

### CV / Resume
Place your CV at:
```
public/CVENG_MouhcineMalek.pdf
```
Referenced by the "Download CV" button and `/cv` command palette entry.

## EmailJS Setup (Contact Form)

To make the contact form actually send emails to `mhcnmalek@gmail.com`:

1. Create a free account at [emailjs.com](https://emailjs.com)
2. **Add Service** → connect Gmail → copy **Service ID**
3. **Create Template**:
   - Subject: `Portfolio message from {{from_name}}`
   - Body: `From: {{from_name}} ({{from_email}})\n\n{{message}}`
   - To Email: `mhcnmalek@gmail.com`
   - Copy **Template ID**
4. **Account → API Keys** → copy **Public Key**
5. Rename `.env.local.example` → `.env.local` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

## Project Structure

```
src/
  data/
    portfolioData.js          ← All content (CNN layers, projects, skills…)
  components/
    NeuralBackground.jsx      ← Canvas particle animation
    Navbar.jsx                ← Fixed nav + mobile menu + neural.core button
    CommandPalette.jsx        ← ⌘K neural interface terminal
    HeroSection.jsx           ← State machine: hero ↔ CNN view
    ProfileImage.jsx          ← 6×6 tile explosion animation
    CNNArchitecture.jsx       ← Full CNN layout + connectors
    CNNLayer.jsx              ← Feature maps, dense nodes, output node
    InfoPanel.jsx             ← Right panel (desktop) / bottom sheet (mobile)
    sections/
      Skills.jsx
      Projects.jsx
      Experience.jsx
      Education.jsx
      Contact.jsx             ← EmailJS integration
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## CNN Layer Mapping

| Layer | Type | Portfolio Section |
|-------|------|------------------|
| INPUT | Input | Who I Am (identity) |
| CONV_1 | Conv2D | Education |
| MAX_POOL | MaxPool2D | Core Skills |
| CONV_2 | Conv2D | Projects |
| FC_DENSE | Dense | Experience |
| OUTPUT | Output | Hire Me (contact / CV) |

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
Connect your GitHub repo or drag-and-drop the `dist/` folder on netlify.com/drop.

### GitHub Pages
```bash
npm run build
# deploy dist/ to gh-pages branch
```
