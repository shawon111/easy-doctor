# Docxio

Docxio helps individual doctors build a professional website and strengthen their online presence. Doctors can create a site in about two minutes, using automated website and content generation, SEO tools, and a free subdomain—without needing to build or maintain a website themselves.

## Product overview

Docxio is focused on helping doctors become easier to find and present their professional information online. Its core capabilities include:

- guided onboarding to capture a doctor's professional profile
- automated website and page-content generation from profile information
- medical website templates with public previews
- publishing on a free Docxio subdomain, with the option to connect a custom domain
- SEO settings and social metadata to support search visibility
- a dashboard to manage the website, profile, and online presence
- optional appointment and patient-contact features

## What the application does

### 1. Doctor profile setup

Doctors enter their professional information once. The profile can include:

- name, contact details, profile image, and specialization
- qualifications, experience, and biography
- treatments, languages, and professional links
- practice location and availability details where relevant

This information provides the foundation for the doctor's website and generated content.

### 2. Automated website creation

The guided website creation flow is designed to get a professional doctor website online in about two minutes:

- choose and preview a website template
- select a free subdomain
- generate website pages and initial content from the doctor's profile
- publish the site and optionally connect a custom domain later

AI-assisted content generation helps reduce setup effort. Doctors can manage and update their website from the dashboard.

### 3. Online presence and SEO

Docxio provides website and SEO features to help doctors establish and maintain an online presence:

- page metadata, canonical URLs, and social sharing metadata
- a public website on a free subdomain
- custom-domain support for doctors who want to use their own domain

These features help doctors present professional information online and support discoverability through search engines.

### 4. Optional appointment features

Appointment and patient-contact tools are available as supporting features. They can help doctors share availability and receive booking requests, but the primary purpose of Docxio is website creation, online presence, and SEO.

### 5. Subscription and lifecycle management

The product includes trial and subscription workflows. Current plan details are available in the application.

## Tech stack

- Next.js 16
- React 19
- MongoDB + Mongoose
- JWT for auth sessions
- bcryptjs for password hashing
- Cloudinary for media uploads
- Google AI integration for generated website content
- Tailwind CSS for the public marketing and dashboard UI

## Core application structure

- `src/app`: Next.js routes and page-level entry points
- `src/components`: reusable UI for the public website and dashboard
- `src/models`: MongoDB Mongoose schemas for users, websites, SEO, appointments, and settings
- `src/services`: website publishing, SEO, appointment, and helper services
- `src/lib`: auth, validation, JWT utilities, content sanitization, and domain configuration
- `src/config`: database, Cloudinary, and mail configuration

## Important product workflows

### Profile and website setup

A doctor's professional profile is used to create and populate a selected website template. Generated content can then be reviewed and managed from the dashboard.

### Website publishing

The website record stores the selected template, generated content, subdomain, optional custom domain, SEO reference, and publishing status. Doctors can share their public website URL.

### SEO and domain connection

Doctors can configure website metadata and canonical URLs. Custom-domain setup supports DNS verification; a custom domain is optional, since websites can be published on a free Docxio subdomain.

### Optional appointment flows

The application also includes appointment request and management functionality for doctors who choose to use it. This is secondary to the website and online-presence features.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Production build

```bash
npm run build
npm run start
```
