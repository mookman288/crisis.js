#crisis.js
##A library for websites that encounter individuals experiencing crisis

###Warning 

This is a **proof of concept** library that is **not** intended for production environments. If you wish to participate in 
this project, or you wish to use this library, you, and your users, agree not to hold this library, its author, or any of 
its contributors liable for its use. We're trying to potentially save lives, not be penalized for doing the right thing.

That being said, because this project deals with highly sensitive topics, the terminology contained within this project may 
not be suitable for all audiences. It may trigger overwhelming emotions, pain, or past trauma. It is up to you to decide 
whether this is a safe environment for you to participate. Please exercise caution before continuing. 

###Purpose

Crisis is an every day occurrence. It may be possible, for a few kb per page, to intervene and prevent a death, prevent abuse, 
or otherwise save a life. This library is a proof of concept to see if it's possible to build a system that can detect pain 
in users and help them wherever possible. 

###How It Works

JavaScript is typically used for client-side interaction. One of the benefits of that, is being able to detect user input and 
react to that input. This application works by taking a definition file that outlines sensitive combinations of phrases, and 
processes them into regular expressions. When a user enters any number of sensitive strings defined by those definitions, 
they will be greeted with a basic JavaScript confirmation prompt asking them if they need help. If they choose to select "OK", 
they will be sent to a one of the accompanying online resources assigned to a particular category of crisis. 

There is a consideration that monitoring the input of users may be seen as an invasion of privacy. This application **will not 
and should not ever store user input or identify the person beyond location.** In order to alleviate a factor of annoyance, 
whether the user selects "OK" or "Cancel", the pop-up will not reactive on the input that was used until the page is refreshed. 

###Regular Expressions

Combinations of phrases are designed to use regular expressions to appropriately trigger help. For instance, if someone writes 
`I am thinking about committing suicide` it will trigger just as much as `I will commit suicide` or `he cuts himself`. 

###Settings

There are various settings that can be defined for the application, or passed in on instantiation. While the application is in 
a transition phase, please refer to the `settings.js` file in the `src` directory for a complete list of settings that can be 
passed in. 

####Languages

Crisis happens in all languages. Therefore, this application is designed to support multiple languages. A language template 
file can be found in the `src/langs` directory. If you plan to contribute a new language to Crisis, please follow the existing 
design therein. You will need to modify the `gulpfile.js` and create an appropriate `index-xx.html` file for demonstration. 
Please see the contribution section below. 

###Contribution

Contribution is welcomed, but because of the nature of this project, must be performed with the best intentions. The primary 
goal is to use our programming technique to potentially save lives. Next to that, we want to make sure it's an attractive 
application. This means keeping the file-size low, accessibility high, and compatibility across many devices and browsers. 

####Installation, Compilation, and Modification

Node is used extensively to handle streamlining the build process for crisis.js. Please become familiar with node, npm, and 
the technologies used here before contributing. 

Gulp is being used exclusively for task running. Baked into the system is various commands that can be run to manipulate the 
resulting program. Here's a list of common commands and explanations

* `gulp` - Compile all languages, all files, and minify the content for release.
* `gulp --dev` - Compile all languages, all files, and reserve minification for development work.
* `gulp lang-xx` - Compile the language specified, for instance, `gulp lang-en` will compile and minify English for release.
* `gulp lang-xx --dev` - Compile the language specified, and reserve minification for development work. 
* `gulp compress` - Compresses all compiled files for release.

Included in the gulp build is BrowserSync. Please read the BrowserSync documentation if you are unfamiliar with how it helps 
development. 

###Demonstration

The crisis.js application, compiled with the latest, most stable version, can be viewed from the accompanying GitHub Pages 
repository located here: [http://mookman288.github.io/crisis.js/](http://mookman288.github.io/crisis.js/).  

###License
####The MIT License (MIT)

Copyright (c) 2016 PxO Ink

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