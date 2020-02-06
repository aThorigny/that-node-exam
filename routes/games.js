const express = require('express');
const router = express.Router();
const handlerSocks = require('../handlers/games');

router.route('/')
    .post(handlerSocks.createGame)
    .get(handlerSocks.readAllGames);

router.route('/:id/')
    .get(handlerSocks.readOneGame)
    .put(handlerSocks.updateGame)
    .delete(handlerSocks.deleteGame);


module.exports = router;