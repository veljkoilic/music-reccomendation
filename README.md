## Music Reccomendations App
Is a **React.js App** which utilises the tastedive API to recommend music based upon user entry or interaction with the app .

<img src="https://i.ibb.co/X2ScFmX/Screenshot-from-2022-07-05-20-14-14.png" alt="Music recommendations app">

## Main functionalities
Home page shows some generic music that the user can click on, while the navbar holds the search input.
The input is parsed and fed to the API. The results from the api are displayed.
The style is mimicked from youtube.


In the main directory, you can run
### `npm start`
This runs the app in the development mode on http://localhost:3000/

After that also in the main directory, you can run
### `node proxy.js`
This starts the proxy server needed for the CORS implementation on port http://localhost:5000/
