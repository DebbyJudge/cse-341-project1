const mongodb = require("../data/database");
const ObjectId =require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection("users").find();
    result.toArray().then(users) => {
        res.setHeaders("Content-Type", "application/json");
        res.status(200).json(users);
    })

};

const getSingle = async (req, res) => {
    const userId = new ObjectId(req, res) => {
    const reult = await mongodb.getdtabase().db().collection("users").find();
    result.toArray().then ((users) => {
        res.setHeaders("Content Type", "application/json");
        res.status(200).json(users);
    });
};























}
