require = require('esm')(module);
const boxen = require('boxen');
const chalk = require('chalk');

function createBox(message, options) {
  const boxedMessage = boxen(chalk.bold(message), options);
  return boxedMessage;
}

const box1 = createBox('Box 1', { padding: 5, margin: 5, borderStyle: 'single', borderColor: 'cyan' });
const box2 = createBox('Box 2', { padding: 10, margin: 10, borderStyle: 'double', borderColor: 'blue' });
const box3 = createBox('Box 3', { padding: 3, margin: 3, borderStyle: 'round', borderColor: 'green' });
const box4 = createBox('Box 4', { padding: 8, margin: 8, borderStyle: 'bold', borderColor: 'magenta' });
const box5 = createBox('Box 5', { padding: 2, margin: 2, borderStyle: 'classic', borderColor: 'yellow' });
const box6 = createBox('Box 6', { padding: 1, margin: 1, borderStyle: 'singleDouble', borderColor: 'red', });

console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4);
console.log(box5);
console.log(box6);
