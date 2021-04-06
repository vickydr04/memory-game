# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to begin

Inside project `root` directory run `npm install`. After all dependencies are installed run `npm start`. New browser window should open.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Libraries Used

[Axios](https://github.com/axios/axios) to handle the API requests.

[React-Spring](https://www.react-spring.io/) to handle the animations for the cards.

[Node-Sass](https://www.npmjs.com/package/node-sass) for the styles for the app.

### Files Structure

The aplication can be found in `src/`

- **Components** folder: Where the main content of the application can be found
    - Nav: This is the navigation bar.
    - Game: This contains the logic game, it connects the *Score*, the *Timer*, the *Board* and the *Modal*.
    - Score: presentational component. It displays the score.
    - Timer: Given a time, it handles the countdown logic for the timer.
    - Board: It fetches the cards information and manages the logic for the flipping of the cards. 
        - Card: component with the card itself with a small logic part to handle the click itself and the animation.

- **UI**: UI components
    - Modal: It displays information given as a modal.

- **utils**: helper functions

- **API**: variables for the API.

### Testing

- Using `@testing-library/react` for the tests.

### Future improvements

Currently, the fetch for the API is set whithin the Board component, but an improvement would be to move all the game logic to the Game file. To handle all of the states of the game within that file. 

Another would be to manage the states of the complete game with hook useReducer or  with the Redux library. This would improve the shared states between components such as timer, game state, score.

In addition, to be removed the logic from the Card.js file, and leave it as a presentational component only, and leave the logic of the flipping cards to the board. 

