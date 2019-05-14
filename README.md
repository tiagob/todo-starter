# Full-stack todo starter app
TypeScript with React, Apollo and Node example

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
brew tap homebrew/services
```

Start MySQL
```bash
brew services start mysql
```

### Install [Yarn](https://yarnpkg.com/)
```bash
brew install yarn
```

### Clone repo and cd to root of project
```bash
git clone https://github.com/tiagob/ts-react-apollo-node.git
cd ts-react-apollo-node
```

### Install dependencies
```bash
yarn install
```

### Setup database

Create database and sync (creating tables).
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

## Setup [VSCode](https://code.visualstudio.com/) (recommended IDE/Editor) 
The config files (`.vscode/`) are included which formats on save and automatically attaches the debugger.

### Install recommended [extensions](https://code.visualstudio.com/docs/editor/extension-gallery)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)

### Debug client

Run `watch` from [VSCode terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).
```bash
cd client
yarn watch
```

Press `F5` or click the green debug icon for `Chrome` [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) to attach.

### Debug server

Run `watch-debug` from [VSCode terminal](https://code.visualstudio.com/docs/editor/integrated-terminal). Debugger automattically attaches. See [debugging in VSCode](https://code.visualstudio.com/docs/editor/debugging).
```bash
cd server
yarn watch-debug
```

## Gotchas

### EADDRINUSE, Address already in use

Kill all node processes.
```bash
killall node
```

## References
* [TypesSript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [GraphQL Codegen](https://graphql-code-generator.com/docs/getting-started/)
* [Sequelize](http://docs.sequelizejs.com/)
* [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
