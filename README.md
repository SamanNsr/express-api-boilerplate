# Mongoose Node.js Express boilerplate with best practices for API development for microservice and monolithic.

![image](banner.png)

The main purpose of this repository is to show and to use a project setup and workflow for writing a Mongoose Node.js Express code complete with middleware, models, routes, and some super useful utilities.

# Prerequisites

To build and run this app locally you will need a few things:

- Install [Node.js](https://nodejs.org/en/)

# Getting started

- Clone the repository

```
git clone --depth=1 https://github.com/SamanNsr/express-api-boilerplate.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
npm run dev
```

- Build and run the project

```
npm run start
```

Finally, navigate to `http://localhost:3000/` and you should see the API running!

## Project Structure

It's best to have separate _source_ and _distributable_ files. JavaScript (`.js`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run start`

| Name               | Description                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dist**           | Contains the distributable (or output) from your Js build                                                                                                     |
| **node_modules**   | Contains all your npm dependencies                                                                                                                            |
| **src**            | Contains your source code that will be compiled to the dist dir                                                                                               |
| **src/config**     | Contains config to be used by entire project, such as environment var, logger, statuscodes and ect                                                            |
| **src/controllers**| Contains rest Api controllers                                                                                                                                 |
| **src/middleware** | Contains the middlewares to intercept requests                                                                                                                |
| **src/docs**       | Contains Swagger documentation files                                                                                                                          |
| **src/models**     | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB                                                                  |
| **src/routes**     | Routes define the endpoints of your API                                                                                                                       |
| **src/services**   | Contains all your services                                                                                                                                    |
| **src/utils**      | Contains super useful utils                                                                                                                                   |
| **src/validations**| Contains all routes validations                                                                                                                               |
| **src/app.js**     | Entry point to your express app                                                                                                                               |
| **src/index.js**   | The place where the application is started                                                                                                                    |
| **src/test.js**    | Contains all kind of test such as unit, integration and ect                                                                                                   |
| package.json       | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                                                    |
# Dependencies

Dependencies are managed through `package.json`.
