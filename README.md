# Portfolio Website

A professional personal portfolio website built with React Router, showcasing projects, skills, and professional information.

## Author
**Divyank Singh**
- Email: se23ucse056@mahindrauniversity.edu.in
- LinkedIn: https://www.linkedin.com/in/divyank-singh-151335281
- GitHub: https://github.com/divyanksingh678-source

## Features

✨ **Modern Design**: Clean and professional UI with gradient backgrounds and smooth animations
🚀 **React Router Navigation**: Seamless navigation between pages using NavLink
📱 **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
💼 **Portfolio Showcase**: Display of projects with technologies and GitHub links
📊 **Skills Section**: Categorized display of technical skills
🎯 **About & Research**: Comprehensive about section with research interests

## Pages

### Home Page
- About Me section
- Research interests displayed in interactive cards
- Personal details (name, email, education, CGPA)
- Skills organized by categories

### Projects Page
- Project cards with descriptions
- Technologies used for each project
- Direct links to GitHub repositories
- Contact information and social media links

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn





dsgsdfbszdfasrdgaregaerg
### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm start
```
The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

### Step 1: Create Repository
1. Go to [GitHub](https://github.com)
2. Create a new repository named `portfolio`
3. Do not initialize with README

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 3: Install gh-pages
```bash
npm install gh-pages --save-dev
```

### Step 4: Deploy
```bash
npm run deploy
```

Your portfolio will be live at: `https://your-username.github.io/portfolio`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   └── Navigation.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Customization

### Update Personal Information
Edit `src/pages/Home.js` to update your personal details:
- Name
- Email
- Location
- Education
- Skills
- Profile picture

### Update Projects
Edit `src/pages/Projects.js` to add or modify your projects:
- Project title and description
- Duration and type
- Technologies used
- GitHub repository links

### Change Colors & Styling
Modify the CSS files to customize:
- Color scheme (currently uses purple/blue gradient)
- Font styles
- Layout and spacing

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **CSS3** - Styling and animations
- **React Scripts** - Build tooling

## Features Implemented

✅ React Router with HashRouter for GitHub Pages
✅ NavLink for active navigation highlighting
✅ Responsive design for all devices
✅ Professional CSS styling with animations
✅ Multiple pages (Home, Projects)
✅ Social media integration
✅ Contact information display
✅ Skills showcase
✅ Project portfolio

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add blog section
- Add testimonials
- Implement contact form
- Add dark mode toggle
- Add animations library (Framer Motion)
- Add download resume functionality

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please reach out via email or LinkedIn.

---
**Last Updated**: April 2026
