const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("../models/tutorial.model")(mongoose, mongoosePaginate);

module.exports = db;
