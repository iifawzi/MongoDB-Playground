const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();



router.get('/',studentController.getIndex);
router.post('/addusers',studentController.addUsers);
router.get('/del/:email',studentController.delUsers);
router.get('/edit/:email',studentController.editUsers);
router.post('/edit/:email',studentController.updateUsers);

module.exports = router;