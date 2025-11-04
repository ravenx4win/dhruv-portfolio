# Dhruv Kanwar | Portfolio

A modern, responsive portfolio website built with React.js, showcasing my work experience, projects, and technical skills.

## 🚀 Features

- **Modern Design**: Clean and professional UI with dark/light theme toggle
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Sections Included**:
  - Landing/Home page with introduction
  - About Me section with bio
  - Work Experience details
  - Projects showcase
  - Tech Stack grid
  - Contact form with social links

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dhruv-portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🚦 Getting Started

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
dhruv-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ProjectCard.jsx
│   ├── sections/
│   │   ├── Landing.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Landing Section**: Edit `src/sections/Landing.jsx` to update name, title, and tagline
2. **About Section**: Edit `src/sections/About.jsx` to update bio and photo
3. **Experience Section**: Edit `src/sections/Experience.jsx` to update work experience
4. **Projects Section**: Edit `src/sections/Projects.jsx` to update project details
5. **Contact Section**: Edit `src/sections/Contact.jsx` to update social media links and email

### Theme Customization

The theme colors can be customized in `tailwind.config.js`. The project uses:
- Primary color: Blue (`blue-600`, `blue-400`)
- Dark mode: Gray (`gray-900`, `gray-800`)

### Fonts

The project uses Inter and Poppins fonts. You can change them in:
- `index.html` (Google Fonts link)
- `tailwind.config.js` (font family configuration)

## 📝 Form Handling

The contact form currently displays an alert on submission. To integrate with a backend service:

1. Update the `handleSubmit` function in `src/sections/Contact.jsx`
2. Add your API endpoint
3. Handle form submission and error states

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Dhruv Kanwar**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub URL]
- LinkedIn: [Your LinkedIn URL]
- Email: [Your Email]

---

Built with ❤️ using React and TailwindCSS

