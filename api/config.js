// Vercel Serverless API for managing site configuration
// This allows dynamic updates to contact info, hours, etc.

import { siteConfig } from '../src/config/siteConfig.js'

// In-memory storage (in production, use a database like MongoDB, Supabase, etc.)
let currentConfig = { ...siteConfig }

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    switch (req.method) {
      case 'GET':
        // Get current configuration
        res.status(200).json({
          success: true,
          data: currentConfig,
          timestamp: new Date().toISOString()
        })
        break

      case 'PUT':
        // Update configuration
        const updates = req.body
        
        // Validate required fields
        if (!updates || typeof updates !== 'object') {
          return res.status(400).json({
            success: false,
            error: 'Invalid update data'
          })
        }

        // Merge updates with current config
        currentConfig = {
          ...currentConfig,
          ...updates,
          // Preserve nested objects properly
          contact: { ...currentConfig.contact, ...updates.contact },
          businessHours: { ...currentConfig.businessHours, ...updates.businessHours },
          stats: { ...currentConfig.stats, ...updates.stats },
          company: { ...currentConfig.company, ...updates.company },
          social: { ...currentConfig.social, ...updates.social }
        }

        res.status(200).json({
          success: true,
          data: currentConfig,
          message: 'Configuration updated successfully',
          timestamp: new Date().toISOString()
        })
        break

      case 'POST':
        // Reset to default configuration
        currentConfig = { ...siteConfig }
        
        res.status(200).json({
          success: true,
          data: currentConfig,
          message: 'Configuration reset to defaults',
          timestamp: new Date().toISOString()
        })
        break

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'POST'])
        res.status(405).json({
          success: false,
          error: `Method ${req.method} not allowed`
        })
    }
  } catch (error) {
    console.error('Config API Error:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    })
  }
}

// Example usage:
// GET /api/config - Get current configuration
// PUT /api/config - Update configuration with JSON body
// POST /api/config - Reset to default configuration

/* Example update request body:
{
  "contact": {
    "phone": {
      "primary": "+91 99999 88888",
      "display": "+91 99999 88888",
      "href": "tel:+919999988888"
    },
    "email": {
      "primary": "newemail@pebblesteps.com"
    }
  },
  "businessHours": {
    "weekdays": {
      "hours": "8:00 AM - 8:00 PM"
    }
  }
}
*/