var link = document.getElementById('thesis-link');

function myFunction(x) {
  if (x.matches) { // If media query matches
    link.setAttribute('href', 'THESIS.pdf');
    link.setAttribute('target','_blank');
  } else {
    link.setAttribute('href','thesis.html');
    link.setAttribute('target','_self');
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes