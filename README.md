# Earth Power - Premium LFP Battery Website

A world-class, scalable website for Earth Power, India's emerging leader in LFP (Lithium Iron Phosphate) battery technology.

![Earth Power](./public/earth-power-logo.png)

## 🚀 Features

- **Premium Design**: Tesla-like polish with clean energy aesthetics
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animated**: Smooth animations and micro-interactions using Framer Motion
- **SEO Optimized**: Full meta tags, Open Graph, and structured data
- **Scalable Architecture**: Modular components ready for future expansion
- **Contact Form**: Temporary CSV storage with email notifications (ready for database migration)

## 📋 Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/earthpower-website.git
cd earthpower-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
earthpower-website/
├── app/
│   ├── api/
│   │   └── contact/      # Contact form API endpoint
│   ├── about/            # About Us page
│   ├── products/         # Products catalog page
│   ├── contact/          # Contact page with form
│   ├── layout.tsx        # Main layout wrapper
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Cinematic hero section
│   ├── WhyLFP.tsx        # LFP advantages section
│   ├── BrandStory.tsx    # Company story section
│   └── CTASection.tsx    # Call-to-action section
├── lib/
│   └── utils.ts          # Utility functions
├── data/                 # CSV data storage (auto-created)
│   └── contacts.csv      # Contact form submissions
└── public/              # Static assets

```

## 🔄 Database Migration Guide

The website currently uses CSV files for temporary data storage. To migrate to a real database:

### Option 1: PostgreSQL

1. Install dependencies:
```bash
npm install @prisma/client prisma
```

2. Update `/app/api/contact/route.ts`:
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Replace DataStore class with:
class DataStore {
  async save(data: ContactData) {
    return await prisma.contact.create({ data })
  }
  
  async getAll() {
    return await prisma.contact.findMany()
  }
}
```

### Option 2: MongoDB

1. Install dependencies:
```bash
npm install mongodb
```

2. Update the DataStore class to use MongoDB client

### Option 3: Supabase

1. Install dependencies:
```bash
npm install @supabase/supabase-js
```

2. Configure Supabase client and update DataStore

## 📧 Email Configuration

To enable email notifications for contact form submissions:

1. Install nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. Update `/app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer'

class NotificationService {
  async sendEmail(data: ContactData) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'earthpowerjourney@gmail.com',
      subject: `New Contact from ${data.name}`,
      html: `...` // Email template
    })
  }
}
```

3. Add environment variables:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
- Primary Green: `earth-green`
- Dark: `earth-charcoal`
- Accent: `earth-neon`

### Content
- Update company information in components
- Add new products in `/app/products/page.tsx`
- Modify contact information in `/components/Footer.tsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-hosted
```bash
npm run build
npm run start
```

## 📱 Features Roadmap

- [ ] Admin Dashboard
- [ ] Product CMS
- [ ] Dealer Portal
- [ ] Multi-language Support
- [ ] WhatsApp Integration
- [ ] Live Chat Support
- [ ] Product Comparison Tool
- [ ] Battery Calculator
- [ ] Warranty Registration
- [ ] Service Booking System

## 🤝 Support

For support, email earthpowerjourney@gmail.com or call +011 41435047

## 📄 License

© 2024 Earth Power. All rights reserved.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
