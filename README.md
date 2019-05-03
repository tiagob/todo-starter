# TypeScript React Apollo Node Example

## Setup
*Assumes MacOS*

### Install [Homebrew](https://brew.sh/)
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install [MySQL](https://www.mysql.com/)

Install MySQL with Homebrew ([MySQL commands on MacOS](https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e)).
```bash
brew install mysql
```

### Install [Yarn](https://yarnpkg.com/)
```bash
brew install yarn
```

### Install dependencies
```bash
yarn install
```

### Setup database

From the root of this cloned repo, create database and sync (creating tables).
```bash
cd server
./createDb.sh  # Assumes MySQL is installed with Homebrew
yarn sync-db
```

## Run

Create two bash terminals (terminal 1, terminal 2). `cd` into the root of the cloned repo in both.

In terminal 1
```bash
cd server
yarn watch
```

In terminal 2
```bash
cd client
yarn watch
```

## Editor (IDE)
We recommend using [VSCode](https://code.visualstudio.com/). The config files (`.vscode/`) are included which formats on save and automatically attaches the debugger.

## Debugging the server
*Assumes VSCode*

Run `watch-debug` from [VSCode terminal](https://code.visualstudio.com/docs/editor/integrated-terminal). Debugger automattically attaches. See [debugging in VSCode](https://code.visualstudio.com/docs/editor/debugging).
```bash
cd server
yarn watch-debug
```

## References
* [TypesSript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [GraphQL Codegen](https://graphql-code-generator.com/docs/getting-started/)
* [Sequelize](http://docs.sequelizejs.com/)
