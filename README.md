# Ruby Infinity Solutions - Professional Business Website

A modern, professional website for Ruby Infinity Solutions LLC, showcasing software development, career services, henna art, and consulting services.

## Features

✨ **Modern Design**
- Responsive, mobile-friendly layout
- Professional color scheme (Ruby red and blue)
- Smooth animations and transitions
- Clean, modern UI components

🎯 **Service Showcase**
- 9 different service categories
- Service filtering system
- Detailed service modals
- Pricing information
- Service-specific descriptions

👥 **Client Engagement**
- Testimonials section
- Contact form with service selection
- Call-to-action buttons throughout
- Contact information display
- Social media links

📱 **Mobile Optimized**
- Hamburger menu for mobile devices
- Responsive grid layouts
- Touch-friendly buttons
- Optimized font sizes

## Services Included

1. **Software Development** - Custom web and mobile applications
2. **IT Consulting** - Technology strategy and support
3. **Resume Review** - Resume and cover letter optimization
4. **Career Coaching** - Career guidance and advancement
5. **Interview Prep** - Interview coaching and preparation
6. **Henna Art** - Traditional henna designs
7. **Document Assistance** - Medical, passport, visa, and immigration support
8. **Business Consulting** - Strategic business guidance
9. **General Consulting** - Customized consulting services

## File Structure

```
ruby-infinity-solutions/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## Local Testing

1. **Extract the files** to a folder on your computer
2. **Open index.html** in your web browser
3. Test navigation, filtering, forms, and responsive design

## Customization

### Edit Business Information
- Update contact email in `index.html` (search for "info@rubyinfinitysolutions.com")
- Update phone number (search for "+1-800-RUBY-INF")
- Update business hours as needed
- Add your actual social media links

### Change Colors
In `styles.css`, modify the color variables (lines 47-53):
```css
:root {
    --primary-color: #d63384;        /* Ruby red - change this */
    --primary-dark: #b52d68;         /* Darker ruby - change this */
    --primary-light: #e85aa0;        /* Lighter ruby - change this */
    --secondary-color: #0d6efd;      /* Blue accent */
    /* ... other colors ... */
}
```

### Update Content
- Edit service descriptions in `index.html` (lines 71-225)
- Update testimonials section (lines 445-480)
- Modify pricing tiers (lines 495-540)
- Change company statistics in About section (lines 415-426)

### Add Your Logo
Replace the 💎 emoji with an image:
```html
<!-- In index.html, replace: -->
<span class="logo-icon">💎</span>

<!-- With: -->
<img src="logo.png" alt="Ruby Infinity Solutions" class="logo-icon" style="width: 40px; height: 40px;">
```

## Deployment to Azure

### Prerequisites
- Azure account (free tier available at https://azure.microsoft.com/free)
- Azure CLI (optional) or Azure Portal access

### Option 1: Deploy via Azure Portal (Easiest)

1. **Create Resource Group**
   - Go to https://portal.azure.com
   - Search "Resource Groups" → Create
   - Name: `ruby-infinity-rg`
   - Region: Select your region

2. **Create App Service Plan**
   - Search "App Service Plans" → Create
   - Resource Group: `ruby-infinity-rg`
   - Name: `ruby-infinity-plan`
   - OS: Windows
   - SKU: Free F1

3. **Create App Service**
   - Search "App Services" → Create
   - Name: `ruby-infinity-demo` (must be unique)
   - Resource Group: `ruby-infinity-rg`
   - Publish: Code
   - Runtime: Static HTML
   - Plan: `ruby-infinity-plan`

4. **Deploy Files**
   - Go to Deployment Center
   - Choose Local Git
   - Copy Git URL
   - In PowerShell:
   ```powershell
   cd path\to\ruby-infinity-solutions
   git init
   git add .
   git commit -m "Initial Ruby Infinity Solutions website"
   git remote add azure [PASTE_YOUR_GIT_URL]
   git push azure master
   ```

   Your site will be live at: `https://ruby-infinity-demo.azurewebsites.net`

### Option 2: Deploy via Azure CLI

```powershell
# Login to Azure
az login

# Create resource group
az group create --name ruby-infinity-rg --location eastus

# Create App Service Plan (free tier)
az appservice plan create `
  --name ruby-infinity-plan `
  --resource-group ruby-infinity-rg `
  --sku F1

# Create App Service
az webapp create `
  --resource-group ruby-infinity-rg `
  --plan ruby-infinity-plan `
  --name ruby-infinity-demo `
  --runtime "STATIC|1.0"

# Deploy files
cd path\to\ruby-infinity-solutions
Compress-Archive -Path *.* -DestinationPath website.zip
az webapp deployment source config-zip `
  --resource-group ruby-infinity-rg `
  --name ruby-infinity-demo `
  --src website.zip
```

### Option 3: GitHub Continuous Deployment

1. Push code to GitHub repository
2. In Azure App Service → Deployment Center
3. Select GitHub as source
4. Authorize and select your repo/branch
5. Every push automatically deploys

## After Deployment

### Update Contact Form (Important)
The current contact form uses mailto links. For production, you should set up a backend service:

1. **Option A: Use Azure Functions**
   - Create an Azure Function to handle form submissions
   - Update the form action in `script.js`

2. **Option B: Use Third-Party Service**
   - Use Formspree (formspree.io)
   - Use EmailJS
   - Use AWS SES

3. **Option C: Use Backend Server**
   - Deploy a Node.js/Python backend
   - Create API endpoint for form submissions

### Enable HTTPS
- Azure automatically provides free HTTPS for .azurewebsites.net domains
- For custom domains, create a free SSL certificate

### Add Custom Domain (Optional)
1. In App Service → Custom domains
2. Add your domain (e.g., www.rubyinfinitysolutions.com)
3. Follow DNS setup instructions
4. Azure will provision free SSL certificate

### Monitor Performance
1. In App Service → Overview
2. Check metrics (requests, CPU, memory)
3. View logs for debugging

## Free Azure Tier Limits
- 1 GB storage
- Shared compute resources
- Up to 1 GB bandwidth/month
- 60 minutes of CPU per day
- Good for low-traffic business sites

## Security Checklist
- ✅ Update contact email and phone numbers
- ✅ Remove placeholder social media links or add real ones
- ✅ Set up proper form handling (not mailto)
- ✅ Add privacy policy page
- ✅ Add terms of service page
- ✅ Implement SSL/HTTPS
- ✅ Add robots.txt for SEO
- ✅ Test all forms and links

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips
- Images are minimal (using emojis and gradients)
- No heavy dependencies
- Optimized CSS and JavaScript
- Fast load times even on slow connections

## Support & Customization

For additional customization needs:
- Contact professional web developers
- Consider hiring an Azure solutions architect
- Look into Azure DevOps for CI/CD pipelines

## License
All content is proprietary to Ruby Infinity Solutions LLC.

## Contact
- Email: info@rubyinfinitysolutions.com
- Phone: +1 (800) RUBY-INF
- Website: www.rubyinfinitysolutions.com

---

**Version:** 1.0  
**Last Updated:** November 2025  
**Created for:** Ruby Infinity Solutions LLC
# Ruby Infinity Solutions - Deployment triggered
