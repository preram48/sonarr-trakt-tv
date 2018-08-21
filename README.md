# Sonarr Trakt TV

## Introduction
Sonarr Trakt TV is a program that monitors any trakt.tv watch, trending, popular, or popular list and adds the shows/seasons to Sonarr.

## Cloning from github
```bash
# Clone repository, remove .git folder
git clone https://github.com/preram48/sonarr-trakt-tv.git

# Enter project directory
cd sonarr-trakt-tv 

# Install dependencies
npm install
npm install -g typescript

# Compile TypeScript to JavaScript
tsc
```

## Running the server
Once installed, you can run the server using one of the following options:
```bash
npm run dev
```

Go to localhost:9500

## Docker
```bash
docker build -t preram48/sonarr-trakt-tv .
docker run --net="host" -d preram48/sonarr-trakt-tv
```

## Commands

These commands are available in `package.json`.

```bash
npm test # test using Jest
npm run test:unit # run unit tests
npm run test:integration # run integration tests
npm run coverage # test and open the coverage report in the browser
npm run lint # lint using ESLint
npm run dev # run the API in development mode
npm run prod # run the API in production mode
npm run docs # generate API docs
```

## Walkthrough

### Setting up Sonarr Settings

Enter in your hostname, port, and api key for you local sonarr instance in the settings tab. These `Settings` are used for the watchlist sync.

![alt text](https://i.imgur.com/UTXizSk.png "Settings tab")

### Creating a Watchlist
1. On the `List` tab click the `+` button
2. Enter in a name that you would like to call your watchlist
3. Select the list type
4. Select the quality profile you want to use for this list
5. Select the folder you want Sonarr to store your shows
6. Enter in the trakt.tv username for the watchlist

![alt text](https://i.imgur.com/3epaq74.png "List tab")
