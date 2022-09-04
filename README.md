# Project Instructions

This Project is a web tool that allows users to run Natural Language Processing (NLP) 'NLP: is the ability to understand the human language written or oral' on articles or blogs.

This project will use [MeaningCloud API](https://www.meaningcloud.com/) To analyze the articles.

This Project using these technologyes:

- Node.js and Express Server in Backend
- Asynchronous JavaScript to deal with requests
- HTML , css, sass and js in FrontEnd
- This project also uses webpack 5 to bundle project dependencies
- Jest for testing
- Workbox

## Getting started

### Step 1: install node and npm in your device

1- This project requires you to have pre-installed node.js and npm or yarn to manage node packages:

- To check the node.js version use this command:

`node -v`

If you don't have node.js in your device you can visit [Node.js website to install Node](https://nodejs.org/en/).

- To check the npm version use this command:

`npm -v`

If you don't have npm in your device you can visit [npm website to install npm](https://www.npmjs.com/).

### Step 2 : Clone The project Folder.

### Step 3 : Install all project dependencies

After cloning the repo to your device move to the project Folder and run this command to install all project dependencies

`npm install`

## Setting up the API

### Step 1: Create your own account in meaningCloud

This project needs you to create an account in [MeaningCloud API](https://www.meaningcloud.com/) to get API Key to use their API.

### Step 2: Get your API Key

After creating the meaningCloud account go to your account and get your API key.

### Step 3 : Create .env file

Create a new file and name it like this (.env)
This file should have This information to run the project correctly.

API_URL='https://api.meaningcloud.com/sentiment-2.1'
API_KEY= 'HERE PUT YOUR API KEY'

## Run The project

you can run the project in your device using this commands:

- run express server:
  `npm run start`

- run jest test:
  `npm run test`

- run webpack dev version file:
  `npm run build-dev`

- run webpack prod version file:
  `npm run build-prod`
