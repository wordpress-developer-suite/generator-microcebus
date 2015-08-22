# <%= appName %>

## Installation:
```
$ npm install && bower install
$ cd scripts && sh download-plugins.sh
```

## Development
```
$ grunt serve
```

## Deployment
```
$ grunt build
```


### Scss Structure

##### Base
The Base directory contains global styles such as (ie. typography, colors, buttons, animations).

##### Utility
The Utility directory contains Sass code that doesn't cause Sass to actually output CSS (ie. mixins and functions).

##### Modules
The Modules directory is where the reusable styles are located (ie. dropdowns, forms, navigation).

##### Pages
The Pages directory contains page-specific styles and layouts (ie. homepage, about, contact).
