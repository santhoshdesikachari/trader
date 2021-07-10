const instruments = require("../data/instruments.json")
const jp = require("jsonpath")

const list = async (options) => {

    let conditions = [];

    if (options.symbol) {
        conditions.push(`@.symbol=="${options.symbol}"`);
    };

    if (options.exchange) {
        conditions.push(`@.exch_seg=="${options.exchange}"`);
    }
    
    if (options.token) {
        conditions.push(`@.token=="${options.token}"`);
    }

    let filterExpr = '$..*';
    if (conditions.length > 0) {
        filterExpr = conditions.join(" && ");
        filterExpr = `$..[?(${filterExpr})]`;
    }

    const results = jp.query(instruments, filterExpr);
    if (results.length > 0) {
        console.log(results);
    } else {
        console.log('No instrument found.');
    }
    
}

module.exports = {
    list
};