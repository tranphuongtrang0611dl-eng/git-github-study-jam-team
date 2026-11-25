# fastlearning

### Git & GitHub Study Jam — HCM-UTE DSC 2026

**Learn fast. Build together.**

A modern developer team portfolio website built for **fastlearning**, a five-member team participating in the Git & GitHub Study Jam organized by HCM-UTE Developer Student Club in 2026.

This project reflects our commitment to continuous learning, collaborative development, and building meaningful software together.

---

## Overview

fastlearning is a responsive frontend website designed to introduce our team, showcase our members, and demonstrate the fundamentals of collaborative software development using Git and GitHub.

The website combines a modern editorial design with interactive Git-inspired illustrations, purposeful animations, and a maintainable component-based architecture.

## Key Features

- Responsive editorial design across desktop, tablet, and mobile devices.
- Interactive Git workflow visualization covering initialization, branching, committing, and merging.
- Git-inspired navigation with animated active-route indicators.
- Team introduction with a dedicated group photograph.
- Five reusable member portrait components.
- Seamless, Notion-inspired scrolling marquee.
- Smooth entrance animations and scroll transitions.
- Shared layouts for Home, About, and Contact pages.
- Centralized, type-safe configuration and team member data.
- Accessible navigation and reduced-motion support.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component-based frontend development |
| TypeScript | Static typing and type safety |
| Vite 6 | Development server and production bundling |
| Tailwind CSS v4 | Styling and responsive design |
| React Router | Client-side routing with HashRouter |
| Motion for React | Animations and interactive transitions |
| Lucide React | Consistent icon system |
| ESLint | Static code analysis |
| Prettier | Consistent code formatting |
| npm | Dependency management |
| Git & GitHub | Version control and team collaboration |

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Node.js (a version compatible with Vite 6)
- npm
- Git

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/tranphuongtrang0611dl-eng/git-github-study-jam-team.git

cd git-github-study-jam-team
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Analyze source code using ESLint |
| `npm run format` | Format source code using Prettier |
| `npm run format:check` | Check code formatting without modifying files |

## Project Structure

```text
.
├── assets/
├── public/
│   └── images/
│       ├── dsc-logo.png
│       └── members/
│
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── GitBranchArtwork.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MemberCard.tsx
│   │   │   ├── TeamIntro.tsx
│   │   │   ├── TeamMarquee.tsx
│   │   │   └── TeamSection.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   │
│   │   └── ui/
│   │       ├── PagePlaceholder.tsx
│   │       └── TeamWordmark.tsx
│   │
│   ├── data/
│   │   ├── gitWorkflow.ts
│   │   ├── marquee.ts
│   │   ├── members.ts
│   │   └── site.ts
│   │
│   ├── layouts/
│   │   └── MainLayout.tsx
│   │
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── HomePage.tsx
│   │
│   ├── types/
│   │   └── member.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
└── vite.config.ts
```

## Frontend Architecture

The application follows a lightweight component-based architecture with clear separation between presentation, configuration, and application structure.

| Directory | Responsibility |
| --- | --- |
| `assets/` | Original static assets preserved from the initial codebase |
| `public/images/` | Publicly accessible logos and team photographs |
| `components/home/` | Homepage sections and interactive visual components |
| `components/layout/` | Shared header and footer components |
| `components/ui/` | Reusable user interface components |
| `data/` | Centralized site configuration, team information, and visualization data |
| `layouts/` | Shared application layout |
| `pages/` | Route-level page components |
| `types/` | TypeScript type definitions |
| `index.css` | Global styling and design tokens |

The architecture prioritizes simplicity, reusability, type safety, and maintainability without unnecessary abstractions.

## Application Routes

The application uses HashRouter for client-side navigation.

| Route | Page | Description |
| --- | --- | --- |
| `/#/` | Trang chủ | Main landing page and team introduction |
| `/#/about` | Về chúng tôi | About page placeholder |
| `/#/contact` | Liên hệ | Contact page placeholder |

All pages share a consistent header, footer, and visual identity.

## Design Philosophy

The website follows an **Editorial Developer Experience** design direction, combining confident typography, geometric composition, meaningful illustrations, and restrained motion.

The visual identity is inspired by the official HCM-UTE DSC branding.

Core design principles:

- Strong typography and clear visual hierarchy.
- Navy and orange as primary brand colors.
- Contrast between dark and light sections.
- Intentional whitespace and consistent alignment.
- Minimal decorative elements.
- Responsive and accessible user interfaces.
- Purposeful animations that support the user experience.

## Interactive Git Workflow

The homepage includes a custom SVG-based Git workflow visualization.

The illustration demonstrates four fundamental stages:

1. **Init** — Initialize a repository.
2. **Branch** — Create a separate development branch.
3. **Commit** — Record changes during development.
4. **Merge** — Integrate completed changes.

Workflow stages, branch segments, and commit nodes are defined in:

```text
src/data/gitWorkflow.ts
```

The visualization is rendered by:

```text
src/components/home/GitBranchArtwork.tsx
```

This is an educational illustration of Git concepts, not a representation of the repository's actual commit history.

## Customizing Team Information

Team information is centralized in the data layer, allowing content updates without modifying presentation components.

### Site Configuration

Edit the following file to update site-level information:

```text
src/data/site.ts
```

This file contains shared website content, navigation routes, links, and team photograph configuration.

### Team Group Photograph

Recommended aspect ratio: **16:10 — Landscape**

1. Add the group photograph to:

```text
public/images/team-photo.jpg
```

2. Open `src/data/site.ts`.

3. Update the photograph path:

```ts
teamPhotoPath: './images/team-photo.jpg',
```

Supported image formats include JPEG, PNG, and WebP. Ensure that the configured path matches the actual file name and extension.

### Individual Member Portraits

Recommended aspect ratio: **3:4 — Portrait**

Place the five individual photographs in:

```text
public/images/members/
├── member-01.jpg
├── member-02.jpg
├── member-03.jpg
├── member-04.jpg
└── member-05.jpg
```

Update the corresponding member records in:

```text
src/data/members.ts
```

Example:

```ts
{
  id: 'member-01',
  name: 'Member Name',
  role: 'Team Role',
  image: './images/members/member-01.jpg',
  imagePosition: 'center top',
  githubUrl: 'https://github.com/username',
}
```

| Property | Description |
| --- | --- |
| `id` | Unique member identifier |
| `name` | Member's display name |
| `role` | Member's role within the team |
| `image` | Relative path to the portrait |
| `imagePosition` | Optional image alignment |
| `githubUrl` | Optional GitHub profile URL |

Use consistent image dimensions and composition to maintain a cohesive team gallery.

### Team Marquee

The scrolling marquee represents our learning culture and development mindset:

- Learn fast.
- Commit often.
- Build together.
- Grow as one.
- Think like a developer.
- Five minds, one vision.

Marquee content and icon mappings can be updated in:

```text
src/data/marquee.ts
```

## Git Workflow

The project follows a collaborative branch-based development workflow.

| Branch | Purpose |
| --- | --- |
| `main` | Main integration branch |
| `init-codebase` | Initial project foundation |
| `feature/home` | Homepage and shared frontend development |

### Development Process

1. Fetch the latest repository updates.
2. Switch to the assigned development branch.
3. Implement and validate changes locally.
4. Review modified files.
5. Commit changes using descriptive English commit messages.
6. Push changes to the corresponding remote branch.
7. Create a Pull Request for review and integration.

### Commit Convention

Use Conventional Commits to maintain a clear and understandable project history.

```text
feat: add interactive Git workflow visualization
fix: resolve mobile navigation overflow
refactor: improve frontend component structure
style: refine homepage typography and spacing
docs: update project documentation
chore: configure development tooling
```

### Code Quality

Before submitting a Pull Request, run:

```bash
npm run lint
npm run format:check
npm run build
```

Ensure that the application builds successfully, existing functionality remains intact, and changes are limited to the intended development scope.

## Project Scope

The current implementation focuses on the Week 1 requirements of the Git & GitHub Study Jam.

- Homepage and team introduction.
- Shared navigation and layout.
- Five-member portfolio gallery.
- About and Contact page placeholders.
- Frontend architecture and development tooling.
- Collaborative Git and GitHub workflows.

The application is frontend-only and does not require backend services, authentication, or a database.

## Acknowledgements

Special thanks to **HCM-UTE Developer Student Club** for organizing the Git & GitHub Study Jam and providing an opportunity for students to strengthen their software development and collaboration skills.

---

**fastlearning**

Five minds. One shared journey.

HCM-UTE Developer Student Club · 2026