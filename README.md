# Oops! JS

Oops! JS is an Object Oriented JavaScript Library.

## Installation

	$ component install pazguille/oops.js

See: [https://github.com/component/component](https://github.com/component/component)

## How-to

### Create your first Class
```js
Oops('Animal')
    .init(function (options) {
        this.species = 'animal';
        this.name = options.name;

        return this;
    })
    .add({
        'getSpecies': function () {
            console.log(this.species);
            return this;
        },
        'getName': function () {
            console.log('My name is ' + this.name);
            return this;
        }
    })
    .build();

### Inherits from another Class
Oops('Dog')
    .inherits(Animal)
    .init(function (options) {
        Dog.parent.init.call(this, options);
        this.species = 'canine';

        return this;
    })
    .add({
        'bark': function () {
            console.log('Wua bark woop arf');
            return this;
        }
    })
    .build();

### Inherits from another Class without initialize
Oops('Boxer')
    .inherits(Dog)
    .add({
        'bark': function () {
            Boxer.parent.bark.call(this);
            console.log('Wuuuuuuuuuuuuua');
            return this;
        }
    })
    .build();

var foo = new Boxer({
	'name': 'foo'
});

foo.getName(); // 'My name is foo'
foo.getSpecies(); // 'canine'
```
## API

### Oops#init()
- WIP

### Oops#inherits()
- WIP

### Oops#add()
- WIP

### Oops#build()
- WIP

## Contact
- Guille Paz (Frontend developer - JavaScript developer | Web standards lover)
- E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)
- Web: [http://pazguille.me](http://pazguille.me)

## License
### The MIT License
Copyright (c) 2012 [@pazguille](http://twitter.com/pazguille)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.