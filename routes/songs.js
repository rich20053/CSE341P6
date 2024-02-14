
/*** Songs ***/
const express = require('express');
const router = express.Router();

const songsController = require('../controllers/songs');

router.get('/', songsController.getAll);

router.get('/:id', songsController.getSingle);

router.post('/', songsController.createSong);

router.put('/:id', songsController.updateSong);

router.delete('/:id', songsController.deleteSong);

module.exports = router;

