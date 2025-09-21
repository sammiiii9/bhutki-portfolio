# Pebble Steps Website

A modern, responsive website for Pebble Steps - Structured Literacy & Confidence Building programs using Orton-Gillingham and Six Bricks methodologies.

## Features

- 🎨 Modern, responsive design with green color palette
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite
- 🔧 Centralized configuration management
- 🌐 Serverless API for dynamic content updates
- 📊 Admin panel for managing site content
- 🎯 SEO optimized

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── config/             # Centralized configuration
│   ├── hooks/              # Custom React hooks
│   └── App.jsx             # Main app component
├── api/                    # Serverless API functions
├── components/             # Additional components
└── public/                 # Static assets
```

## Configuration Management

The website uses a centralized configuration system that allows dynamic updates without code changes:

### Key Configuration Areas:
- **Contact Information**: Phone, email, WhatsApp, locations
- **Business Hours**: Operating hours, response times
- **Company Details**: Name, tagline, description
- **Social Media**: Links to social platforms
- **Statistics**: Success metrics and numbers

### Configuration Files:
- `src/config/siteConfig.js` - Main configuration object
- `src/hooks/useSiteConfig.js` - React hook for config management
- `api/config.js` - Serverless API for config updates

## API Endpoints

### Configuration API (`/api/config`)
- `GET /api/config` - Retrieve current configuration
- `PUT /api/config` - Update configuration
- `POST /api/config` - Reset to default configuration

### Contact API (`/api/contact`)
- `POST /api/contact` - Handle contact form submissions

## Admin Panel

Access the admin panel at `/admin` to manage:
- Contact information (phone, email, locations)
- Business hours and response times
- Company information
- Social media links

## Environment Variables

Create a `.env.local` file for local development:

```env
REACT_APP_API_URL=http://localhost:3000
VITE_API_URL=http://localhost:3000
```

For production, set these in your Vercel dashboard.

## Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pebble-steps-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Website: http://localhost:5173
   - Admin Panel: http://localhost:5173/admin

## Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push

2. **Manual Deployment**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

### Deployment Configuration

The `vercel.json` file is already configured for:
- Serverless functions in the `api/` directory
- Proper CORS headers
- Route rewrites

### Environment Variables in Production

Set these in your Vercel dashboard:
- `REACT_APP_API_URL`: Your production API URL
- Any other environment-specific variables

## Updating Site Configuration

### Method 1: Admin Panel (Recommended)
1. Go to `yoursite.com/admin`
2. Update the desired fields
3. Click "Save Changes"

### Method 2: API Calls
```javascript
// Update phone number
fetch('/api/config', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contact: {
      phone: {
        primary: "+91 99999 88888",
        display: "+91 99999 88888",
        href: "tel:+919999988888"
      }
    }
  })
})
```

### Method 3: Direct Configuration Edit
Edit `src/config/siteConfig.js` and redeploy.

## Customization

### Colors
The color palette is defined in `src/index.css`. Current green theme:
- Primary: `142 65% 28%` (Dark forest green)
- Accent: `142 45% 45%` (Medium green)

### Content
Most content is centralized in `src/config/siteConfig.js`. Update this file to change:
- Company information
- Contact details
- Statistics
- Program information

### Components
All components are in the `src/components/` and `components/` directories. They use the centralized configuration through the `useSiteConfig` hook.

## Pages Overview

- **Home** (`/`) - Hero, about, programs overview
- **About** (`/about`) - Company mission, founder, FAQ
- **Methods** (`/method`) - Orton-Gillingham and Six Bricks methodology
- **Programs** (`/programs`) - Detailed program information
- **Results** (`/results`) - Success stories and statistics
- **Contact** (`/contact`) - Contact forms and information
- **Admin** (`/admin`) - Configuration management panel

## Performance Optimization

- Lazy loading for images
- Component-based architecture
- Optimized bundle size with Vite
- Responsive images and modern formats
- Minimal JavaScript for fast loading

## SEO Features

- Meta tags configuration
- Structured data
- Semantic HTML
- Optimized images with alt text
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For technical support or questions:
- Email: support@pebblesteps.com
- Documentation: This README
- Admin Panel: `/admin` for configuration management

## License

© 2024 Pebble Steps. All rights reserved.