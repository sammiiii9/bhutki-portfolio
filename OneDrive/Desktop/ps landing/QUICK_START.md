# Quick Start Guide

Get your Space Training for Kids landing page up and running in 5 minutes!

## Prerequisites

- Node.js (v14+) installed
- MongoDB installed or MongoDB Atlas account
- Basic command line knowledge

## Installation (Windows)

### Option 1: Automated Installation

```bash
# Run the install script
install.bat
```

### Option 2: Manual Installation

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

## Configuration

1. **Open `.env` file** in the root directory

2. **Update MongoDB URI**:
   ```env
   MONGODB_URI=mongodb://localhost:27017/space-training-kids
   ```
   
   Or for MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/space-training-kids
   ```

## Running the Application

### Option 1: Run Both Servers (Recommended)

```bash
# Windows
start.bat

# Or manually
npm run dev
```

This starts:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### Option 2: Run Separately

**Terminal 1 (Backend)**:
```bash
npm run server
```

**Terminal 2 (Frontend)**:
```bash
npm run client
```

## Verify Installation

1. **Open browser**: http://localhost:3000
2. **Check backend**: http://localhost:5000/api/health
3. **Test enrollment form**: Click "Enroll Now" and submit

## Test the Enrollment Form

1. Click any "Enroll Now" button
2. Fill in the form:
   - Parent Name: John Doe
   - Child Name: Jane Doe
   - Child Age: 8
   - Phone: 9876543210
   - Email: test@example.com
3. Click "Submit Enrollment"
4. You should see a success message!

## Verify Data in MongoDB

### Local MongoDB
```bash
mongo
use space-training-kids
db.leads.find().pretty()
```

### MongoDB Atlas
1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections"
3. Select "space-training-kids" database
4. View "leads" collection

## Common Issues & Solutions

### Issue: Port 3000 already in use

**Solution**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: MongoDB connection error

**Solutions**:
1. Make sure MongoDB is running: `mongod`
2. Check connection string in `.env`
3. For Atlas: Verify network access settings

### Issue: Module not found

**Solution**:
```bash
# Reinstall dependencies
npm install
cd frontend
npm install
cd ..
```

### Issue: Cannot find 'react-scripts'

**Solution**:
```bash
cd frontend
npm install react-scripts
cd ..
```

## Next Steps

### 1. Customize Content

Edit these files to update content:
- `frontend/src/components/Hero.jsx` - Hero section
- `frontend/src/components/Pricing.jsx` - Pricing plans
- `frontend/src/components/Curriculum.jsx` - Curriculum details
- `frontend/src/components/Testimonials.jsx` - Testimonials

### 2. Customize Design

Edit `frontend/tailwind.config.js` to change:
- Colors
- Fonts
- Spacing
- Breakpoints

### 3. Add Your Logo

Replace the logo in:
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Footer.jsx`

### 4. Update Contact Information

Update phone and email in:
- `frontend/src/components/CTASection.jsx`
- `frontend/src/components/Footer.jsx`

## File Structure Overview

```
space-training-kids/
├── backend/              # Node.js backend
│   ├── controllers/     # Business logic
│   ├── models/         # Database schemas
│   ├── routes/         # API routes
│   └── server.js       # Main server file
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/ # React components (14 files)
│   │   ├── pages/      # Main landing page
│   │   └── App.js      # Root component
│   └── public/         # Static files
├── .env                # Environment variables
└── package.json        # Dependencies
```

## Available Scripts

### Root Directory

```bash
npm run dev        # Run both frontend and backend
npm run server     # Run backend only
npm run client     # Run frontend only
npm install        # Install backend dependencies
```

### Frontend Directory

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## Development Workflow

1. **Start servers**: `npm run dev`
2. **Make changes**: Edit component files
3. **See changes**: Auto-reload in browser
4. **Test**: Submit enrollment form
5. **Check data**: View in MongoDB

## Production Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy**:
1. Frontend → Vercel
2. Backend → Railway
3. Database → MongoDB Atlas

## Documentation

- `README.md` - Main documentation
- `SETUP.md` - Detailed setup guide
- `DESIGN_SYSTEM.md` - Design guidelines
- `DEPLOYMENT.md` - Deployment guide
- `API_DOCUMENTATION.md` - API reference
- `PROJECT_OVERVIEW.md` - Project details

## Getting Help

### Check Documentation
1. Read `README.md` for overview
2. Check `SETUP.md` for detailed setup
3. Review `API_DOCUMENTATION.md` for API details

### Debug Steps
1. Check console for errors
2. Verify MongoDB is running
3. Check `.env` configuration
4. Ensure all dependencies installed
5. Try clearing node_modules and reinstalling

### Still Stuck?

Common solutions:
```bash
# Clear everything and start fresh
rm -rf node_modules frontend/node_modules
npm install
cd frontend && npm install && cd ..
npm run dev
```

## Features Checklist

After installation, verify these features work:

- [ ] Page loads at http://localhost:3000
- [ ] All sections visible
- [ ] Smooth scrolling works
- [ ] Animations play
- [ ] Enrollment modal opens
- [ ] Form validation works
- [ ] Form submission succeeds
- [ ] Data saves to MongoDB
- [ ] Success message displays
- [ ] Responsive on mobile

## Performance Tips

1. **Development**: Use `npm run dev` for hot reload
2. **Production**: Build with `npm run build`
3. **Database**: Index frequently queried fields
4. **Images**: Optimize before adding
5. **Bundle**: Keep dependencies minimal

## Security Checklist

Before going live:

- [ ] Update `.env` with production values
- [ ] Enable CORS restrictions
- [ ] Add rate limiting
- [ ] Implement HTTPS
- [ ] Add input sanitization
- [ ] Set up monitoring
- [ ] Configure backups

## Customization Quick Reference

### Change Colors
`frontend/tailwind.config.js` → colors section

### Change Fonts
`frontend/public/index.html` → Google Fonts link
`frontend/tailwind.config.js` → fontFamily section

### Change Content
`frontend/src/components/*.jsx` → Edit component files

### Change API Endpoint
`frontend/src/components/EnrollmentModal.jsx` → axios.post URL

### Add New Section
1. Create component in `components/`
2. Import in `LandingPage.jsx`
3. Add to page layout

## Useful Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Check MongoDB status
mongo --version

# View running processes
netstat -ano | findstr :3000
netstat -ano | findstr :5000

# Kill process (Windows)
taskkill /PID <PID> /F

# Clear npm cache
npm cache clean --force

# Update all dependencies
npm update
cd frontend && npm update && cd ..
```

## Success Indicators

You'll know everything is working when:

1. ✅ No errors in terminal
2. ✅ Frontend loads without console errors
3. ✅ Backend responds to health check
4. ✅ Form submission creates database entry
5. ✅ Success message appears after submission

## What's Next?

1. **Customize**: Update content and design
2. **Test**: Try on different devices
3. **Deploy**: Follow DEPLOYMENT.md
4. **Monitor**: Set up analytics
5. **Iterate**: Gather feedback and improve

---

**Congratulations!** 🎉 Your Space Training for Kids landing page is ready!

For detailed information, see the other documentation files.
