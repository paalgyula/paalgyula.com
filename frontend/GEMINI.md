# GEMINI.md

This file provides context for the Gemini AI code assistant about the project in this directory.

## Project Overview

This is a personal portfolio website for Paál Gyula, a Senior Cloud Architect and Cloud Native Software Developer.

It is a static website built with [Next.js](https://nextjs.org/) (using the App Router) and [React](https://reactjs.org/). The styling is done with [Tailwind CSS](https://tailwindcss.com/). The project is written in [TypeScript](https://www.typescriptlang.org/).

The site is configured to be exported as a static site (`output: "export"` in `next.config.js`), and it uses `next-sitemap` to generate a sitemap.

## Building and Running

### Development

To run the development server, use the following command:

```bash
npm run dev
```

### Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will also trigger the `postbuild` script to generate a sitemap.

### Static Export

To export the website to static HTML files, use:

```bash
npm run export
```

The exported files will be in the `out` directory.

### Linting

To check the code for any linting errors, run:

```bash
npm run lint
```

## Development Conventions

### Code Style

The project uses ESLint to enforce code style. The configuration is based on `next/core-web-vitals`.

### Components

Reusable React components are located in the `components` directory.

### Data

The website's data (like experiences, educations, etc.) is stored in JSON files within the `data` directory.
