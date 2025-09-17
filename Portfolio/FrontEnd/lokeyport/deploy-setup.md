# Deployment Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Set the repository name to: `lokeyport`
4. Add a description: "Personal portfolio website built with React and Vite"
5. Make sure the repository is **Public** (required for free Vercel deployment)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/lokeyport.git

# Rename the default branch to main (optional but recommended)
git branch -M main

# Push the code to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Automatic Deployment (Recommended)

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your `lokeyport` repository
5. Vercel will automatically detect it's a Vite project
6. Click "Deploy"
7. Your site will be live in minutes!

### Option B: Vercel CLI Deployment

If you prefer using the command line:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project directory
vercel

# Follow the prompts to link your project
```

## Step 4: Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to update your DNS settings

## Environment Variables (If Needed)

If your project requires environment variables:

1. Create a `.env.local` file in your project root
2. Add your variables (they will be ignored by git)
3. In Vercel dashboard, go to "Settings" → "Environment Variables"
4. Add the same variables there

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the main branch
- Create preview deployments for pull requests
- Provide deployment status checks

## Repository URL Structure

Your repository will be available at:
`https://github.com/YOUR_USERNAME/lokeyport`

Your deployed site will be available at:
`https://lokeyport-YOUR_USERNAME.vercel.app`

## Troubleshooting

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify the build command is correct: `vite build`

### Deployment Issues
- Make sure the repository is public
- Check that `vercel.json` configuration is correct
- Verify the output directory is set to `dist`

## Next Steps

1. Update the repository URL in this README.md
2. Add your live site URL to the README.md
3. Consider adding a custom domain
4. Set up analytics (Google Analytics, Vercel Analytics, etc.)
5. Add SEO meta tags for better search engine visibility

---

Your project is now ready for deployment! 🚀