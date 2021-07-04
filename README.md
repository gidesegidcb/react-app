# Getting Started Process controller frontend

Process controller is a sample app that has been implemented its front end, in react hooks.

If you need the work flow please see the Flow.png attached on the root folder

This application is implemented based on SOLID principle.
Every text in any page except these which comes from api, could be changed or manuplated from the SourceConfig.js
This means  textes of buttons, input text placeholders, titles or even descriptions for the end user or any that could appear to the end user,could be handeled in a controlled way at this file. This is one of the principles of  modify in one area  and changes will be spread to every compoenet that shares.



## Requirements
- Node v13.13

## Available Scripts

In the project directory, you can run:

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

## Project Structure

-src/
- components: 
   Edit or create component in its functionality or style and call them at views folder to be displayed in the view page
- views:
   Edit or create views here .Views could be any view combinations of one or multiple components and can be added its own style. Add tests to this view so , you could be sure enough if your views could been loaded successfully or not. You could implement unit tests here.
- SourceConfig:
   This file is text file that will be displayed at a particular page.Plus in this page you can put all routes and you can call them from any where
- App:
   App is the main container component for all pages and navigations
- Axios:
   Axios is a data fetcher function from other server using routes or api in the front end which you could communicate the routs with external server like to the backend
- Flow:
  This is a diagram to show the communication and flow of the application over all
- UseContext:
  UseContext is a state container which holds user session. User information ,loged in or not , is stored in this context so any view can access it .
- config:
  This is config file which already embeded in the node_modules so i can be reached out as 
   import config from 'config' when necessary.

   