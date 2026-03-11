# Uncovering the Secrets of Successful Entrepreneurs - Landing Page

A high-performance, responsive e-book landing page built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features
- **3D Book Preview**: Interactive hover effect for front and back covers.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Conversion Focused**: Clear CTAs, social proof, and author sections.
- **Fast Performance**: Built with Vite for nearly instant load times.

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)

## 📦 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment (Vercel)

We recommend hosting on **Vercel** for its speed and generous free tier.

### 1. Push to GitHub
- Create a new repository on [GitHub](https://github.com/new).
- Push your local code to the repository:
  ```bash
  git init
  git add .
  git commit -m "initial commit"
  git branch -M main
  git remote add origin YOUR_GITHUB_REPO_URL
  git push -u origin main
  ```

### 2. Connect to Vercel
- Log in to [Vercel](https://vercel.com).
- Click **"Add New"** > **"Project"**.
- Import your GitHub repository.
- Vercel will automatically detect **Vite**. Use the default settings:
  - **Framework Preset**: Vite
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
- Click **"Deploy"**.

### 3. Connect Your Domain
- Once deployed, go to the **"Settings"** tab in your Vercel project.
- Click **"Domains"**.
- Enter your domain name and follow the instructions to update your DNS records (usually adding an A record and a CNAME record).

## 📄 License
MIT
