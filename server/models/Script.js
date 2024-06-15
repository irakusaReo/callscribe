const mongoose = require('mongoose');

const ScriptSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    branches: [{
        prompt: { type: String },
        options: [{ type: String }]
    }],
    checkpoints: [{
        question: { type: String },
        responseType: { type: String, enum: ['text', 'radio', 'checkbox'] },
        options: [{ type: String }]
    }]
});

module.exports = mongoose.model('Script', ScriptSchema);
