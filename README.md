# GoSheap backend

Here goes some instructions

## Requirements
Mongodb 4.4

## How to run
In order to start the application in a production mode you have to first compile typescript to javascript.
> npx tsc

After that there will be a new `dist` directory on the root level of the project, that will be used by the next command
> npm start

## Running on dev mode
Both nodemon and ts-node are used for automatic reloading after every code change.
You can start the project on development mode with the following command:
> npm run start:dev