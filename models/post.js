const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
        default: []
    }
})

module.exports = mongoose.model('post', postSchema);