# Stock News App

A React-based web application that fetches and displays the latest news and updates for user-selected stocks.

## Live Demo

[View the site on GitHub Pages](https://matbuha.github.io/stock-news-app/)

## Features

- **Add Stock**: Enter a stock symbol (e.g., AAPL) to fetch dummy news items.
- **Real-time Display**: Uses a mock fetch function (`fetchStockNews`) for demonstration. In a real app, this would be replaced with calls to real APIs (e.g., Yahoo Finance, Bloomberg, Google Finance, etc.).
- **Animations**: Uses `framer-motion` to animate the appearance of new stocks.
- **UI**: Basic input and button for adding stocks, plus a simple card-like container for displaying news.

## Tech Stack

- [React](https://reactjs.org/) with Hooks
- [Vite](https://vitejs.dev/) for fast development
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- Inline CSS styling (no external framework) or [Tailwind CSS](https://tailwindcss.com/) if desired

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run the App (Development)**:
   ```bash
   npm run dev
   ```
   Then open `http://localhost:5173` in your browser.
3. **Build for Production**:
   ```bash
   npm run build
   ```
   This outputs the final, optimized static files to the `dist` folder.

## Deployment

This app can be deployed on any static hosting, including GitHub Pages:

1. Install [gh-pages](https://github.com/tschaub/gh-pages):
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add scripts to `package.json`:
   ```jsonc
   {
     "scripts": {
       "build": "vite build",
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```
3. Run `npm run deploy` to publish the contents of `dist` to the `gh-pages` branch.

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/some-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/some-feature`.
5. Open a Pull Request.

## License

This project is open source and available under the [MIT License](./LICENSE) (feel free to change if needed).

