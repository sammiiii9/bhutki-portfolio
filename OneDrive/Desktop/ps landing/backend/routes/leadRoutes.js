const express = require('express');
const router = express.Router();
const { createLead, getAllLeads, getLead } = require('../controllers/leadController');

router.post('/', createLead);
router.get('/', getAllLeads);
router.get('/:id', getLead);

module.exports = router;
