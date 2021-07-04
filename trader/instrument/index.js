const instruments = require("../data/instruments.json")
const jp = require("jsonpath")

const list = async () => {
    const names = jp.query(instruments, '$..name');
    console.log("Tradeable instruments:");
    console.log(names);
}

module.exports = {
    list
};