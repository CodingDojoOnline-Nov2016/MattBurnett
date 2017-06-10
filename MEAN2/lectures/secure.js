// var jason = User('Jason, 6546546544')


function User(name, ssn){
  // 'this' without 'new' is the global object
  if (!(this instanceof User)) {
    return new User(name, ssn);
  }

    this._name = name;
    this._ssn = ssn;

}

  User.protoytype.ssnMethod = function(){
    return this.ssn;
  };

  User.prototype.getName = function() {
    return this.name;
  };


// jason.getName() => 'Jason'

var jason = User('Jason, 1231231234')
var jason2 = User('Jason, 1231231234')
var jason3 = User('Jason, 1231231234')
var jason4 = User('Jason, 1231231234')


jason.name = 'Bob';

console.log(jason.ssnMethod());
console.log(jason.getName());

console.log(jason);
//

    // Object.defineProperty(User.prototype, 'name', {
    //   get: function() {
    //     function
    //   }
    // })

    Object.defineProperty(Array.prototype, "first", {
      get: function(){
        return this[0];
      },
      set: function(value){
        this[0] = value;
      }
    });

    var array = [1,2,4,5];
    console.log();(array.first);
    array.first = 7;

    function sayThis() {
      console.log(this);
      }
//
// var person = { name: 'person'};
// var person2 = { name: 'person2'};
//
// // person.sayThis = sayThis;
// sayThis.call(person2);
