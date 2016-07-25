// The global object contains the global context, which is the
// NodeJS equivalent of the window object from the browsers. 'global.console' is
// equivalent to 'window.console' from the browser. Global is
// different in many ways however. Say `good bye` to 'window.alert',
// 'window.document', 'window.location', etc.
// Say `hello` to 'global.process', 'global.module', etc.

// This is the explicit way of defining global objects
global.a = 42;

// however, you could also do this just the same with
b = 71;
// of course the this is evil, so it won't be allowed if we set V8 to
// strict mode. Try addiing this to the beginning of the program (You do it
// whenever you are developing in JS. don't you?) and see what will happen:
//     'use strict';

// we can do things explicitly with the global object, if we want
global.console.log(global.b); // should print '71'

// but it's cleaner to use the global context implicitly (as long as we keep in
// mind what is really going on when we do it)
console.log(a); // should print '42'

// Note: unlike browser JS, var declarations outside a function won't produce
// a global object (except if we enter this directly in the Node console)
// because in NodeJS anything is encapsulated as a module and
// var declarations are of local scope. See for yourself:
var c = 22;
console.log(c); // should print '22'
console.log(global.c); // should print 'undefined'

// however when we have a local scope object of the same name, it will
// shadow the global object
var a = 99;
console.log(a); // should print '99'
console.log(global.a); // should print '42'

// There are all kinds of interesting stuff in the global object
// such as the global.process object. Here is something useful:
console.log(process.env.PATH);

// Finally, we can do some monkey business by overriding object behaviors at will
global.console.log = function (arg) {
  function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }
  console.info (reverse(arg));
}

// Now this is curious, not that it makes any sense
console.log ("Marry Had a Little Lamb");

// So, in conclusion, playing around with the global object is fun and educational,
// but please don't do it at home! It's best not to define global variables at all,
// or otherwise mess up with the global object!
