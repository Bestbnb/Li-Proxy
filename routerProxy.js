const router = require('express').Router();
const controller = require('./controllerProxy');

// CREATE
// router.post('/booking', controller.createBooking);
// router.post('/bnb', controller.createBnb);

// READ ALL
router.get('/booking', controller.findAllBooking);
// router.get('/bnb', controller.findAllBnb);

// DELETE


module.exports = router;