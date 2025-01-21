const targetEl = document.querySelector('.recurring');

var csv_file = File('events.csv');
csv_file.open('r');
csv_file.encoding = 'utf-8';
var data = csv_file.read().split('/\r\n|\n/'); // split by lines
csv_file.close();
for (var row in data) data[row].split(','); // split all lines by comas

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode('hello world hehehehe');

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById(targetEl);
  document.body.insertBefore(newDiv, currentDiv);
}



