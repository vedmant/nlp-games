# GitHub Actions

This directory contains GitHub Actions workflows for the CogniGames project.

## Workflows

### Lint (`lint.yml`)
- Runs on every push and pull request
- Checks code with ESLint
- Validates TypeScript types
- Ensures code quality standards

### CI (`ci.yml`)
- Comprehensive continuous integration
- Runs linting, type checking, building, and testing
- Builds the application and uploads artifacts
- Ensures the project builds successfully

## Local Development

Before pushing code, run these commands locally:

```bash
# Check for linting issues
yarn lint

# Auto-fix linting issues
yarn lint:fix

# Check TypeScript types
yarn typecheck

# Build the application
yarn build
```

## Requirements

- Node.js 20+
- Yarn package manager
- All dependencies installed (`yarn install`)
