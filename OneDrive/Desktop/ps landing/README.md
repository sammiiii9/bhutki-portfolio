# Space Training for Kids - Landing Page

A modern, high-conversion landing page built with the MERN stack for an educational program teaching kids about space exploration.

## 🚀 Features

- **Modern Ed-Tech Design**: Clean, professional UI with playful space theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout
- **Enrollment System**: Complete form submission with MongoDB storage
- **Interactive Components**: FAQ accordion, testimonials, pricing cards
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- React.js 18
- TailwindCSS for styling
- Framer Motion for animations
- Axios for API calls
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Body Parser

## 📁 Project Structure

```
space-training-kids/
├── backend/
│   ├── controllers/
│   │   └── leadController.js
│   ├── models/
│   │   └── Lead.js
│   ├── routes/
│   │   └── leadRoutes.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnnouncementBar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ProblemSolution.jsx
│   │   │   ├── ProgramOverview.jsx
│   │   │   ├── Curriculum.jsx
│   │   │   ├── Outcomes.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Instructor.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTASection.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── EnrollmentModal.jsx
│   │   ├── pages/
│   │   │   └── LandingPage.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd space-training-kids
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd frontend
npm install
cd ..
```

4. **Configure environment variables**

Edit the `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/space-training-kids
NODE_ENV=development
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/space-training-kids
```

5. **Start MongoDB** (if using local MongoDB)
```bash
mongod
```

### Running the Application

#### Development Mode (Both servers)

```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend server on http://localhost:3000

#### Run Backend Only

```bash
npm run server
```

#### Run Frontend Only

```bash
npm run client
```

#### Production Build

```bash
cd frontend
npm run build
```

## 📋 API Endpoints

### Leads

- **POST** `/api/leads` - Create new enrollment lead
  ```json
  {
    "parentName": "John Doe",
    "childName": "Jane Doe",
    "childAge": 8,
    "phone": "9876543210",
    "email": "john@example.com",
    "message": "Interested in the program"
  }
  ```

- **GET** `/api/leads` - Get all leads (admin)
- **GET** `/api/leads/:id` - Get single lead by ID

## 🎨 Design System

### Colors
- **Primary**: Blue shades (#0ea5e9)
- **Accent Purple**: #8b5cf6
- **Accent Pink**: #ec4899
- **Accent Orange**: #f97316

### Typography
- **Headings**: Poppins (600, 700, 800)
- **Body**: Inter (300, 400, 500, 600, 700)

### Container
- Max width: 1200px
- Padding: 1.5rem (24px)

### Spacing
- Section padding: 5rem (80px) vertical
- Card spacing: 1.5rem (24px)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Update Content

Edit the component files in `frontend/src/components/` to update:
- Program details
- Pricing plans
- Testimonials
- FAQ questions
- Instructor information

### Update Styling

Modify `frontend/tailwind.config.js` to change:
- Colors
- Fonts
- Spacing
- Breakpoints

### Update Backend

Modify `backend/models/Lead.js` to add/remove form fields.

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to Vercel or Netlify

3. Update API endpoint in `EnrollmentModal.jsx`:
```javascript
const response = await axios.post('https://your-backend-url.com/api/leads', formData);
```

### Backend (Heroku/Railway)

1. Create a `Procfile`:
```
web: node backend/server.js
```

2. Push to Heroku or Railway

3. Set environment variables in hosting platform

## 📝 License

MIT License

## 👥 Support

For support, email info@pebblesteps.in or call +91 74711 28755

## 🎯 Features Checklist

- ✅ Announcement bar with CTA
- ✅ Sticky navigation
- ✅ Hero section with animations
- ✅ Problem-solution section
- ✅ Program overview cards
- ✅ 12-week curriculum
- ✅ Learning outcomes
- ✅ How it works (4 steps)
- ✅ Testimonials with ratings
- ✅ Pricing plans (3 tiers)
- ✅ Instructor profile
- ✅ FAQ accordion
- ✅ Final CTA section
- ✅ Footer with links
- ✅ Enrollment modal form
- ✅ MongoDB integration
- ✅ Form validation
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Hover effects

## 🔮 Future Enhancements

- Email notifications on enrollment
- Admin dashboard for lead management
- Payment gateway integration
- Blog section
- Student portal
- Video testimonials
- Live chat support
