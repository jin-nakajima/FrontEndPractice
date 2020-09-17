/* const foo = document.getElementById('foo');
const fooWidth = foo.offsetWidth;
const fooHeight = foo.offsetHeight;

const foo Area = fooHeight * fooWidth;
*/
const foo = 100; // const は再定義，再代入できないがオブジェクトのプロパティは変更できる
/* 
const obj = {
    foo:123
};
console.log(obj.foo);
obj.foo = 345;
console.log(obj.foo);
*/

let baz = 200; // 再代入できる．再定義できない
/*
baz = 233;
console.log(baz) // 233
let baz = 211; // SyntaxError: Identifier 'baz' has already been declared (20:4) 
*/

var fiz = 300; // 再代入も再定義もできる
/*
var fiz = 309;
console.log(fiz) // 309
fiz = 303
console.log(fiz) // 303
*/