# Docxio

Docxio is a doctor-focused website and appointment platform built with Next.js. It gives medical professionals a fast way to launch a professional clinic website, manage appointment flows, connect custom domains, and run patient-facing digital operations from a single dashboard.

## Product overview

The application is designed for physicians, surgeons, and specialist clinics that need a modern online presence without a custom development project. It combines:

- onboarding-driven doctor profile capture for all core identity and medical information
- appointment data auto-generation from the onboarding profile and chamber settings
- AI-assisted website generation from profile, clinic, and medical content data
- medical template selection with public website preview
- free subdomain publishing or custom domain connection
- online appointment scheduling and serial tracking
- doctor dashboard for website and operational management
- SEO and social metadata configuration
- subscription, trial, and billing workflows

## What the application does

### 1. Onboarding-first profile capture

The onboarding flow is the source of truth for the doctor website and appointment system. It captures all necessary practice details up front, including:

- name, email, phone, profile image, and specialization
- qualifications, experience, bio, treatments, and languages
- chamber addresses, visiting hours, days, WhatsApp contact, and map links
- booking preferences such as WhatsApp, booking form, or both
- social media and contact metadata

Because this information is already captured during onboarding, a doctor does not need to re-enter the same details later during website creation or appointment setup.

### 2. Website creation workflow

A doctor can create a professional website in a guided flow, but the actual site content is built from the onboarding profile instead of a separate manual profile entry process:

- choose a medical template
- review the auto-populated doctor and clinic content
- generate home, about, services, and booking content from the captured profile
- publish to a free subdomain or connect a custom domain

The website generation logic is guided by data models for each template and uses AI content generation with sanitization before publishing.

### 3. Appointment management

The appointment experience is created automatically from the captured onboarding profile and chamber data. The app then supports patient booking and staff-led management:

- multiple chambers are preloaded from the profile
- visiting days and hours are reused for the public appointment page
- booking preferences determine whether the site offers WhatsApp, booking form, or both
- patients create booking requests through the live appointment page
- the doctor or clinic staff can add walk-in or phone bookings manually from the dashboard
- every booking is assigned a serial and tracked with status updates such as scheduled, arrived, completed, or cancelled

This makes the doctor portal useful for both public booking and operational workflow management.

### 3. Domain and publishing infrastructure

The system supports custom-domain verification and DNS-based deployment. A website can be published on a free platform subdomain and later upgraded to a branded domain by configuring DNS records and verifying the host.

### 4. SEO and public discoverability

SEO metadata is created during onboarding and updated when the website is published. The platform stores canonical URLs, social metadata, and page data so the doctor website can be indexed and surfaced more effectively.

### 5. Subscription and lifecycle management

The product includes a trial-based lifecycle and billing plans with monthly, six-month, and yearly options. This is intended to support a low-friction initial launch while giving doctors a clear path to ongoing access.

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

- src/app: Next.js routes and page-level entry points
- src/components: reusable UI for home page, dashboard, and appointment flows
- src/models: MongoDB Mongoose schemas for users, websites, SEO, appointments, and settings
- src/services: domain verification, website publishing, appointment logic, and helper services
- src/lib: auth, validation, JWT utilities, content sanitization, and domain configuration
- src/config: database, Cloudinary, and mail configuration

## Important product workflows

### Account and profile setup

A doctor account includes professional identity, location metadata, qualifications, languages, practice details, chamber visits, treatments, and booking preferences. These data points are then used to render the public website and booking experience.

### Website publishing

The website record stores the selected template, generated content, subdomain, domain, SEO reference, and status. When ready, the site becomes public and the public URL can be shared with patients.

### Appointment flows

Appointments are stored with chamber metadata, patient contact details, date, serial, and booking source. The dashboard can then surface recent bookings and operational status updates.

### Domain connection

Custom domain setup follows a verification flow: add records to the registrar, confirm live DNS settings, validate connection, and update canonical website links.

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

## Notes

This project is purpose-built for doctor-focused website generation and appointment operations in a medical practice context. The current implementation reflects a SaaS platform architecture, not a standalone hospital management system.
