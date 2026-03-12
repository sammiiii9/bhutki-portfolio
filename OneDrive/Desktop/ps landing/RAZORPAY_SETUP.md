# Razorpay Payment Integration Setup

## 🚀 Complete Razorpay Integration for Space Training Kids

### Backend Features ✅
- **Payment Model**: Stores payment records with lead association
- **Payment Controller**: Handles order creation, verification, and status
- **Payment Routes**: RESTful API endpoints for payment operations
- **Razorpay SDK**: Integrated with proper error handling

### Frontend Features ✅
- **Payment Modal**: Enhanced enrollment form with payment flow
- **Razorpay Checkout**: Integrated payment gateway
- **Payment Verification**: Automatic verification and success handling
- **Loading States**: Proper UX during payment process

## 🔧 Setup Instructions

### 1. Get Razorpay Credentials
1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Go to Settings → API Keys
3. Generate Test/Live API Keys

### 2. Update Environment Variables
Edit your `.env` file:
```env
# Replace with your actual Razorpay credentials
RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_secret_key_here
```

### 3. Test Payment Flow
1. Start the server: `npm run dev`
2. Open the landing page
3. Click "Enroll Now"
4. Fill the form and click "Proceed to Payment"
5. Use Razorpay test cards for testing

## 💳 Test Cards (Razorpay Test Mode)
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## 🔄 Payment Flow
1. **Form Submission** → Creates lead in database
2. **Order Creation** → Generates Razorpay order
3. **Payment Gateway** → Opens Razorpay checkout
4. **Payment Verification** → Verifies signature
5. **Success Handling** → Updates lead status to "enrolled"

## 📊 Database Schema

### Payment Model
```javascript
{
  leadId: ObjectId (ref: Lead),
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  amount: Number (in paise),
  currency: String (default: INR),
  status: enum ['created', 'pending', 'success', 'failed'],
  parentName: String,
  childName: String,
  email: String,
  phone: String,
  timestamps: true
}
```

### Lead Model (Updated)
```javascript
{
  // ... existing fields
  status: enum ['new', 'contacted', 'enrolled', 'rejected'],
  enrolledAt: Date
}
```

## 🛡️ Security Features
- **Signature Verification**: Validates payment authenticity
- **HMAC SHA256**: Secure signature generation
- **Environment Variables**: Sensitive data protection
- **Error Handling**: Comprehensive error management

## 📱 API Endpoints

### POST `/api/payments/create-order`
Creates a new payment order
```json
{
  "leadId": "lead_id_here",
  "amount": 189900
}
```

### POST `/api/payments/verify`
Verifies payment signature
```json
{
  "razorpay_order_id": "order_id",
  "razorpay_payment_id": "payment_id",
  "razorpay_signature": "signature"
}
```

### GET `/api/payments/status/:orderId`
Gets payment status by order ID

## 🎨 UI Features
- **Brownish-Golden Theme**: Matches PebbleSteps branding
- **Loading States**: Visual feedback during payment
- **Success Animation**: Celebration on successful payment
- **Error Handling**: User-friendly error messages
- **Mobile Responsive**: Works on all devices

## 🚀 Production Deployment
1. Replace test keys with live keys in `.env`
2. Update webhook URLs in Razorpay dashboard
3. Test with small amounts before going live
4. Monitor payments in Razorpay dashboard

## 📞 Support
- **Razorpay Docs**: https://razorpay.com/docs/
- **Integration Guide**: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/
- **Test Cards**: https://razorpay.com/docs/payments/payments/test-card-details/

---
**Status**: ✅ Ready for Testing
**Next Steps**: Add your Razorpay credentials and test the payment flow!