'use strict';

const { Schema, model } = require('mongoose');

const postSchema = Schema({
    
});


module.exports = {
    postSchema,
    Post: model('Post', postSchema)
};
