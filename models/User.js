const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

//creates schema for users
const userSchema = new Schema(
    {
        //sets up the username as a required string, unique
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        //sets an email required as a string
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v)
                }
            }
        },
        //imports thoughts from the thought model
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
        //self-reference to call the user model
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});
//sets a count for number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
//creates the user model
const User = model('User', userSchema);

//exports the user model
module.exports = User;