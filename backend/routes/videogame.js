const express = require('express');
const router = express.Router();

const { list, read, create, remove, videogameById, photo} = require('../controllers/videogameController');

// list 
router.get('/videogames', list);
router.post('/create/:userId', create)
router.get('/:videogameId', read)
router.delete('/:videogameId', remove)
router.get('/photo/:videogameId', photo)
router.param("videogameId", videogameById);

module.exports = router;

// , photo 