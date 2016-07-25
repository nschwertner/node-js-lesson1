// a more complex module which exposes an object containing functions

const MSG_GREET = 'Nice to meet you';
const MSG_BYE = "Good bye";

function printMessage (message, name) {
  console.log (message + ',', name);
}

module.exports = {
  greet: function (name) {
    printMessage (MSG_GREET, name);
  },
  bye: function (name) {
    printMessage (MSG_BYE, name);
  }
};
