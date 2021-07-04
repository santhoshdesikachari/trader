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

const usage = async () => {
    console.log(chalk.magenta("Usage: trader [action]"));
    console.log(chalk.magenta("action:"));
	console.log(chalk.magenta("    help         - shows usage of the trader cli."));
	console.log(chalk.magenta("    instruments  - lists treadeable instruments from a json dump."));
}

const cli = async () => {
    let answers = await parseArguments();

    try {
        switch (answers.action) {
            case "instruments":
                await instruments.list();
                break;
            case "help":
                await usage();
                break;
            default:
                await usage();
                break;
        }
    } catch (error) {
        console.error(error);
    }
};

cli();
