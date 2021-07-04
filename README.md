# trader

> Emotionless trader

## Pre-requisites

### macOS and Windows

Download the required installer:

1. Go to https://nodejs.org/en/
1. Select the button to download the LTS build that is "Recommended for most users".
1. Install Node by double-clicking on the downloaded file and following the installation prompts.

## Setting up development environment

Install and the npm dependency modules to local environment.  Run this only when there are changes in dependencies.

```sh
make install-dev
```

Install cli to local environment globally.

```sh
make install-cli
```

Note, this may require admin access, so add the following lines to yor `.zshrc` or `.bash_rc` file.

```
npm set prefix ~/.npm
PATH="$HOME/.npm/bin:$PATH"
PATH="./node_modules/.bin:$PATH"
```

To add new dependency to the project, use:

```sh
npm install <package-name> --save
```

To add new dependency to the project for just development needs, use:

```sh
npm install <package-name> --save-dev
```

You can also add the dependencies to the `dependencies` section in `package.json` file directly.

## `trader` cli Usage

### help menu

> show available commands

```sh
trader help
```

> List tredeable instruments from json dump.

```sh
trader instruments
```

Happy trading!
