#!/bin/bash

# Setup script for automatic git push after commits

echo "🔧 Setting up automatic push to GitHub..."

# Check if .git directory exists
if [ ! -d ".git" ]; then
    echo "❌ Error: This directory is not a git repository."
    echo "   Please run 'git init' first."
    exit 1
fi

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Make the post-commit hook executable
if [ -f ".git/hooks/post-commit" ]; then
    chmod +x .git/hooks/post-commit
    echo "✅ Post-commit hook is already installed and made executable."
else
    echo "⚠️  Post-commit hook not found. Creating it..."
    
    # Create the post-commit hook
    cat > .git/hooks/post-commit << 'HOOK_EOF'
#!/bin/sh

# Auto-push hook - automatically pushes to GitHub after each commit
# This hook runs after every successful commit

# Get the current branch name
branch=$(git rev-parse --abbrev-ref HEAD)

# Push to origin (GitHub) on the current branch
echo "🚀 Auto-pushing to GitHub (branch: $branch)..."
git push origin "$branch"

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "⚠️  Push failed. You may need to push manually."
    echo "   Common reasons:"
    echo "   - No remote configured: git remote add origin <your-repo-url>"
    echo "   - Authentication issues: check your GitHub credentials"
    echo "   - Network issues: check your internet connection"
fi
HOOK_EOF

    chmod +x .git/hooks/post-commit
    echo "✅ Post-commit hook created and made executable."
fi

# Check if remote is configured
if git remote get-url origin &>/dev/null; then
    echo "✅ Git remote 'origin' is configured: $(git remote get-url origin)"
else
    echo "⚠️  Warning: No 'origin' remote configured."
    echo "   To add one, run: git remote add origin <your-github-repo-url>"
fi

echo ""
echo "✨ Setup complete! Now every commit will automatically push to GitHub."
echo ""
echo "📝 How it works:"
echo "   1. You make changes and commit: git commit -m 'your message'"
echo "   2. The hook automatically runs: git push origin <branch>"
echo "   3. Your changes are on GitHub!"
echo ""
