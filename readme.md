# MEAN Application

### Walking skeleton
0. `npm init`
0. `npm install express --save`
0. Git Repo
    * `git init`
    * Create .gitignore file
    * Add the directory names in this file that you want to ignore in commit (eg node_modules)
    * `git add .`
    * `git commit -m "Project Init"`
0. Bower components
    * Create .bowerrc file
    * Add the directory name to specify the vendor files location
    ```
    {
        "directory": "public/vendor"
    }
    ```
    * `bower init`
    * Install client side dependencies with bower
        * bootstrap
        * toastr
        * angular
        * angular-resource
        * angular-route
        * components-font-awesome
    * `bower install bootstrap toastr angular angular-resource angular-route components-font-awesome --save`
0. Create node application starting point index.js
0. Add view engine `npm install pug --save` ([More info on pug  ](https://pugjs.org/language/attributes.html))
0. Install dependencies
    * stylus
    * moragan
    * body-parser
    * `npm install stylus morgan body-parser --save`
0. MongoDB
    * `npm install mongoose --save`
    * Connection path mongodb://`dbUser`:`dbPwd`@`dbhost`:`dbPort`/`dbName`
0. Adding Stylus
0. DONE

### To use this MEAN Walking Skeleton
Step 1] `npm install`<br>
Step 2] `bower install`<br>
Step 3] `nodemon`


# Credits
[MongoDB](https://www.mongodb.com/) is an open source, document-oriented database designed with both scalability and developer agility in mind.

[Express.js](http://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js

[AngularJS](https://angularjs.org/) — Superheroic JavaScript MVW Framework.

[Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

[mongoose](http://mongoosejs.com/) elegant mongodb object modeling for node.js

[Bootstrap](http://getbootstrap.com/) is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

[jQuery](https://jquery.com/) The Write Less, Do More, JavaScript Library.

[toastr](https://github.com/CodeSeven/toastr) is a Javascript library for non-blocking notifications.

[Font Awesome](http://fontawesome.io/) gives you scalable vector icons that can instantly be customized.

[Style Guide John Papa](https://github.com/johnpapa/angular-styleguide) Opinionated Angular style guide for teams by @john_papa
