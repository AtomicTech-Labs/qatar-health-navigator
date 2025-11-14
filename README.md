# Qatar Health Navigator

A mobile-first responsive web application designed to provide simple, reliable health navigation and education for Qatar residents.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS with custom design tokens
- **Icons**: Heroicons (outline style)

## Project Structure

```
qatar-health-navigator/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Header, BottomNav)
│   └── shared/            # Shared components (LanguageSwitcher)
├── contexts/              # React contexts (LanguageContext)
├── lib/                   # Utility functions and data loading
├── types/                 # TypeScript type definitions
├── public/
│   ├── data/             # Static JSON data files
│   └── audio/            # Audio narration files
└── ...
```

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## Design System

### Color Palette

**Primary Colors:**
- Cream White: `#FAF9F4`
- Lake Blue: `#4F8FA6`
- Deep Forest Green: `#2F4A39`

**Secondary Colors:**
- Soft Sand: `#E7E0D1`
- Natural Wood: `#B89163`
- Plant Green: `#5F9462`
- Mountain Mist Blue: `#88B7CB`

**System Colors:**
- Care Red: `#B84A4A`
- Warm Amber: `#D7A44A`
- Clinical Green: `#4C7E5D`

### Glassmorphism

The app uses glassmorphism effects with the lakeside background image:
- `.glass` - Standard glass effect
- `.glass-dark` - Dark variant for Lake Blue sections
