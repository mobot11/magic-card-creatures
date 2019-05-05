# Digital Magic (Cards)

## Getting Started

1. run `git clone https://github.com/mobot11/magic-card-creatures.git && cd magic-card-creatures`

2. install dependencies
`yarn`
or
`npm install`

3. run `yarn start` or `npm start`

To run tests, run `yarn test` or `npm test`

For linting, run `yarn lint` or `npm run lint`

## Tech Stack

### React with Create React App

wanted to get off the ground running quickly and didn't want to spend a ton of time scaffolding a new project. Create React App sets up an environment for you out of the box that has most of the things you need.

### Node

What I'm most familiar with!

### ESlint

I added AirBnB's eslint rules to make sure my code was properly formatted and using the most up to date conventions

### Jest

Create React App comes bundled with Jest as a test runner and it is what we use at my current job.

### Material UI

I had never used material ui before but wanted to spend the least amount of time writing CSS as it can be time consuming. This allowed me to spend more time on the code without having to worry too much about style knits.

## ToDos

### Dig deeper into the magic API

The api doesn't work exactly as expected. I would expect adding `contains='imageUrl'` to only return cards with valid imageUrls. However, this did not seem to be the case. In the mean time I fetch the first 20 creature cards, but only display ones with images. Although this does not meet the requirements exactly, I figure displaying cards that contain images is the most important feature.

### Adjust styles

I relied pretty heavily on the Material UI styles, and while they are mostly good, there are a few adjustments I'd like to make that I didn't have time for.

