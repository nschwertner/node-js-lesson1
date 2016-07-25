// a more complex module which exposes an object containing functions

const MSG_GREET = 'Nice to meet you';
const MSG_BYE = "Good bye";
var name = "anonymous";

function printMessage (message) {
  console.log (message + ',', name);
}

function setName (newname) {
  name = newname;
}

module.exports = {
  setName: setName,
  greet: function (name) {
    printMessage (MSG_GREET);
  },
  bye: function (name) {
    printMessage (MSG_BYE);
  }
};
