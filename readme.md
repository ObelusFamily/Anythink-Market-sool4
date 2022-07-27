# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo.
I think it's worth documenting the steps needed to install and run the repo on a new machine?_

1. Clone the repository `git clone git@github.com:ObelusFamily/Anythink-Market-sool4.git`
2. From the repository root directory, start the docker containers `docker-compose up`
3. Check that the API is running http://localhost:3000/api/ping
4. Create a new user to ensure the app is fullly functional http://localhost:3001/register
