# Tech-Blog [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
<p>This application was created to display a tech a CMS-style blog site where the user can publish articles, blog posts, thoughts and opinions. This application has the capability to sign up or login users. Users once signed in have the capability to post or comment on posts.</p>

<p>This application was created with [Node.js](https://nodejs.org/en/). The modules used include:</p>

- [express](https://expressjs.com/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session).
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt).
    
## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)
- [Links](#Links)

## Installation 
<p>To install this application please follow these instructions:</p>

- Please have node, npm and mysql installed with your mysql password ready.
- The application will be invoked by using the following command:

 ```
  git clone git@github.com:seanscott95/Tech-Blog.git
 ```
- Please run ```npm i``` to install the node modules needed for this application.
- To be safe and not have your password anywhere sensitive please make sure that there is a .gitignore file in the root repository with ```.env``` typed in, if not please make one. 
- Create a .env file in your current repository to hide your sensitive information.
- The .env file must contain the following lines:
```md
    DB_NAME='techblog_db'
    DB_USER='root'
    DB_PASSWORD='yourPassword'
    DB_SECRET='yourSecret'

```
- NOTE: yourPassword is refferring to your mysql password you created, keep DB_NAME and DB_USER the same.
- NOTE: yourSecret is refferring to the sessions cookie secret, please make sure it is filled in. Example - ```DB_SECRET='My super secret'```.
- On your CLI or Terminal please enter ```mysql -u root -p``` and enter your mysql password.
- Please type ```source db/schema.sql;``` in your CLI or Terminal, if successful then type ```quit```.
- To start, make sure your are in the root repository and run ```npm start``` or ```node server.js```.

## Usage 
- When the user visits the site for the first time they are presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.
- When the user clicks on the homepage option then they are taken to the homepage.
- If the user clicks on any other links in the navigation they are prompted to either sign up or sign in.
- If the user chooses to sign up they are prompted to create a username and password. Once signed in the user credentials are saved and they are logged into the site. The user can revisit the site at a later time and choose to sign in where they are prompted to enter their username and password.
- After they are signed in they will see an option to log out in the navigation bar.
- If the user clicks on the homepage option in the navigation they are taken to the homepage and presented with existing blog posts that include the post title and the date created.
- If the user clicks on an existing blog post then they are presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment. The user can descide to enter a comment while signed in and the comment will be saved and the post updated to display the comment, the comment creator’s username, and the date created.
- If the user clicks on the dashboard option in the navigation bar they are taken to the dashboard and presented with any blog posts they have already created and the option to add a new blog post.
- When the user clicks on the button to add a new blog post they are prompted to enter both a title and contents for my blog post.
- When the user clicks on the button to create a new blog post then the title and contents of the post are saved and they are taken back to an updated dashboard with the new blog post.
- If the user clicks on one of their existing posts in the dashboard they are able to delete or update my post and taken back to an updated dashboard.
When the user wants to logout simply click on the Logout button in the navigation.
- If the user is idle on the site for more than a set time they are able to view comments but are then prompted to log in again before they can add, update, or delete comments.

## License 
<p> This application is covered under the:</p>

- [MIT-License](https://opensource.org/licenses/MIT)

## Contribution 
<p> None.</p>

## Tests 
<p> This application was not developed using Test Driven Development.</p>

## Questions 
<p> To reach me with additional questions please contact me via one of the following methods: </p>

- Link: [GitHub](https://github.com/seanscott95)
- Link: [Email](mailto:seanms418@gmail.com)
- Link: [LinkedIn](https://www.linkedin.com/in/sean-scott-18ba07225/)

## Links
- Link: [GitHub](https://github.com/seanscott95/Tech-Blog)
- Link: [Video-Demo]()