// Vercel Serverless API for handling contact form submissions
// This can integrate with email services, CRM systems, etc.

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }

  try {
    const {
      parentName,
      childName,
      phone,
      childAge,
      email,
      concerns,
      preferredProgram,
      source = 'website'
    } = req.body

    // Validate required fields
    if (!parentName || !childName || !phone || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        required: ['parentName', 'childName', 'phone', 'email']
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      })
    }

    // Create contact record
    const contactData = {
      id: Date.now().toString(),
      parentName,
      childName,
      phone,
      childAge,
      email,
      concerns,
      preferredProgram,
      source,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    // In production, save to database (MongoDB, Supabase, etc.)
    // await saveToDatabase(contactData)

    // Send notification email (integrate with SendGrid, Nodemailer, etc.)
    // await sendNotificationEmail(contactData)

    // Send auto-response to parent
    // await sendAutoResponse(email, parentName)

    console.log('New contact submission:', contactData)

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contactData.id,
        timestamp: contactData.timestamp
      }
    })

  } catch (error) {
    console.error('Contact API Error:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    })
  }
}

// Helper functions (implement based on your needs)

async function saveToDatabase(contactData) {
  // Example with MongoDB
  // const { MongoClient } = require('mongodb')
  // const client = new MongoClient(process.env.MONGODB_URI)
  // await client.connect()
  // const db = client.db('pebblesteps')
  // await db.collection('contacts').insertOne(contactData)
  // await client.close()
}

async function sendNotificationEmail(contactData) {
  // Example with SendGrid
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // 
  // const msg = {
  //   to: 'admin@pebblesteps.com',
  //   from: 'noreply@pebblesteps.com',
  //   subject: 'New Contact Form Submission',
  //   html: `
  //     <h2>New Contact Submission</h2>
  //     <p><strong>Parent:</strong> ${contactData.parentName}</p>
  //     <p><strong>Child:</strong> ${contactData.childName}</p>
  //     <p><strong>Phone:</strong> ${contactData.phone}</p>
  //     <p><strong>Email:</strong> ${contactData.email}</p>
  //     <p><strong>Concerns:</strong> ${contactData.concerns}</p>
  //   `
  // }
  // 
  // await sgMail.send(msg)
}

async function sendAutoResponse(email, parentName) {
  // Send confirmation email to parent
}