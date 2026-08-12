# Portfolio Website

This repository contains a responsive personal portfolio website built with HTML, CSS, and JavaScript.

## GitHub Pages

The site is ready to be published via GitHub Pages from the repository root.

### Deployment

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to Settings > Pages.
4. Select the GitHub Actions deployment source.
5. The workflow in .github/workflows/deploy.yml will publish the site automatically.

## Backend Contact Form Setup

This project now includes a backend service for the contact form. To enable it:

1. Copy `.env.example` to `.env`.
2. Fill in your SMTP provider settings and your destination email:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
3. Install dependencies:
   - `npm install`
4. Start the server:
   - `npm start`
5. Open `http://localhost:5000` in your browser.

The contact form now sends form entries to the configured email via `/api/contact`.

> Note: If you receive an error like `ECONNREFUSED ::1:587`, it means SMTP is not configured or the server is trying to connect to a local mail server. Make sure you fill in `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_EMAIL` in `.env` with valid SMTP provider credentials.
