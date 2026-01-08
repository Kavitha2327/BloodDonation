const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
        trim: true
    },
    collegeCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the updatedAt field before saving
CollegeSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('College', CollegeSchema);
