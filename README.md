# Sravan Kumar - Professional Landing Page

A modern, responsive landing page for Seravan Kumar, featuring teaching methodology, results, testimonials, and contact information.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)

### Installation & Setup

1. **Clone or download the project**
   ```bash
   cd "Website building YT"
   ```

2. **Start the development server**
   ```bash
   node serve.mjs
   ```
   The site will be available at `http://localhost:3000`

3. **Take screenshots** (optional, for design verification)
   ```bash
   node screenshot.mjs http://localhost:3000
   ```

## 📁 File Structure

```
.
├── index.html              # Main landing page (all HTML, CSS, and content)
├── serve.mjs              # Local development server
├── screenshot.mjs         # Screenshot utility for localhost
├── README.md              # This file
├── .gitignore             # Git ignore rules
├── brand_assets/          # Brand logos, color guides, style assets
├── temporary screenshots/ # Generated screenshots for design verification
└── vedicmaths_deploy_key* # Deployment credentials (ignored)
```

## 🎨 Design & Technology

- **Framework**: Standalone HTML + Tailwind CSS (via CDN)
- **Design Pattern**: Mobile-first responsive design
- **Styling**: Inline Tailwind utilities with custom branding
- **Images**: Placeholder images via `https://placehold.co/` or brand assets

## 📝 Content Sections

1. **Header** - Navigation and site branding
2. **Hero Section** - Profile introduction with photo and key info
3. **Statistics** - Key metrics (85% improvement, 100+ followers, 2+ years experience)
4. **Unique Teaching Methodology** - Cards showcasing teaching approaches
5. **Testimonials** - Student feedback and success stories
6. **Call-to-Action** - Engagement buttons ("Connect with Me", "Schedule Demo")
7. **Footer** - Contact information and links

## ✏️ Editing the Content

Open `index.html` in your text editor to modify:
- **Profile information**: Update name, bio, photo URL
- **Statistics**: Change numbers and descriptions
- **Methodology cards**: Edit teaching approaches and descriptions
- **Testimonials**: Add/remove student feedback
- **Colors & Styling**: Adjust Tailwind classes and brand colors

After making changes, refresh `http://localhost:3000` in your browser to see updates.

## 🎯 Deployment

- The entire site is contained in a single `index.html` file
- Deploy to any static hosting (GitHub Pages, Vercel, Netlify, etc.)
- No build process required

## 📸 Screenshots

Screenshots are saved to `temporary screenshots/` when using:
```bash
node screenshot.mjs http://localhost:3000 label
```

Use screenshots for design verification, comparing against reference images, or documenting changes.

## 🛠️ Development Notes

- **Server**: Uses Node.js built-in HTTP server (`serve.mjs`)
- **Hot reload**: Manual refresh required after HTML edits
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile responsive**: Tested on common viewport sizes

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Color Reference](https://tailwindcss.com/docs/customizing-colors)
- [Placehold.co Image Placeholder Service](https://placehold.co/)

---

**Last Updated**: March 2026
**Status**: Active Development
