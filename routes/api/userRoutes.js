const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateSingleUser,
    deleteSingleUser,
    getFriends,
    getSingleFriend,
    addFriend,
    removeFriend
} = require('../../controllers/userController');
//calls the get and post routes 
router.route('/').get(getUsers).post(createUser);
//calls the get routes for a single user updated and delete routes
router.route('/:userId').get(getSingleUser).put(updateSingleUser).delete(deleteSingleUser);
//calls for a list of friends based onid
router.route('/:userId/friends').get(getFriends)
//calls a get route for friends
router.route('/:userId/friends/:friendId').get(getSingleFriend).post(addFriend).delete(removeFriend)

module.exports = router;
