Opps! JS
========
Oops! JS is an Object Oriented JavaScript Library.

## Syntax

``` js
var Animal = oops.Class("Animal")
	.init(function (conf) {
		this.species = "animal";
		this.name = conf.name;
	})
	.add({
		"getSpecies": function () {
			console.log(this.species);
		},
		"getName": function () {
			console.log("My name is " + this.name);
		}
	})
	.build();

var Dog = oops.Class("Dog")
	.inherit(Animal)
	.init(function (conf) {
		this.species = "canine";
	})
	.add({
		"bark": function () {
			console.log("Wua bark woop arf");
		}
	})
	.build();

var Boxer = oops.Class("Boxer")
	.inherit(Dog)
	.add({
		"bark": function () {
			console.log("Wuuuuuuuuuuuuua");
			Boxer.parent.bark.call(this);
		}
	})
	.build();

var foo = new Boxer({name: "foo"});

foo.getName(); // "My name is foo"
foo.getSpecies(); // "canine"
```

## Contact
- Guillermo Paz (Frontend developer - JavaScript developer | Web standards lover)
- e-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
- Twitter: [@pazguille](http://twitter.com/pazguille)


## License
Copyright (c) 2012

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