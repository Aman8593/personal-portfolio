# Aman Wadgaonkar - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my professional experience, projects, and skills as a software developer.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent user preference
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Single Page Application**: Fast navigation with React Router DOM
- **Interactive Components**: Engaging user interface with hover effects and animations
- **Professional Sections**:
  - Home/Landing page with introduction
  - About section with personal background
  - Experience showcase with detailed internship information
  - Projects portfolio with live demos and source code links
  - Contact form for professional inquiries

## 🚀 Tech Stack

- **Frontend Framework**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.2.0
- **Animations**: Framer Motion 12.4.7
- **Icons**: FontAwesome 6.7.2
- **HTTP Client**: Axios 1.7.9
- **Notifications**: React Toastify 11.0.3
- **Build Tool**: Create React App 5.0.1

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   ├── About.js
│   │   └── About.css
│   ├── Body/
│   │   ├── Body.js
│   │   ├── SkillsCube.js
│   │   ├── SkillsCube.css
│   │   └── developer.webp
│   ├── Contact/
│   │   └── Contact.js
│   ├── Experience/
│   │   └── Experience.js
│   ├── Header/
│   │   ├── Header.js
│   │   └── ThemeToggle.js
│   └── MyWork/
│       └── MyWork.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Launches the test runner in interactive watch mode
- **`npm run build`**: Builds the app for production to the `build` folder
- **`npm run eject`**: Ejects from Create React App (one-way operation)

## 🎨 Key Components

### Header Component

- Navigation menu with smooth scrolling
- Theme toggle functionality
- Responsive mobile menu

### Experience Component

- Detailed internship information
- Technology tags for each role
- Responsive card layout
- Dark/light mode support

### Projects Component (MyWork)

- Project showcase with images
- Live demo and source code links
- Technology stack for each project

### Contact Component

- Professional contact form
- Social media links
- Contact information

## 🌙 Dark Mode Implementation

The application features a comprehensive dark mode implementation using Tailwind CSS:

- Persistent theme preference using localStorage
- Smooth transitions between themes
- Consistent styling across all components
- System preference detection

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint optimization** for all screen sizes
- **Touch-friendly interface** for mobile devices
- **Flexible grid layouts** that adapt to different viewports

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Build the project using `npm run build`
2. Upload the `build` folder to your hosting platform
3. Configure routing for single-page application

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to package.json:

```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add routing in `App.js`
3. Update navigation in `Header.js`

### Modifying Styles

- Edit Tailwind classes directly in components
- Customize theme in `tailwind.config.js`
- Add custom CSS in component-specific CSS files

### Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```
REACT_APP_API_URL=your_api_url
REACT_APP_EMAIL_SERVICE=your_email_service
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aman Wadgaonkar**

- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, feel free to reach out through the contact form on the website or create an issue in this repository.

---

⭐ **Star this repository if you found it helpful!**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
