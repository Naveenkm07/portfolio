# Portfolio - Naveen Kumar KM

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</div>

## 🚀 Live Demo

[**View Portfolio**](https://naveenkm07.netlify.app) | [**GitHub Repository**](https://github.com/Naveenkm07/porti)

## 📋 About

A modern, responsive portfolio website showcasing my skills, projects, experience, and achievements. Built with React.js featuring smooth animations, dark/light theme support, and a professional design optimized for all devices.

## ✨ Features

- 🌙 **Dark/Light/System Theme Toggle** - Choose your preferred viewing mode
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - 3D effects, letter-by-letter animations, and micro-interactions
- 🎨 **Modern UI/UX** - Glassmorphism effects, gradient designs, and professional styling
- 🏆 **Achievements Section** - Display of hackathon wins and certifications
- 💼 **Experience Timeline** - Professional journey and internships
- 🎓 **Education Background** - Academic qualifications and coursework
- 🛠️ **Skills Showcase** - Technical skills and proficiencies
- 📊 **Projects Gallery** - Featured projects with descriptions
- 🔗 **Social Links** - Connect through various platforms
- ⚡ **Performance Optimized** - Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React.js** - Core framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and animations
- **Lucide React** - Icon library
- **CSS Variables** - Dynamic theming

### Deployment & Tools
- **Netlify** - Hosting and deployment
- **Git** - Version control
- **VS Code** - Development environment

## 📁 Project Structure

```
porti/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── phot.jpg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ui/
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── header.css
│   │   │   ├── hero.css
│   │   │   ├── about.css
│   │   │   ├── skills.css
│   │   │   ├── projects.css
│   │   │   ├── experience.css
│   │   │   ├── education.css
│   │   │   ├── achievements.css
│   │   │   ├── contact.css
│   │   │   └── theme-toggle.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naveenkm07/porti.git
   cd porti
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3001`

## 🎨 Customization

### Theme Colors
The theme system uses CSS variables. You can customize colors in `src/styles/index.css`:

```css
:root {
  --primary-color: #64ffda;
  --secondary-color: #00d4ff;
  --background-dark: #0a192f;
  --background-light: #f8f9fa;
  /* Add more variables as needed */
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Add corresponding CSS in `src/styles/`
3. Import and use the component in `App.js`

### Updating Content
- **Personal Info**: Edit `Hero.jsx`
- **Experience**: Update `Experience.jsx`
- **Education**: Modify `Education.jsx`
- **Projects**: Add to `Projects.jsx`
- **Skills**: Update `Skills.jsx`
- **Achievements**: Modify `Achievements.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the `frontend` directory:

```env
REACT_APP_NAME=Your Name
REACT_APP_EMAIL=your.email@example.com
REACT_APP_PHONE=+1234567890
```

### Deployment

#### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `frontend/build`
4. Deploy automatically on push to main branch

#### Other Platforms
- **Vercel**: Similar setup to Netlify
- **GitHub Pages**: Use `gh-pages` branch
- **AWS S3**: Configure static website hosting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Naveen Kumar KM**
- 📧 Email: naveenkm07@example.com
- 🌐 Portfolio: [https://naveenkm07.netlify.app](https://naveenkm07.netlify.app)
- 💼 LinkedIn: [linkedin.com/in/naveenkm07](https://linkedin.com/in/naveenkm07)
- 🐙 GitHub: [github.com/Naveenkm07](https://github.com/Naveenkm07)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Lucide Icons** - For the beautiful icon set
- **Netlify** - For seamless deployment
- **Open Source Community** - For inspiration and resources

---

<div align="center">
  <strong>⭐ If you like this project, give it a star!</strong>
</div>
