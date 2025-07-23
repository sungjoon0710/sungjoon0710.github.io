# My Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages with clean URLs and single-page application (SPA) routing.

## 🚀 Features

- **Clean URLs**: No hash routing - uses BrowserRouter with GitHub Pages SPA workaround
- **Modern Stack**: React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design with beautiful gradients and animations
- **Automated Deployment**: GitHub Actions workflow for seamless deployment
- **Fast Build**: Vite for lightning-fast development and optimized production builds

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router with BrowserRouter
- **Deployment**: GitHub Pages with GitHub Actions
- **Development**: Hot Module Replacement (HMR) with Vite

## 🏗️ Project Structure

```
├── .github/workflows/     # GitHub Actions deployment workflow
├── public/               # Static assets
│   └── 404.html         # SPA routing workaround for GitHub Pages
├── src/                 # Source code
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point with SPA routing support
│   └── index.css        # Tailwind CSS imports
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration for GitHub Pages
└── package.json         # Dependencies and scripts
```

## 🔧 Local Development

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sungjoon0710/sungjoon0710.github.io.git
   cd sungjoon0710.github.io
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when you push to the `main` branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` folder

### GitHub Pages Setup

1. Go to your repository Settings > Pages
2. Select "GitHub Actions" as the source
3. The workflow will automatically deploy on pushes to `main`

## 🔄 SPA Routing on GitHub Pages

This project uses a clever workaround to enable clean URLs on GitHub Pages:

1. **404.html**: Redirects any unknown routes to the main app with query parameters
2. **main.tsx**: Processes the redirected URL and restores the original route
3. **BrowserRouter**: Enables clean URLs without hash fragments

This allows URLs like `https://sungjoon0710.github.io/about` to work properly instead of requiring `https://sungjoon0710.github.io/#/about`.

## 📝 Customization

### Adding New Pages

1. Create a new component in `src/App.tsx`
2. Add a new route in the `Routes` component
3. Add navigation links as needed

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify `tailwind.config.js` for custom theme settings
- Add custom CSS classes in `src/index.css`
- Use Tailwind's utility classes directly in components

### Configuration

- **Vite**: Configure in `vite.config.ts`
- **Tailwind**: Configure in `tailwind.config.js`
- **TypeScript**: Configure in `tsconfig.json`

## 🐛 Troubleshooting

### Common Issues

1. **404 errors on routes**: Make sure the 404.html file is in the `public` folder
2. **Styles not loading**: Ensure Tailwind directives are in `src/index.css`
3. **Build errors**: Check that all dependencies are installed with `npm install`

### GitHub Pages Specific

- Make sure GitHub Pages is enabled in repository settings
- Verify the GitHub Actions workflow has the necessary permissions
- Check that the base path in `vite.config.ts` is set correctly

## 📄 License

MIT License - feel free to use this as a template for your own website!

## 🤝 Contributing

This is a personal website, but if you notice any issues or have suggestions for improvements, feel free to open an issue or pull request.
