## Language app with angularJS


The technology is AngularJS on front end, with NodeJS communication endpoint on backend, unit-testing with karma and protractor

### App




No need to use any database persistence on server-side - keeping data in NodeJS memory is sufficient at the moment.

### Running the app

    npm start / nodemon app.js / node app.js  (The 3 options are valid)

    then go to [http://localhost:3000]


### Testing the app:

    npm test                            (unit tests)
    protractor protractor-conf.js       (end to end tests)


### Functionality:




### Additonal tasks



## Directory Layout(not up to date)

    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.less        --> less stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      partials/         --> angular view partials (pure HTML, you can use Jade as well)


##Useful links
#### [AngularJS](http://angularjs.org/)


