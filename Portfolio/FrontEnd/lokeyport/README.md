# Lokeyport - Personal Portfolio

A modern, responsive portfolio website built with React, Vite, and styled with Tailwind CSS. This project showcases personal projects, skills, and professional experience with smooth animations powered by Motion.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Enhanced user experience with Motion library
- **Client-side Routing**: Seamless navigation with React Router DOM
- **Component-based Architecture**: Reusable and maintainable code structure
- **Fast Development**: Hot Module Replacement (HMR) with Vite

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12 + Styled Components 6.1.19
- **Animation**: Motion 12.23.12
- **Routing**: React Router DOM 7.8.2
- **Linting**: ESLint 9.33.0
- **Development**: Node.js with npm

## 📁 Project Structure

```
lokeyport/
├── public/           # Static assets
├── src/
│   ├── Components/   # Reusable UI components
│   │   └── NavBar.jsx
│   ├── Pages/        # Application pages
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── assets/       # Images and other assets
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # Application entry point
│   └── index.css     # Global styles
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── vercel.json       # Vercel deployment config
└── README.md         # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lokeyport
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🚀 Deployment

This project is configured for easy deployment on Vercel.

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [Vercel](https://vercel.com) and import your repository
3. Vercel will automatically detect the configuration and deploy your site

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files
3. Deploy the contents of `dist` to your hosting provider

## 🎨 Customization

### Adding New Pages

1. Create a new component in `src/Pages/`
2. Add routing configuration in `App.jsx`
3. Update navigation in `NavBar.jsx`

### Styling

- Global styles: Edit `src/index.css`
- Component styles: Use Tailwind classes or styled-components
- Tailwind configuration: Modify `tailwind.config.js` (if needed)

### Animations

This project uses Motion for animations. Check the [Motion documentation](https://motion.dev/) for advanced animation techniques.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or suggestions, please reach out through the contact form on the website or open an issue in this repository.

---

Built with ❤️ using React and Vite
