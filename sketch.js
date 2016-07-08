function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  var a = 100;
  
  noStroke()
  fill(255)
  
//D
triangle(0,0,0,a,a,0)

//A
translate(3,0)
triangle(a,0,0,a,a,a)

//D
translate(2.5,0)
triangle(a,0,a,a,2*a,0)

//H
quad(2*a,0,2.5*a,0,2.5*a,0.5*a,2*a,a)
quad(2.5*a,0.5*a,2.5*a,a,3*a,a,3*a,0)

//A
triangle(4*a,0,3*a,a,4*a,a)

//N
translate(3,0)
quad(4*a,0,4*a,a,4.5*a,a,4.5*a,0.5*a)
quad(4.5*a,0.5*a,4.5*a,0,5*a,0,5*a,a)


//I
translate(3,0)
quad(5*a,0,5.5*a,0,5.5*a,a,5*a,a)

//Y
translate(3,0)
quad(5.5*a,0,6*a,0,6*a,a,5.5*a,a)
triangle(6*a,0.5*a,6*a,0,6.5*a,0)


//A
triangle(6*a,a,7*a,0,7*a,a)
}