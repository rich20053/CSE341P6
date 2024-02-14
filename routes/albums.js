
/*** Albums ***/
const express = require('express');
const router = express.Router();

const albumsController = require('../controllers/albums');

router.get('/', albumsController.getAll);

router.get('/:id', albumsController.getSingle);

router.post('/', albumsController.createAlbum);

router.put('/:id', albumsController.updateAlbumById);

router.delete('/:id', albumsController.deleteAlbum);

module.exports = router;

