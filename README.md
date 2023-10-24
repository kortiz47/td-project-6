# Treehouse Tech Degree Project 6
Treehouse Tech Degree Project 6: Node.js and Express Site

This project is going for Exceeds Expectations and is a Personal Portfolio displaying all projects that I have worked on so far as part of the Tech Degree. There are 3 routes, the Home Route (/), the About Route (/about), and the Projects Route (/project/:id). Finally, if a 404 or 500 error occurs, custom pages are rendered to tell the user an error has occurred. 

## How It's Made
**Tech Used:** HTML, CSS, JS, Node.js, Express Web Framework, Pug

**Additional Features:** This project is going for exceeds expectations, and a couple of added features are:

* **Custom Error Pages** for 404 and 500 status errors. 
    *  When a user accesses an undefined route such as /noroute a **404 status** page is rendered letting the user know that the route they are trying to access does not exist and to please check the URL inputted. 
    * Additionally, when a user tries to access an undefined project route such as /project/noroute a **500 status** page is rendered letting the user know that the project they are trying to access does not exist.

* **npm start** functionality. A developer is able to use npm start to enable the server to run the application
    * If a developer runs **npm install** and **npm start** in their terminal on this project, they should be able to install all dependencies and make changes to the program that will then appear on the portfolio. This was done by adding `"start": "nodemon ./app.js"`under `"scripts"` in the `package.json` file 

**Styling Changes**

Changes  | Description
------------- | -------------
Body Background Color  | Changed from black to #BEADFA
Sidebar Background Color  | Changed from black to #BEADFA
Text Shadow | Added a black text shadow to my name in the sidebar and My Porfolio text
Sidebar p color | Changed the short blurb color to black
Learn More Link Color | Changed Learn More link to #FFF3DA and increased font size
LinkedIn and Github Buttons | Changed the color and radius of the buttons to be beige and ovals
Font Size li | Increased the font-size of list items to 16px
Text Shadow to Right Side Bar | A purple text-shadow was added to the skills, contact info and technologies h6 headers
