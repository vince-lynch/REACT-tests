// destructuring
var foo = {
  bar: 1,
  baz: 2
};

// Same, Same.
//var bar = foo.bar; var baz = foo.baz;
var {bar, baz} = foo;

// Destructuring Arrays.
var tenses = ["me", "you", "he"];
var { firstPerson, secondPerson } = tenses;
promise.all([promise1, promise2]).then(function(results){
  var [ results1 ] =
})

// Destructuring objects
var foo = 2;

var obj = {
  bar: 1,
  foo,
}

var name = "will";
var age = 34;

some.method({name, age});
{
  name: name,
  age: age,
}
// because of destructing you have made those two variables into an object without having to assign using =

