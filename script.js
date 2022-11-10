const generator = document.getElementById('generator');
const head = document.getElementById('keycode');

function keycode(event) {
var key = event.key;
var which = event.which;
var code = event.code;
head.textContent = which;
document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;
}