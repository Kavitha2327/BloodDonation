const express = require('express');
const router = express.Router();
const {
    getAllColleges,
    getCollegeById,
    addCollege,
    updateCollege,
    deleteCollege,
    getCollegesForDropdown
} = require('../controllers/CollegeController');

// Get all colleges
router.get('/colleges', getAllColleges);

// Get colleges for dropdown
router.get('/colleges/dropdown', getCollegesForDropdown);

// Get college by ID
router.get('/colleges/:id', getCollegeById);

// Add new college
router.post('/colleges', addCollege);

// Update college
router.put('/colleges/:id', updateCollege);

// Delete college
router.delete('/colleges/:id', deleteCollege);

module.exports = router;
