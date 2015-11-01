Responsive Form Mock-Up
=============

Mock-up form built with [jQuery](https://jquery.com/), [SASS](http://sass-lang.com/), and [Bootstrap](http://getbootstrap.com/).

Demonstration of a form which, upon submit, shows loading animation for 5 seconds and then indicates to the user a successful completion.


Configuration
------------
Configuring this project should be consistent across Mac (local) and Vagrant.  You should already have [Ruby on Rails](http://rubyonrails.org/) installed before cloning. 

Start by cloning the repository
```
$ git clone https://github.com/carmenvkrol/form-mock-up.git
```

Install Bower Packages by running
````
$ bower install
```

This application uses the [Ruby Gem Compass](https://rubygems.org/gems/compass/versions/1.0.3) in order to compile SASS into CSS.  To install the gem run:
```
$ sudo gem install compass
```

Running the Application
------------
Open [index.html](https://github.com/carmenvkrol/form-mock-up/blob/master/index.html) in the browser.


Directory Structure
------------
```
form-mock-up/
 |__bower_components/ #client-side third-party files for jQuery and Bootstrap, `bower install` to see these packages locally
 |__javascripts/ #includes client-side custom script
 |__mockups/ #static files that explain UI design
 |__sass/ #custom SASS files
 |__stylesheets/ #compiled CSS file accessed by index
 index.html

```


SASS
------------
This mock-up uses the CSS pre-processor [SASS](http://sass-lang.com/) in order to facilitate styling with [Bootstrap](http://getbootstrap.com/css/), which is included.  Custom SASS files can be found in the SASS directory and the Bootstrap files within its bower package.  In order for these files to be converted into CSS, and modify styling in the views, save SASS files within this directory.

To compile SASS into CSS, run:
```
$ compass compile
```


[Bower](http://bower.io/) Packages
------------
**[Bootstrap-Sass](https://github.com/twbs/bootstrap-sass)** - Bootstrap CSS provided in SASS format

**[jQuery](https://github.com/jquery/jquery)** - jQuery version 1.11.0


Screenshots
------------
![](https://github.com/carmenvkrol/form-mock-up/blob/master/form-mock-up-screenshot1.png)

------------

![](https://github.com/carmenvkrol/form-mock-up/blob/master/form-mock-up-screenshot2.png)

------------

![](https://github.com/carmenvkrol/form-mock-up/blob/master/form-mock-up-screenshot3.png)