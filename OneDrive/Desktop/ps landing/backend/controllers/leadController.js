const Lead = require('../models/Lead');

// Create new lead
exports.createLead = async (req, res) => {
  try {
    const { parentName, childName, childAge, phone, email, message } = req.body;

    // Check if lead already exists
    const existingLead = await Lead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({
        success: false,
        message: 'A lead with this email already exists'
      });
    }

    const lead = new Lead({
      parentName,
      childName,
      childAge,
      phone,
      email,
      message
    });

    await lead.save();

    res.status(201).json({
      success: true,
      message: 'Enrollment request submitted successfully!',
      data: lead
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to submit enrollment request'
    });
  }
};

// Get all leads (admin)
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads'
    });
  }
};

// Get single lead
exports.getLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }
    res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch lead'
    });
  }
};
