# 💼 Anass Mahmoudi - Professional Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https:3. Your site will be live at `https://mahmoudianass.github.io/portfolio`/anassmahmoudi.dev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-orange?style=for-the-badge)](CONTRIBUTING.md)

> **Professional portfolio website showcasing full-stack development expertise in Laravel, Flutter, WordPress, and mobile app development.**

## 🚀 Live Website

**Visit:** [anassmahmoudi.dev](https://anassmahmoudi.dev)

---

## 👋 About

Hi! I'm **Anass Mahmoudi**, a passionate Full Stack Developer based in **Morocco** 🇲🇦. I specialize in creating robust web applications and cross-platform mobile apps with modern technologies.

### 🎯 What I Do
- **🌐 Web Development**: Laravel, WordPress, API Development
- **📱 Mobile Development**: Flutter, Native Android (Kotlin)
- **☁️ DevOps**: Docker, CI/CD, Cloud Deployment
- **💼 Freelance**: Remote collaboration with international clients

---

## 🛠️ Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)

### Backend
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-21759B?style=flat-square&logo=wordpress&logoColor=white)

### Mobile
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-0095D5?style=flat-square&logo=kotlin&logoColor=white)

### Tools & DevOps
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

---

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional interface with smooth animations
- **Dark Theme**: Eye-friendly color scheme for developers
- **Performance**: Fast loading with optimized assets

### 🔍 SEO Optimized
- **Meta Tags**: Comprehensive SEO meta tags and Open Graph
- **Structured Data**: Schema.org markup for better search visibility
- **Sitemap**: XML sitemap for search engine indexing
- **Keywords**: Optimized for "Full Stack Developer Morocco" and related terms

### 📱 Interactive Elements
- **Project Showcase**: Modal-based project details with live demos
- **Blog System**: Dynamic blog with posts loaded from JSON
- **Contact Form**: Direct email integration for client inquiries
- **Social Links**: Professional social media integration

### 🚀 Technical Features
- **Vanilla JavaScript**: No frameworks, lightweight and fast
- **CSS Grid/Flexbox**: Modern layout techniques
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: ARIA labels and semantic HTML
- **Cross-browser**: Compatible with all modern browsers

---

## 📁 Project Structure

```
portfolio/
├── 📄 index.html          # Homepage with hero, projects, contact
├── 📄 blogs.html          # Blog listing page
├── 📄 blog-post.html      # Individual blog post template
├── 📄 404.html            # Custom 404 error page
├── 🎨 style.css           # Main stylesheet
├── 🎨 blogs.css           # Blog-specific styles
├── 🎨 blogposts.css       # Blog post styles
├── ⚙️ functionality.js    # Interactive features & animations
├── 📊 posts.json          # Blog posts data
├── 📄 manifest.json       # PWA manifest
├── 🤖 robots.txt          # SEO crawler instructions
├── 🗺️ sitemap.xml         # Site structure for search engines
├── 📄 htaccess            # Server configuration
└── 📁 images/             # Assets and media files
```

---

## 🚀 Quick Start

### Prerequisites
- Web server (Apache, Nginx, or local development server)
- Modern web browser
- Git (for cloning)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MahmoudiAnass/portfolio.git
cd portfolio
```

2. **Start local development server**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. **Open in browser**
```
http://localhost:8000
```

### Deployment

#### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main/master)
4. Your site will be live at `https://yourusername.github.io/portfolio`

#### Netlify
1. Connect GitHub repository to Netlify
2. Deploy automatically on push
3. Custom domain available

#### Traditional Hosting
1. Upload files via FTP
2. Configure `.htaccess` for URL rewriting
3. Update canonical URLs in meta tags

---

## 📝 Customization

### Personal Information
Update the following files with your information:

**`index.html`**
```html
<h1>Hi, I'm Your Name</h1>
<h2>Your Title</h2>
<p>Your description...</p>
```

**`posts.json`**
```json
{
  "id": "your-post-id",
  "title": "Your Blog Post Title",
  "date": "2025-01-01",
  "excerpt": "Post description...",
  "content": "<p>Post content...</p>"
}
```

### Styling
- **Colors**: Update CSS variables in `:root` selector
- **Fonts**: Modify font-family in `body` styles  
- **Layout**: Adjust grid/flexbox properties for different layouts

### Projects
Update project data in the `data-project` attributes:
```html
data-project='{
  "title": "Your Project",
  "tech": "Technologies Used",
  "desc": "Project description",
  "tags": ["Tag1", "Tag2"],
  "live": "https://demo-url.com",
  "repo": "https://github.com/user/repo"
}'
```

---

## 🎯 SEO Features

This portfolio is optimized for search engines with:

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Rich Twitter previews
- **Structured Data**: Schema.org Person and Organization markup
- **Canonical URLs**: Prevent duplicate content
- **XML Sitemap**: Help search engines index content
- **Robots.txt**: Guide search engine crawling

**Target Keywords:**
- Full Stack Developer Morocco
- Laravel Developer
- Flutter Mobile App Developer
- Freelance Web Developer Morocco
- Remote Developer

---

## 📊 Performance

### Metrics
- **Page Speed**: 95+ Google PageSpeed score
- **Accessibility**: WCAG 2.1 compliant
- **SEO**: 100/100 Lighthouse SEO score
- **Best Practices**: Follows web standards

### Optimizations
- Minified CSS and JavaScript
- Optimized images and assets
- Efficient CSS Grid/Flexbox layouts
- Minimal dependencies
- Semantic HTML structure

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Guidelines
- Follow existing code style
- Test on multiple browsers
- Update documentation as needed
- Ensure accessibility standards

---

## 📞 Contact

**Anass Mahmoudi**
- 🌐 Website: [anassmahmoudi.dev](https://anassmahmoudi.dev)
- 📧 Email: [hello@anassmahmoudi.dev](mailto:hello@anassmahmoudi.dev)
- 💼 LinkedIn: [linkedin.com/in/anass-mahmoudi](https://linkedin.com/in/anass-mahmoudi)
- 🐙 GitHub: [github.com/MahmoudiAnass](https://github.com/MahmoudiAnass)
- 🐦 Twitter: [@AnassMahmoudi_](https://twitter.com/AnassMahmoudi_)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Font Awesome**: Icons and graphics
- **Google Fonts**: Typography
- **Unsplash**: Placeholder images
- **Mozilla MDN**: Web development documentation
- **CSS-Tricks**: Layout and design inspiration

---

## 🔗 Links

- [Portfolio Website](https://anassmahmoudi.dev)
- [Blog Articles](https://anassmahmoudi.dev/blogs.html)
- [Project Demos](#projects)
- [Contact Form](https://anassmahmoudi.dev#contact)

---

⭐ **Star this repository if you found it helpful!**

**Available for freelance projects and remote collaboration worldwide** 🌍