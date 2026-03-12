# API Documentation

## Base URL

**Development**: `http://localhost:5000`  
**Production**: `https://your-backend-url.com`

## Authentication

Currently, the API does not require authentication. For production, consider adding API keys or JWT authentication for admin endpoints.

## Endpoints

### Health Check

Check if the server is running.

**Endpoint**: `GET /api/health`

**Response**:
```json
{
  "status": "Server is running",
  "timestamp": "2024-03-10T10:30:00.000Z"
}
```

**Status Codes**:
- `200 OK`: Server is running

---

### Create Lead

Submit a new enrollment request.

**Endpoint**: `POST /api/leads`

**Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "parentName": "John Doe",
  "childName": "Jane Doe",
  "childAge": 8,
  "phone": "9876543210",
  "email": "john@example.com",
  "message": "Interested in the space program"
}
```

**Field Validations**:
- `parentName`: Required, string, trimmed
- `childName`: Required, string, trimmed
- `childAge`: Required, number, min: 3, max: 15
- `phone`: Required, string, must match pattern: `[6-9][0-9]{9}` (Indian phone number)
- `email`: Required, string, valid email format
- `message`: Optional, string, trimmed

**Success Response** (201 Created):
```json
{
  "success": true,
  "message": "Enrollment request submitted successfully!",
  "data": {
    "_id": "65f1234567890abcdef12345",
    "parentName": "John Doe",
    "childName": "Jane Doe",
    "childAge": 8,
    "phone": "9876543210",
    "email": "john@example.com",
    "message": "Interested in the space program",
    "status": "new",
    "createdAt": "2024-03-10T10:30:00.000Z"
  }
}
```

**Error Response** (400 Bad Request):
```json
{
  "success": false,
  "message": "A lead with this email already exists"
}
```

**Error Response** (400 Bad Request - Validation):
```json
{
  "success": false,
  "message": "Lead validation failed: phone: Please enter a valid Indian phone number"
}
```

**Status Codes**:
- `201 Created`: Lead created successfully
- `400 Bad Request`: Validation error or duplicate email
- `500 Internal Server Error`: Server error

---

### Get All Leads

Retrieve all enrollment leads (Admin only - should be protected in production).

**Endpoint**: `GET /api/leads`

**Response** (200 OK):
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "65f1234567890abcdef12345",
      "parentName": "John Doe",
      "childName": "Jane Doe",
      "childAge": 8,
      "phone": "9876543210",
      "email": "john@example.com",
      "message": "Interested in the space program",
      "status": "new",
      "createdAt": "2024-03-10T10:30:00.000Z"
    },
    {
      "_id": "65f1234567890abcdef12346",
      "parentName": "Jane Smith",
      "childName": "Tom Smith",
      "childAge": 7,
      "phone": "9876543211",
      "email": "jane@example.com",
      "message": "",
      "status": "new",
      "createdAt": "2024-03-10T11:00:00.000Z"
    }
  ]
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Failed to fetch leads"
}
```

**Status Codes**:
- `200 OK`: Leads retrieved successfully
- `500 Internal Server Error`: Server error

---

### Get Single Lead

Retrieve a specific lead by ID (Admin only - should be protected in production).

**Endpoint**: `GET /api/leads/:id`

**URL Parameters**:
- `id`: MongoDB ObjectId of the lead

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "_id": "65f1234567890abcdef12345",
    "parentName": "John Doe",
    "childName": "Jane Doe",
    "childAge": 8,
    "phone": "9876543210",
    "email": "john@example.com",
    "message": "Interested in the space program",
    "status": "new",
    "createdAt": "2024-03-10T10:30:00.000Z"
  }
}
```

**Error Response** (404 Not Found):
```json
{
  "success": false,
  "message": "Lead not found"
}
```

**Error Response** (500 Internal Server Error):
```json
{
  "success": false,
  "message": "Failed to fetch lead"
}
```

**Status Codes**:
- `200 OK`: Lead retrieved successfully
- `404 Not Found`: Lead with given ID not found
- `500 Internal Server Error`: Server error

---

## Data Models

### Lead Model

```javascript
{
  parentName: {
    type: String,
    required: true,
    trim: true
  },
  childName: {
    type: String,
    required: true,
    trim: true
  },
  childAge: {
    type: Number,
    required: true,
    min: 3,
    max: 15
  },
  phone: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'enrolled', 'rejected'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### Lead Status Values

- `new`: Lead just submitted, not yet contacted
- `contacted`: Lead has been contacted by admin
- `enrolled`: Lead has enrolled in the program
- `rejected`: Lead declined or not interested

---

## Error Handling

All endpoints follow a consistent error response format:

```json
{
  "success": false,
  "message": "Error description here"
}
```

### Common Error Codes

- `400 Bad Request`: Invalid input data or validation error
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

---

## Rate Limiting

**Current**: No rate limiting implemented

**Recommended for Production**:
- 100 requests per 15 minutes per IP
- 10 form submissions per hour per IP

**Implementation Example**:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## CORS Configuration

**Current Configuration**:
```javascript
app.use(cors());
```

**Recommended for Production**:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
```

---

## Testing the API

### Using cURL

**Create Lead**:
```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "parentName": "Test Parent",
    "childName": "Test Child",
    "childAge": 8,
    "phone": "9876543210",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

**Get All Leads**:
```bash
curl http://localhost:5000/api/leads
```

**Get Single Lead**:
```bash
curl http://localhost:5000/api/leads/65f1234567890abcdef12345
```

### Using Postman

1. **Create New Request**
2. **Set Method**: POST
3. **Set URL**: `http://localhost:5000/api/leads`
4. **Headers**: Add `Content-Type: application/json`
5. **Body**: Select "raw" and "JSON", paste request body
6. **Send**

### Using JavaScript (Axios)

```javascript
import axios from 'axios';

// Create lead
const createLead = async () => {
  try {
    const response = await axios.post('http://localhost:5000/api/leads', {
      parentName: 'Test Parent',
      childName: 'Test Child',
      childAge: 8,
      phone: '9876543210',
      email: 'test@example.com',
      message: 'Test message'
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};

// Get all leads
const getAllLeads = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/leads');
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
};
```

---

## Future API Enhancements

### Recommended Additions

1. **Authentication**
   - JWT-based authentication for admin endpoints
   - API key authentication for third-party integrations

2. **Lead Management**
   - `PUT /api/leads/:id` - Update lead status
   - `DELETE /api/leads/:id` - Delete lead
   - `GET /api/leads/stats` - Get lead statistics

3. **Filtering & Pagination**
   - `GET /api/leads?status=new&page=1&limit=10`
   - `GET /api/leads?search=john@example.com`

4. **Email Notifications**
   - `POST /api/leads/:id/notify` - Send email to lead
   - Automatic email on lead creation

5. **Webhooks**
   - Configure webhooks for lead events
   - Integration with CRM systems

6. **Analytics**
   - `GET /api/analytics/leads` - Lead conversion metrics
   - `GET /api/analytics/sources` - Traffic source tracking

### Example: Update Lead Status

```javascript
// PUT /api/leads/:id
{
  "status": "contacted"
}

// Response
{
  "success": true,
  "message": "Lead status updated successfully",
  "data": {
    "_id": "65f1234567890abcdef12345",
    "status": "contacted",
    // ... other fields
  }
}
```

---

## Security Best Practices

### For Production

1. **Environment Variables**
   - Never expose sensitive data in code
   - Use `.env` file for configuration

2. **Input Validation**
   - Validate all user inputs
   - Sanitize data before database operations

3. **Rate Limiting**
   - Prevent abuse and DDoS attacks
   - Implement per-endpoint limits

4. **CORS**
   - Restrict to specific origins
   - Don't use wildcard (*) in production

5. **HTTPS**
   - Always use HTTPS in production
   - Redirect HTTP to HTTPS

6. **Error Messages**
   - Don't expose sensitive information
   - Use generic error messages for users

7. **Database Security**
   - Use connection string with authentication
   - Implement proper access controls
   - Regular backups

8. **Logging**
   - Log all API requests
   - Monitor for suspicious activity
   - Use logging service (e.g., Winston, Morgan)

---

## Monitoring & Logging

### Recommended Tools

- **Application Monitoring**: New Relic, Datadog
- **Error Tracking**: Sentry
- **Logging**: Winston, Morgan
- **Uptime Monitoring**: UptimeRobot, Pingdom

### Example Logging Setup

```javascript
const morgan = require('morgan');
const winston = require('winston');

// HTTP request logging
app.use(morgan('combined'));

// Application logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

---

## Support

For API-related questions or issues:
- Email: dev@pebblesteps.in
- Documentation: See README.md
- Issues: GitHub Issues (if applicable)

---

**Last Updated**: March 2024  
**API Version**: 1.0.0
