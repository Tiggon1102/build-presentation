This is a simple [Next.js](https://nextjs.org/) project template.

## Purpose

- website to automatically generate presentations by a given topic

## Idea

- user puts in topic
- generate presentation content by speaking to [ChatGPT](https://chat.openai.com)
- show editable presentation in frontend

## Techstack

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [ChatGPT](https://chat.openai.com)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.org)
- [Husky](https://typicode.github.io/husky)
- [Github](https://github.com/)
- [Github Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com)

## Getting Started

1) create .env file in root directory and copy content of .env.example in there
2) ask project owner for real values of .env file and replace them
3) run the "setup" script
4) run the "run" script
5) open [http://localhost:3000](http://localhost:3000) 

## Folder Structure 

- .github/workflows = github actions for ci pipeline
- basics = javascript basics + package layers 
- business = business logic
- components = ui components
- config = configuration things
- cypress = e2e tests
- docs = developer documentation
- fetchers = http requests
- handlers = backend routes
- hooks = pieces of component logic
- pages = default routing folder
- public = folder for static resources
- sites = frontend pages
- .env.example = example for environment file
- .eslintrc.json = linting settings
- .gitignore = file to ignore paths on git
- .prettierignore = file to ignore paths on prettier
- cypress.config = cypress testing configuration file
- package.json = source file
- README.md = hello ! 

## Scripts

- setup = installs all packages and sets up the husky commit hook
- run = starts the application on [http://localhost:3000](http://localhost:3000) 
- style:check = checks for prettier styling issues
- style:fix = fixes prettier styling issues
- lint:check = checks for linting issues
- lint:fix = fixes linting issues
- test = runs e2e tests

## Demo 

- [Live Version]()