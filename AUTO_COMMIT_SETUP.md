# Automatic Git Push Setup

This project is configured to automatically push commits to GitHub.

## How It Works

A **git post-commit hook** automatically runs `git push` after every successful commit. This means:

1. ✅ You commit: `git commit -m "your message"`
2. 🚀 The hook automatically pushes to GitHub
3. ✨ Your changes are live on GitHub (and Vercel auto-deploys if connected)

## Setup Instructions

### First Time Setup

Run the setup script:

```bash
npm run setup-auto-push
```

Or directly:

```bash
bash setup-auto-push.sh
```

This will:
- Create the post-commit hook in `.git/hooks/post-commit`
- Make it executable
- Verify your git remote is configured

### Verify Remote is Configured

Make sure you have a GitHub remote configured:

```bash
# Check if remote exists
git remote -v

# If not, add your GitHub repo:
git remote add origin https://github.com/yourusername/your-repo.git
```

## Current Process

**Before (Manual):**
1. Make changes
2. `git add .`
3. `git commit -m "message"`
4. `git push` ← Manual step

**After (Automatic):**
1. Make changes
2. `git add .`
3. `git commit -m "message"` ← Auto-pushes automatically!
4. ✨ Done!

## How to Use

Just commit normally:

```bash
git add .
git commit -m "Update homepage"
# Hook automatically runs: git push origin main
```

You'll see output like:
```
🚀 Auto-pushing to GitHub (branch: main)...
✅ Successfully pushed to GitHub!
```

## Troubleshooting

### Push Fails

If the auto-push fails, you'll see a warning. Common issues:

1. **No remote configured**
   ```bash
   git remote add origin https://github.com/yourusername/your-repo.git
   ```

2. **Authentication issues**
   - Make sure you're authenticated with GitHub (SSH key or personal access token)
   - For HTTPS: Use a personal access token instead of password
   - For SSH: Ensure your SSH key is added to GitHub

3. **Network issues**
   - Check your internet connection
   - Try pushing manually: `git push origin main`

### Disable Auto-Push Temporarily

If you need to commit without pushing:

```bash
# Skip the hook for one commit
git commit -m "message" --no-verify
```

### Remove Auto-Push

To disable automatic pushing:

```bash
rm .git/hooks/post-commit
```

## Notes

- The hook only runs on successful commits
- It pushes to the same branch you're committing to
- If push fails, you can still push manually later
- The hook doesn't affect other git operations (pull, fetch, etc.)

## Integration with Vercel

If your GitHub repo is connected to Vercel:
- Every auto-push triggers a new deployment
- You get automatic deployments on every commit! 🎉
