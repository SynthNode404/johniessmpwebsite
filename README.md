# Johnies SMP Minecraft Server Portal

A highly polished, modern, and high-performance server landing page and portal for **Johnies SMP**. Built with React 19, Vite, Tailwind CSS, and custom motion animations.

---

## 🚀 How to deploy to GitHub Pages

You have **two easy ways** to host and publish this portal on GitHub Pages:

### Option A: Automated Deploy via GitHub Actions (Recommended)

This compiles and publishes your site automatically whenever you push new changes to GitHub.

1. Create a repository on GitHub (e.g. `johnies-smp-portal`).
2. Push your project code to that repository's `main` branch:
   ```bash
   git init
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git add .
   git commit -m "Initial commit with GitHub Pages setup"
   git push -u origin main
   ```
3. Enable permissions for GitHub Actions to deploy:
   - On GitHub, navigate to your repository's **Settings** tab.
   - Go to **Actions** -> **General** on the left menu.
   - Scroll down to **Workflow permissions**.
   - Select **Read and write permissions** (this allows the Actions bot to push the compiled code to the `gh-pages` branch).
   - Click **Save**.
4. GitHub Actions will automatically spin up, build, and deploy the code to a special branch called `gh-pages`.
5. Finally, tell Pages to serve from that branch:
   - Go to **Settings** -> **Pages** of your repository.
   - Under **Build and deployment**, set the source to **Deploy from a branch**.
   - Under **Branch**, select `gh-pages` and `/ (root)`, then click **Save**.
   - Your site will be live within seconds!

---

### Option B: Local Command Line Deployment

If you prefer to deploy manually from your terminal:

1. Link your local project to your GitHub repository if you haven't already:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   ```
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This command will automatically run `npm run build` and push the compiled files in the `dist/` and assets folders directly to your repository's `gh-pages` branch.*
3. On GitHub, go to your repository's **Settings** -> **Pages** -> **Branch** and configure it to serve from the `gh-pages` branch.

---

## 🛠️ Local Development

To run this website locally on your computer:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your web browser.
