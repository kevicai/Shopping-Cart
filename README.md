## **Front end**: 
Please visit the [website link](https://price-calcu.herokuapp.com/) to the deployed version of the application (currerently only supports horizontal display).

The app is fully responsive, so feel free to change the size of the browser. 

### Features
- Change item quantity 
- Add items and remove items (by setting the quantity to 0)
- Automatically calculates price and tax on shopping cart update
- Save and load shopping cart (will lose the saved cart on page refresh since a database is not implemented)
- UI animation for hovering over total price
- The form to add an item can be expanded and closed 

Note, a sample shopping cart is built in when loading the page, this is only for ease of testing and demonstration. It does nott affect app functionality in any way. 

## **Back End and Testing**
This is an React app, so to test the backend please install Node.js. 

After cloning the project, cd into it and run:  
`npm install`

To start the application:  
`npm start`

To run the unit tests:  
`npm test`

The next step for testing is to set up an automatic testing using Github Actions, which can test the backend whenever new changes are pushed to the remote.

## **Deployment**
The app is deployed through Heroku and automatically redeploys when new changes are pushed to Github
