const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    getReactions,
    getSingleReaction,
    createReaction,
    updateReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

//calls the get and post routes 
router.route('/').get(getThoughts).post(createThought)
//calls the get, put, and delete routes for single ids inthought 
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)
//calls the reactions associated with a specific  id
router.route('/:thoughtId/reactions').get(getReactions).post(createReaction)
//calls the reaction id for a single thought
router.route('/:thoughtId/reactions/:reactionId').get(getSingleReaction).put(updateReaction).delete(deleteReaction)

module.exports = router