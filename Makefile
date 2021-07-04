# Command Line Interface (CLI) to ease development activities.

MAKEFLAGS += --no-print-directory

.SILENT:

# Do not remove this block.  It is used by the `help` target.
# help:
# help: Command Line Interface (CLI) to ease development activites.
# help:

# help: help 				- list available `make` targets
help:
	@grep "^# help\:" Makefile | grep -v grep | sed 's/\# help\: //' | sed 's/\# help\://'

# help: install-dev 			- prepares dev environment (installs a dependency packages)
install-dev:
	npm install

# help: install-cli 			- installs the cli in the local environment
install-cli:
	npm install -g .

%:
	@true

.PHONY: install
