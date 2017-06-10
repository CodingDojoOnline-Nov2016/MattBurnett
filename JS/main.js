//
// // function acceptAndReturn(value) {
//   var data = 'some date';
//     // var value = 'local';
//     for (var i = 0; i < 3; i++) {
//       console.log(i);
//     }
//
//     function childScope() {
//       var childData = 'child data';
//       return data;
//     }
//
//     childScope();
//     console.log(childData);
//     console.log(i);
//     return value;
// }
// console.log(acceptAndReturn(value));
// var value = "a stored string";

// var count = 0;
function counter() {
  var count = 0;
  function counterChild() {
    return ++count;
  }
    return counterChild;
}

    counter = counter();
    console.log(counter());
    console.log(counter());
    console.log(counter());
    console.log(counter());
