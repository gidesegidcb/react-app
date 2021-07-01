# Process controller backend

Process controller is a sample app that has implemented in node js in which it worked on the SOLID principle.

If you need the work flow please see the pdf attached on the root folder.

NB: Datas on the service folder are replaceable with any array objects.This means keys and values of objects in the array could be dynamically displayed in the browser.
what i mean is, you can put any array objects and front end will do its magic to figure out what your array objects looks like and will be displayed on the browser and you won't  be fixed to the keys and values.
```
 let data=[
     {name:'gide', lastName:'segid'},
     {name:'gide2', lastName:'segid2'}
 ]
 or
 let data=[
     {CustomerId:'1', MachineNr:'029'},
     {CustomerId:'2', MachineNr:'030'}
 ]
 .
 .
 .
 
```

## Installation

Use the git clone (https://github.com/gidesegidcb/react-app.git) to install this app.

```bash
git clone https://github.com/gidesegidcb/react-app.git
```

## Usage

```Nodejs
npm install
```
Go to root folder(root folder/Server/) , create .env file and edit the .env file with ServerPort=3001
Make sure below code "ServerPort" matches the ServerPort in the .env file

```
app.listen(process.env.ServerPort,function(){
    console.log("server is running")
})
```
Then you'r ready to go !
```
npm start
```
Now your server is up and running .
To configure the front end then go to the readme file on the root folder

NB: There is not test in the backend server for the reason of no enough time but here is the link to work with apis test in the backend "https://www.youtube.com/watch?v=VywxIQ2ZXw4" 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)