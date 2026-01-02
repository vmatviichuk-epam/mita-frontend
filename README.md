# MITA Frontend

React + TypeScript frontend for the Mini Issue Tracker Application with URL-based backend switching.

## Features

- **React 18** with TypeScript
- **Vite** for fast development
- **URL-based backend switching**: `/java`, `/dotnet`, `/php` routes
- **Axios** for HTTP requests

## Backend Switching

The frontend uses URL prefixes to determine which backend to call:

| URL Path | Backend | Port |
|----------|---------|------|
| `/java/*` | Spring Boot | 8080 |
| `/dotnet/*` | ASP.NET Core | 5000 |
| `/php/*` | Laravel | 8000 |

Examples:
- `http://localhost:5173/java/login` → calls Java backend
- `http://localhost:5173/dotnet/login` → calls .NET backend
- `http://localhost:5173/php/login` → calls PHP backend

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vmatviichuk-epam/mita-frontend.git
cd mita-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── api/
│   └── client.ts           # Axios client and API functions
├── components/
│   └── BackendSwitcher.tsx # Backend selection buttons
├── context/
│   └── BackendContext.tsx  # Backend configuration context
├── pages/
│   └── Login.tsx           # Login page component
├── App.tsx                 # Main app with routing
└── main.tsx                # Entry point
```

## Workshop Tasks

Students will implement:

1. **User Registration** - Add registration form and API call
2. **Issue List** - Display user's issues with filtering
3. **Issue Creation** - Form to create new issues
4. **Issue Details** - View and edit individual issues
5. **Authentication State** - Persist login state across page reloads

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
