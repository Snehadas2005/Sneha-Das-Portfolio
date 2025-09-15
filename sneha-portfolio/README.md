# Sneha Portfolio - Creative Designer & Developer

A modern, minimalist portfolio website built with React, showcasing creative design work, photography, sketches, and writings. Features a complete blog system with real-time Firebase comments integration.

## 🌐 Live Demo

[Visit Live Website](https://your-portfolio-domain.com)

## 🛠️ Built With

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Database**: Firebase Realtime Database
- **Fonts**: BROGETTA-Regular, MADE Mirage
- **Deployment**: [Your deployment platform]

## ✨ Features

- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Creative Blog** - Multi-format posts (photography, sketches, writing)
- **Real-time Comments** - Firebase integration for instant feedback
- **Modern Navigation** - Smooth scrolling and active section highlighting
- **Loading States** - Professional loading screens and transitions
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🎨 Sections

- **Hero** - Animated landing with call-to-actions
- **About** - Personal story with S.N.E.H.A name expansion
- **Works** - Portfolio showcase with project details
- **Services** - Offered services and process breakdown
- **Contact** - Interactive form with validation
- **Creative Journal** - Blog with categories and real-time comments

## 📁 Project Structure

```
sneha-portfolio/
├── public/
│   ├── images/
│   │   ├── blog/                # Blog post images
│   │   └── projects/            # Project images
│   └── index.html
│
├── src/
│   ├── components/              # Main portfolio components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Works.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── ThankYou.jsx
│   │
│   ├── pages/                   # Route-based pages
│   │   ├── Blog.jsx            # Blog listing
│   │   ├── BlogPost.jsx        # Individual posts
│   │   └── ErrorPage.jsx       # 404 page
│   │
│   ├── routes/
│   │   └── routes.jsx          # React Router config
│   │
│   ├── lib/
│   │   └── database.js         # Firebase helpers
│   │
│   ├── data/
│   │   └── blogData.js         # Blog content
│   │
│   ├── assets/
│   │   └── fonts/              # Custom fonts
│   │
│   ├── styles/
│   │   └── index.css           # Global styles
│   │
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
│
├── .env                        # Environment variables
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind setup
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Firebase account (for blog comments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sneha-portfolio.git
   cd sneha-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://your-project-rtdb.firebaseio.com/
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. **Add your fonts**
   - Place BROGETTA-Regular font files in `src/assets/fonts/`
   - Place MADE-Mirage font files in `src/assets/fonts/`

5. **Customize content**
   - Update personal information in components
   - Replace blog posts in `src/data/blogData.js`
   - Add your images to `public/images/`

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Navigation

- **Home**: `/` - Main portfolio
- **Blog**: `/blog` - Creative journal
- **Blog Posts**: `/blog/:id` - Individual posts

## 📱 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | App | Main portfolio page |
| `/blog` | Blog | Blog listing with filters |
| `/blog/:postId` | BlogPost | Individual blog post with comments |

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project
2. Enable Realtime Database
3. Set database rules for public read/write on comments
4. Add your config to `.env`

### Font Setup

The project uses custom fonts:
- **BROGETTA-Regular**: For headings and emphasis
- **MADE-Mirage**: For body text and UI elements

Place font files in `src/assets/fonts/` directory.

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing

### Styling & Animation
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `@tailwindcss/typography` - Typography plugin

### Backend
- `firebase` - Realtime database and hosting

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite

## 🎨 Color Palette

- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF) 
- **Accent**: Beige (#F5F0E1)
- **Neutral**: Gray shades

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Sneha** - Creative Designer & Developer

- Website: [your-portfolio-domain.com](https://your-portfolio-domain.com)
- Email: sn2005eha26das@gmail.com
- LinkedIn: [your-linkedin](https://linkedin.com/in/yourprofile)

---

Built with ❤️ and lots of ☕