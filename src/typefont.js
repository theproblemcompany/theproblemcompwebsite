var i = 0; 
var txt = ' AR, computer vision & robotics applications'
var speed = 30; 

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typebox").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }

    if (i >= txt.length) {
        i = 0; 
        console.log('ya dumb?'); 
    }
  }
//typeWriter(); 