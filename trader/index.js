#!/usr/bin/env node

const dotenv = require("dotenv");
const chalk = require("chalk");
const argv = require("minimist")(process.argv.slice(2));
const instruments = require("./instrument")

const parseArguments = async () => {
    if (argv._.length > 0) {
        return {action: argv._[0], options: argv};
    } else {
        return {};
    }
}

const bow = async () => {
    console.log(chalk.green("ok"));
}

const cli = async () => {
    let answers = await parseArguments();

    try {
        switch (answers.action) {
            case "instruments":
                await instruments.list();
                break;
            default:
                await bow();
                break;
        }
    } catch (error) {
        console.error(error);
    }
};

cli();