/**
 * Created by 1301657 on 23/11/2015.
 */
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337;
// Connection URL. This is where your mongodb server is running
var url = mongodb://coltmarshmallow:youtubemongo7@ds057244.mongolab.com:57244/db_mongo_alpha
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
