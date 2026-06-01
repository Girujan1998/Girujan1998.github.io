# CLAUDE.md

## Project Overview

Personal portfolio website for Girujan Naguleswaran, built with React and deployed to [girujannaguleswaran.com](https://girujannaguleswaran.com) via GitHub Pages.

## Tech Stack

- **Language:** JavaScript (ES6+)
- **Framework:** React 19
- **Routing:** react-router-dom v7
- **Styling:** Plain CSS (co-located `.css` files per component)
- **Icons:** react-icons
- **Notifications:** react-toastify
- **Scroll:** react-scroll
- **Nav:** hamburger-react
- **Build:** Create React App (react-scripts)
- **Deploy:** gh-pages → GitHub Pages

## Project Structure

```
src/
  components/    # Reusable UI components
  pages/         # Page-level components (Home, EyeGuide)
  assets/        # Static assets (images, fonts)
  App.js         # Root component and route definitions
  index.js       # Entry point
public/          # Static files copied to build root
build/           # Production build output (gitignored)
```

## Common Commands

```bash
npm start        # Dev server (localhost:3000)
npm run build    # Production build
npm run deploy   # Build + deploy to GitHub Pages (writes CNAME automatically)
npm test         # Run tests
```

## Conventions

- Each component lives alongside its own `.css` file (e.g. `NavBar.js` + `NavBar.css`)
- No TypeScript — plain `.js` files throughout
- Functional components with hooks only; no class components
