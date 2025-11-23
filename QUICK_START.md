# 🚀 Earth Power Website - Quick Start Guide

## Prerequisites
- Node.js 16+ installed on your system
- npm or yarn package manager

## Option 1: Automatic Start (Windows)
Simply double-click the `start.bat` file in the project folder.

## Option 2: Manual Start

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Website
Visit http://localhost:3000 in your browser

## 🎨 Website Features

### Pages Available:
- **Home** (/) - Hero, Why LFP, Brand Story, CTA
- **About** (/about) - Company story, Mission/Vision, Values, Timeline
- **Products** (/products) - Product catalog with filtering and details
- **Contact** (/contact) - Contact form with validation

### Key Components:
- ✨ Animated hero section with battery charging visualization
- 📊 LFP vs Lead-Acid comparison table
- 🎯 Mission, Vision, Values cards
- 📦 Product cards with "Coming Soon" support
- 📝 Contact form saving to CSV (data/contacts.csv)
- 🔝 Scroll-to-top button
- 📱 Fully responsive navigation

## 🛠️ For Production Deployment

### Build for Production:
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended):
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify:
1. Build: `npm run build`
2. Upload `.next` folder to Netlify

## 📧 Enable Email Notifications

1. Create `.env.local` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. Install nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

3. Update `/app/api/contact/route.ts` with email configuration

## 🔄 Database Migration

The contact form currently saves to CSV. To migrate to a database:

### PostgreSQL/Supabase:
```bash
npm install @prisma/client prisma
npx prisma init
```

### MongoDB:
```bash
npm install mongodb
```

Then update the `DataStore` class in `/app/api/contact/route.ts`

## 📱 Mobile Testing

The site is fully responsive. Test on:
- Desktop: 1920x1080, 1440x900
- Tablet: 768x1024
- Mobile: 375x667, 390x844

## 🎨 Customization

### Colors:
Edit `tailwind.config.ts`:
- Primary: `earth-green`
- Dark: `earth-charcoal`
- Accent: `earth-neon`

### Content:
- Products: `/app/products/page.tsx`
- Company info: `/components/Footer.tsx`
- Hero text: `/components/Hero.tsx`

## 🐛 Troubleshooting

### Port Already in Use:
Change port in package.json or run:
```bash
npm run dev -- -p 3001
```

### Dependencies Issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors:
```bash
npm run lint
npm run build
```

## 📞 Support

For any issues:
- Email: earthpowerjourney@gmail.com
- Phone: +011 41435047

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion**
