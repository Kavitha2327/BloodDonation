const College = require('../models/CollegeSchema');

// Get all colleges
const getAllColleges = async (req, res) => {
    try {
        const colleges = await College.find({ isActive: true }).sort({ collegeName: 1 });
        
        res.status(200).json({
            success: true,
            data: colleges,
            count: colleges.length
        });
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching colleges',
            error: error.message
        });
    }
};

// Get college by ID
const getCollegeById = async (req, res) => {
    try {
        const college = await College.findById(req.params.id);
        
        if (!college) {
            return res.status(404).json({
                success: false,
                message: 'College not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: college
        });
    } catch (error) {
        console.error('Error fetching college:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching college',
            error: error.message
        });
    }
};

// Add new college
const addCollege = async (req, res) => {
    try {
        const { collegeName, collegeCode } = req.body;
        
        // Validation
        if (!collegeName || !collegeCode) {
            return res.status(400).json({
                success: false,
                message: 'College name and college code are required'
            });
        }
        
        // Check if college code already exists
        const existingCollege = await College.findOne({ 
            collegeCode: collegeCode.toUpperCase() 
        });
        
        if (existingCollege) {
            return res.status(400).json({
                success: false,
                message: 'College code already exists'
            });
        }
        
        // Create new college
        const newCollege = new College({
            collegeName: collegeName.trim(),
            collegeCode: collegeCode.trim().toUpperCase()
        });
        
        const savedCollege = await newCollege.save();
        
        res.status(201).json({
            success: true,
            message: 'College added successfully',
            data: savedCollege
        });
    } catch (error) {
        console.error('Error adding college:', error);
        res.status(500).json({
            success: false,
            message: 'Error adding college',
            error: error.message
        });
    }
};

// Update college
const updateCollege = async (req, res) => {
    try {
        const { collegeName, collegeCode } = req.body;
        const collegeId = req.params.id;
        
        // Validation
        if (!collegeName || !collegeCode) {
            return res.status(400).json({
                success: false,
                message: 'College name and college code are required'
            });
        }
        
        // Check if college code already exists (excluding current college)
        const existingCollege = await College.findOne({ 
            collegeCode: collegeCode.toUpperCase(),
            _id: { $ne: collegeId }
        });
        
        if (existingCollege) {
            return res.status(400).json({
                success: false,
                message: 'College code already exists'
            });
        }
        
        // Update college
        const updatedCollege = await College.findByIdAndUpdate(
            collegeId,
            {
                collegeName: collegeName.trim(),
                collegeCode: collegeCode.trim().toUpperCase(),
                updatedAt: Date.now()
            },
            { new: true }
        );
        
        if (!updatedCollege) {
            return res.status(404).json({
                success: false,
                message: 'College not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'College updated successfully',
            data: updatedCollege
        });
    } catch (error) {
        console.error('Error updating college:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating college',
            error: error.message
        });
    }
};

// Delete college (soft delete)
const deleteCollege = async (req, res) => {
    try {
        const collegeId = req.params.id;
        
        const deletedCollege = await College.findByIdAndUpdate(
            collegeId,
            { 
                isActive: false,
                updatedAt: Date.now()
            },
            { new: true }
        );
        
        if (!deletedCollege) {
            return res.status(404).json({
                success: false,
                message: 'College not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'College deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting college:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting college',
            error: error.message
        });
    }
};

// Get colleges for dropdown (simplified format)
const getCollegesForDropdown = async (req, res) => {
    try {
        const colleges = await College.find({ isActive: true })
            .select('collegeName collegeCode')
            .sort({ collegeName: 1 });
        
        const formattedColleges = colleges.map(college => ({
            label: college.collegeName,
            value: college.collegeCode,
            id: college._id
        }));
        
        res.status(200).json({
            success: true,
            data: formattedColleges
        });
    } catch (error) {
        console.error('Error fetching colleges for dropdown:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching colleges',
            error: error.message
        });
    }
};

module.exports = {
    getAllColleges,
    getCollegeById,
    addCollege,
    updateCollege,
    deleteCollege,
    getCollegesForDropdown
};
