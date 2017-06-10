// function(name, items)


//jason.name
//=> 'Jason'
//jason.items
// => ['wallet', 'keys', 'phone'];

function personMaker(name, items){
  var person = {};
  person.name = name;
  person.items = items;

  function steal(item, target){
    if (!target || !Array.isArray(target.items)) {
      throw new Error("LOL RIP 5-EVER BRO!");
    }

    for (var i = 0; i<target.items.length; i++) {
      if (item === target.items[i]) {
        target.items.splice(i,1);
        person.items.push(item);
        return true;
      }
    }
    return false;
  }
  return person;
}

var person = personMaker("Matthew", ["beer", "remote", "game skills"]);
console.log(person);
console.log(person.name);
console.log(person.items);

var person2 = personMaker("Jamie", ["taser", "brass knuckles", "bucket of blood"])


person2.steal("wallet", person);
console.log(person2);
