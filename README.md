
# Follow Your Notes
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Author: Ehren Lewis

## Table Of Contents


* [About This Project](#about-this-project)
* [How to Install](#how-to-install)
* [Usage](#usage)
* [Known Issues](#known-issues)
* [Questions](#questions)
* [License](#license)
* [Contributing](#contributing)


## About This Project

This application is a notes taking app deployed in browser. The note taker can view previously saved notes, delete a selected note one at a time, and save new notes to their liking.

My motivation was that as an individual that loves to view their thought process on the challenges they would like to tackle next, I wanted to create a note taking application that let me save my notes for a later date to review, as well as delete them to my liking to make sure I am always up to date on my latest challenges.

I used JavaScript, Node, Insomnia, HTML, CSS, Node, and Heroku. As a Javascript application deployed on the web, I used html and css for styling. Node allowed for me to manage my packages, including Express as the server, which handled the GET, POST, and DELETE requests. Insomnia was used as a debugger for my routing to test if the requests worked. Heroku was used as the deployment agent for the web.

Some of the challenges I faced was routing, url parameters, and version control. Having the repository initially set up with Heroku created some issues, application structure had to be specific so Heroku could detect a language, Heroku's buildpack feature was not used during this project, so this method was necessary. Routing was difficult when having improper file structure. Express's express.static wouldn't detect the subdirectory of public, so it must be moved up a level. As for url paramaters, when handling a DELETE request that was always changing, the :id was causing some issues at first, as well as not being able to add a query instead, figuring out how to handle url parameters was a challenge.


## How to Install


    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.
    

## Usage

As a user, you are presented with a launch page. In this launch page, navigate to the notes page by hitting the center button. Once on the notes page, you can view the previously saved notes on the left. On the right, there are 2 empty field for a note title and note text. At the top right, once information has been entered into these fields, a save button will appear. Clicking on the save button will add it to the left column, as well as emptying the field so you can add in a nother note. Clicking on a note in the left column will bring it up in readonly form in the right column, so the user can view their previously saved information. To exit this mode, hit the plus button in the top right and a fresh note will be presented once again.

![Image of the notes landing page](/Assets/Images/noteTakerLanding.png)
![Image of the fresh note on the right and the available notes on the left](/Assets/Images/freshNote.png)
![Image of the selected note, which then displays the information on the right](/Assets/Images/selectedNote.png)


## Known Issues

Currently, refreshing the page without any information saved will cause the note on the right to be completely empty, as well as there is no way to handle users changing the url to a path that does not exist.

## Questions

You can reach me at my Github: [Ehren-Lewis](https://github.com/Ehren-Lewis)

### OR

You can reach me at my [Ehren.Lewis@icloud.com](mailto:Ehren.Lewis@icloud.com) pertaining any other questions you may have.

## License


MIT License

Copyright (c) 2022 [Ehren Lewis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Contributing

To contribute on this project, I can be reached throug my Github or at my email address.
