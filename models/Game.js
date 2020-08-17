const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type:String,
        
    },
    game: {
        type: Object
    },
    players:{
        type:Array
    },
    finished:{
        type:Boolean
    }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
