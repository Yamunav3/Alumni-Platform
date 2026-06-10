# Alumni Platform Frontend

Alumni Platform is a React-based web application for connecting students, alumni, staff, and administrators. It provides role-specific dashboards, career opportunities, event management, success stories, notifications, chat, and an AI assistant.

The project is built with Vite, React, TypeScript, Tailwind CSS, shadcn/ui components, Radix UI primitives, Axios, React Router, TanStack Query, and STOMP/SockJS for real-time communication.

## Project Overview

The application is organized around four primary user roles:

- Public visitors can view the landing page, about page, career page, and explore opportunities.
- Students can access a dashboard, events, profile, notifications, and real-time messages.
- Alumni can view events, career resources, donations, profile, notifications, gamification, analytics, and registration pages.
- Staff can manage career portal features, view recommendations, handle profiles, notifications, and share career-related content.
- Admin users can manage alumni, staff, students, events, and admin profile/home views.

A floating chatbot is available globally and uses the Gemini API through `VITE_GEMINI_API_KEY`.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- shadcn/ui and Radix UI
- Ant Design reset styles
- Axios
- TanStack React Query
- STOMP and SockJS for WebSocket messaging
- React Hook Form and Zod
- Framer Motion, GSAP, and ReactBits-style animation components
- Recharts
- Lucide React icons

## Folder Structure

```text
Alumni-Platform/
  public/
    letter-a.png
    vite.svg
  src/
    AdminPage/
      Admin dashboard, home, alumni, staff, student, event, and 404 pages.
    AlumniPage/
      Alumni home, events, career portal, donations, gamification, profile,
      notifications, about page, job form, and alumni forms.
    api/
      Axios client and role-specific API helper modules.
    assets/
      Static images used by pages, hero sections, chatbot, and feature blocks.
    components/
      Shared app components, navbars, chatbot, landing page sections, and UI primitives.
    components/ui/
      shadcn/ui component library wrappers.
    hooks/
      Shared React hooks such as toast and mobile detection.
    lib/
      Utility helpers.
    Login/
      Role-specific login pages.
    pages/
      Public landing, about, career, explore, and not-found pages.
    ReactBits/
      Reusable visual and animation components.
    services/
      WebSocket connection, subscription, publishing, and disconnect helpers.
    signup/
      Role-specific signup pages.
    staff/
      Staff dashboard, profile, notifications, about page, recommendation,
      chat, data, and career portal modules.
    student/
      Student layout, sidebar, home sections, events, messages, profile,
      notifications, about page, and event suggestion form.
    App.tsx
      Main route tree and global providers.
    main.tsx
      React app entry point.
    index.css
      Global styles and Tailwind layers.
  package.json
  vite.config.ts
  tailwind.config.ts
  tsconfig*.json
  eslint.config.js
```

## Important Files

- `src/App.tsx` defines all public, admin, alumni, staff, student, authentication, and fallback routes.
- `src/main.tsx` mounts the React application and imports global styles.
- `src/api/api.js` creates the shared Axios client with a `http://localhost:8080` base URL and attaches the JWT from `localStorage.token`.
- `src/services/websocket.ts` manages STOMP over SockJS connections for real-time messaging.
- `src/components/ChatBot.tsx` provides the global Gemini-powered assistant.
- `vite.config.ts` defines the `@` alias for `src` and maps `global` to `window` for browser compatibility with WebSocket libraries.
- `tailwind.config.ts` contains Tailwind content paths, theme tokens, animations, and shadcn-compatible color variables.

## Application Routes

### Public Routes

| Route | Page |
| --- | --- |
| `/` | Public landing page |
| `/about` | Public about page |
| `/career` | Public career portal |
| `/explore` | Explore opportunities |
| `/register` | Alumni registration form |
| `/analytics` | Alumni analytics form/page |

### Authentication Routes

| Route | Page |
| --- | --- |
| `/login/student` | Student login |
| `/login/staff` | Staff login |
| `/login/alumni` | Alumni login |
| `/login/admin` | Admin login |
| `/signup/student` | Student signup |
| `/signup/staff` | Staff signup |
| `/signup/alumni` | Alumni signup |

### Admin Routes

| Route | Page |
| --- | --- |
| `/admin/profile` | Admin profile |
| `/admin/home` | Admin home |
| `/admin/alumnisection` | Alumni management |
| `/admin/staffsection` | Staff management |
| `/admin/studentsection` | Student management |
| `/admin/events` | Event management |

### Alumni Routes

| Route | Page |
| --- | --- |
| `/alumni/home` | Alumni home |
| `/alumni/events` | Alumni events |
| `/alumni/about` | Alumni about page |
| `/alumni/donations` | Donations |
| `/alumni/career` | Alumni career portal |
| `/alumni/notifications` | Alumni notifications |
| `/alumni/profile` | Alumni profile |
| `/alumni/gamification` | Alumni gamification |

### Student Routes

Student pages are nested under `StudentLayout`, which includes the student sidebar and remembers collapsed sidebar state in `localStorage.sidebarCollapsed`.

| Route | Page |
| --- | --- |
| `/student` | Student home |
| `/student/home` | Student home |
| `/student/about` | Student about page |
| `/student/events` | Student events |
| `/student/profile` | Student profile |
| `/student/notifications` | Student notifications |
| `/student/messages` | Real-time messaging |
| `/student/register` | Registration form |

### Staff Routes

| Route | Page |
| --- | --- |
| `/staff/home` | Staff home |
| `/staff/about` | Staff about page |
| `/staff/career` | Staff career portal |
| `/staff/profile` | Staff profile |
| `/staff/notifications` | Staff notifications |

Any unmatched route renders the shared not-found page.

## Core Features

### Public Experience

- Landing page with hero, features, CTA, footer, and navigation components.
- Public about and career pages.
- Explore opportunities page.
- Global chatbot available from the main application shell.

### Student Experience

- Student dashboard with dedicated home sections for webinars, training, mentorship, internships, and feedback.
- Event listing and suggestion form support.
- Profile and notifications pages.
- Real-time message screen using WebSocket topics and app destinations.
- Collapsible sidebar layout stored in local storage.

### Alumni Experience

- Alumni home and profile pages.
- Event browsing.
- Career portal and job posting form.
- Donation page.
- Gamification page.
- Notification page.
- Registration and analytics forms.

### Staff Experience

- Staff home, about, profile, and notifications.
- Career portal with tabs for jobs, webinars, success stories, and saved jobs.
- Job posting, job detail, application, webinar creation, and story sharing dialogs.
- Student recommendation and profile modal components.
- Success stories and internship data integration through API helpers.

### Admin Experience

- Admin profile and home pages.
- Management sections for alumni, staff, students, and events.

### Chatbot

The chatbot is defined in `src/components/ChatBot.tsx` and is rendered globally from `src/App.tsx`. It calls the Gemini API using:

```text
VITE_GEMINI_API_KEY
```

Keep the actual API key in a local `.env` file and do not commit production secrets.

### Real-Time Messaging

Messaging uses STOMP over SockJS:

- WebSocket endpoint: `http://localhost:8080/ws`
- Subscribe example: `/topic/messages`
- Send example: `/app/sendMessage`

The shared helper lives in `src/services/websocket.ts`.

## API Integration

The shared Axios instance is configured in `src/api/api.js`.

```js
baseURL: "http://localhost:8080"
```

The request interceptor automatically reads a JWT from local storage:

```js
localStorage.getItem("token")
```

If present, the token is sent as:

```text
Authorization: Bearer <token>
```

### API Helper Modules

- `src/api/AlumniAPI.js`
  - Posts jobs.
  - Shares alumni success stories.
  - Creates events.
- `src/api/staffapi.js`
  - Fetches students and staff.
  - Posts and reads student suggestions.
  - Fetches success stories for staff views.
- `src/api/studentApi.js`
  - Fetches individual students.
  - Fetches internships.
  - Fetches alumni for mentorship data.
  - Fetches student success stories.
  - Fetches events.
- `src/api/Notifications.js`
  - Contains a notification listener using SockJS and STOMP.

## Environment Variables

Create a `.env` file in the project root for local development.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Vite only exposes variables prefixed with `VITE_` to the browser.

## Getting Started

### Prerequisites

- Node.js
- npm
- Backend service running at `http://localhost:8080`

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build Production Bundle

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the production bundle |
| `npm run build:dev` | Builds using Vite development mode |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Serves the production build locally |

## Styling and UI

- Tailwind CSS is used for utility-first styling.
- shadcn/ui components live in `src/components/ui`.
- Radix UI powers accessible primitives such as dialogs, dropdowns, tabs, tooltips, and popovers.
- Lucide React provides icons.
- Ant Design reset styles are imported from `src/main.tsx`.
- Animation-oriented components live in `src/ReactBits`.

## Backend Expectations

The frontend expects a backend that supports:

- JWT-based authentication.
- REST endpoints under paths such as `/api/v1/student`, `/api/v1/staff`, `/api/v1/alumni`, `/events`, and `/student`.
- A SockJS/STOMP WebSocket endpoint at `/ws`.
- Message topics and destinations such as `/topic/messages`, `/topic/notifications`, and `/app/sendMessage`.

## Development Notes

- The project currently includes both `package-lock.json` and `bun.lockb`. Use one package manager consistently to avoid dependency drift.
- The configured API base URL points to local development. For deployment, update the API configuration or introduce a Vite environment variable for the backend URL.
- The `.env` file should stay local because it can contain private API keys.
- Some components include sample fallback data that is replaced when backend responses are available.
