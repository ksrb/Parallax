##React Hack Session##

Doing some project in React for LEARNING AND GLORY

Explore:
* Testing tools
* ImmutableJS
* libsass
* Build tool (?)
* Yeoman generator for react(?)

###parallax scroll###
Using CSS technique from [here](http://keithclark.co.uk/articles/pure-css-parallax-websites/)
* Explores:
    * libsass

Admittedly parallax scrolling doesn't have much to do with React but a positional bookmark system with undo and redo does &#9786;

###package.json###

* "css:build": "node-sass src/assets/scss/style.scss | npm run css:prefix -- src/assets/css/style.css"
    * node-sass src/assets/scss/style.scss - compile **file** style.scss (cannot node-sass on **directory** src/assets/scss as node-sass expects
    a output directory and will not print to stdout)
    * npm run css:prefix -- src/assets/css/style.css - prefix vendor specific css output to src/assets/css/style.css

###TODO###
* Set intellij to use 64bit and Java 8
