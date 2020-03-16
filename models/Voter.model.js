const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
    user: { type: String, required: true },
    votes: [{ type: Schema.Types.ObjeciId }],
});

module.exports = mongoose.model('Voter', voterSchema);