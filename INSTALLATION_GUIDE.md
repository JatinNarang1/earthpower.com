# 📦 Earth Power Website - Installation Guide

## Step 1: Install Node.js (Required)

### Windows Installation:
1. Download Node.js from: https://nodejs.org/
2. Choose the **LTS version** (recommended)
3. Run the installer and follow the prompts
4. **Important**: Check the box that says "Automatically install the necessary tools"
5. Restart your computer after installation

### Verify Installation:
Open Command Prompt or PowerShell and run:
```
node --version
npm --version
```

## Step 2: Install Project Dependencies

### Method 1: Use the start.bat file
1. Navigate to the project folder: `c:\Users\jatin\Downloads\earthpowerbattery.com`
2. Double-click on `start.bat`
3. The script will automatically install dependencies and start the server

### Method 2: Manual Installation
1. Open Command Prompt or PowerShell
2. Navigate to project folder:
```
cd c:\Users\jatin\Downloads\earthpowerbattery.com
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```

## Step 3: Access Your Website
Open your web browser and go to: **http://localhost:3000**

## 🌐 Deployment Options

### Option 1: Vercel (Easiest - FREE)
1. Create account at: https://vercel.com
2. Install Vercel CLI:
```
npm install -g vercel
```
3. Deploy:
```
vercel
```
4. Follow the prompts - your site will be live in minutes!

### Option 2: Netlify (Also FREE)
1. Create account at: https://www.netlify.com
2. Build the project:
```
npm run build
```
3. Drag and drop the `.next` folder to Netlify dashboard

### Option 3: Traditional Hosting
1. Build the project:
```
npm run build
```
2. Upload these folders to your hosting:
   - `.next/`
   - `public/`
   - `package.json`
   - `next.config.js`
3. Run on server:
```
npm install --production
npm start
```

## 🔧 Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution**: Node.js is not installed. Follow Step 1 above.

### Issue: "Port 3000 is already in use"
**Solution**: 
```
npm run dev -- -p 3001
```
Then access at: http://localhost:3001

### Issue: "Module not found" errors
**Solution**: 
```
npm install --force
```

### Issue: Build fails
**Solution**: Clear cache and rebuild
```
npm cache clean --force
npm install
npm run build
```

## 📊 Project Structure Overview

```
earthpowerbattery.com/
│
├── app/                    # Next.js 14 App Directory
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── products/page.tsx  # Products page
│   ├── contact/page.tsx   # Contact page
│   ├── api/contact/       # Contact form API
│   └── layout.tsx         # Main layout
│
├── components/            # Reusable components
│   ├── Hero.tsx          # Hero section
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ...               # Other components
│
├── public/               # Static files
├── data/                 # CSV data storage (auto-created)
└── package.json          # Project dependencies
```

## 🎨 Quick Customization

### Change Company Details:
Edit `/components/Footer.tsx` for:
- Address
- Phone number
- Email
- Social links

### Update Products:
Edit `/app/products/page.tsx`:
- Add new products to the `products` array
- Update specifications
- Add product images

### Modify Colors:
Edit `/tailwind.config.ts`:
- Change `earth-green` values for primary color
- Adjust `earth-charcoal` for dark theme
- Modify `earth-neon` for accents

## 📱 Testing on Mobile

### Local Network Testing:
1. Find your computer's IP address:
```
ipconfig
```
2. Look for "IPv4 Address" (e.g., 192.168.1.100)
3. On mobile, visit: `http://[YOUR-IP]:3000`
   Example: `http://192.168.1.100:3000`

## 🚀 Going Live Checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Update company information
- [ ] Add real product data
- [ ] Set up email configuration (optional)
- [ ] Build with `npm run build`
- [ ] Deploy to hosting platform
- [ ] Update DNS records (if using custom domain)
- [ ] Test live website

## 💡 Pro Tips

1. **Performance**: Run `npm run build` before deployment for optimized production build
2. **SEO**: Update meta tags in `/app/layout.tsx`
3. **Analytics**: Add Google Analytics or similar tracking
4. **Monitoring**: Set up uptime monitoring
5. **Backup**: Keep regular backups of `/data/contacts.csv`

## 📞 Need Help?

- **Technical Support**: Refer to Next.js docs at https://nextjs.org/docs
- **Earth Power Contact**: earthpowerjourney@gmail.com

---

**Your premium Earth Power website is ready to launch! 🎉**
