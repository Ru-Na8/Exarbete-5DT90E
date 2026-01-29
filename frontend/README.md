# Frontend - Nuxt 3

## Overview

Nuxt 3 frontend for the thesis project. Iteration 1 focuses on basic setup and backend connectivity.

## Setup

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build
```

## Configuration

Set the backend API URL via environment variable:

```bash
# Create .env file
NUXT_PUBLIC_API_BASE=http://localhost:8000
```

## Folder Structure

| Folder | Purpose |
|--------|---------|
| `pages/` | Route pages (file-based routing) |
| `components/` | Reusable Vue components |
| `layouts/` | Page layout templates |
| `composables/` | Composition API utilities |
| `plugins/` | Nuxt plugins |
| `assets/` | Uncompiled assets (CSS, images) |
| `public/` | Static files served at root |

## Future Iterations

- Authentication flow
- ML prediction interface
- Data visualization components
