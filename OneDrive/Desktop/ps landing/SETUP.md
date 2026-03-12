# Quick Setup Guide

## Step-by-Step Installation

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Setup MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition
# Windows: Download from https://www.mongodb.com/try/download/community
# Mac: brew install mongodb-community
# Linux: sudo apt-get install mongodb

# Start MongoDB
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `.env` file with connection string

### 3. Configure Environment

Edit `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/space-training-kids
NODE_ENV=development
```

### 4. Run the Application

**Development mode (recommended):**
```bash
npm run dev
```

This starts both frontend (port 3000) and backend (port 5000).

**Or run separately:**

Terminal 1 (Backend):
```bash
npm run server
```

Terminal 2 (Frontend):
```bash
npm run client
```

### 5. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/api/health

## Testing the Enrollment Form

1. Click "Enroll Now" button
2. Fill in the form:
   - Parent Name: Test Parent
   - Child Name: Test Child
   - Child Age: 8
   - Phone: 9876543210
   - Email: test@example.com
3. Submit the form
4. Check MongoDB for the new lead entry

## Verify MongoDB Connection

```bash
# Open MongoDB shell
mongo

# Switch to database
use space-training-kids

# View all leads
db.leads.find().pretty()
```

## Common Issues

### Port Already in Use

If port 3000 or 5000 is already in use:

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

### MongoDB Connection Error

1. Ensure MongoDB is running
2. Check connection string in `.env`
3. Verify network access (for Atlas)

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules frontend/node_modules
npm run install-all
```

## Production Deployment

### Frontend (Vercel)

```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Railway)

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

## Environment Variables for Production

```env
# Backend
PORT=5000
MONGODB_URI=<your-mongodb-atlas-uri>
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com

# Frontend (create .env in frontend folder)
REACT_APP_API_URL=https://your-backend-url.com
```

## Next Steps

1. Customize content in component files
2. Update colors in `tailwind.config.js`
3. Add your own images/illustrations
4. Configure email notifications
5. Set up analytics (Google Analytics)
6. Add payment gateway integration
7. Create admin dashboard

## Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check the README.md for detailed documentation
