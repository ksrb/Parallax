##React Hack Session

Doing some project in React for LEARNING AND GLORY

Explore:
* Testing tools
* ES6+
* ImmutableJS
* libsass
* Build tool (?)
* Yeoman generator for react(?)

###Explore

####ES6+
* Experimenting with ES6 features and [ES7 strawman/stage 0](https://babeljs.io/docs/usage/experimental/) features
    * [Proxies are not available](https://babeljs.io/docs/learn-es2015/#proxies) 

###Notes

####Parallax scroll
Using CSS technique from [here](http://keithclark.co.uk/articles/pure-css-parallax-websites/)
* Explores:
    * libsass

Admittedly parallax scrolling doesn't have much to do with React but a positional bookmark system with undo and redo does &#9786;

####package.json

* "css:compile": "node-sass src/assets/scss/style.scss | npm run css:prefix -- src/assets/css/style.css"
    * node-sass src/assets/scss/style.scss - compile **file** style.scss (cannot node-sass on **directory** src/assets/scss as node-sass expects
    a output directory and will not print to stdout)
    * npm run css:prefix -- src/assets/css/style.css - prefix vendor specific css output to src/assets/css/style.css
* "css:watch": "watch \"npm run css:compile\" src/assets/scss" - run npm:css:compile whenever any file from src/assets/scss changes

####Intellij
* jspm_packages
    * Remove from refactoring by setting folder as a library via **CTRL+SHIFT+S** ? **+** ? **JavaScript** ? Select the jspm_packages folder, uncheck all files ? Set as **Release**
* To reset Intellij documentation window (F2) go to config/options/dimensions.xml 
<pre>
&lt;size key="javadoc.popup.0.0.1920.1080" width="[reset this value]"/&gt;
</pre> 

####TODO
* Set intellij to use 64bit and Java 8
