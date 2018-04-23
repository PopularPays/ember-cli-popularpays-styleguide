import Ember from 'ember';
import FreestyleController from 'ember-freestyle/controllers/freestyle';

const { inject } = Ember;

export default FreestyleController.extend({
  emberFreestyle: inject.service(),

  /* BEGIN-FREESTYLE-USAGE fp--notes
### A few notes regarding freestyle-palette

- Accepts a colorPalette POJO like the one found in the freestyle.js blueprint controller
- Looks very nice

And another thing...

###### Markdown note demonstrating prettified code

```
import Ember from 'ember';

export default Ember.Component.extend({
  // ...
  colorPalette: {
    'primary': {
      'name': 'cyan',
      'base': '#00bcd4'
    },
    'accent': {
      'name': 'amber',
      'base': '#ffc107'
    }
  }
  // ...
});
```
  END-FREESTYLE-USAGE */

  colorPalette: {
    '$black': {
      name: '$black',
      base: '#000'
    },
    '$blue-dark': {
      name: '$blue-dark',
      base: '#3991fb'
    },
    '$blue': {
      name: '$blue',
      base: '#3894fd'
    },
    '$error-red': {
      name: '$error-red',
      base: '#ff5151'
    },
    '$red': {
      name: '$red',
      base: '#ff5151'
    },
    '$gray-light': {
      name: '$gray-light',
      base: '#d9d9d9'
    },
    '$gray-lighter': {
      name: '$gray-lighter',
      base: '#f4f4f4'
    },
    '$gray-lightest': {
      name: '$gray-lightest',
      base: '#f7f7f7'
    },
    '$gray-medium-dark': {
      name: '$gray-medium-dark',
      base: '#757575'
    },
    '$gray-medium': {
      name: '$gray-medium',
      base: '#a5a5a5'
    },
    '$gray': {
      name: '$gray',
      base: '#404040'
    },
    '$green-dark': {
      name: '$green-dark',
      base: '#15c48e'
    },
    '$green-light': {
      name: '$green-light',
      base: '#0d9'
    },
    '$green': {
      name: '$green',
      base: '#17d69b'
    },
    '$magenta': {
      name: '$magenta',
      base: '#ff517c'
    },
    '$medium-dark-gray': {
      name: '$medium-dark-gray',
      base: '#757575'
    },
    '$medium-gray': {
      name: '$medium-gray',
      base: '#a5a5a5'
    },
    '$purple-dark': {
      name: '$purple-dark',
      base: '#7c1af5'
    },
    '$purple': {
      name: '$purple',
      base: '#974fef'
    },
    '$white': {
      name: '$white',
      base: '#fff'
    },
    '$yellow-light': {
      name: '$yellow-light',
      base: '#ff0'
    },
    '$yellow': {
      name: '$yellow',
      base: '#fdc030'
    },
  }
});
