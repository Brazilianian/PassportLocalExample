# PassportLocalExample
Simple example of implemetation passport-local session cookies baset strategy of user registration/authorization

## How to implement in my code?
- Create a fork of this repository
- Clone your own forked repository
- Change the .env file with your own database credentials (optionally change the session's secret key)

```bash
$ nodemon app.js
or
$ node app.js
```

## How to use?
Send http request to the server from the application you prefer (f.e. Postman)
Or create front-end application and use the server's API

## API routes
`http://localhost:${port}/api/v1` - the basic URL of appication routes. 
Dont forget to replace `${port}` with the port your application started (3000 by default)

### Authentication
- `POST - /auth/registration` - create new user (username, password fields are requiered)
- `POST - /auth/login` - login user (username, password fields are requiered)
- `POST - /auth/logout` - logout user

### User
- `GET - /user` - get current user (self-checking of user authentication status)

## Don't forget
Don't forget to allow using credentials in case of development front-side application because it uses http-only cookies for data transferring
See axios example bellow

```javascript
const axios = require('axios')

const axiosInstance = axios.create({
    withCredentials: true
})

module.export = { axios: axiosInstance }
```

## Directory structure
```
Project Name
├─── app.js
├─── config
│   ├───dbConfig.js
│   ├───passportConfig.js
├───controller
│   ├───authController.js
│   ├───userController.js
├───model
│   ├───index.js
│   ├───userModel.js
├───router
│   ├───authRouter.js
│   ├───userRouter.js
├───service
│   ├───userService.js
├───.env
├───package.json
```
