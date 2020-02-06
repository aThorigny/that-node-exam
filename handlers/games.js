const db = require('../models');

exports.createGame = async (req, res) => {
    try {
        let newGame = await db.Game.create(req.body);
        console.log(newGame);
        return res
            .status(201)
            .json('New game creation successful')
    } catch (err) {
        console.log(`Handler createGame error: ${err}`);
        return res
            .status(400)
            .json({
                message: 'Error during game creation',
                error: err,
            });
    }
};

exports.readAllGames = async (req, res) => {
    try {
        let games;
        if (req.query.isAwardWinner && req.query.isAwardWinner === 'true') {
            games = await db.Game.find(req.query)
                .select("+name +editor +releaseDate -stock -_id -__v -isAwardWinner -categories")
                .sort('-releaseDate');
        } else {
            games = await db.Game.find(req.query);
        }
        return res
            .status(201)
            .json(games);
    } catch (err) {
        console.log(`Handler readAllGames error: ${err}`);
        return res
            .status(400)
            .json({
                message: 'Error while retrieving games',
                error: err,
            });
    }
};

exports.readOneGame = async (req, res) => {
    try {
        let game = await db.Game.find({ _id: req.params.id });
        return res
            .status(201)
            .json(game);
    } catch (err) {
        console.log(`Handler readOneGame error: ${err}`);
        return res
            .status(400)
            .json({
                message: `Error while retrieving game at id ${req.params.id}`,
                error: err,
            });
    }
};

exports.updateGame = async (req, res) => {
    console.log(req.body);
    try {
        let game = await db.Game.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        return res
            .status(201)
            .json(game);
    } catch (err) {
        console.log(`Handler updateGame error: ${err}`);
        return res
            .status(400)
            .json({
                message: `Error while updating game at id ${req.params.id}`,
                error: err,
            });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        let game = await db.Game.findByIdAndRemove(req.params.id);
        return res
            .status(201)
            .json(game);
    } catch (err) {
        console.log(`Handler deleteGame error: ${err}`);
        return res
            .status(400)
            .json({
                message: `Error while updating game at id ${req.params.id}`,
                error: err,
            });
    }
};