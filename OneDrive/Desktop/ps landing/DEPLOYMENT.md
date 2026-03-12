# Deployment Guide

## Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables configured
- [ ] MongoDB connection working
- [ ] Form submissions working
- [ ] Responsive design verified
- [ ] Browser compatibility tested
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics configured (optional)

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend

```bash
cd frontend
npm run build
```

### Step 2: Deploy to Vercel

**Option A: Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

**Option B: Vercel Dashboard**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Set root directory to `frontend`
5. Build command: `npm run build`
6. Output directory: `build`
7. Click "Deploy"

### Step 3: Configure Environment Variables

In Vercel Dashboard:
1. Go to Project Settings
2. Environment Variables
3. Add:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```

## Backend Deployment (Railway)

### Step 1: Prepare Backend

Create `Procfile` in root:
```
web: node backend/server.js
```

### Step 2: Deploy to Railway

**Option A: Railway CLI**
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

**Option B: Railway Dashboard**
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your repository
5. Click "Deploy"

### Step 3: Configure Environment Variables

In Railway Dashboard:
1. Go to Variables tab
2. Add:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/space-training-kids
   NODE_ENV=production
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

### Step 4: Update CORS

Edit `backend/server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

## MongoDB Atlas Setup

### Step 1: Create Cluster

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Log in
3. Create a free cluster
4. Choose cloud provider and region
5. Click "Create Cluster"

### Step 2: Create Database User

1. Database Access → Add New Database User
2. Choose authentication method (password)
3. Create username and password
4. Set privileges to "Read and write to any database"
5. Add User

### Step 3: Configure Network Access

1. Network Access → Add IP Address
2. Click "Allow Access from Anywhere" (0.0.0.0/0)
3. Or add specific IP addresses
4. Confirm

### Step 4: Get Connection String

1. Clusters → Connect
2. Choose "Connect your application"
3. Copy connection string
4. Replace `<password>` with your database user password
5. Replace `<dbname>` with `space-training-kids`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/space-training-kids?retryWrites=true&w=majority
```

## Alternative Deployment Options

### Frontend Alternatives

#### Netlify
```bash
npm i -g netlify-cli
cd frontend
npm run build
netlify deploy --prod
```

#### GitHub Pages
```bash
cd frontend
npm run build
# Add "homepage": "https://yourusername.github.io/repo-name" to package.json
npm install --save-dev gh-pages
# Add to scripts: "deploy": "gh-pages -d build"
npm run deploy
```

### Backend Alternatives

#### Heroku
```bash
heroku login
heroku create your-app-name
git push heroku main
heroku config:set MONGODB_URI=your-mongodb-uri
```

#### Render
1. Go to https://render.com
2. New → Web Service
3. Connect repository
4. Build command: `npm install`
5. Start command: `node backend/server.js`
6. Add environment variables

#### DigitalOcean App Platform
1. Go to https://cloud.digitalocean.com
2. Create → Apps
3. Connect GitHub repository
4. Configure build settings
5. Add environment variables

## Post-Deployment

### Update API Endpoint

In `frontend/src/components/EnrollmentModal.jsx`:
```javascript
const response = await axios.post(
  `${process.env.REACT_APP_API_URL}/api/leads`,
  formData
);
```

### Test Production

1. Visit your deployed frontend URL
2. Test enrollment form submission
3. Verify data in MongoDB Atlas
4. Test all navigation links
5. Check mobile responsiveness
6. Test on different browsers

### Monitor Application

#### Frontend (Vercel)
- View deployment logs in Vercel dashboard
- Monitor analytics
- Check error logs

#### Backend (Railway)
- View logs in Railway dashboard
- Monitor resource usage
- Set up alerts

#### Database (MongoDB Atlas)
- Monitor cluster metrics
- View slow queries
- Set up alerts for storage

## Custom Domain Setup

### Frontend (Vercel)

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Backend (Railway)

1. Go to Settings → Domains
2. Add custom domain
3. Update DNS records as instructed

## SSL/HTTPS

Both Vercel and Railway provide automatic SSL certificates. No additional configuration needed.

## Environment Variables Summary

### Frontend (.env)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/space-training-kids
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
```

## Troubleshooting

### CORS Errors
- Verify FRONTEND_URL in backend environment variables
- Check CORS configuration in server.js
- Ensure credentials are set correctly

### Database Connection Errors
- Verify MongoDB URI is correct
- Check network access settings in Atlas
- Ensure database user has correct permissions

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review build logs for specific errors

### Form Not Submitting
- Check API endpoint URL
- Verify backend is running
- Check browser console for errors
- Test API endpoint directly with Postman

## Performance Optimization

### Frontend
```bash
# Analyze bundle size
cd frontend
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

### Backend
- Enable compression
- Add rate limiting
- Implement caching
- Optimize database queries

### Database
- Create indexes on frequently queried fields
- Monitor slow queries
- Optimize schema design

## Security Best Practices

1. **Environment Variables**: Never commit .env files
2. **API Keys**: Store securely in environment variables
3. **CORS**: Restrict to specific origins in production
4. **Rate Limiting**: Implement to prevent abuse
5. **Input Validation**: Validate all user inputs
6. **HTTPS**: Always use HTTPS in production
7. **Dependencies**: Keep packages updated

## Monitoring & Analytics

### Google Analytics (Optional)

1. Create GA4 property
2. Add tracking code to `frontend/public/index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Error Tracking (Optional)

Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Backup Strategy

### Database Backups
1. MongoDB Atlas provides automatic backups
2. Configure backup schedule in Atlas
3. Test restore process regularly

### Code Backups
1. Use Git for version control
2. Push to GitHub/GitLab regularly
3. Tag releases

## Scaling Considerations

### When to Scale

- High traffic (>10,000 visits/day)
- Slow response times
- Database performance issues
- High memory/CPU usage

### Scaling Options

1. **Vertical Scaling**: Upgrade server resources
2. **Horizontal Scaling**: Add more servers
3. **Database Scaling**: Upgrade MongoDB cluster
4. **CDN**: Use Cloudflare or similar
5. **Caching**: Implement Redis

## Maintenance

### Regular Tasks

- [ ] Update dependencies monthly
- [ ] Review error logs weekly
- [ ] Monitor performance metrics
- [ ] Backup database regularly
- [ ] Review security advisories
- [ ] Test critical flows monthly

### Update Process

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Test thoroughly
npm test
npm run dev

# Deploy updates
git push
```

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- React Docs: https://react.dev
- Express Docs: https://expressjs.com

## Cost Estimates

### Free Tier Limits

**Vercel**
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic SSL

**Railway**
- $5 free credit/month
- ~500 hours runtime

**MongoDB Atlas**
- 512 MB storage
- Shared cluster
- No credit card required

### Paid Plans (if needed)

**Vercel Pro**: $20/month
**Railway**: Pay as you go (~$5-20/month)
**MongoDB Atlas**: $9/month (M2 cluster)

Total estimated cost: $0-50/month depending on traffic
